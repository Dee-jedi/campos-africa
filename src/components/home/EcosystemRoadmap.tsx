"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ROADMAP_STEPS } from "@/data/roadmapSteps";
import { RoadmapCard } from "@/components/home/RoadmapCard";

export const EcosystemRoadmap: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 bg-slate-50/40 relative overflow-hidden scroll-mt-20">
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-blue-500/5 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

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
            <span className="text-slate-500 font-semibold sm:font-bold">What</span>{" "}
            <span className="text-slate-900">Campos Does</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            From exam revision and AI assistance to campus trading and personal library folders — connected in one app.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* CONNECTED ROADMAP (Centered Nodes + Subtle Connecting Line)*/}
        {/* ======================================================== */}
        <div className="max-w-xl sm:max-w-2xl mx-auto flex flex-col">
          {ROADMAP_STEPS.map((stepItem, idx) => {
            const isLast = idx === ROADMAP_STEPS.length - 1;

            return (
              <div key={stepItem.step} className="relative">
                {/* Connecting Line Segment between this card's center and next card's center */}
                {!isLast && (
                  <div
                    className="absolute left-[15px] sm:left-[17px] top-1/2 w-[2px] h-full pointer-events-none z-0"
                    style={{
                      background: stepItem.gradientToNext,
                    }}
                  />
                )}

                {/* The Row: Node vertically centered with the Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative flex items-center gap-4 sm:gap-6 py-3.5 sm:py-4.5 group"
                >
                  {/* Milestone Node (Vertically Centered with Card) */}
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 ${stepItem.nodeBorder} ${stepItem.nodeGlow} flex items-center justify-center font-mono text-[11px] sm:text-xs font-black ${stepItem.themeColor} z-10 shrink-0 group-hover:scale-105 transition-transform duration-200`}
                  >
                    {stepItem.step}
                  </div>

                  {/* Extracted Cute Card */}
                  <div className="flex-1 min-w-0">
                    <RoadmapCard step={stepItem} />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
