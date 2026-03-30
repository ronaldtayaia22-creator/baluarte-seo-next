"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import SpecialtyCarouselModal from "./SpecialtyCarouselModal";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";

const CATEGORY_ORDER = ["Fisioterapia", "Podología", "Nutrición", "Actividad Física"];

const CATEGORY_IMAGES: Record<string, string> = {
  Fisioterapia: "/assets/category-fisioterapia-new.png",
  Podología: "/assets/category-podologia.jpg",
  Nutrición: "/assets/category-nutricion.jpg",
  "Actividad Física": "/assets/category-actividad-fisica.jpg",
};

const CARD_TRANSFORMS = [
  { rotate: -3, translateY: 0, translateX: 0 },
  { rotate: 2.5, translateY: -20, translateX: 10 },
  { rotate: -1.5, translateY: 15, translateX: -5 },
  { rotate: 3, translateY: -10, translateX: 8 },
];

const InteractiveServices = () => {
  useLocale();
  const isMobile = useIsMobile();
  const [categories, setCategories] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("services").select("category").eq("is_active", true);
      if (data) {
        const uniqueCats = new Set(data.map((s) => s.category || "Otros"));
        setCategories(CATEGORY_ORDER.filter((c) => uniqueCats.has(c)));
      }
    };
    load();
  }, []);

  if (categories.length === 0) return null;

  return (
    <>
      <section id="servicios" className="py-24 md:py-32 scroll-mt-24 md:scroll-mt-40 overflow-hidden"
        style={{ background: "linear-gradient(160deg, hsl(209 31% 17%), hsl(200 40% 22%), hsl(200 53% 28%))" }}>
        <div className="section-padding max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <span className="text-xs font-body uppercase tracking-[0.25em] text-primary-glow mb-4 block">{t("services.tag")}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white/95">
              {t("services.titlePrefix")}{" "}
              <span className="italic" style={{ color: "hsl(178 49% 48%)" }}>{t("services.titleAccent")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-2 relative">
            {categories.map((cat, i) => {
              const tr = CARD_TRANSFORMS[i] || CARD_TRANSFORMS[0];
              const isHovered = hoveredIdx === i;
              const localizedCategory = t(`catName.${cat}`) || cat;
              return (
                <div key={cat} className="relative cursor-pointer group"
                  style={{ zIndex: isHovered ? 20 : 10 - i, transform: isHovered ? "rotate(0deg) scale(1.05)" : `rotate(${tr.rotate}deg) translateY(${tr.translateY}px) translateX(${tr.translateX}px)`, transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
                  onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} onClick={() => setExpanded(cat)}>
                  <div className="rounded-sm overflow-hidden" style={{ background: "white", padding: isMobile ? "6px 6px 8px 6px" : "8px 8px 40px 8px", boxShadow: isHovered ? "0 20px 60px -10px rgba(0,0,0,0.5), 0 8px 20px -5px rgba(0,0,0,0.3)" : "0 8px 30px -8px rgba(0,0,0,0.4), 0 4px 12px -4px rgba(0,0,0,0.2)" }}>
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img src={CATEGORY_IMAGES[cat]} alt={localizedCategory} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      {!isMobile && (
                        <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 gap-2 transition-opacity duration-300"
                          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)", opacity: isHovered ? 1 : 0 }}>
                     <a href={withLovablePath(`/reservar?category=${encodeURIComponent(cat)}`)} onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shadow-lg" style={{ background: "#2E6F95", color: "white" }}>
                            <Sparkles className="w-3.5 h-3.5" /> {t("services.bookCta")}
                          </a>
                          <button onClick={(e) => { e.stopPropagation(); setTimeout(() => { if ((window as any).__openDoixaChat) (window as any).__openDoixaChat(`${cat}`); }, 50); }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200" style={{ background: "rgba(63,182,178,0.85)", color: "white", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>
                            <MessageCircle className="w-3.5 h-3.5" /> {t("services.consultCta")}
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-center font-display font-semibold mt-2 text-sm md:text-base" style={{ color: "hsl(209 31% 17%)" }}>{localizedCategory}</p>
                    {isMobile && (
                      <div className="flex flex-col gap-1.5 mt-2 px-1 pb-1">
                     <a href={withLovablePath(`/reservar?category=${encodeURIComponent(cat)}`)} onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold shadow-sm" style={{ background: "#2E6F95", color: "white" }}>
                          <Sparkles className="w-3 h-3" /> {t("services.bookCta")}
                        </a>
                        <button onClick={(e) => { e.stopPropagation(); setTimeout(() => { if ((window as any).__openDoixaChat) (window as any).__openDoixaChat(`${cat}`); }, 50); }}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold" style={{ background: "rgba(63,182,178,0.15)", color: "#2E6F95" }}>
                          <MessageCircle className="w-3 h-3" /> {t("services.consultCta")}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-white/50 text-sm font-body mt-12">{t("services.clickHint")}</p>
        </div>
      </section>
      <SpecialtyCarouselModal category={expanded} onClose={() => setExpanded(null)} />
    </>
  );
};

export default InteractiveServices;
