import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "OAU Past Questions & Study Notes | Campos Africa",
  description:
    "Find OAU past questions, lecture materials, and study notes on Campos Africa, built for African university students.",
  alternates: {
    canonical: "https://campos.africa/universities/oau",
  },
};

export default function OauPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campos-blue">OAU</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            OAU past questions and student academic resources
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Whether you are preparing for exams or looking for organized study materials, Campos gives OAU students a clearer way to access academic support and campus study tools.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
