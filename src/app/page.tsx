import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { OfferingsSection } from "@/components/home/OfferingsSection";
import { EcosystemRoadmap } from "@/components/home/EcosystemRoadmap";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-campos-accent selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <OfferingsSection />
        <EcosystemRoadmap />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
