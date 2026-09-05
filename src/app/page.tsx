import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { AcademicPillar } from "@/components/home/AcademicPillar";
import { MarketplacePillar } from "@/components/home/MarketplacePillar";
import { CommunityPillar } from "@/components/home/CommunityPillar";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-campos-accent selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <AcademicPillar />
        <MarketplacePillar />
        <CommunityPillar />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
