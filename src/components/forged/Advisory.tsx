"use client";

import { useContent } from "@/lib/language-context";
import { useInView } from "@/hooks/useInView";

export default function Advisory() {
  const content = useContent();
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="px-8 md:px-16 lg:px-24 py-16">
      <div
        className={`mx-0 md:mx-8 lg:mx-12 bg-forged-bg2 border border-forged-copper/20 p-8 md:p-12 forged-reveal ${
          isInView ? "in-view" : ""
        }`}
      >
        <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.2em] text-sm md:text-base font-medium text-forged-copper mb-8">
          {content.advisory.title}
        </p>

        <p className="font-[var(--font-forged-body)] text-lg text-forged-text/90 leading-relaxed mb-8 max-w-2xl">
          {content.advisory.description}
        </p>

        <ul className="space-y-4 mb-10">
          {content.advisory.services.map((service) => (
            <li
              key={service}
              className="font-[var(--font-forged-body)] text-forged-muted flex items-start gap-4"
            >
              <span className="w-6 h-[1px] bg-forged-copper mt-3 shrink-0" />
              {service}
            </li>
          ))}
        </ul>

        <p className="font-[var(--font-forged-display)] text-xl md:text-2xl text-forged-text leading-snug max-w-lg">
          {content.advisory.closing}
        </p>
      </div>
    </section>
  );
}
