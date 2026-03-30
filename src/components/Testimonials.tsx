"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Star, Shield, Heart, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { t, getLocale, LOCALE_BCP47 } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";

const TESTIMONIAL_PORTRAIT = "/assets/testimonial-portrait.jpg";

interface Review {
  id: string;
  rating: number;
  comment: string;
  display_name: string | null;
  created_at: string;
}

const STATIC_REVIEWS: Review[] = [
  { id: "s1", rating: 5, comment: "Excelentes profesionales. Desde la primera sesión de fisioterapia noté una mejora increíble en mi movilidad. Trato cercano y muy profesional.", display_name: "María G.", created_at: "2026-03-01" },
  { id: "s2", rating: 5, comment: "El equipo de podología me solucionó un problema que arrastraba desde hacía años. Las plantillas personalizadas han cambiado mi día a día.", display_name: "Javier L.", created_at: "2026-02-15" },
  { id: "s3", rating: 5, comment: "El plan nutricional me ha ayudado a sentirme con más energía y vitalidad. El seguimiento personalizado es fantástico.", display_name: "Carmen R.", created_at: "2026-02-10" },
  { id: "s4", rating: 4, comment: "Muy contenta con las sesiones de pilates terapéutico. El equipo es atento y las instalaciones son modernas.", display_name: "Laura M.", created_at: "2026-01-20" },
  { id: "s5", rating: 5, comment: "Me han tratado una fascitis plantar y en pocas semanas ya podía caminar sin dolor. Profesionales de verdad.", display_name: "Pedro S.", created_at: "2026-01-05" },
  { id: "s6", rating: 5, comment: "La atención al paciente es excepcional. Te hacen sentir como en casa desde el primer momento.", display_name: "Ana B.", created_at: "2025-12-18" },
  { id: "s7", rating: 4, comment: "Buen seguimiento nutricional. Mi dietista se adapta a mi ritmo y mis necesidades reales.", display_name: "Marcos D.", created_at: "2025-12-01" },
];

const CARD_LAYOUT = [
  { top: "0%", left: "0%", width: "35%", rotate: -1.5, z: 3, size: "large" as const, delay: 0, depth: 0.7 },
  { top: "8%", left: "26%", width: "33%", rotate: 1, z: 4, size: "medium" as const, delay: 0.1, depth: 0.5 },
  { top: "3%", left: "54%", width: "34%", rotate: 1.8, z: 5, size: "large" as const, delay: 0.15, depth: 0.3 },
  { top: "50%", left: "4%", width: "33%", rotate: -1.8, z: 3, size: "medium" as const, delay: 0.2, depth: 0.8 },
  { top: "44%", left: "29%", width: "35%", rotate: 0.6, z: 6, size: "large" as const, delay: 0.25, depth: 0.4 },
  { top: "52%", left: "56%", width: "34%", rotate: -1, z: 5, size: "large" as const, delay: 0.3, depth: 0.5 },
];

const FLOAT_ANIMS = ["testimonial-float-1", "testimonial-float-2", "testimonial-float-3"];

function formatMonth(dateStr: string) {
  const d = new Date(dateStr);
  const bcp = LOCALE_BCP47[getLocale()];
  return d.toLocaleDateString(bcp, { month: "long", year: "numeric" });
}

const Testimonials = () => {
  useLocale();
  const [reviews, setReviews] = useState<Review[]>(STATIC_REVIEWS);
  const [realAvg, setRealAvg] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [counterValue, setCounterValue] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);

  const badges = [
    { icon: Shield, label: t("testimonials.badge1") },
    { icon: Heart, label: t("testimonials.badge2") },
    { icon: Award, label: t("testimonials.badge3") },
  ];

  useEffect(() => {
    supabase
      .from("patient_reviews" as any)
      .select("id, rating, comment, display_name, created_at")
      .eq("is_approved", true)
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data && data.length > 0) {
          const dbReviews: Review[] = (data as any[]).map((r: any) => ({
            id: r.id, rating: r.rating, comment: r.comment,
            display_name: r.display_name, created_at: r.created_at,
          }));
          const sum = dbReviews.reduce((s, r) => s + r.rating, 0);
          setRealAvg(sum / dbReviews.length);
          const remaining = 6 - dbReviews.length;
          const filler = remaining > 0 ? STATIC_REVIEWS.slice(0, remaining) : [];
          setReviews([...dbReviews.slice(0, 6), ...filler]);
        }
      });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const target = 750;
    let current = 0;
    const interval = setInterval(() => {
      current += 12.5;
      if (current >= target) { setCounterValue(target); clearInterval(interval); }
      else setCounterValue(Math.floor(current));
    }, 30);
    return () => clearInterval(interval);
  }, [visible]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = collageRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  const handleMouseLeave = useCallback(() => setMouse({ x: 0, y: 0 }), []);

  const avgRaw = realAvg !== null ? realAvg : reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const avgRating = Number.isInteger(avgRaw) ? String(avgRaw) : avgRaw.toFixed(1);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #E6F0F5 0%, #EEF5F7 35%, #E8F4F3 65%, #F0F8F8 100%)" }}
    >
      <div className="absolute pointer-events-none" style={{ top: "-5%", left: "10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(63,182,178,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "0%", right: "20%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(46,111,149,0.1) 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="text-xs font-body uppercase tracking-[0.25em] mb-4 block" style={{ color: "#2E6F95" }}>{t("testimonials.tag")}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light" style={{ color: "#1F2D3A" }}>
            {t("testimonials.titlePrefix")}{" "}
            <span className="italic" style={{ color: "#2E6F95" }}>{t("testimonials.titleAccent")}</span>
          </h2>
        </div>

        {/* ══ DESKTOP ══ */}
        <div
          ref={collageRef}
          className="hidden md:flex items-start relative"
          style={{ minHeight: "480px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative flex-shrink-0" style={{ width: "68%", height: "480px" }}>
            {reviews.slice(0, 6).map((r, i) => {
              const pos = CARD_LAYOUT[i];
              if (!pos) return null;
              const px = mouse.x * 8 * pos.depth;
              const py = mouse.y * 5 * pos.depth;
              const floatAnim = FLOAT_ANIMS[i % 3];
              return (
                <div key={r.id} className={`absolute transition-all duration-700 group ${visible ? "opacity-100" : "opacity-0"}`}
                  style={{ top: pos.top, left: pos.left, width: pos.width, zIndex: pos.z, transitionDelay: `${pos.delay}s`,
                    transform: visible ? `rotate(${pos.rotate}deg) translate(${px}px, ${py}px)` : "translateY(30px)",
                    animation: visible ? `${floatAnim} ${6 + i * 0.4}s ease-in-out infinite` : "none", animationDelay: `${i * 0.5}s`,
                  }}>
                  <div className="rounded-xl px-5 py-3 lg:px-6 lg:py-3.5 border transition-all duration-300 cursor-default group-hover:scale-[1.03] group-hover:-translate-y-1.5 group-hover:shadow-xl"
                    style={{ background: "rgba(255,255,255,0.9)", borderColor: "rgba(227,236,239,0.6)", boxShadow: "0 10px 36px -10px rgba(46,111,149,0.14), 0 2px 8px rgba(46,111,149,0.05)" }}>
                    <div className="flex gap-0.5 mb-1.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`transition-all duration-500 ${visible ? "scale-100" : "scale-0"} ${pos.size === "medium" ? "w-3 h-3" : "w-3.5 h-3.5"}`}
                          style={{ transitionDelay: `${pos.delay + j * 0.06}s`, fill: j < r.rating ? (r.rating === 5 ? "#D4A017" : "#2E6F95") : "transparent", color: j < r.rating ? (r.rating === 5 ? "#D4A017" : "#2E6F95") : "#D5DEE2" }} />
                      ))}
                    </div>
                    <p className="leading-snug mb-2 font-body text-[13px]" style={{ color: "#4A5E6A" }}>{r.comment}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-xs lg:text-sm" style={{ color: "#1F2D3A" }}>{r.display_name || t("testimonials.anonymous")}</span>
                      <span className="text-[10px] lg:text-xs font-body" style={{ color: "#8FA3AD" }}>{formatMonth(r.created_at)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`absolute right-0 top-0 bottom-0 transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0 translate-x-6"}`} style={{ width: "38%", transitionDelay: "0.4s" }}>
            <img src={TESTIMONIAL_PORTRAIT} alt={t("testimonials.titleAccent")} className="absolute right-0 top-1/2 -translate-y-1/2 h-[115%] w-auto max-w-none object-cover object-top"
              style={{ maskImage: `linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.6) 35%, black 55%, black 85%, rgba(0,0,0,0.5) 93%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 8%, black 18%, black 78%, rgba(0,0,0,0.4) 92%, transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, rgba(0,0,0,0.6) 35%, black 55%, black 85%, rgba(0,0,0,0.5) 93%, transparent 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 8%, black 18%, black 78%, rgba(0,0,0,0.4) 92%, transparent 100%)`,
                maskComposite: "intersect", WebkitMaskComposite: "source-in" as any, filter: "brightness(1.03)" }} />
          </div>
        </div>

        {/* ══ MOBILE ══ */}
        <div className="md:hidden">
          <div className={`mx-auto w-40 h-40 rounded-full overflow-hidden mb-6 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            style={{ maskImage: "radial-gradient(circle, black 60%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)" }}>
            <img src={TESTIMONIAL_PORTRAIT} alt={t("testimonials.titleAccent")} className="w-full h-full object-cover object-top" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
            {reviews.slice(0, 6).map((r, i) => (
              <div key={r.id} className={`min-w-[270px] snap-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 0.08}s`, transform: visible ? `rotate(${(i % 2 === 0 ? -1 : 1)}deg)` : "none" }}>
                <div className="rounded-xl px-5 py-4 border" style={{ background: "rgba(255,255,255,0.88)", borderColor: "#E3ECEF", boxShadow: "0 4px 16px -4px rgba(46,111,149,0.08)" }}>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5" style={{ fill: j < r.rating ? (r.rating === 5 ? "#D4A017" : "#2E6F95") : "transparent", color: j < r.rating ? (r.rating === 5 ? "#D4A017" : "#2E6F95") : "#D5DEE2" }} />
                    ))}
                  </div>
                  <p className="text-[13px] leading-snug mb-2 font-body" style={{ color: "#4A5E6A" }}>{r.comment}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: "#1F2D3A" }}>{r.display_name || t("testimonials.anonymous")}</span>
                    <span className="text-xs font-body" style={{ color: "#8FA3AD" }}>{formatMonth(r.created_at)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust metrics */}
        <div className={`mt-14 md:mt-16 flex items-center justify-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: "0.6s" }}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 px-6 sm:px-8 py-5 sm:py-4 rounded-2xl sm:rounded-full border" style={{ background: "rgba(255,255,255,0.85)", borderColor: "#E3ECEF", boxShadow: "0 2px 16px -4px rgba(46,111,149,0.06)" }}>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 transition-all duration-500 ${visible ? "scale-100" : "scale-0"}`} style={{ transitionDelay: `${0.7 + i * 0.1}s`, fill: i < Math.round(Number(avgRating)) ? "#2E6F95" : "transparent", color: i < Math.round(Number(avgRating)) ? "#2E6F95" : "#D5DEE2" }} />
                ))}
              </div>
              <div>
                <span className="text-xl font-display font-semibold" style={{ color: "#1F2D3A" }}>{avgRating}</span>
                <span className="text-sm font-body ml-1" style={{ color: "#5C6F7B" }}>/ 5</span>
                <span className="text-sm font-body ml-1 hidden sm:inline" style={{ color: "#5C6F7B" }}>{t("testimonials.avgLabel")}</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-6" style={{ background: "#E3ECEF" }} />
            <div className="block sm:hidden w-16 h-px" style={{ background: "#E3ECEF" }} />
            <div className="text-center sm:text-left">
              <span className="text-xl font-display font-semibold" style={{ color: "#1F2D3A" }}>+{counterValue}</span>
              <span className="text-sm font-body ml-2" style={{ color: "#5C6F7B" }}>{t("testimonials.satisfiedPatients")}</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 mt-8">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-full border" style={{ background: "rgba(255,255,255,0.7)", borderColor: "#E3ECEF" }}>
              <b.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#2E6F95" }} />
              <span className="text-sm font-body font-medium whitespace-nowrap" style={{ color: "#1F2D3A" }}>{b.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "0.8s" }}>
          <p className="text-sm font-body mb-4" style={{ color: "#5C6F7B" }}>{t("testimonials.ctaText")}</p>
          <Button asChild className="rounded-full px-8" style={{ background: "#2E6F95" }}>
            <a href={withLovablePath("/auth")}>{t("testimonials.ctaButton")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
