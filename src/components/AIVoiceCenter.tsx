"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Mic, MicOff, Volume2, VolumeX, Loader2, X, Square, Send, Play, AlertTriangle, Calendar, CalendarX, RefreshCw } from "lucide-react";
import { t, getLocale, LOCALE_BCP47 } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";

type Msg = { role: "user" | "assistant"; content: string; contextContent?: string; audioUrl?: string };
type VoiceState = "idle" | "listening" | "processing" | "speaking";
type TTSProvider = "auto" | "browser" | "elevenlabs";
type WidgetPhase = "initial" | "conversation";

const VOICE_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/voice-assistant`;
const TTS_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/elevenlabs-tts`;

const SpeechRecognitionAPI =
  typeof window !== "undefined"
    ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    : null;

const AUTO_GREETING_DELAY = 5000;

function getBrowserVoices(): SpeechSynthesisVoice[] {
  return window.speechSynthesis?.getVoices() || [];
}

function pickBestVoice(voices: SpeechSynthesisVoice[], locale: string): SpeechSynthesisVoice | null {
  const langPrefix = locale.split("-")[0];
  const matching = voices.filter(v => v.lang.startsWith(langPrefix));
  if (!matching.length) return null;
  return matching.find(v => v.lang === locale) || matching[0];
}

const AIVoiceCenter = () => {
  useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [voiceState, setVoiceState] = useState<VoiceState>("idle");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [transcript, setTranscript] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const [ttsBlocked, setTtsBlocked] = useState<string | null>(null);
  const [, setClientFound] = useState(false);
  const [phase, setPhase] = useState<WidgetPhase>("initial");

  const [ttsProvider] = useState<TTSProvider>("auto");
  const [, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI] = useState("");
  const [speechRate] = useState(1.0);
  const [speechPitch] = useState(1.0);

  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);
  const greetingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const loadVoices = () => setBrowserVoices(getBrowserVoices());
    loadVoices();
    window.speechSynthesis?.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis?.removeEventListener("voiceschanged", loadVoices);
  }, []);

  useEffect(() => {
    const isHome = window.location.pathname === "/";
    const onScroll = () => { setShowButton(!isHome || window.scrollY > window.innerHeight * 0.4); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      window.speechSynthesis?.cancel();
      if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.role === "assistant" && /escr[ií]b|campo de texto|correo/i.test(lastMsg.content)) {
      setTimeout(() => textInputRef.current?.focus(), 100);
    }
  }, [messages]);

  useEffect(() => {
    if (!ttsBlocked) return;
    const until = new Date(ttsBlocked).getTime();
    const remaining = until - Date.now();
    if (remaining <= 0) { setTtsBlocked(null); return; }
    const timer = setTimeout(() => setTtsBlocked(null), remaining);
    return () => clearTimeout(timer);
  }, [ttsBlocked]);

  useEffect(() => {
    if (!isOpen || phase !== "initial") return;
    greetingTimerRef.current = setTimeout(() => {
      setPhase("conversation");
      const greetingText = t("voice.greeting");
      const greetingMsg: Msg = { role: "assistant", content: greetingText };
      setMessages([greetingMsg]);
      speakTextRef.current?.(greetingText, greetingText);
    }, AUTO_GREETING_DELAY);
    return () => { if (greetingTimerRef.current) { clearTimeout(greetingTimerRef.current); greetingTimerRef.current = null; } };
  }, [isOpen, phase]);

  const getBcp47 = () => LOCALE_BCP47[getLocale()];

  const speakWithBrowser = useCallback((text: string): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!window.speechSynthesis) { resolve(false); return; }
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/\*\*/g, "").replace(/\*/g, "").replace(/#{1,6}\s/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/•/g, ",").trim();
      if (!cleanText) { resolve(false); return; }
      const utterance = new SpeechSynthesisUtterance(cleanText);
      const bcp = getBcp47();
      utterance.lang = bcp;
      utterance.rate = speechRate;
      utterance.pitch = speechPitch;
      const voices = getBrowserVoices();
      let voice: SpeechSynthesisVoice | null = null;
      if (selectedVoiceURI) voice = voices.find(v => v.voiceURI === selectedVoiceURI) || null;
      if (!voice) voice = pickBestVoice(voices, bcp);
      if (voice) utterance.voice = voice;
      utterance.onstart = () => setVoiceState("speaking");
      utterance.onend = () => { setVoiceState("idle"); resolve(true); };
      utterance.onerror = () => { setVoiceState("idle"); resolve(false); };
      window.speechSynthesis.speak(utterance);
    });
  }, [speechRate, speechPitch, selectedVoiceURI]);

  const stopAudio = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; audioRef.current = null; }
    window.speechSynthesis?.cancel();
    if (voiceState === "speaking") setVoiceState("idle");
  }, [voiceState]);

  const cleanForTTS = (text: string) => text.replace(/\*\*/g, "").replace(/\*/g, "").replace(/#{1,6}\s/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();

  const generateElevenLabsAudio = useCallback(async (text: string): Promise<string | null> => {
    const cleanText = cleanForTTS(text);
    if (!cleanText || ttsBlocked) return null;
    try {
      const response = await fetch(TTS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}` },
        body: JSON.stringify({ text: cleanText }),
      });
      const contentType = response.headers.get("content-type") || "";
      if (!response.ok || contentType.includes("application/json")) {
        try { const errJson = await response.json(); if (errJson.blocked && errJson.blockedUntil) setTtsBlocked(errJson.blockedUntil); } catch {}
        return null;
      }
      const audioBlob = await response.blob();
      return URL.createObjectURL(audioBlob);
    } catch { return null; }
  }, [ttsBlocked]);

  const playAudioUrl = useCallback(async (audioUrl: string): Promise<boolean> => {
    try {
      setVoiceState("speaking");
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.onended = () => { audioRef.current = null; setVoiceState("idle"); };
      audio.onerror = () => { audioRef.current = null; setVoiceState("idle"); };
      await audio.play();
      return true;
    } catch { audioRef.current = null; setVoiceState("idle"); return false; }
  }, []);

  const speakText = useCallback(async (spokenText: string, _displayText: string): Promise<string | null> => {
    if (!ttsEnabled) return null;
    if (ttsProvider === "elevenlabs") { const url = await generateElevenLabsAudio(spokenText); if (url) await playAudioUrl(url); return url; }
    if (ttsProvider === "browser") { await speakWithBrowser(spokenText); return null; }
    if (!ttsBlocked) { const url = await generateElevenLabsAudio(spokenText); if (url) { const played = await playAudioUrl(url); if (!played) await speakWithBrowser(spokenText); return url; } }
    await speakWithBrowser(spokenText);
    return null;
  }, [ttsEnabled, ttsProvider, ttsBlocked, generateElevenLabsAudio, playAudioUrl, speakWithBrowser]);

  const speakTextRef = useRef(speakText);
  useEffect(() => { speakTextRef.current = speakText; }, [speakText]);

  const handleManualPlay = useCallback(async (audioUrl: string) => { stopAudio(); await playAudioUrl(audioUrl); }, [playAudioUrl, stopAudio]);
  const handleBrowserSpeak = useCallback((text: string) => { stopAudio(); speakWithBrowser(text); }, [stopAudio, speakWithBrowser]);

  const transitionToConversation = useCallback(() => {
    if (greetingTimerRef.current) { clearTimeout(greetingTimerRef.current); greetingTimerRef.current = null; }
    setPhase("conversation");
  }, []);

  const sendToAssistant = useCallback(async (text: string) => {
    if (!text.trim()) return;
    transitionToConversation();
    stopAudio();
    const userMsg: Msg = { role: "user", content: text.trim() };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setTranscript("");
    setVoiceState("processing");
    try {
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
        headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`;
      }
      const resp = await fetch(VOICE_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({ messages: allMessages.map(m => ({ role: m.role, content: m.contextContent || m.content })), locale: getLocale() }),
      });
      if (!resp.ok) throw new Error("Error");
      const data = await resp.json();
      const displayText = data.text || t("voice.greeting");
      const contextText = data.contextText || displayText;
      const spokenText = data.spokenText || displayText;
      if (data.emailError) setTimeout(() => textInputRef.current?.focus(), 100);
      if (data.action?.data?.client_found) setClientFound(true);
      const audioUrl = await speakText(spokenText, displayText);
      setMessages((prev) => [...prev, { role: "assistant", content: displayText, contextContent: contextText, audioUrl: audioUrl || undefined }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: t("voice.error") }]);
      setVoiceState("idle");
    }
  }, [messages, speakText, stopAudio, transitionToConversation]);

  const startListening = useCallback(() => {
    if (!SpeechRecognitionAPI) { alert(t("voice.noSupport")); return; }
    transitionToConversation();
    stopAudio();
    const recognition = new SpeechRecognitionAPI();
    recognition.lang = getBcp47();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => { setVoiceState("listening"); setTranscript(""); };
    recognition.onresult = (event: any) => {
      let interim = ""; let final = "";
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) final += event.results[i][0].transcript;
        else interim += event.results[i][0].transcript;
      }
      setTranscript(final || interim);
      if (final) (recognition as any).__finalTranscript = final;
    };
    recognition.onend = () => { const ft = (recognition as any).__finalTranscript; if (ft) sendToAssistant(ft); else setVoiceState("idle"); };
    recognition.onerror = (event: any) => { if (event.error !== "no-speech") setVoiceState("idle"); };
    recognitionRef.current = recognition;
    recognition.start();
  }, [stopAudio, sendToAssistant, transitionToConversation]);

  const stopListening = useCallback(() => { recognitionRef.current?.stop(); }, []);

  const handleMicClick = () => {
    if (voiceState === "listening") stopListening();
    else if (voiceState === "idle") startListening();
    else if (voiceState === "speaking") stopAudio();
  };

  const handleSendText = () => { if (!textInput.trim() || voiceState === "processing") return; sendToAssistant(textInput.trim()); setTextInput(""); };

  const handleClose = () => { stopAudio(); recognitionRef.current?.abort(); setVoiceState("idle"); setIsOpen(false); };

  const handleReset = () => { stopAudio(); recognitionRef.current?.abort(); setVoiceState("idle"); setMessages([]); setTranscript(""); setTextInput(""); setTtsBlocked(null); setClientFound(false); setPhase("initial"); };

  const handleInitialAction = (action: "reservar" | "reprogramar" | "cancelar") => {
    window.location.href = withLovablePath(action === "reservar" ? "/reservar" : action === "reprogramar" ? "/cita-accion" : "/cita-accion");
  };

  const formatBlockedTime = (iso: string) => {
    try { return new Date(iso).toLocaleTimeString(LOCALE_BCP47[getLocale()], { hour: "2-digit", minute: "2-digit" }); } catch { return "—"; }
  };

  const renderMessageContent = (content: string) => {
    const datosMatch = content.match(/TUS DATOS EN BALUARTE\n([\s\S]*?)(?=\n\nPRÓXIMAS CITAS|\n\nNo tienes citas|\n\n¿Estos datos|\n\n|$)/);
    const citasMatch = content.match(/PRÓXIMAS CITAS\n([\s\S]*?)(?=\n\n|$)/);
    const resumenMatch = content.match(/RESUMEN DE TU CITA\n([\s\S]*?)(?:\n\n|$)/);
    const parts: JSX.Element[] = [];
    let remaining = content;

    if (datosMatch) {
      const beforeIdx = remaining.indexOf("TUS DATOS EN BALUARTE");
      const before = remaining.slice(0, beforeIdx).trim();
      if (before) parts.push(<p key="pre-datos" className="mb-2">{before}</p>);
      const lines = datosMatch[1].trim().split("\n").map(l => l.trim()).filter(Boolean);
      parts.push(<div key="datos-block" className="bg-background/50 border border-border rounded-lg p-2.5 my-1.5 text-xs"><p className="font-semibold text-foreground mb-1.5 text-xs">📋 TUS DATOS EN BALUARTE</p>{lines.map((line, i) => <p key={i} className="text-foreground/90 leading-relaxed">{line}</p>)}</div>);
      remaining = content.slice(content.indexOf(datosMatch[0]) + datosMatch[0].length);
    }

    if (citasMatch) {
      const citasBefore = remaining.slice(0, remaining.indexOf("PRÓXIMAS CITAS")).trim();
      if (citasBefore && !datosMatch) parts.push(<p key="pre-citas" className="mb-2">{citasBefore}</p>);
      const lines = citasMatch[1].trim().split("\n").map(l => l.trim()).filter(Boolean);
      parts.push(<div key="citas-block" className="bg-background/50 border border-primary/20 rounded-lg p-2.5 my-1.5 text-xs"><p className="font-semibold text-foreground mb-1.5 text-xs">📅 PRÓXIMAS CITAS</p>{lines.map((line, i) => <p key={i} className="text-foreground/90 leading-relaxed">{line}</p>)}</div>);
      remaining = remaining.slice(remaining.indexOf(citasMatch[0]) + citasMatch[0].length);
    }

    if (resumenMatch && !datosMatch && !citasMatch) {
      const before = content.slice(0, content.indexOf("RESUMEN DE TU CITA")).trim();
      const after = content.slice(content.indexOf(resumenMatch[0]) + resumenMatch[0].length).trim();
      const lines = resumenMatch[1].trim().split("\n").map(l => l.trim()).filter(Boolean);
      return (<>{before && <p className="mb-2">{before}</p>}<div className="bg-background/50 border border-border rounded-lg p-2.5 my-1.5 text-xs"><p className="font-semibold text-foreground mb-1.5 text-xs">📋 RESUMEN DE TU CITA</p>{lines.map((line, i) => <p key={i} className="text-foreground/90 leading-relaxed">{line}</p>)}</div>{after && <p className="mt-2">{after}</p>}</>);
    }

    if (parts.length > 0) { const afterText = remaining.trim(); if (afterText) parts.push(<p key="after" className="mt-2">{afterText}</p>); return <>{parts}</>; }
    return content;
  };

  if (!showButton) return null;

  if (!isOpen) {
    return (
      <button onClick={() => { setIsOpen(true); setPhase("initial"); setMessages([]); setClientFound(false); }}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        aria-label={t("voice.openLabel")}>
        <Mic className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary/70 rounded-full animate-pulse" />
      </button>
    );
  }

  const stateLabel: Record<VoiceState, string> = { idle: t("voice.idle"), listening: t("voice.listening"), processing: t("voice.processing"), speaking: t("voice.speaking") };
  const usingBrowserFallback = ttsProvider === "auto" && ttsBlocked;
  const showConversation = phase === "conversation";

  return (
    <>
      <div className="fixed inset-0 z-30 bg-black/20" style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }} onClick={handleClose} />
      <div className="fixed bottom-6 right-6 z-40 w-[420px] max-w-[92vw]">
        <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-up">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-accent/50">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-body font-medium text-foreground">{t("voice.title")}</span>
              <span className="text-xs font-body text-muted-foreground">Baluarte</span>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setTtsEnabled(v => !v)} className={`p-1.5 rounded-full hover:bg-accent transition-colors ${ttsEnabled ? "text-primary" : "text-muted-foreground"}`} aria-label={ttsEnabled ? t("voice.mute") : t("voice.unmute")} title={ttsEnabled ? t("voice.unmute") : t("voice.mute")}>
                {ttsEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>
              {showConversation && messages.length > 0 && (
                <button onClick={handleReset} className="p-1.5 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label={t("voice.resetConv")} title={t("voice.resetConv")}>
                  <Square className="w-3 h-3" />
                </button>
              )}
              <button onClick={handleClose} className="p-1.5 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label={t("chat.close")}>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {usingBrowserFallback && (
            <div className="flex items-center gap-2 px-3 py-2 bg-accent border-b border-border text-xs text-muted-foreground">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-primary" />
              <span>{t("voice.browserFallback")}</span>
            </div>
          )}

          {ttsBlocked && ttsProvider === "elevenlabs" && (
            <div className="flex items-center gap-2 px-3 py-2 bg-destructive/10 border-b border-destructive/20 text-xs text-destructive">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>{t("voice.blockedUntil")} {formatBlockedTime(ttsBlocked)}.</span>
            </div>
          )}

          {phase === "initial" && (
            <div className="flex flex-col items-center px-4 py-6">
              <p className="text-sm text-muted-foreground text-center font-body mb-5 leading-relaxed">{t("voice.initialGreeting")}</p>
              <div className="flex flex-col gap-2.5 w-full mb-6">
                <button onClick={() => handleInitialAction("reservar")} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
                  <Calendar className="w-4 h-4" /> {t("voice.book")}
                </button>
                <button onClick={() => handleInitialAction("reprogramar")} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/80 transition-colors border border-border">
                  <RefreshCw className="w-4 h-4" /> {t("voice.reschedule")}
                </button>
                <button onClick={() => handleInitialAction("cancelar")} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors border border-destructive/20">
                  <CalendarX className="w-4 h-4" /> {t("voice.cancel")}
                </button>
              </div>
              <button onClick={handleMicClick} disabled={voiceState === "processing"} className="w-20 h-20 rounded-full flex items-center justify-center bg-primary text-primary-foreground shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-50 mb-2" aria-label={t("voice.tapMic")}>
                <Mic className="w-9 h-9" />
              </button>
              <p className="text-xs text-muted-foreground font-body">{t("voice.tapMic")}</p>
              {!SpeechRecognitionAPI && <p className="text-xs text-destructive font-body text-center mt-2">{t("voice.noSupport")}</p>}
            </div>
          )}

          {showConversation && (
            <>
              <div className="max-h-[400px] overflow-y-auto p-3 space-y-2">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm font-body leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-accent text-accent-foreground rounded-bl-md"}`}>
                      {m.role === "assistant" ? renderMessageContent(m.content) : m.content}
                      {m.role === "assistant" && (
                        <div className="mt-1.5 flex items-center gap-2">
                          {m.audioUrl && <button onClick={() => handleManualPlay(m.audioUrl!)} className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"><Play className="w-3 h-3" /><span>ElevenLabs</span></button>}
                          <button onClick={() => handleBrowserSpeak(m.content)} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"><Volume2 className="w-3 h-3" /><span>{t("voice.play")}</span></button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {voiceState === "listening" && transcript && (
                  <div className="flex justify-end"><div className="max-w-[85%] rounded-2xl px-3 py-2 text-sm font-body bg-primary/20 text-primary rounded-br-md italic">{transcript}</div></div>
                )}
                {voiceState === "processing" && <div className="flex justify-start"><div className="rounded-2xl px-3 py-2 bg-accent text-accent-foreground rounded-bl-md"><Loader2 className="w-4 h-4 animate-spin" /></div></div>}
                <div ref={messagesEndRef} />
              </div>

              <div className="flex items-center gap-2 px-3 py-2 border-t border-border">
                <input ref={textInputRef} type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSendText()} placeholder={t("voice.textPlaceholder")}
                  className="flex-1 text-sm bg-transparent border border-border rounded-lg px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" disabled={voiceState === "processing"} />
                <button onClick={handleSendText} disabled={!textInput.trim() || voiceState === "processing"} className="p-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-50 hover:bg-primary/90 transition-colors" aria-label={t("chat.send")}>
                  <Send className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 border-t border-border">
                <p className="text-xs text-muted-foreground font-body">{stateLabel[voiceState]}</p>
                <div className="flex items-center gap-3">
                  {voiceState === "speaking" && (
                    <button onClick={stopAudio} className="w-10 h-10 rounded-full flex items-center justify-center bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors" aria-label={t("voice.stopAudio")} title={t("voice.stopAudio")}>
                      <Square className="w-5 h-5" />
                    </button>
                  )}
                  <button onClick={handleMicClick} disabled={voiceState === "processing"}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 ${voiceState === "listening" ? "bg-destructive text-destructive-foreground scale-110 shadow-lg animate-pulse" : voiceState === "speaking" ? "bg-primary/80 text-primary-foreground shadow-md" : "bg-primary text-primary-foreground hover:scale-105 shadow-md hover:shadow-lg"}`}
                    aria-label={voiceState === "listening" ? t("voice.listening") : t("voice.tapMic")}>
                    {voiceState === "listening" ? <MicOff className="w-7 h-7" /> : voiceState === "speaking" ? <Volume2 className="w-7 h-7 animate-pulse" /> : voiceState === "processing" ? <Loader2 className="w-7 h-7 animate-spin" /> : <Mic className="w-7 h-7" />}
                  </button>
                </div>
                {!SpeechRecognitionAPI && <p className="text-xs text-destructive font-body text-center">{t("voice.noSupport")}</p>}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AIVoiceCenter;
