"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";

export const TestimonialsSection: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const total = TESTIMONIALS.length;

  // We wrap the page index around to seamlessly loop through the array
  const imageIndex = ((page % total) + total) % total;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  // Auto-advance every 10 seconds, paused on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 10000);
    return () => clearInterval(interval);
  }, [isHovered, paginate]);


  const variants = {
    enter: {
      opacity: 0,
      filter: "blur(4px)",
      scale: 0.98,
    },
    center: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      zIndex: 1,
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      scale: 0.98,
      zIndex: 0,
    },
  };

  const current = TESTIMONIALS[imageIndex];

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 md:py-36 bg-white relative overflow-hidden border-t border-slate-100 scroll-mt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Very Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[500px] bg-slate-50/80 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-geist text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12]">
            <span className="text-slate-500 font-semibold sm:font-bold">What</span>{" "}
            <span className="text-slate-900">Students Say</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            Real stories from students, campus creators, and entrepreneurs across African universities.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* INFINITE SEAMLESS SLIDING CAROUSEL                       */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative flex flex-col items-center px-4 sm:px-12"
        >
          {/* STATIC QUOTATION ICON (Constant, never fades) */}
          <div className="mb-6 sm:mb-8 text-slate-300/80">
            <svg
              className="w-10 h-8 sm:w-12 sm:h-10"
              viewBox="0 0 48 36"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M14.4 0C6.44 0 0 6.44 0 14.4c0 7.96 5.8 14.16 13.56 14.36-1.52 4.36-5.4 6.72-9.56 7.24L2.8 36c9.4 0 16.4-7.44 16.4-16.8V0H14.4zm28.8 0c-7.96 0-14.4 6.44-14.4 14.4 0 7.96 5.8 14.16 13.56 14.36-1.52 4.36-5.4 6.72-9.56 7.24l-1.2.04c9.4 0 16.4-7.44 16.4-16.8V0h-4.8z" />
            </svg>
          </div>

          {/* Container uses a fixed height to prevent layout shifts during crossfade! */}
          <div className="relative w-full h-[320px] sm:h-[260px] md:h-[280px] lg:h-[240px] overflow-visible flex justify-center">
            {/* VISIBLE ANIMATED SLIDES */}
            <AnimatePresence initial={false}>
              <motion.div
                key={page}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-center"
              >
                {/* Quote Text */}
                <blockquote className="font-geist text-xl sm:text-2xl md:text-[28px] text-slate-800 font-medium leading-[1.6] sm:leading-[1.65] tracking-tight max-w-3xl mx-auto">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 flex-wrap text-sm sm:text-base">
                  <span className="font-bold text-slate-900 tracking-tight">
                    {current.name}
                  </span>
                  <span className="text-slate-300 select-none">•</span>
                  <span className="text-slate-500 font-normal">
                    {current.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* SLEEK INDICATOR & CONTROLS                               */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-60 sm:max-w-81.25 mx-auto mt-6 sm:mt-10 flex items-center justify-center sm:justify-between gap-4"
        >
          {/* Left Navigation Chevron (Hidden on mobile) */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 shadow-xs items-center justify-center active:scale-95 transition-all cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Indicator: 01 ───── 07 with Campos Blue Progress Line */}
          <div className="flex items-center gap-3 select-none">
            <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 tracking-wider">
              {String(imageIndex + 1).padStart(2, "0")}
            </span>

            {/* Dynamic Electric Blue Progress Line */}
            <div className="w-16 sm:w-20 h-0.5 bg-slate-200 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-campos-blue rounded-full"
                animate={{
                  width: `${((imageIndex + 1) / total) * 100}%`,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>

            <span className="font-mono text-xs sm:text-sm font-medium text-slate-400 tracking-wider">
              {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Right Navigation Chevron (Hidden on mobile) */}
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-700 shadow-xs items-center justify-center active:scale-95 transition-all cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      </Container>

      {/* ======================================================== */}
      {/* SUBTLE FADING DIVIDER (Separating from FAQ)              */}
      {/* ======================================================== */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] max-w-3xl h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
};
