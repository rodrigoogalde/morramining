"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function BusinessModel() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6">
      {/* Section label */}
      <p className="font-[var(--font-vein-mono)] text-xs uppercase tracking-widest text-vein-copper mb-12">
        {content.businessModel.title}
      </p>

      <div className="grid md:grid-cols-4 gap-0">
        {content.businessModel.items.map((item, i) => (
          <div
            key={item.label}
            className={`relative flex flex-col transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Connector line */}
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 rounded-full border-2 border-vein-copper bg-vein-bg shrink-0" />
              {i < content.businessModel.items.length - 1 && (
                <div className="flex-1 border-t-2 border-dashed border-vein-copper/40" />
              )}
            </div>

            {/* Content */}
            <div className="pr-8">
              <h3 className="font-[var(--font-vein-display)] text-2xl tracking-wide mb-2">
                {item.label.toUpperCase()}
              </h3>
              <p className="font-[var(--font-vein-body)] text-sm text-vein-text/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
