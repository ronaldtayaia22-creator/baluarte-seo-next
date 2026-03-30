'use client';

import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/lib/i18n";

type TermsContent = {
  title: string;
  sections: { title: string; text: string }[];
};

const TERMS_CONTENT: Record<Locale, TermsContent> = {
  es: {
    title: "Términos y Condiciones",
    sections: [
      {
        title: "1. Objeto",
        text: "Estos términos regulan el uso de la plataforma de Clínica Baluarte para la reserva de citas, gestión de tratamientos y servicios asociados.",
      },
      {
        title: "2. Reservas y cancelaciones",
        text: "Las citas pueden cancelarse o reprogramarse según la política de cancelación vigente. Las cancelaciones tardías pueden conllevar cargos.",
      },
      {
        title: "3. Pagos",
        text: "Los precios se muestran con IVA incluido cuando corresponda. Los pagos se procesan de forma segura a través de la plataforma.",
      },
      {
        title: "4. Responsabilidad",
        text: "Clínica Baluarte no se responsabiliza de los daños derivados del uso incorrecto de la plataforma o de la información proporcionada por el usuario.",
      },
      {
        title: "5. Modificaciones",
        text: "Nos reservamos el derecho de modificar estos términos. Los cambios serán notificados a los usuarios registrados.",
      },
    ],
  },
  en: {
    title: "Terms and Conditions",
    sections: [
      {
        title: "1. Purpose",
        text: "These terms govern the use of the Clínica Baluarte platform for appointment booking, treatment management and related services.",
      },
      {
        title: "2. Bookings and cancellations",
        text: "Appointments can be cancelled or rescheduled according to the active cancellation policy. Late cancellations may incur charges.",
      },
      {
        title: "3. Payments",
        text: "Prices are shown including VAT when applicable. Payments are processed securely through the platform.",
      },
      {
        title: "4. Liability",
        text: "Clínica Baluarte is not liable for damages caused by incorrect use of the platform or user-provided information.",
      },
      {
        title: "5. Changes",
        text: "We reserve the right to modify these terms. Changes will be notified to registered users.",
      },
    ],
  },
  eu: {
    title: "Baldintzak eta Kondizioak",
    sections: [
      {
        title: "1. Xedea",
        text: "Baldintza hauek Clínica Baluarteren plataforma erabiltzea arautzen dute: hitzordu erreserbak, tratamenduen kudeaketa eta lotutako zerbitzuak.",
      },
      {
        title: "2. Erreserbak eta ezeztapenak",
        text: "Hitzorduak indarrean dagoen ezeztapen politikaren arabera ezeztatu edo berrantolatu daitezke. Berandu egindako ezeztapenek karguak izan ditzakete.",
      },
      {
        title: "3. Ordainketak",
        text: "Prezioak BEZa barne erakusten dira dagokionean. Ordainketak segurtasunez prozesatzen dira plataformaren bidez.",
      },
      {
        title: "4. Erantzukizuna",
        text: "Clínica Baluarte ez da erantzule izango plataforma gaizki erabiltzeagatik edo erabiltzaileak emandako informazioagatik sortutako kalteez.",
      },
      {
        title: "5. Aldaketak",
        text: "Baldintza hauek aldatzeko eskubidea gordetzen dugu. Aldaketak erregistratutako erabiltzaileei jakinaraziko zaizkie.",
      },
    ],
  },
  fr: {
    title: "Conditions générales",
    sections: [
      {
        title: "1. Objet",
        text: "Ces conditions régissent l'utilisation de la plateforme Clínica Baluarte pour la réservation de rendez-vous, la gestion des traitements et les services associés.",
      },
      {
        title: "2. Réservations et annulations",
        text: "Les rendez-vous peuvent être annulés ou reprogrammés selon la politique d'annulation en vigueur. Les annulations tardives peuvent entraîner des frais.",
      },
      {
        title: "3. Paiements",
        text: "Les prix sont affichés TTC lorsque applicable. Les paiements sont traités de manière sécurisée via la plateforme.",
      },
      {
        title: "4. Responsabilité",
        text: "Clínica Baluarte n'est pas responsable des dommages causés par une mauvaise utilisation de la plateforme ou des informations fournies par l'utilisateur.",
      },
      {
        title: "5. Modifications",
        text: "Nous nous réservons le droit de modifier ces conditions. Les changements seront notifiés aux utilisateurs enregistrés.",
      },
    ],
  },
};

export default function TermsPage() {
  const [locale] = useLocale();
  const content = TERMS_CONTENT[locale] ?? TERMS_CONTENT.es;

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-16 section-padding max-w-3xl mx-auto">
        <h1 className="text-3xl font-display font-bold text-foreground mb-8">{content.title}</h1>
        <div className="prose prose-sm max-w-none font-body text-foreground/80 space-y-6">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-display font-semibold text-foreground">{section.title}</h2>
              <p>{section.text}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
