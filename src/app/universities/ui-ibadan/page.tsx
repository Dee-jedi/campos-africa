import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "UI Ibadan Student App, Notes & Past Questions | Campos Africa",
  description:
    "Access UI Ibadan study materials, notes, and past questions with Campos Africa, a university student app built for smarter preparation.",
  alternates: {
    canonical: "https://campos.africa/universities/ui-ibadan",
  },
};

export default function UiIbadanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campos-blue">UI Ibadan</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            UI Ibadan study materials and campus academic tools
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Campos supports UI Ibadan students with resources that make studying easier, from past questions and notes to general academic tools built for student success.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
