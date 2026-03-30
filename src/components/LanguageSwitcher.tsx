'use client';

import { ChangeEvent } from "react";
import { Globe } from "lucide-react";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";

interface Props {
  className?: string;
}

export function LanguageSwitcher({ className = "" }: Props) {
  const [locale, changeLocale] = useLocale();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    changeLocale(event.target.value as any);
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <Globe className="w-3.5 h-3.5 text-muted-foreground" />
      <select
        value={locale}
        onChange={handleChange}
        className="bg-transparent text-xs font-body outline-none border border-border rounded-full px-2 py-1 text-foreground hover:border-primary transition-colors"
      >
        {SUPPORTED_LOCALES.map((loc) => (
          <option key={loc.code} value={loc.code} className="text-foreground">
            {loc.flag} {loc.label}
          </option>
        ))}
      </select>
    </div>
  );
}
