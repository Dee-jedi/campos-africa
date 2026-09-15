"use client";

import React, { useState, useEffect, useRef } from "react";
import { STATS } from "@/data/stats";
import { Container } from "@/components/ui/Container";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * (2 - progress) * end)); // ease out quad
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const StatItem = ({ stat }: { stat: typeof STATS[0] }) => {
  const { count, ref } = useCountUp(stat.value, 2000);
  
  return (
    <div ref={ref} className="flex flex-col items-center py-6 first:pt-2 last:pb-2 md:py-2 md:px-6">
      <div className="flex items-baseline justify-center font-geist text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900">
        {stat.prefix && <span>{stat.prefix}</span>}
        <span>{count.toLocaleString()}</span>
        {stat.suffix && (
          <span className="text-campos-blue font-bold ml-0.5 text-3xl sm:text-4xl md:text-5xl">
            {stat.suffix}
          </span>
        )}
      </div>
      <span className="text-sm sm:text-base font-bold text-slate-800 mt-2 line-clamp-1">
        {stat.label}
      </span>
      {stat.sublabel && (
        <span className="text-xs sm:text-sm text-slate-500 mt-1 max-w-60">
          {stat.sublabel}
        </span>
      )}
    </div>
  );
};

export const StatsBar: React.FC = () => {
  return (
    <section id="why-us" className="py-8 sm:py-14 bg-white scroll-mt-20">
      <Container>
        <div className="relative rounded-3xl bg-slate-50/80 border border-slate-200/80 p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 text-center">
            {STATS.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

