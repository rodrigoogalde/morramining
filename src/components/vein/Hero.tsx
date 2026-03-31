"use client";

import { content } from "@/lib/content";
import DataTicker from "./DataTicker";

const tickerItems = [
  ...content.positioning.phrases.map((p) => p.toUpperCase()),
  "COPPER CONCENTRATE",
  "GOLD RECOVERY",
  "OFFTAKE AGREEMENTS",
  "SUPPLY CHAIN",
  "SOUTHERN CONE",
];

export default function Hero() {
  const headline = content.positioning.phrases[2].toUpperCase();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">
        {/* Supporting text above headline */}
        <p className="font-[var(--font-vein-body)] tracking-[0.4em] text-xs text-vein-text/60 uppercase">
          {content.hero.supporting}
        </p>

        {/* Headline */}
        <h1 className="font-[var(--font-vein-display)] text-[clamp(3rem,10vw,8rem)] leading-none text-center clip-reveal">
          {headline}
        </h1>

        {/* Subheadline */}
        <p className="font-[var(--font-vein-body)] text-sm text-vein-text/50 max-w-lg text-center leading-relaxed">
          {content.hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mt-4">
          <a
            href="#contact"
            className="font-[var(--font-vein-body)] text-sm font-semibold bg-vein-copper text-vein-bg px-8 py-3 rounded-full hover:shadow-[0_0_30px_rgba(232,145,58,0.3)] transition-all duration-300"
          >
            {content.hero.cta.primary}
          </a>
          <a
            href="#operations"
            className="font-[var(--font-vein-body)] text-sm font-semibold border border-vein-teal text-vein-teal px-8 py-3 rounded-full hover:bg-vein-teal/10 transition-all duration-300"
          >
            {content.hero.cta.secondary}
          </a>
        </div>
      </div>

      {/* Ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <DataTicker items={tickerItems} />
      </div>
    </section>
  );
}
