"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

const stats = [
  { value: content.stats.yearsActive, label: "Years Active" },
  { value: content.stats.monthlyCapacity, label: "Tons / Month" },
  { value: content.stats.marketsServed, label: "Markets Served" },
  { value: content.stats.activeProjects, label: "Active Projects" },
];

export default function AboutUs() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="about" ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Copper rule */}
      <div className="h-[1px] bg-forged-copper mb-16" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Text content */}
        <div className="lg:col-span-7">
          <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.3em] text-xs text-forged-copper mb-8">
            {content.about.title}
          </p>
          <div className="space-y-6">
            {content.about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`font-[var(--font-forged-body)] text-lg leading-relaxed text-forged-text/90 forged-reveal ${
                  isInView ? "in-view" : ""
                } forged-reveal-stagger-${i + 1}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right: Stats */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-8 lg:gap-12 lg:pt-12">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`forged-reveal ${isInView ? "in-view" : ""} forged-reveal-stagger-${i + 2}`}
              >
                <span className="font-[var(--font-forged-display)] text-5xl md:text-6xl text-forged-copper block mb-2">
                  {stat.value}
                </span>
                <span className="font-[var(--font-forged-mono)] text-sm text-forged-muted uppercase tracking-[0.15em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
