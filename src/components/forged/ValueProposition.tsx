"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function ValueProposition() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="py-32 md:py-40 px-8 md:px-16 lg:px-24">
      <div
        className={`max-w-4xl mx-auto forged-reveal ${
          isInView ? "in-view" : ""
        }`}
      >
        {/* Title */}
        <blockquote className="font-[var(--font-forged-display)] text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-8 text-forged-text text-center">
          {content.valueProposition.title}
        </blockquote>

        {/* Statement */}
        <p className="font-[var(--font-forged-body)] text-lg text-forged-muted leading-relaxed mb-10 text-center">
          {content.valueProposition.statement}
        </p>

        {/* Items as a vertical list */}
        <div className="space-y-4 mb-10 max-w-3xl mx-auto">
          {content.valueProposition.items.map((item, i) => (
            <div
              key={item}
              className={`flex items-start gap-4 forged-reveal ${
                isInView ? "in-view" : ""
              } forged-reveal-stagger-${i + 1}`}
            >
              <span className="w-2 h-2 bg-forged-copper rounded-full mt-2 shrink-0" />
              <span className="font-[var(--font-forged-body)] text-forged-muted leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Closing */}
        <p className="font-[var(--font-forged-body)] text-forged-text/80 leading-relaxed max-w-2xl mx-auto text-center">
          {content.valueProposition.closing}
        </p>
      </div>
    </section>
  );
}
