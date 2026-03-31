"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function Advisory() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section className="bg-terra-cream py-24 lg:py-32">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <div
          className={`border-l-4 border-terra-copper pl-8 lg:pl-12 terra-reveal ${
            isInView ? "in-view" : ""
          }`}
        >
          <p className="font-[family-name:var(--font-terra-body)] uppercase tracking-[0.25em] text-xs text-terra-slate mb-6">
            {content.advisory.title}
          </p>

          <p className="font-[family-name:var(--font-terra-display)] italic text-2xl lg:text-3xl leading-snug text-terra-espresso mb-8">
            {content.advisory.description}
          </p>

          <ul className="space-y-4">
            {content.advisory.services.map((service, i) => (
              <li
                key={i}
                className={`font-[family-name:var(--font-terra-body)] text-terra-espresso/80 text-lg flex items-start gap-3 terra-reveal terra-stagger-${
                  i + 1
                } ${isInView ? "in-view" : ""}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-terra-copper mt-2.5 shrink-0" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
