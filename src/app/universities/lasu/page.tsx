import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "LASU Past Questions, Notes & Student Materials | Campos Africa",
  description:
    "Find LASU past questions, lecture notes, and academic resources on Campos Africa, the student app for campus success.",
  alternates: {
    canonical: "https://campos.africa/universities/lasu",
  },
};

export default function LasuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 text-slate-900">
      <Navbar />
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-campos-blue">LASU</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            LASU past questions and support for smarter exam prep
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Students use Campos to simplify exam preparation, find relevant course materials, and keep track of their academic workload more efficiently.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
