"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import FeatureFan from "@/components/home/FeatureFan";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 sm:pt-28 md:pt-32 pb-14 sm:pb-20 bg-white text-center">
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
            className="font-geist tracking-tighter leading-[1.05] mb-4 sm:mb-6"
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-500 font-semibold mb-1 sm:mb-2">If it&apos;s on campus,</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] text-campos-navy font-black mt-1">
              it&apos;s on Campos<span className="text-[#8B1E42]">.</span>
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
              className="group w-full sm:w-62.5 px-6 py-3.5 bg-campos-navy text-white rounded-full font-bold text-[1.05rem] hover:bg-slate-900 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <span className="whitespace-nowrap">Get App</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/web-app"
              className="group w-full sm:w-62.5 px-6 py-3.5 bg-transparent text-campos-navy border-2 border-slate-200 rounded-full font-bold text-[1.05rem] hover:border-campos-navy transition-all flex items-center justify-center"
            >
              <span className="whitespace-nowrap">Launch Web App</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
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
