"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";
import CountingNumber from "./CountingNumber";

const stats = [
  {
    target: content.stats.yearsActive,
    suffix: "YRS",
    label: "Years Active",
    color: "copper" as const,
  },
  {
    target: content.stats.monthlyCapacity,
    suffix: "T/MO",
    label: "Monthly Capacity",
    color: "copper" as const,
  },
  {
    target: content.stats.marketsServed,
    suffix: "",
    label: "Markets Served",
    color: "teal" as const,
  },
];

export default function AboutUs() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section ref={ref} className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section label */}
      <p className="font-[var(--font-vein-mono)] text-xs uppercase tracking-widest text-vein-copper mb-12">
        {content.about.title}
      </p>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Left column: paragraphs */}
        <div className="lg:col-span-7 space-y-6">
          {content.about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`font-[var(--font-vein-body)] text-base leading-relaxed text-vein-text/80 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Right column: stats */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`border-l border-vein-copper/30 pl-6 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 3) * 150}ms` }}
            >
              <CountingNumber
                target={stat.target}
                suffix={stat.suffix}
                color={stat.color}
                trigger={isInView}
              />
              <p className="font-[var(--font-vein-body)] text-xs uppercase tracking-widest text-vein-text/50 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
