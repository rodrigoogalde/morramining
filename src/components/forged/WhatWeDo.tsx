"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function WhatWeDo() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.3em] text-xs text-forged-copper mb-12">
        {content.whatWeDo.title}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {content.whatWeDo.services.map((service, i) => (
          <div
            key={service.label}
            className={`bg-forged-bg2 p-8 forged-card-hover forged-reveal ${
              isInView ? "in-view" : ""
            } forged-reveal-stagger-${i + 1}`}
          >
            <h3 className="font-[var(--font-forged-display)] text-2xl md:text-3xl mb-6 text-forged-text">
              {service.label}
            </h3>
            <p className="font-[var(--font-forged-body)] text-forged-muted leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
