"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function WhyWorkWithUs() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Copper rule */}
      <div className="h-[1px] bg-forged-copper mb-16" />

      <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.3em] text-xs text-forged-copper mb-12">
        {content.whyWorkWithUs.title}
      </p>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Intro text */}
        <div>
          {content.whyWorkWithUs.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`font-[var(--font-forged-body)] text-lg leading-relaxed text-forged-text/90 mb-6 forged-reveal ${
                isInView ? "in-view" : ""
              } forged-reveal-stagger-${i + 1}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right: Key points */}
        <div
          className={`forged-reveal ${isInView ? "in-view" : ""} forged-reveal-stagger-3`}
        >
          <ul className="space-y-5">
            {content.whyWorkWithUs.points.map((point) => (
              <li
                key={point}
                className="font-[var(--font-forged-body)] text-forged-text/80 leading-relaxed flex items-start gap-4"
              >
                <span className="w-6 h-[1px] bg-forged-copper mt-3 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
