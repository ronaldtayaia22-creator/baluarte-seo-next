"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Send, Sparkles, Loader2, ChevronDown, X, RotateCcw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { t, getLocale } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";

type Msg = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "baluarte_chat_history";

const CHAT_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/doixa-assistant`;

function loadMessages(): Msg[] {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return [];
}

function saveMessages(msgs: Msg[]) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch { /* ignore */ }
}

const AIChatCenter = () => {
  useLocale();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null));
  }, []);
  const [messages, setMessages] = useState<Msg[]>(loadMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const lastAssistantRef = useRef<HTMLDivElement>(null);

  const quickChips = [
    t("chip.fisio"),
    t("chip.backPain"),
    t("chip.podo"),
    t("chip.nutri"),
    t("chip.activity"),
    t("chip.prices"),
  ];

  useEffect(() => { saveMessages(messages); }, [messages]);
  useEffect(() => { const timer = setTimeout(() => setShowPulse(false), 15000); return () => clearTimeout(timer); }, []);

  useEffect(() => {
    (window as any).__openDoixaChat = (query: string) => {
      setShowBar(true);
      setIsExpanded(true);
      if (query) sendMessage(query);
    };
    return () => { delete (window as any).__openDoixaChat; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, isLoading]);

  useEffect(() => {
    const isHome = window.location.pathname === "/";
    const onScroll = () => { setShowBar(!isHome || window.scrollY > window.innerHeight * 0.4); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prevMsgCountRef = useRef(0);
  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.role === "assistant" && messages.length > prevMsgCountRef.current) {
      lastAssistantRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    prevMsgCountRef.current = messages.length;
  }, [messages]);

  const normalizeBookingLinkMarkdown = useCallback((text: string) => {
    return text.replace(/\[([^\]]+)\]\((\/reservar\?[\s\S]*?)\)/g, (_match, label, rawHref) => {
      try {
        const compactHref = String(rawHref).replace(/\s+/g, " ").trim();
        const [path, rawQuery = ""] = compactHref.split("?");
        const sourceParams = new URLSearchParams(rawQuery);
        const encodedParams = new URLSearchParams();
        sourceParams.forEach((value, key) => { if (value?.trim()) encodedParams.set(key, value.trim()); });
        const finalPath = encodedParams.toString() ? `${path}?${encodedParams.toString()}` : path;
        return `[${label}](${withLovablePath(finalPath)})`;
      } catch {
        return `[${label}](${withLovablePath(rawHref)})`;
      }
    });
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: text.trim() };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");
    setIsLoading(true);
    setIsExpanded(true);

    let assistantSoFar = "";

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages, user_id: userId, locale: getLocale() }),
      });

      if (!resp.ok || !resp.body) throw new Error("Error");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      const upsert = (chunk: string) => {
        assistantSoFar += chunk;
        const normalizedAssistantContent = normalizeBookingLinkMarkdown(assistantSoFar);
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant") {
            return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: normalizedAssistantContent } : m));
          }
          return [...prev, { role: "assistant", content: normalizedAssistantContent }];
        });
      };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });
        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsert(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      setMessages((prev) => [...prev, { role: "assistant", content: t("chat.errorMsg") }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => { setMessages([]); sessionStorage.removeItem(STORAGE_KEY); };

  const handleInternalLink = (href: string) => {
    setIsExpanded(false);
    window.location.href = withLovablePath(href);
  };

  if (!showBar) return null;

  return (
    <>
      {isExpanded && <div className="fixed inset-0 z-30" onClick={() => setIsExpanded(false)} />}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl">
      {isExpanded && (
        <div className="mb-3 rounded-2xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-up">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-accent/50">
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-body font-medium text-foreground">{t("chat.title")}</span>
              <img src={clinicaLogo} alt="Clínica Baluarte" className="inline-block h-8 object-contain" />
            </div>
            <div className="flex-1 flex justify-end gap-1">
              {messages.length > 0 && (
                <button onClick={handleClearHistory} className="p-1 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label={t("chat.reset")} title={t("chat.reset")}>
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
              <button onClick={() => setIsExpanded(false)} className="p-1 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground" aria-label={t("chat.close")}>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {messages.length === 0 && (
            <div className="px-5 py-4">
              <p className="text-base text-muted-foreground font-body mb-3">{t("chat.introText")}</p>
              <div className="flex flex-wrap gap-2">
                {quickChips.map((chip) => (
                  <button key={chip} onClick={() => sendMessage(chip)} className="px-3 py-1.5 rounded-full border border-border text-xs font-body text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.length > 0 && (
            <div ref={messagesContainerRef} className="max-h-[350px] overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => {
                const isLastAssistant = m.role === "assistant" && i === messages.length - 1;
                return (
                  <div key={i} ref={isLastAssistant ? lastAssistantRef : undefined} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm font-body leading-relaxed overflow-hidden ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-accent text-accent-foreground rounded-bl-md"}`}>
                      {m.role === "assistant" ? (
                        <div className="prose prose-sm max-w-none break-words overflow-wrap-anywhere" style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>
                          <ReactMarkdown components={{
                            a: ({ href, children }) => {
                              if (href?.startsWith("/")) return <button onClick={() => handleInternalLink(href)} className="text-primary underline underline-offset-2 hover:text-primary-deep font-semibold cursor-pointer">{children}</button>;
                              return <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline">{children}</a>;
                            },
                          }}>{m.content}</ReactMarkdown>
                        </div>
                      ) : m.content}
                    </div>
                  </div>
                );
              })}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start"><div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-accent text-accent-foreground"><Loader2 className="w-4 h-4 animate-spin" /></div></div>
              )}
            </div>
          )}

          <div className="flex gap-2 p-3 border-t border-border">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage(input)} placeholder={t("chat.placeholder")}
              className="flex-1 px-4 py-2.5 rounded-full border border-border bg-background text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" />
            <button onClick={() => sendMessage(input)} disabled={isLoading || !input.trim()} className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-deep transition-colors disabled:opacity-50" aria-label={t("chat.send")}>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {!isExpanded && (
        <div className="relative">
          {showPulse && showBar && <div className="absolute inset-0 rounded-full border-2 border-primary/60 animate-pulse pointer-events-none" />}
          <div onClick={() => setIsExpanded(true)} className="relative cursor-pointer flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card/95 backdrop-blur-lg shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <span className="text-xs font-body uppercase tracking-widest text-muted-foreground flex-shrink-0">{t("chat.title")}</span>
            <img src={CLINIC_LOGO} alt="Clínica Baluarte" className="inline-block h-7 sm:h-10 object-contain flex-shrink-0" />
            <div className="flex-1" />
            <input value={input} onChange={(e) => { e.stopPropagation(); setInput(e.target.value); }} onKeyDown={(e) => { if (e.key === "Enter") { e.stopPropagation(); sendMessage(input); } }} onClick={(e) => e.stopPropagation()} placeholder={t("chat.placeholder")}
              className="flex-1 min-w-0 bg-transparent text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none" />
            <button onClick={(e) => { e.stopPropagation(); sendMessage(input); }} disabled={isLoading || !input.trim()} className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-deep transition-colors disabled:opacity-50 flex-shrink-0" aria-label={t("chat.send")}>
              <Send className="w-3.5 h-3.5" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }} className="p-1 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0" aria-label={t("chat.expand")}>
              <ChevronDown className="w-4 h-4 rotate-180" />
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AIChatCenter;
const CLINIC_LOGO = "/assets/clinica-baluarte-logo.png";
