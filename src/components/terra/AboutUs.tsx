"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function AboutUs() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section id="about" className="bg-terra-paper py-24 lg:py-32">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12">
        <p
          className={`font-[family-name:var(--font-terra-body)] uppercase tracking-[0.25em] text-xs text-terra-slate mb-4 terra-reveal ${
            isInView ? "in-view" : ""
          }`}
        >
          {content.about.title}
        </p>

        <div className="w-12 h-px bg-terra-copper/40 mb-12" />

        <div className="space-y-6">
          {content.about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`font-[family-name:var(--font-terra-body)] text-lg leading-relaxed text-terra-espresso/85 terra-reveal terra-stagger-${
                i + 1
              } ${isInView ? "in-view" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote
          className={`pull-quote mt-16 terra-reveal terra-stagger-4 ${
            isInView ? "in-view" : ""
          }`}
        >
          <p className="font-[family-name:var(--font-terra-display)] italic text-2xl leading-snug text-terra-espresso">
            {content.valueProposition.tagline}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
