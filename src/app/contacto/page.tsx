'use client';

import { useState } from "react";
import { MapPin, Clock, Send, Instagram, ArrowUpRight, Mic, Facebook } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getContactSchema } from "@/lib/validationSchemas";
import { t, getLocale } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";

export default function ContactoPage() {
  const [_locale] = useLocale();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = getContactSchema().safeParse(formData);
    if (!result.success) {
      toast.error(result.error.errors[0]?.message || "Error");
      return;
    }
    setSending(true);
    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        message: formData.message.trim(),
      };
      const { error } = await supabase.from("contact_messages").insert(payload);
      if (error) throw error;
      supabase.functions.invoke("send-contact-email", { body: { ...payload, locale: getLocale() } }).catch(() => {});
      toast.success(t("contact.success"));
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error(t("contact.error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 md:pt-36 pb-24 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-xs font-body uppercase tracking-[0.25em] text-primary mb-4 block">{t("contact.tag")}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-foreground">
              {t("contact.title")} <span className="italic text-primary">{t("contact.titleAccent")}</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-lg mx-auto">{t("contact.subtitle")}</p>
            <div className="line-accent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-auto">
            <form onSubmit={handleSubmit} className="md:col-span-5 md:row-span-2 p-8 md:p-10 rounded-3xl bg-card border border-border/50 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-medium text-foreground mb-1">{t("contact.formTitle")}</h3>
                <p className="text-sm text-muted-foreground font-body mb-8">{t("contact.formSubtitle")}</p>
                <div className="space-y-4">
                  <Input
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    maxLength={100}
                    className="rounded-xl bg-background border-border/60 h-12"
                  />
                  <Input
                    type="email"
                    placeholder={t("contact.email")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                    className="rounded-xl bg-background border-border/60 h-12"
                  />
                  <Input
                    type="tel"
                    placeholder={t("contact.phone")}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    maxLength={20}
                    className="rounded-xl bg-background border-border/60 h-12"
                  />
                  <Textarea
                    placeholder={t("contact.message")}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    maxLength={1000}
                    className="rounded-xl bg-background border-border/60 resize-none"
                  />
                </div>
              </div>
              <Button type="submit" disabled={sending} className="w-full rounded-full gap-2 h-12 mt-6 text-sm">
                <Send className="w-4 h-4" />
                {sending ? t("contact.sending") : t("contact.send")}
              </Button>
            </form>

            <div className="md:col-span-7 rounded-3xl overflow-hidden border border-border/50 min-h-[280px] md:min-h-[320px]">
              <iframe
                title="Ubicación Clínica Baluarte"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.5!2d-1.6440!3d42.8120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd50929a5e9bc9db%3A0x0!2sAv.%20Baja%20Navarra%2C%201%2C%20Pamplona%2C%20Navarra!5e0!3m2!1ses!2ses!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              <a
                href="https://maps.google.com/?q=Av+Baja+Navarra+1+Pamplona"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/15 hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-auto pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">{t("contact.address")}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Av. Baja Navarra, 1
                    <br />
                    Pamplona – 31002
                  </p>
                </div>
              </a>

              <div className="p-6 rounded-3xl bg-gradient-to-br from-accent/60 to-accent/30 border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-auto pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">{t("contact.needAppt")}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t("contact.useAssistant")}</p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-br from-accent/60 to-accent/30 border border-border/50 flex flex-col">
                <div className="mb-auto pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-body font-semibold text-foreground mb-1">{t("contact.schedule")}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t("footer.weekdays")}
                    <br />
                    08:30 – 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/clinicabaluarte/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/15 text-sm text-foreground font-body hover:border-primary/30 transition-all"
            >
              <Instagram className="w-4 h-4 text-primary" /> @clinicabaluarte
            </a>
            <a
              href="https://www.facebook.com/clinica.baluarte.73/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border/50 text-sm text-foreground font-body hover:border-primary/30 transition-all"
            >
              <Facebook className="w-4 h-4 text-primary" /> Clínica Baluarte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
