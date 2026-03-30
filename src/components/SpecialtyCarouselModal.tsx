"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause, Sparkles } from "lucide-react";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";

const specialtyAsset = (file: string) => `/assets/${file}`;

interface Specialty {
  nameKey: string;
  descKey: string;
  image: string;
}

const SPECIALTIES: Record<string, Specialty[]> = {
  Fisioterapia: [
    { nameKey: "spec.terapiasManuales", descKey: "spec.terapiasManualesDesc", image: specialtyAsset("specialty-terapias-manuales.jpg") },
    { nameKey: "spec.drenajeLinfatico", descKey: "spec.drenajeLinfaticoDesc", image: specialtyAsset("specialty-drenaje-linfatico.jpg") },
    { nameKey: "spec.puncionSeca", descKey: "spec.puncionSecaDesc", image: specialtyAsset("specialty-puncion-seca.jpg") },
    { nameKey: "spec.fisioReumatologica", descKey: "spec.fisioReumatologicaDesc", image: specialtyAsset("specialty-fisio-reumatologica.jpg") },
    { nameKey: "spec.fisioOrtopedica", descKey: "spec.fisioOrtopedicaDesc", image: specialtyAsset("specialty-fisio-ortopedica.jpg") },
    { nameKey: "spec.ejercicioTerapeutico", descKey: "spec.ejercicioTerapeuticoDesc", image: specialtyAsset("specialty-ejercicio-terapeutico.jpg") },
  ],
  Podología: [
    { nameKey: "spec.unasCallosidades", descKey: "spec.unasCallosidadesDesc", image: specialtyAsset("specialty-unas-callosidades.jpg") },
    { nameKey: "spec.reconstruccionUnas", descKey: "spec.reconstruccionUnasDesc", image: specialtyAsset("specialty-reconstruccion-unas.jpg") },
    { nameKey: "spec.podologiaDeportiva", descKey: "spec.podologiaDeportivaDesc", image: specialtyAsset("specialty-podologia-deportiva.jpg") },
    { nameKey: "spec.plantillas", descKey: "spec.plantillasDesc", image: specialtyAsset("specialty-plantillas.jpg") },
    { nameKey: "spec.cirugiaPodologica", descKey: "spec.cirugiaPodologicaDesc", image: specialtyAsset("specialty-cirugia-podologica.jpg") },
    { nameKey: "spec.pieDiabetico", descKey: "spec.pieDiabeticoDesc", image: specialtyAsset("specialty-pie-diabetico.jpg") },
  ],
  Nutrición: [
    { nameKey: "spec.primeraConsulta", descKey: "spec.primeraConsultaDesc", image: specialtyAsset("specialty-primera-consulta-nutricion.jpg") },
    { nameKey: "spec.seguimiento", descKey: "spec.seguimientoDesc", image: specialtyAsset("specialty-seguimiento-dieta.jpg") },
  ],
  "Actividad Física": [
    { nameKey: "spec.ninosAdolescentes", descKey: "spec.ninosAdolescentesDesc", image: specialtyAsset("specialty-ninos-adolescentes.jpg") },
    { nameKey: "spec.stretching", descKey: "spec.stretchingDesc", image: specialtyAsset("specialty-stretching.jpg") },
    { nameKey: "spec.familia", descKey: "spec.familiaDesc", image: specialtyAsset("specialty-familia.jpg") },
    { nameKey: "spec.preparacionDeportiva", descKey: "spec.preparacionDeportivaDesc", image: specialtyAsset("specialty-preparacion-deportiva.jpg") },
    { nameKey: "spec.pilates", descKey: "spec.pilatesDesc", image: specialtyAsset("specialty-pilates.jpg") },
    { nameKey: "spec.gimnasiaMantenimiento", descKey: "spec.gimnasiaMantenimientoDesc", image: specialtyAsset("specialty-gimnasia-mantenimiento.jpg") },
    { nameKey: "spec.posturologia", descKey: "spec.posturologiaDesc", image: specialtyAsset("specialty-posturologia.jpg") },
  ],
};

interface Props { category: string | null; onClose: () => void; }

const SpecialtyCarouselModal = ({ category, onClose }: Props) => {
  useLocale();
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  const specialties = category ? SPECIALTIES[category] || [] : [];
  const total = specialties.length;

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + total) % total), [total]);

  useEffect(() => { setCurrent(0); setPlaying(true); }, [category]);
  useEffect(() => { if (!playing || total <= 1) return; const interval = setInterval(next, 4000); return () => clearInterval(interval); }, [playing, next, total]);
  useEffect(() => { if (!category) return; const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); }; window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler); }, [category, onClose, next, prev]);

  if (!category || total === 0) return null;
  const slide = specialties[current];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }} onClick={onClose}>
      <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-card animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"><X className="w-5 h-5 text-white" /></button>
        <div className="absolute top-4 left-4 z-20"><span className="px-4 py-1.5 rounded-full bg-black/40 text-white text-sm font-display font-semibold" style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }}>{t(`catName.${category}`)}</span></div>
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img key={current} src={slide.image} alt={t(slide.nameKey)} className="w-full h-full object-cover animate-fade-in" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 z-10"><h3 className="text-xl md:text-2xl font-display font-semibold text-white drop-shadow-lg">{t(slide.nameKey)}</h3></div>
          {total > 1 && (
            <>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </>
          )}
        </div>
        <div className="px-6 py-4 space-y-4">
          <p className="text-sm text-muted-foreground font-body leading-relaxed min-h-[3rem]">{t(slide.descKey)}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {total > 1 && <button onClick={() => setPlaying(!playing)} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">{playing ? <Pause className="w-4 h-4 text-foreground" /> : <Play className="w-4 h-4 text-foreground" />}</button>}
              {total > 1 && <span className="text-xs font-body text-muted-foreground tabular-nums">{String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>}
            </div>
            <div className="flex items-center gap-2">
              <a href={withLovablePath(`/reservar?category=${encodeURIComponent(category)}`)} onClick={onClose} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/90 to-primary text-primary-foreground text-xs font-semibold hover:from-primary hover:to-primary transition-all duration-300 group">
                <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {t("top.bookCta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyCarouselModal;
