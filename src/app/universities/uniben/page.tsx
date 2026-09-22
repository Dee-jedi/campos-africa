import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "UNIBEN Past Questions & Student Resources | Campos Africa",
  description:
    "Get UNIBEN past questions, study notes, and campus academic support on Campos Africa for Nigerian university students.",
  alternates: {
    canonical: "https://campos.africa/universities/uniben",
  },
};

export default function UnibenPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campos-blue">UNIBEN</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            UNIBEN study materials, past questions, and exam support
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Campos helps students discover academic content, test preparation resources, and student-focused tools that simplify study life at UNIBEN.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
