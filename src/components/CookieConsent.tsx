"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { t } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { withPublicPath } from "@/lib/publicSite";

const COOKIE_KEY = "baluarte_cookie_consent";

type ConsentState = "pending" | "accepted" | "rejected" | "custom";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  useLocale();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({ essential: true, analytics: false, marketing: false });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const save = (state: ConsentState, preferences: CookiePreferences) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ state, preferences, timestamp: new Date().toISOString() }));
    setVisible(false);
  };

  const acceptAll = () => save("accepted", { essential: true, analytics: true, marketing: true });
  const rejectNonEssential = () => save("rejected", { essential: true, analytics: false, marketing: false });
  const saveCustom = () => save("custom", prefs);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-fade-up">
      <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-elevated p-5 space-y-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-body text-foreground font-medium">{t("cookie.title")}</p>
            <p className="text-xs text-muted-foreground font-body">
              {t("cookie.desc")}{" "}
              <a href={withPublicPath("/privacidad")} className="underline text-primary hover:text-primary-deep">{t("footer.privacy")}</a>
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="space-y-2 pl-8">
            <label className="flex items-center gap-2 text-xs font-body text-muted-foreground">
              <input type="checkbox" checked disabled className="accent-primary" /> {t("cookie.essential")}
            </label>
            <label className="flex items-center gap-2 text-xs font-body text-foreground cursor-pointer">
              <input type="checkbox" checked={prefs.analytics} onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })} className="accent-primary" /> {t("cookie.analytics")}
            </label>
            <label className="flex items-center gap-2 text-xs font-body text-foreground cursor-pointer">
              <input type="checkbox" checked={prefs.marketing} onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })} className="accent-primary" /> {t("cookie.marketing")}
            </label>
          </div>
        )}

        <div className="flex flex-wrap gap-2 justify-end">
          {!showDetails ? (
            <Button variant="ghost" size="sm" onClick={() => setShowDetails(true)} className="text-xs">{t("cookie.manage")}</Button>
          ) : (
            <Button variant="ghost" size="sm" onClick={saveCustom} className="text-xs">{t("cookie.save")}</Button>
          )}
          <Button variant="outline" size="sm" onClick={rejectNonEssential} className="text-xs">{t("cookie.reject")}</Button>
          <Button size="sm" onClick={acceptAll} className="text-xs">{t("cookie.accept")}</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
