"use client";

import React, { memo, useEffect, useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";

// Noisy grid background with white lines
const NoiseGridBackground = memo(function NoiseGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 hero-grid-pattern" />
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            </pattern>
            <pattern id="largeGrid" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="url(#smallGrid)"/>
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            </pattern>
            <filter id="gridGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#largeGrid)" />
        </svg>
      </div>
    </div>
  );
});

const CornerBrackets = memo(function CornerBrackets() {
  return (
    <>
      <div className="absolute top-8 left-8 md:top-16 md:left-16 w-16 h-16 md:w-24 md:h-24">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/30 to-transparent" />
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-white/30 to-transparent" />
      </div>
      <div className="absolute top-8 right-8 md:top-16 md:right-16 w-16 h-16 md:w-24 md:h-24">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-white/30 to-transparent" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </>
  );
});

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // BA/PO Focused Words
  const words = [
    "Product Roadmaps",
    "User-Centric Solutions",
    "Business Scaling",
    "Data-Driven Growth",
    "Stakeholder Value",
  ];

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      <NoiseGridBackground />
      <CornerBrackets />
      
      <div className="relative z-10 swiss-container w-full">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-nohemi text-sm md:text-base font-medium uppercase tracking-[0.3em] text-white/50 mb-6">
            Product Owner and Business Analyst
          </p>

          <h1 className="font-harmond text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold tracking-tight leading-[0.85] text-white">
            HINAL PRABHU
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 md:mt-6">
            <span className="font-nohemi text-xl md:text-3xl lg:text-4xl text-white/70">
              I deliver
            </span>
            <FlipWords
              words={words}
              className="font-nohemi text-xl md:text-3xl lg:text-4xl font-semibold"
              duration={3000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}