"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/content";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="terra-contours min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-[15vh] pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text column — 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <p
              className={`font-[family-name:var(--font-terra-body)] uppercase tracking-[0.25em] text-xs text-terra-slate transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {content.hero.supporting}
            </p>

            <h1
              className={`font-[family-name:var(--font-terra-display)] font-bold text-[clamp(2rem,5vw,4.5rem)] leading-tight text-terra-espresso transition-all duration-700 delay-150 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {content.hero.headline}
            </h1>

            <p
              className={`font-[family-name:var(--font-terra-body)] text-terra-slate text-lg max-w-md leading-relaxed transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {content.hero.subheadline}
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-terra-copper text-terra-paper px-8 py-3 font-[family-name:var(--font-terra-body)] font-medium text-sm hover:bg-terra-copper/90 transition-colors"
              >
                Begin a Conversation
              </a>
              <a
                href="#operations"
                className="copper-underline font-[family-name:var(--font-terra-body)] text-sm text-terra-slate hover:text-terra-espresso transition-colors"
              >
                {content.hero.cta.secondary}
              </a>
            </div>
          </div>

          {/* Image column — 2 cols */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-300 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="offset-frame">
              <div className="h-80 lg:h-[28rem] bg-terra-copper/10 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-terra-copper/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-terra-copper/50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                  </div>
                  <p className="font-[family-name:var(--font-terra-body)] text-xs text-terra-slate/60 uppercase tracking-wider">
                    Project Imagery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
