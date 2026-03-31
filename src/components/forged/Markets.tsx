"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function Markets() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.3em] text-xs text-forged-copper mb-12">
        {content.markets.title}
      </p>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {content.markets.regions.map((region, i) => (
          <div
            key={region.name}
            className={`forged-reveal ${isInView ? "in-view" : ""} forged-reveal-stagger-${i + 1}`}
          >
            {/* Pulsing copper dot */}
            <div className="w-2 h-2 bg-forged-copper rounded-full animate-pulse-glow mb-6" />

            <h3 className="font-[var(--font-forged-display)] text-2xl md:text-3xl text-forged-text mb-4">
              {region.name}
            </h3>

            <p className="font-[var(--font-forged-body)] text-forged-muted leading-relaxed">
              {region.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
