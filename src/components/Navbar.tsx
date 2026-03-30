"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";

const Navbar = ({ heroOverlay = false }: { heroOverlay?: boolean }) => {
  useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!heroOverlay) { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroOverlay]);

  const links = [
    { label: t("nav.services"), href: "/explorar" },
    { label: t("nav.contact"), href: "/contacto" },
  ];

  const textClass = scrolled
    ? "text-foreground hover:text-primary"
    : "text-white/90 hover:text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/30" : "bg-transparent border-b border-transparent"}`}>
      <div className="section-padding flex items-center justify-between h-16 md:h-32">
        <div className="md:hidden flex-1" />
        <Link href="/"><img src="/assets/clinica-baluarte-logo.png" alt="Clínica Baluarte" className="h-12 md:h-16 object-contain" /></Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm font-body transition-colors duration-300 ${textClass}`}>{l.label}</Link>
          ))}
          <Link href={withLovablePath("/auth")} className={`text-sm font-body transition-colors duration-300 ${textClass}`}>
            {t("nav.myAccount")}
          </Link>
          <LanguageSwitcher className={scrolled ? "" : "text-white/80"} />
          <Link href={withLovablePath("/reservar")} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-deep transition-colors duration-300">
            <Sparkles className="w-3.5 h-3.5" />{t("nav.book")}
          </Link>
        </div>

        <div className="md:hidden flex-1 flex justify-end">
          <button onClick={() => setOpen(!open)} className={`p-2 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"}`} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50 animate-fade-up">
          <div className="section-padding py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-body text-foreground hover:text-primary transition-colors py-2">{l.label}</Link>
            ))}
            <Link href={withLovablePath("/auth")} onClick={() => setOpen(false)} className="text-base font-body text-foreground hover:text-primary transition-colors py-2">
              {t("nav.myAccount")}
            </Link>
            <Link href={withLovablePath("/reservar")} onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium mt-2">
              <Sparkles className="w-4 h-4" />{t("nav.book")}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
