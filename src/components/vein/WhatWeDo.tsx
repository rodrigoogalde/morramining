"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function WhatWeDo() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="py-24 max-w-7xl mx-auto px-6">
      {/* Section label */}
      <p className="font-[var(--font-vein-mono)] text-xs uppercase tracking-widest text-vein-copper mb-12">
        {content.whatWeDo.title}
      </p>

      <div className="flex flex-col">
        {content.whatWeDo.services.map((service, i) => (
          <div
            key={service.label}
            className={`group grid md:grid-cols-12 gap-6 md:gap-12 py-8 border-b border-vein-text/10 hover:bg-vein-bg2 transition-all duration-300 px-4 -mx-4 cursor-default ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: `${i * 150}ms`,
              transitionDuration: "700ms",
            }}
          >
            {/* Title */}
            <div className="md:col-span-4 flex items-start">
              <h3 className="font-[var(--font-vein-display)] text-4xl tracking-wide text-vein-text group-hover:text-vein-copper transition-colors duration-300">
                {service.label.toUpperCase()}
              </h3>
            </div>

            {/* Items */}
            <div className="md:col-span-8 flex flex-col gap-2">
              {service.items.map((item) => (
                <p
                  key={item}
                  className="font-[var(--font-vein-body)] text-sm text-vein-text/70 leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
