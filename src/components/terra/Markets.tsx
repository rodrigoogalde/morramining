"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function Markets() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section className="bg-terra-paper py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <p
          className={`font-[family-name:var(--font-terra-body)] uppercase tracking-[0.25em] text-xs text-terra-slate mb-4 terra-reveal ${
            isInView ? "in-view" : ""
          }`}
        >
          {content.markets.title}
        </p>

        <div className="w-12 h-px bg-terra-copper/40 mb-16" />

        <div className="grid md:grid-cols-3 gap-12">
          {content.markets.regions.map((region, i) => (
            <div
              key={region.name}
              className={`terra-reveal terra-stagger-${i + 1} ${
                isInView ? "in-view" : ""
              }`}
            >
              <h3 className="font-[family-name:var(--font-terra-display)] text-3xl font-bold text-terra-espresso mb-3">
                {region.name}
              </h3>
              <div className="w-8 h-px bg-terra-copper/30 mb-4" />
              <p className="font-[family-name:var(--font-terra-body)] text-terra-slate leading-relaxed">
                {region.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
