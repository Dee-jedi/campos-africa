import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { APP_URLS } from "@/data/navigation";

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="relative rounded-3xl sm:rounded-[36px] bg-linear-to-br from-campos-navy via-campos-navy-dark to-black p-8 sm:p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl shadow-campos-navy/30">
          {/* Ambient lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-campos-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-campos-blue/20 rounded-full blur-3xl pointer-events-none" />

          {/* Logo icon header */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-inner relative overflow-hidden">
            <Image
              src="/images/icon.png"
              alt="Campos icon"
              fill
              className="object-cover"
            />
          </div>

          {/* Headline */}
          <h2 className="font-geist text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto leading-tight mb-4">
            Join Thousands of Students Making Campus Life Smarter.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Get instant past questions, timed CBT mock exams, campus marketplace deals, and breaking news. 100% free to get started.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href={APP_URLS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-campos-navy font-bold text-sm sm:text-base shadow-xl active:scale-[0.98] transition-all"
            >
              <svg className="w-5 h-5 fill-current text-campos-navy" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-.92L3 21.2v-18.4l.001-.066c.036-.34.22-.656.608-.92zM15.207 13.414l2.553 2.554-11.458 6.505 8.905-9.059zm0-2.828l-8.905-9.06 11.458 6.506-2.553 2.554zm1.414 1.414l3.528 2.003c.895.508.895 1.336 0 1.844l-3.528 2.003-2.122-2.122 2.122-2.128z" />
              </svg>
              <span>Download on Play Store</span>
            </a>
            <a
              href={APP_URLS.webApp}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/25 backdrop-blur-xs active:scale-[0.98] transition-all"
            >
              <span>Launch Web App</span>
              <svg
                className="w-4 h-4 text-campos-accent transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6 font-medium">
            Available across all universities in Nigeria • Web & Mobile
          </p>
        </div>
      </Container>
    </section>
  );
};
