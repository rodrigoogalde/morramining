"use client";

import { useContent } from "@/lib/language-context";
import { useInView } from "@/hooks/useInView";

export default function BusinessModel() {
  const content = useContent();
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.2em] text-sm md:text-base font-medium text-forged-copper mb-6">
        {content.businessModel.title}
      </p>

      <p className="font-[var(--font-forged-body)] text-lg text-forged-muted leading-relaxed mb-12 max-w-2xl">
        {content.businessModel.statement}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {content.businessModel.items.map((item, i) => (
          <div
            key={item}
            className={`border border-forged-copper/30 p-6 hover:bg-forged-bg2 transition-colors duration-300 forged-reveal ${
              isInView ? "in-view" : ""
            } forged-reveal-stagger-${i + 1}`}
          >
            <span className="font-[var(--font-forged-mono)] text-xs uppercase tracking-[0.2em] text-forged-muted block mb-4">
              0{i + 1}
            </span>
            <h3 className="font-[var(--font-forged-display)] text-lg md:text-xl text-forged-text">
              {item}
            </h3>
          </div>
        ))}
      </div>

      <p
        className={`font-[var(--font-forged-body)] text-forged-text/80 leading-relaxed max-w-2xl forged-reveal ${
          isInView ? "in-view" : ""
        } forged-reveal-stagger-6`}
      >
        {content.businessModel.closing}
      </p>
    </section>
  );
}
