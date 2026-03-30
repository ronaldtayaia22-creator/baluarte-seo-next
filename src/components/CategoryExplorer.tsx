"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
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

const CategoryExplorer = () => {
  useLocale();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("services").select("category").eq("is_active", true);
      if (data) {
        const uniqueCats = new Set(data.map((s) => s.category || "Otros"));
        setCategories(CATEGORY_ORDER.filter((c) => uniqueCats.has(c)));
      }
      setLoading(false);
    };
    load();
  }, []);

  if (loading) {
    return (
      <section className="py-24 md:py-32 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground font-body">{t("explorer.loading")}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="explorar" className="py-24 md:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-body uppercase tracking-[0.25em] text-primary mb-4 block">{t("explorer.tag")}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground">
            {t("explorer.title")} <span className="italic text-primary">{t("explorer.titleAccent")}</span>
          </h2>
          <div className="line-accent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((catName) => {
            const localizedCategory = t(`catName.${catName}`) || catName;
            return (
              <div key={catName} className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card border border-border hover:border-primary/30 transition-all duration-500 flex flex-col"
                onClick={() => setExpanded(catName)}>
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={CATEGORY_IMAGES[catName]} alt={localizedCategory} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1 text-center items-center">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-3">{localizedCategory}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4 max-w-md">
                    {t(`catDescLong.${catName}`) || ""}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mt-auto pt-4">
                    <a href={withLovablePath(`/reservar?category=${encodeURIComponent(catName)}`)} onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/90 to-primary text-primary-foreground text-xs font-semibold hover:from-primary hover:to-primary transition-all duration-300 group/btn">
                      <Sparkles className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> {t("services.bookCta")}
                    </a>
                    <button onClick={(e) => { e.stopPropagation(); setTimeout(() => { if ((window as any).__openDoixaChat) (window as any).__openDoixaChat(`${catName}`); }, 50); }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-all duration-300 group/btn">
                      <MessageCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" /> {t("services.consultCta")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SpecialtyCarouselModal category={expanded} onClose={() => setExpanded(null)} />
    </section>
  );
};

export default CategoryExplorer;
