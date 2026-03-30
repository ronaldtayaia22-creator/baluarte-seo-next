'use client';

import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/lib/i18n";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PrivacyContent = {
  title: string;
  sections: Section[];
};

const PRIVACY_CONTENT: Record<Locale, PrivacyContent> = {
  es: {
    title: "Política de Privacidad",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        paragraphs: [
          "Clínica Baluarte, con domicilio en Av. Baja Navarra 1, 31002 Pamplona, Navarra.",
          "Email: recepcionclinicabaluarte@gmail.com",
        ],
      },
      {
        title: "2. Datos que recopilamos",
        bullets: [
          "Datos de identificación: nombre, email, teléfono",
          "Datos de salud: historial de citas, tratamientos",
          "Datos de pago: método de pago, importes",
          "Datos técnicos: dirección IP, cookies",
        ],
      },
      {
        title: "3. Finalidad del tratamiento",
        bullets: [
          "Gestión de citas y tratamientos",
          "Facturación y pagos",
          "Comunicaciones sobre su salud",
          "Mejora de nuestros servicios",
        ],
      },
      {
        title: "4. Derechos del usuario",
        paragraphs: [
          "Puede ejercer sus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición enviando un email a recepcionclinicabaluarte@gmail.com.",
        ],
      },
      {
        title: "5. Conservación de datos",
        paragraphs: [
          "Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad del tratamiento y las obligaciones legales aplicables.",
        ],
      },
      {
        title: "6. Solicitud de eliminación de datos",
        paragraphs: [
          "Puede solicitar la eliminación de sus datos personales desde su panel de usuario o contactando directamente con nosotros.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    sections: [
      {
        title: "1. Data Controller",
        paragraphs: [
          "Clínica Baluarte, located at Av. Baja Navarra 1, 31002 Pamplona, Navarra.",
          "Email: recepcionclinicabaluarte@gmail.com",
        ],
      },
      {
        title: "2. Data We Collect",
        bullets: [
          "Identification data: name, email, phone",
          "Health data: appointment history, treatments",
          "Payment data: payment method, amounts",
          "Technical data: IP address, cookies",
        ],
      },
      {
        title: "3. Purpose of Processing",
        bullets: [
          "Appointment and treatment management",
          "Billing and payments",
          "Health-related communications",
          "Service quality improvement",
        ],
      },
      {
        title: "4. User Rights",
        paragraphs: [
          "You may exercise your rights of access, rectification, deletion, portability, restriction and objection by emailing recepcionclinicabaluarte@gmail.com.",
        ],
      },
      {
        title: "5. Data Retention",
        paragraphs: [
          "Data is retained for as long as necessary to fulfil processing purposes and comply with legal obligations.",
        ],
      },
      {
        title: "6. Data Deletion Request",
        paragraphs: [
          "You can request deletion of your personal data from your user dashboard or by contacting us directly.",
        ],
      },
    ],
  },
  eu: {
    title: "Pribatutasun Politika",
    sections: [
      {
        title: "1. Tratamenduaren arduraduna",
        paragraphs: [
          "Clínica Baluarte, Av. Baja Navarra 1, 31002 Iruña, Nafarroa helbidean.",
          "Emaila: recepcionclinicabaluarte@gmail.com",
        ],
      },
      {
        title: "2. Biltzen ditugun datuak",
        bullets: [
          "Identifikazio datuak: izena, emaila, telefonoa",
          "Osasun datuak: hitzorduen historia, tratamenduak",
          "Ordainketa datuak: ordainketa metodoa, zenbatekoak",
          "Datu teknikoak: IP helbidea, cookieak",
        ],
      },
      {
        title: "3. Tratamenduaren helburua",
        bullets: [
          "Hitzordu eta tratamenduen kudeaketa",
          "Fakturazioa eta ordainketak",
          "Osasunari lotutako komunikazioak",
          "Gure zerbitzuen hobekuntza",
        ],
      },
      {
        title: "4. Erabiltzailearen eskubideak",
        paragraphs: [
          "Sarbide, zuzenketa, ezabatze, eramangarritasun, murrizketa eta aurka egiteko eskubideak erabil ditzakezu recepcionclinicabaluarte@gmail.com helbidera idatzita.",
        ],
      },
      {
        title: "5. Datuen kontserbazioa",
        paragraphs: [
          "Datuak tratamenduaren helburua betetzeko eta legezko betebeharrak betetzeko behar den denboran gordeko dira.",
        ],
      },
      {
        title: "6. Datuak ezabatzeko eskaera",
        paragraphs: [
          "Zure datu pertsonalak ezabatzeko eskaera egin dezakezu zure erabiltzaile paneletik edo gurekin zuzenean harremanetan jarriz.",
        ],
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    sections: [
      {
        title: "1. Responsable du traitement",
        paragraphs: [
          "Clínica Baluarte, située Av. Baja Navarra 1, 31002 Pampelune, Navarre.",
          "Email : recepcionclinicabaluarte@gmail.com",
        ],
      },
      {
        title: "2. Données collectées",
        bullets: [
          "Données d'identification : nom, email, téléphone",
          "Données de santé : historique des rendez-vous, traitements",
          "Données de paiement : méthode de paiement, montants",
          "Données techniques : adresse IP, cookies",
        ],
      },
      {
        title: "3. Finalité du traitement",
        bullets: [
          "Gestion des rendez-vous et traitements",
          "Facturation et paiements",
          "Communications liées à la santé",
          "Amélioration de nos services",
        ],
      },
      {
        title: "4. Droits de l'utilisateur",
        paragraphs: [
          "Vous pouvez exercer vos droits d'accès, de rectification, d'effacement, de portabilité, de limitation et d'opposition en écrivant à recepcionclinicabaluarte@gmail.com.",
        ],
      },
      {
        title: "5. Conservation des données",
        paragraphs: [
          "Les données sont conservées pendant la durée nécessaire à la finalité du traitement et au respect des obligations légales applicables.",
        ],
      },
      {
        title: "6. Demande de suppression",
        paragraphs: [
          "Vous pouvez demander la suppression de vos données personnelles depuis votre espace utilisateur ou en nous contactant directement.",
        ],
      },
    ],
  },
};

export default function PrivacyPage() {
  const [locale] = useLocale();
  const content = PRIVACY_CONTENT[locale] ?? PRIVACY_CONTENT.es;

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-16 section-padding max-w-3xl mx-auto">
        <h1 className="text-3xl font-display font-bold text-foreground mb-8">{content.title}</h1>
        <div className="prose prose-sm max-w-none font-body text-foreground/80 space-y-6">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-display font-semibold text-foreground">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
