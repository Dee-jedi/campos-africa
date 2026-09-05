"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS, APP_URLS } from "@/data/navigation";
import { MobileNav } from "./MobileNav";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm shadow-campos-navy/10 group-hover:scale-105 transition-transform">
              <Image
                src="/images/icon.png"
                alt="Campos Africa logo"
                fill
                priority
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="font-geist text-2xl font-black tracking-tight text-campos-navy">
              Campos
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative hover:text-campos-navy transition-colors py-1 flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-blue-50 text-campos-blue border border-blue-100">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Spacer */}
          <div className="flex items-center gap-3">
            {/* Desktop Launch App CTA */}
            <a
              href={APP_URLS.webApp}
              className="hidden lg:inline-flex group items-center gap-2 px-6 py-2.5 rounded-full bg-campos-navy hover:bg-slate-900 text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-md shadow-campos-navy/20 hover:shadow-lg active:scale-[0.98] whitespace-nowrap"
            >
              <span>Launch App</span>
              <svg
                className="w-4 h-4 text-campos-accent transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Mobile spacer reserving header space for the fixed hamburger button */}
            <div className="w-11 h-11 lg:hidden" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* 
        Single Animated Hamburger / X Button
        Positioned at fixed z-[60] so it ALWAYS renders above both backdrop (z-[50]) and sliding drawer (z-[55]).
        When clicked, the button morphs from 2 lines into an X while the drawer slides in underneath it to meet it!
      */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-3.5 sm:top-4.5 right-4 sm:right-6 w-11 h-11 rounded-full bg-blue-50/95 hover:bg-blue-100/95 border border-blue-100 active:scale-95 transition-all flex flex-col items-center justify-center gap-[5px] focus:outline-none z-[60] shadow-xs cursor-pointer"
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileMenuOpen}
      >
        <span
          className={`h-[2.5px] rounded-full bg-campos-navy transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "w-5 translate-y-[3.75px] rotate-45"
              : "w-5"
          }`}
        />
        <span
          className={`h-[2.5px] rounded-full bg-campos-navy transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "w-5 -translate-y-[3.75px] -rotate-45"
              : "w-3.5 -translate-x-[3px]"
          }`}
        />
      </button>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
