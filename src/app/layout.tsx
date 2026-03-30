import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import AIChatCenter from "@/components/AIChatCenter";
import AIVoiceCenter from "@/components/AIVoiceCenter";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clinicabaluarte.com"),
  title: {
    default: "Clínica Baluarte | Salud y medicina estética en Pamplona",
    template: "%s | Clínica Baluarte",
  },
  description:
    "Especialistas en medicina estética, bienestar integral y rehabilitación avanzada en el corazón de Pamplona.",
  keywords: [
    "medicina estética",
    "clínica pamplona",
    "salud integral",
    "dermatología avanzada",
  ],
  openGraph: {
    title: "Clínica Baluarte",
    description:
      "Una experiencia sanitaria boutique con programas de bienestar, medicina estética y recuperación funcional.",
    type: "website",
    locale: "es_ES",
    url: "https://www.clinicabaluarte.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Baluarte",
    description:
      "Programas médicos personalizados respaldados por especialistas y tecnología diagnóstica avanzada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground font-body">
        <Navbar heroOverlay />
        <main className="pt-16 md:pt-32">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <AIChatCenter />
        <AIVoiceCenter />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
