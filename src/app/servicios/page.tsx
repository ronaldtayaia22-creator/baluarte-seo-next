'use client';

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Clock, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";

type Service = {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  price: number | null;
  duration_minutes: number | null;
};

export default function ServicesPage() {
  const [_locale] = useLocale();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      const { data } = await supabase
        .from("services")
        .select("id, name, description, category, price, duration_minutes")
        .eq("is_active", true)
        .order("category")
        .order("name");
      if (!isMounted) return;
      setServices(data || []);
      setLoading(false);
    };
    void load();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const unique = new Set<string>();
    services.forEach((s) => {
      if (s.category) unique.add(s.category);
    });
    return Array.from(unique);
  }, [services]);

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 md:pt-36 pb-20 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-body uppercase tracking-[0.25em] text-primary mb-4 block">{t("pub.catalogue")}</span>
            <h1 className="text-4xl md:text-6xl font-display font-light text-foreground">{t("pub.ourServices")}</h1>
          </div>

          {loading ? (
            <div className="text-center text-muted-foreground animate-pulse">{t("pub.loadingServices")}</div>
          ) : (
            categories.map((cat) => (
              <div key={cat} className="mb-12">
                <h2 className="text-2xl font-display font-medium text-foreground mb-6">{t(`catName.${cat}`) || cat}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {services
                    .filter((s) => s.category === cat)
                    .map((service) => {
                      const slug = service.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "");
                      return (
                        <Link
                          key={service.id}
                          href={`/servicios/${slug}`}
                          className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors group"
                        >
                          <h3 className="text-lg font-display font-medium text-foreground group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          {service.description && (
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{service.description}</p>
                          )}
                          <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                            {service.duration_minutes && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {service.duration_minutes} {t("pub.minutesShort")}
                              </span>
                            )}
                            {service.price && (
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />
                                {service.price}€
                              </span>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
