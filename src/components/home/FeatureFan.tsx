"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 'materials',
    pill: 'PDFs',
    position: 'bottom',
    image: '/images/materials_simple.jpg',
  },
  {
    id: 'cbt',
    pill: 'EXAMS',
    position: 'top',
    image: '/images/exams_simple.jpg',
  },
  {
    id: 'market',
    pill: 'SHOP',
    position: 'bottom',
    image: '/images/market_simple.jpg',
  },
  {
    id: 'ai',
    pill: 'AI CHAT',
    position: 'top',
    image: '/images/robot_student_campos.jpg',
  }
];

export default function FeatureFan() {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-auto py-12 sm:py-24 mt-4 flex flex-row items-center justify-center group perspective-1000 -translate-x-4 sm:-translate-x-10 md:-translate-x-14">
      {cards.map((card, index) => (
        <motion.div 
          key={card.id} 
          className={`relative z-${index * 10} ${index !== 0 ? '-ml-6 sm:-ml-12 md:-ml-16' : ''}`}
          animate={{ y: [0, -16, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        >
          <div
            className="relative w-25 sm:w-45 md:w-60 aspect-square rounded-3xl sm:rounded-[40px] md:rounded-[56px] overflow-hidden shadow-xl shadow-slate-900/15 border-[3px] sm:border-[5px] md:border-[6px] border-white transition-all duration-300 hover:scale-110 hover:z-50! cursor-pointer origin-bottom bg-white rotate-20 sm:rotate-24 group-hover:opacity-80 hover:opacity-100!"
          >
            <Image
              src={card.image}
              alt={card.pill}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100px, (max-width: 768px) 180px, 240px"
            />

            {/* Alternating Single-Word Deep Wine / Bordeaux Pill */}
            <div
              className={`absolute z-20 ${
                card.position === 'top'
                  ? 'top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 md:top-3.5 md:left-3.5'
                  : 'bottom-1.5 left-1.5 sm:bottom-2.5 sm:left-2.5 md:bottom-3.5 md:left-3.5'
              }`}
            >
              <span className="inline-flex items-center justify-center px-1.5 sm:px-2.5 md:px-3.5 py-0.5 sm:py-0.75 md:py-1 rounded-full bg-[#8B1E42] text-white font-black text-[7.5px] sm:text-[11px] md:text-xs tracking-tight sm:tracking-wider uppercase shadow-sm sm:shadow-md shadow-black/25 select-none">
                {card.pill}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}







