import { useState, useEffect, useCallback } from "react";
import { getLocale, setLocale, type Locale } from "@/lib/i18n";

/**
 * React hook that syncs with the i18n locale singleton.
 * Returns `[locale, changeLocale]`.
 */
export function useLocale(): [Locale, (l: Locale) => void] {
  const [locale, _setLocale] = useState<Locale>(getLocale);

  useEffect(() => {
    const handler = (e: Event) => {
      _setLocale((e as CustomEvent).detail as Locale);
    };
    window.addEventListener("locale-change", handler);
    return () => window.removeEventListener("locale-change", handler);
  }, []);

  const changeLocale = useCallback((l: Locale) => {
    setLocale(l);
    _setLocale(l);
  }, []);

  return [locale, changeLocale];
}
