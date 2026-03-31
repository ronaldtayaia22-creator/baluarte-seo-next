'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Clock, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withLovablePath } from "@/lib/lovable";
import { withPublicPath } from "@/lib/publicSite";

type ServiceRecord = {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  duration_minutes: number | null;
  price: number | null;
  image_url: string | null;
};

type TranslationRecord = {
  name: string | null;
  description: string | null;
};

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string | string[] }>();
  const slugValue = params?.slug;
  const slug = Array.isArray(slugValue) ? slugValue[0] : slugValue;
  const [locale] = useLocale();
  const [service, setService] = useState<ServiceRecord | null>(null);
  const [translation, setTranslation] = useState<TranslationRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;
    const fetchService = async () => {
      setLoading(true);
      const name = slug.replace(/-/g, " ");
      const { data } = await supabase
        .from("services")
        .select("id, name, description, category, duration_minutes, price, image_url")
        .eq("is_active", true)
        .ilike("name", `%${name}%`)
        .limit(1)
        .maybeSingle();
      if (!isMounted) return;
      setService(data ?? null);
      setNotFound(!data);
      setLoading(false);
    };
    void fetchService();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!service?.id || locale === "es") {
      setTranslation(null);
      return;
    }
    let isMounted = true;
    const fetchTranslation = async () => {
      const { data } = await supabase
        .from("service_translations")
        .select("name, description")
        .eq("service_id", service.id)
        .eq("language", locale)
        .maybeSingle();
      if (!isMounted) return;
      setTranslation(data ?? null);
    };
    void fetchTranslation();
    return () => {
      isMounted = false;
    };
  }, [locale, service?.id]);

  const displayName = translation?.name || service?.name;
  const displayDescription = translation?.description || service?.description;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-32 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">{t("common.loading")}</div>
        </div>
      </div>
    );
  }

  if (notFound || !service) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-display text-foreground">{t("pub.serviceNotFound")}</h1>
          <Link href={withPublicPath("/explorar")} className="text-primary mt-4 inline-block">
            {t("pub.viewAllServices")}
          </Link>
        </div>
      </div>
    );
  }

  const categoryLabel = service.category ? t(`catName.${service.category}`) || service.category : "";

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 md:pt-36 pb-20 section-padding">
        <div className="max-w-4xl mx-auto">
          {service.image_url && (
            <img src={service.image_url} alt={displayName || service.name} className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8" />
          )}
          <h1 className="text-4xl md:text-5xl font-display font-light text-foreground mb-4">{displayName}</h1>
          {service.category && (
            <span className="text-xs font-body uppercase tracking-widest text-primary">{categoryLabel}</span>
          )}
          <div className="flex items-center gap-6 mt-6 text-muted-foreground">
            {service.duration_minutes && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {service.duration_minutes} {t("pub.minutesShort")}
              </span>
            )}
            {service.price && (
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> {service.price}€
              </span>
            )}
          </div>
          {displayDescription && (
            <p className="mt-8 text-lg font-body text-muted-foreground leading-relaxed">{displayDescription}</p>
          )}

          <div className="mt-12">
            <Link
              href={withLovablePath("/reservar")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-deep transition-colors"
            >
              {t("pub.bookService")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
