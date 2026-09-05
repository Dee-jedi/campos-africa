"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 'materials',
    title: 'MATERIALS',
    image: '/images/materials_simple.jpg',
  },
  {
    id: 'cbt',
    title: 'EXAMS',
    image: '/images/exams_simple.jpg',
  },
  {
    id: 'market',
    title: 'MARKET',
    image: '/images/market_simple.jpg',
  },
  {
    id: 'ai',
    title: 'AI CHAT',
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
            className={`relative w-[100px] sm:w-[180px] md:w-[240px] aspect-square rounded-[24px] sm:rounded-[40px] md:rounded-[56px] overflow-hidden shadow-xl shadow-slate-900/15 border-[3px] sm:border-[5px] md:border-[6px] border-white transition-all duration-300 hover:scale-110 hover:!z-50 cursor-pointer origin-bottom bg-white rotate-[20deg] sm:rotate-[24deg] group-hover:opacity-80 hover:!opacity-100`}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100px, (max-width: 768px) 180px, 240px"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}







