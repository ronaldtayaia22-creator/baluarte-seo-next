"use client";

import { Clock, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";

const Footer = () => {
  useLocale();
  return (
    <footer className="py-12 pb-24 section-padding bg-card border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2 justify-center md:justify-start">
              <Clock className="w-4 h-4 text-primary" /> {t("footer.schedule")}
            </h3>
            <p className="text-sm text-muted-foreground font-body">{t("footer.weekdays")}</p>
            <p className="text-sm text-muted-foreground font-body">08:30 – 20:00</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 text-primary" /> {t("footer.address")}
            </h3>
            <p className="text-sm text-muted-foreground font-body">Av. Baja Navarra, 1</p>
            <p className="text-sm text-muted-foreground font-body">Pamplona – 31002</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-display font-semibold text-foreground flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-4 h-4 text-primary" /> {t("footer.contact")}
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              <a href="mailto:recepcionclinicabaluarte@gmail.com" className="hover:text-primary transition-colors">recepcionclinicabaluarte@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border space-y-3">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground font-body">
            <Link href="/privacidad" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link>
            <Link href="/terminos" className="hover:text-primary transition-colors">{t("footer.terms")}</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">{t("footer.cookies")}</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">{t("blog.title")}</Link>
          </div>
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground font-body">
              {t("footer.rights")}
            </p>
            <p className="text-[10px] text-muted-foreground/60 font-body">
              {t("footer.designedBy")}{" "}
              <a href="https://rtpdigitalsolutions.es" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline underline-offset-2">
                RTP Digital Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
