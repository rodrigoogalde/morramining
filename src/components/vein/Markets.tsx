"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";
import StatusIndicator from "./StatusIndicator";

export default function Markets() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section ref={ref} id="markets" className="py-24 max-w-7xl mx-auto px-6">
      {/* Section label */}
      <p className="font-[var(--font-vein-mono)] text-xs uppercase tracking-widest text-vein-teal mb-12">
        {content.markets.title}
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {content.markets.regions.map((region, i) => (
          <div
            key={region.name}
            className={`transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <StatusIndicator color="teal" />
            <h3 className="font-[var(--font-vein-display)] text-3xl tracking-wide mt-4 mb-3">
              {region.name.toUpperCase()}
            </h3>
            <p className="font-[var(--font-vein-body)] text-sm text-vein-text/60 leading-relaxed">
              {region.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
