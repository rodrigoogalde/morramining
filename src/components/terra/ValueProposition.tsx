"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function ValueProposition() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section className="bg-terra-paper py-24 lg:py-32">
      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <blockquote
          className={`terra-reveal ${isInView ? "in-view" : ""}`}
        >
          <p className="font-[family-name:var(--font-terra-display)] italic text-[clamp(1.5rem,3.5vw,2.75rem)] leading-snug text-terra-espresso max-w-4xl mx-auto">
            &ldquo;{content.valueProposition.statement}&rdquo;
          </p>
        </blockquote>

        <div className="w-16 h-px bg-terra-copper/40 mx-auto mt-12 mb-12" />

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl mx-auto text-left">
          {content.valueProposition.items.map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-3 terra-reveal terra-stagger-${
                i + 1
              } ${isInView ? "in-view" : ""}`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-terra-copper shrink-0" />
              <span className="font-[family-name:var(--font-terra-body)] font-semibold text-terra-espresso">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
