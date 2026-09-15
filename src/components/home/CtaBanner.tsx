import React from "react";
import { Container } from "@/components/ui/Container";
import { APP_URLS } from "@/data/navigation";

export const CtaBanner: React.FC = () => {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white relative overflow-hidden flex flex-col items-center justify-center">
      {/* Subtle Background Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] border border-slate-100 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] border border-slate-50 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1200px] h-[800px] sm:h-[1200px] border border-slate-50/50 rounded-full pointer-events-none"></div>
      
      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Over-heading */}
          <h4 className="font-geist text-sm sm:text-base font-bold text-slate-500 mb-4 sm:mb-6 uppercase tracking-wider">
            Ready to elevate your campus experience?
          </h4>

          {/* Main Massive Heading */}
          <h2 className="font-geist text-[3.5rem] leading-[1] sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-tight mb-6 sm:mb-10 sm:leading-[0.9]">
            <span className="text-slate-400">Get</span> <span className="text-slate-900">Campos</span>
          </h2>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 sm:mb-12 font-medium leading-relaxed">
            <span className="block sm:hidden">
              Join thousands of students. Access study materials, AI tutoring, and the campus marketplace all in one place.
            </span>
            <span className="hidden sm:block">
              Great things happen when the right materials, practice tools, and gamified learning agree. Join thousands of students using Campos to access study materials, AI tutoring, and trade on the campus marketplace.
            </span>
          </p>

          {/* Buttons: Fixed width to prevent stretching and perfectly match HeroSection visually */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APP_URLS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-[250px] px-6 py-3.5 bg-slate-900 hover:bg-black text-white rounded-full font-bold text-[1.05rem] transition-all duration-200 shadow-xl shadow-slate-900/15 active:scale-[0.98] flex items-center justify-center"
            >
              <span className="whitespace-nowrap">Get App</span>
              <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={APP_URLS.webApp}
              className="group w-[250px] px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-slate-300 rounded-full font-bold text-[1.05rem] shadow-xs hover:shadow-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center"
            >
              <span className="whitespace-nowrap">Launch Web App</span>
              <svg
                className="w-4.5 h-4.5 ml-2 text-campos-blue transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
