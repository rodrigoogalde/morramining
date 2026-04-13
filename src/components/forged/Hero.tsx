"use client";

import Image from "next/image";
import { useContent } from "@/lib/language-context";

export default function Hero() {
  const content = useContent();
  const words = content.hero.headline.split(" ");

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-44 md:pt-48 pb-16 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background image with duotone treatment */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero-mining-trucks.png"
          alt="Mining operations in the Andes"
          fill
          className="object-cover forged-duotone opacity-30"
          priority
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-forged-bg via-forged-bg/85 to-forged-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forged-bg via-transparent to-forged-bg/60" />
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Supporting text */}
        <p
          className="font-[var(--font-forged-mono)] uppercase tracking-[0.3em] text-sm text-forged-muted mb-6"
          style={{ perspective: "600px" }}
        >
          {content.hero.supporting}
        </p>

        {/* Headline with staggered word animation */}
        <h1
          className="font-[var(--font-forged-display)] text-[clamp(2rem,5vw,4.5rem)] leading-[1] mb-6"
          style={{ perspective: "600px" }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="forged-word mr-[0.3em] inline-block"
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

      {/* Copper horizontal line — full width */}
      <div className="relative z-10 h-[1px] bg-forged-copper forged-line-draw forged-line-draw-delay mb-6" />

      <div className="relative z-10 max-w-5xl">
        {/* Subheadline */}
        <p className="font-[var(--font-forged-body)] text-forged-text/80 text-base md:text-lg max-w-xl leading-relaxed mb-4">
          {content.hero.subheadline}
        </p>

        {/* Highlight paragraphs */}
        {content.hero.highlights.map((highlight, i) => (
          <p
            key={i}
            className="font-[var(--font-forged-body)] text-forged-text/80 text-sm md:text-base max-w-xl leading-relaxed mb-3"
          >
            {highlight}
          </p>
        ))}

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-forged-copper text-forged-bg font-[var(--font-forged-body)] font-medium text-sm uppercase tracking-[0.15em] hover:bg-forged-copper/90 transition-colors duration-300"
          >
            {content.hero.cta.primary}
          </a>
          <a
            href="#operations"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-forged-copper text-forged-copper font-[var(--font-forged-body)] font-medium text-sm uppercase tracking-[0.15em] hover:bg-forged-copper/10 transition-colors duration-300"
          >
            {content.hero.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}
