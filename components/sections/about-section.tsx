"use client";

import React, { memo, useState, useEffect } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { cn } from "@/lib/utils";

// Simple CSS-based glow text
const GlowText = memo(function GlowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block transition-all duration-300",
        "hover:text-white",
        className
      )}
      style={{ textShadow: 'none' }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255,255,255,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.textShadow = 'none';
      }}
      data-cursor-hover
    >
      {children}
    </span>
  );
});

export function AboutSection() {
  // 1. "Mounted" check to prevent the Red Hydration Error
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // BA/PO Focused Skills
  const skills = [
    "Agile / Scrum",
    "Product Roadmap",
    "Stakeholder Management",
    "Market Analysis",
    "User Stories",
    "Requirement Gathering",
    "JIRA / Confluence",
    "Data Visualization",
  ];

  // 2. Return null if not mounted to sync Server and Client
  if (!isMounted) {
    return null;
  }

  return (
    <section id="about" className="relative min-h-screen w-full py-32 md:py-48 bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="swiss-container relative z-10">
        <div className="swiss-grid">
          {/* Section label */}
          <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-12 md:mb-0">
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Strategy
            </span>
            <div className="mt-4 w-12 h-px bg-white/20" />
          </div>

          {/* Main content */}
          <div className="col-span-4 md:col-span-6 lg:col-span-9">
            {/* Encrypted header */}
            <h2 className="font-harmond text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8">
              <EncryptedText
                text="The Strategic Mind"
                encryptedClassName="text-white/30"
                revealedClassName="text-white"
                revealDelayMs={40}
              />
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-6 font-nohemi text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl">
              <p>
                I am a Product Specialist dedicated to transforming complex business challenges into{" "}
                <GlowText className="text-white">
                  streamlined digital solutions
                </GlowText>{" "}
                that bridge the gap between technical teams and business goals.
              </p>

              <p>
                My approach blends{" "}
                <GlowText className="text-white">Data-Driven Insights</GlowText>{" "}
                with a focus on user experience, ensuring that every product feature is backed by 
                market research and delivers tangible ROI.
              </p>
            </div>

            {/* Skills grid */}
            <div className="mt-16">
              <h3 className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">
                Expertise & Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-4 py-2 rounded-full border border-white/10 bg-white/5",
                      "font-nohemi text-sm text-white/70",
                      "hover:border-white/30 hover:bg-white/10 hover:text-white",
                      "transition-all duration-300"
                    )}
                    data-cursor-hover
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "3+", label: "Startup Projects" },
                { value: "15%", label: "Avg. ROI Increase" },
                { value: "20+", label: "Product Launches" },
                { value: "100%", label: "Stakeholder Alignment" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-harmond text-4xl md:text-5xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="font-nohemi text-xs uppercase tracking-widest text-white/40 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}