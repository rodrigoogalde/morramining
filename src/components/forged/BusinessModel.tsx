"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function BusinessModel() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.3em] text-xs text-forged-copper mb-12">
        {content.businessModel.title}
      </p>

      <div className="grid md:grid-cols-4 gap-4">
        {content.businessModel.items.map((item, i) => (
          <div
            key={item.label}
            className={`border border-forged-copper/30 p-6 hover:bg-forged-bg2 transition-colors duration-300 forged-reveal ${
              isInView ? "in-view" : ""
            } forged-reveal-stagger-${i + 1}`}
          >
            <span className="font-[var(--font-forged-mono)] text-xs uppercase tracking-[0.2em] text-forged-muted block mb-4">
              0{i + 1}
            </span>
            <h3 className="font-[var(--font-forged-display)] text-xl md:text-2xl text-forged-text mb-3">
              {item.label}
            </h3>
            <p className="font-[var(--font-forged-body)] text-sm text-forged-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
