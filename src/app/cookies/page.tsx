'use client';

import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/lib/i18n";

type CookieContent = {
  title: string;
  whatAreCookies: {
    title: string;
    text: string;
  };
  cookiesWeUse: {
    title: string;
    essential: string;
    analytics: string;
    marketing: string;
  };
  manage: {
    title: string;
    text: string;
  };
};

const COOKIE_CONTENT: Record<Locale, CookieContent> = {
  es: {
    title: "Política de Cookies",
    whatAreCookies: {
      title: "¿Qué son las cookies?",
      text: "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.",
    },
    cookiesWeUse: {
      title: "Cookies que utilizamos",
      essential: "Esenciales: necesarias para el funcionamiento del sitio (autenticación, preferencias de idioma).",
      analytics: "Analíticas: nos ayudan a entender cómo se utiliza el sitio para mejorarlo.",
      marketing: "Marketing: permiten mostrar contenido personalizado y campañas relevantes.",
    },
    manage: {
      title: "Gestión de cookies",
      text: "Puede gestionar sus preferencias de cookies en cualquier momento a través del banner de cookies o la configuración de su navegador.",
    },
  },
  en: {
    title: "Cookie Policy",
    whatAreCookies: {
      title: "What are cookies?",
      text: "Cookies are small text files stored on your device when you visit a website.",
    },
    cookiesWeUse: {
      title: "Cookies we use",
      essential: "Essential: required for site functionality (authentication, language preferences).",
      analytics: "Analytics: help us understand how the site is used to improve it.",
      marketing: "Marketing: allow us to show personalised content and relevant campaigns.",
    },
    manage: {
      title: "Cookie management",
      text: "You can manage your cookie preferences at any time through the cookie banner or your browser settings.",
    },
  },
  eu: {
    title: "Cookie Politika",
    whatAreCookies: {
      title: "Zer dira cookieak?",
      text: "Cookieak testu fitxategi txikiak dira, webgune bat bisitatzean zure gailuan gordetzen direnak.",
    },
    cookiesWeUse: {
      title: "Erabiltzen ditugun cookieak",
      essential: "Ezinbestekoak: webguneak funtzionatzeko beharrezkoak (autentifikazioa, hizkuntza hobespenak).",
      analytics: "Analitikoak: webgunea nola erabiltzen den ulertzen laguntzen digute hobetzeko.",
      marketing: "Marketina: eduki pertsonalizatua eta kanpaina garrantzitsuak erakusteko aukera ematen dute.",
    },
    manage: {
      title: "Cookieen kudeaketa",
      text: "Zure cookie hobespenak edozein unetan kudea ditzakezu cookie bannerraren edo nabigatzailearen ezarpenen bidez.",
    },
  },
  fr: {
    title: "Politique de cookies",
    whatAreCookies: {
      title: "Que sont les cookies ?",
      text: "Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web.",
    },
    cookiesWeUse: {
      title: "Cookies utilisés",
      essential: "Essentiels : nécessaires au fonctionnement du site (authentification, préférences de langue).",
      analytics: "Analytiques : nous aident à comprendre l'utilisation du site pour l'améliorer.",
      marketing: "Marketing : permettent d'afficher du contenu personnalisé et des campagnes pertinentes.",
    },
    manage: {
      title: "Gestion des cookies",
      text: "Vous pouvez gérer vos préférences de cookies à tout moment via le bandeau cookies ou les paramètres de votre navigateur.",
    },
  },
};

export default function CookiesPage() {
  const [locale] = useLocale();
  const content = COOKIE_CONTENT[locale] ?? COOKIE_CONTENT.es;

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-16 section-padding max-w-3xl mx-auto">
        <h1 className="text-3xl font-display font-bold text-foreground mb-8">{content.title}</h1>
        <div className="prose prose-sm max-w-none font-body text-foreground/80 space-y-6">
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">{content.whatAreCookies.title}</h2>
            <p>{content.whatAreCookies.text}</p>
          </section>
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">{content.cookiesWeUse.title}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{content.cookiesWeUse.essential}</li>
              <li>{content.cookiesWeUse.analytics}</li>
              <li>{content.cookiesWeUse.marketing}</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-display font-semibold text-foreground">{content.manage.title}</h2>
            <p>{content.manage.text}</p>
          </section>
        </div>
      </main>
    </div>
  );
}
