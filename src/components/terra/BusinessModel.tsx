"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function BusinessModel() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section className="bg-terra-cream py-24 lg:py-32 terra-contours">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <p
          className={`font-[family-name:var(--font-terra-body)] uppercase tracking-[0.25em] text-xs text-terra-slate mb-4 text-center terra-reveal ${
            isInView ? "in-view" : ""
          }`}
        >
          {content.businessModel.title}
        </p>

        <div className="w-12 h-px bg-terra-copper/40 mx-auto mb-16" />

        <div className="relative">
          {/* Horizontal copper connector line — desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-terra-copper/25 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {content.businessModel.items.map((item, i) => (
              <div
                key={item.label}
                className={`relative text-center terra-reveal terra-stagger-${
                  i + 1
                } ${isInView ? "in-view" : ""}`}
              >
                {/* Node circle */}
                <div className="relative z-10 w-10 h-10 mx-auto mb-6 rounded-full border-2 border-terra-copper/40 bg-terra-cream flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-terra-copper/60" />
                </div>

                <h3 className="font-[family-name:var(--font-terra-display)] text-xl font-semibold text-terra-espresso mb-2">
                  {item.label}
                </h3>
                <p className="font-[family-name:var(--font-terra-body)] text-sm text-terra-slate leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
