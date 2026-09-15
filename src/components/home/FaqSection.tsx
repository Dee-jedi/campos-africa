"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/data/faqs";
import { APP_URLS } from "@/data/navigation";

export const FaqSection: React.FC = () => {
  // First item open by default for immediate discoverability
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 md:py-36 bg-white relative scroll-mt-20 overflow-hidden">
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-500/5 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        {/* ======================================================== */}
        {/* SECTION HEADER (Unified Dual-Tone Template)              */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12]">
            <span className="text-slate-500 font-semibold sm:font-bold">Frequently Asked</span>{" "}
            <span className="text-slate-900">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            Everything you need to know about materials, AI tutoring, marketplace trading, and cash rewards on Campos.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* SLEEK LIST ACCORDION (Matching Reference)                */}
        {/* ======================================================== */}
        <div className="max-w-3xl mx-auto border-t border-slate-200/80 divide-y divide-slate-200/80">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="group">
                {/* Accordion Row Header */}
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer select-none transition-colors"
                  aria-expanded={isOpen}
                >
                  {/* Question Title: A lil bold and greyish matching reference */}
                  <h3
                    className={`font-geist text-base sm:text-lg lg:text-[19px] font-semibold sm:font-bold tracking-tight transition-colors duration-200 leading-snug flex-1 pr-4 ${
                      isOpen
                        ? "text-slate-900"
                        : "text-slate-500 group-hover:text-slate-800"
                    }`}
                  >
                    {item.question}
                  </h3>

                  {/* Circular Toggle Button: Outline '+' when closed, Solid Brand Blue '×' when open */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-campos-blue text-white shadow-md shadow-blue-500/25 rotate-90"
                        : "border border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-700 bg-white"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pr-10 sm:pr-14 pb-6 sm:pb-8 pt-1">
                        <p className="text-sm sm:text-[15.5px] text-slate-600 leading-relaxed font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Footnote */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Have a question that isn&apos;t covered here? Reach us{" "}
            <a
              href={`mailto:${APP_URLS.supportEmail}`}
              className="text-slate-800 hover:text-campos-blue underline underline-offset-4 font-medium transition-colors cursor-pointer"
            >
              here
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
};
