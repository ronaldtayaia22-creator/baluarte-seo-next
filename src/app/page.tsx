import ScrollScrubHero from "@/components/ScrollScrubHero";
import InteractiveServices from "@/components/InteractiveServices";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="bg-background" style={{ minHeight: "100dvh" }}>
      <ScrollScrubHero />
      <InteractiveServices />
      <Testimonials />
      <Contact />
    </div>
  );
}
