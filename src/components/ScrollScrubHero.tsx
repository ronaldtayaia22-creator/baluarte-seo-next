"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";

const ScrollScrubHero = () => {
  useLocale();
  return (
    <section id="hero" className="relative">
      <div className="relative w-full overflow-hidden flex items-center" style={{ height: "100dvh", minHeight: "100vh" }}>
        <video
          src="/hero/clinic_reception.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 section-padding w-full pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-2xl">
            <h1 className="mb-4 animate-fade-up text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight uppercase">
              <span className="text-white">{t("scrubHero.clinic")}</span>
              <span className="text-primary-light ml-3">{t("scrubHero.name")}</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-white/95 max-w-lg mb-3 animate-fade-up leading-snug">
              {t("scrubHero.subtitle")}
            </p>
            <p className="text-base md:text-lg font-body text-white/70 max-w-md mb-10 animate-fade-in-delayed leading-relaxed">
              {t("scrubHero.categories")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed items-start sm:items-center">
              <Link href={withLovablePath("/reservar")} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-deep transition-all duration-300 shadow-lg hover:shadow-xl">
                {t("scrubHero.cta")}
                <Sparkles className="w-4 h-4" />
              </Link>
              <a href="#servicios" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300" style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }}>
                {t("scrubHero.explore")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollScrubHero;
