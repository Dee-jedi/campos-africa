"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import FeatureFan from "@/components/home/FeatureFan";
import { motion } from "framer-motion";
import { HERO_UNIVERSITIES } from "@/constants/universities";

export const HeroSection: React.FC = () => {
  const [uniIndex, setUniIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = HERO_UNIVERSITIES[uniIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < fullText.length) {
      // Natural, deliberate typing pace
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 140);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      // Pause so the student has ample time to read and identify their school
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayedText.length > 0) {
      // Smooth, clean backspacing
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 65);
    } else if (isDeleting && displayedText.length === 0) {
      // Brief breath before typing the next school
      timer = setTimeout(() => {
        setIsDeleting(false);
        setUniIndex((prev) => (prev + 1) % HERO_UNIVERSITIES.length);
      }, 350);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, uniIndex]);

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 md:pt-48 pb-14 sm:pb-20 bg-white text-center">
      {/* Background Decorative Mesh Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-137.5 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-campos-accent/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="flex flex-col items-center max-w-4xl mx-auto relative z-20">
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-geist tracking-tighter leading-[1.08] mb-4 sm:mb-6"
          >
            {/* Line 1: Typewriter line in uniform slate color */}
            <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-slate-500 font-semibold mb-1.5 sm:mb-2 tracking-tight min-h-[1.25em]">
              If it&apos;s in{" "}
              <span className="font-semibold tracking-tight text-slate-500">
                {displayedText}
              </span>
              <span className="inline-block w-[2.5px] sm:w-[3px] h-[0.85em] bg-slate-400 align-baseline ml-0.5 animate-pulse" />
              ,
            </span>

            {/* Line 2: Solid un-wrapped branding */}
            <span className="block text-[clamp(2.15rem,8.5vw,3.6rem)] sm:text-6xl md:text-7xl lg:text-[6.2rem] text-slate-900 font-black mt-1 tracking-tight whitespace-nowrap">
              it&apos;s on Campos
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-sm sm:text-base md:text-[1.05rem] text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
          >
            Access lecture materials, practice past questions, trade on the campus marketplace, and connect with students across African universities.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16"
          >
            <Link
              href="/get-app"
              className="group w-full sm:w-62.5 px-6 py-3.5 bg-slate-900 hover:bg-black text-white rounded-full font-bold text-[1.05rem] transition-all duration-200 shadow-xl shadow-slate-900/15 active:scale-[0.98] flex items-center justify-center"
            >
              <span className="whitespace-nowrap">Get App</span>
              <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/web-app"
              className="group w-full sm:w-62.5 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 hover:border-slate-300 rounded-full font-bold text-[1.05rem] shadow-xs hover:shadow-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center"
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
            </Link>
          </motion.div>
        </div>

        {/* The Feature Fan Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <FeatureFan />
        </motion.div>

      </Container>
    </section>
  );
};
