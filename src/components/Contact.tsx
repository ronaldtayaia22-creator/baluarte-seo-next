"use client";

import { Sparkles } from "lucide-react";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";

const CLINIC_LOGO = "/assets/clinica-baluarte-logo.png";

const Contact = () => {
  useLocale();
  return (
    <section className="py-24 md:py-32 section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <img src={CLINIC_LOGO} alt="Clínica Baluarte" className="h-14 md:h-20 object-contain mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-4">
          {t("cta.title")}
        </h2>
        <p className="text-base text-muted-foreground font-body max-w-md mx-auto mb-10 leading-relaxed">
          {t("cta.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={withLovablePath("/reservar")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-deep transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t("nav.book")}
            <Sparkles className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
