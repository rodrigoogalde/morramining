"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function Advisory() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6">
      <div
        className={`bg-vein-bg2 border-l-4 border-vein-teal p-8 md:p-12 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Section label */}
        <p className="font-[var(--font-vein-mono)] text-xs uppercase tracking-widest text-vein-teal mb-6">
          {content.advisory.title}
        </p>

        <p className="font-[var(--font-vein-body)] text-base text-vein-text/80 mb-8 max-w-2xl leading-relaxed">
          {content.advisory.description}
        </p>

        <div className="space-y-4">
          {content.advisory.services.map((service, i) => (
            <div
              key={service}
              className={`flex items-start gap-3 transition-all duration-500 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-vein-teal mt-2 shrink-0" />
              <p className="font-[var(--font-vein-body)] text-sm text-vein-text/70">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
