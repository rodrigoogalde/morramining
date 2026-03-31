"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";
import CountingNumber from "./CountingNumber";

const metrics = [
  { target: content.stats.yearsActive, suffix: "+", label: "Years Active", color: "copper" as const },
  { target: content.stats.monthlyCapacity, suffix: "T", label: "Monthly Capacity", color: "copper" as const },
  { target: content.stats.marketsServed, suffix: "", label: "Global Markets", color: "teal" as const },
  { target: content.stats.activeProjects, suffix: "", label: "Active Projects", color: "teal" as const },
];

export default function ValueProposition() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6">
      {/* Headline */}
      <h2
        className={`font-[var(--font-vein-display)] text-[clamp(2rem,8vw,6rem)] text-center leading-none mb-6 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        SUPPLY RELIABILITY
      </h2>

      <p
        className={`font-[var(--font-vein-body)] text-sm text-vein-text/50 text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-200 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {content.valueProposition.tagline}
      </p>

      {/* Metric cards */}
      <div className="grid md:grid-cols-4 gap-4">
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            className={`bg-vein-bg2 p-6 border border-vein-copper/20 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${(i + 2) * 100}ms` }}
          >
            <CountingNumber
              target={metric.target}
              suffix={metric.suffix}
              color={metric.color}
              trigger={isInView}
            />
            <p className="font-[var(--font-vein-body)] text-xs uppercase tracking-widest text-vein-text/50 mt-3">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
