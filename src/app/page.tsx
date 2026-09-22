import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { OfferingsSection } from "@/components/home/OfferingsSection";
import { EcosystemRoadmap } from "@/components/home/EcosystemRoadmap";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Campos Africa",
  description:
    "Campos is the all-in-one academic and campus app for African university students. Find study materials, past questions, CBT practice, marketplace deals, and campus updates in one place.",
  alternates: {
    canonical: "https://campos.africa",
  },
  openGraph: {
    title: "Campos Africa",
    description:
      "Your campus, simplified. Study materials, past questions, market access, AI study tools, and campus resources built for African students.",
    url: "https://campos.africa",
    siteName: "Campos Africa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campos Africa",
    description:
      "The all-in-one academic and campus app for African university students.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-campos-accent selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsBar />
        <OfferingsSection />
        <EcosystemRoadmap />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
