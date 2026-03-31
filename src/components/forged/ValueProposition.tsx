"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function ValueProposition() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="py-32 md:py-40 px-8 md:px-16 lg:px-24">
      <div
        className={`max-w-4xl mx-auto text-center forged-reveal ${
          isInView ? "in-view" : ""
        }`}
      >
        {/* Tagline */}
        <blockquote className="font-[var(--font-forged-display)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-12 text-forged-text">
          {content.valueProposition.tagline}
        </blockquote>

        {/* Items row with copper separators */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          {content.valueProposition.items.map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="font-[var(--font-forged-body)] text-forged-copper select-none">
                  &mdash;
                </span>
              )}
              <span className="font-[var(--font-forged-mono)] text-sm text-forged-muted uppercase tracking-[0.15em]">
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
