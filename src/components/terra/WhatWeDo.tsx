"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function WhatWeDo() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="services" className="bg-terra-cream py-24 lg:py-32 terra-contours">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <p
          className={`font-[family-name:var(--font-terra-body)] uppercase tracking-[0.25em] text-xs text-terra-slate mb-4 terra-reveal ${
            isInView ? "in-view" : ""
          }`}
        >
          {content.whatWeDo.title}
        </p>

        <div className="w-12 h-px bg-terra-copper/40 mb-16" />

        <div className="grid md:grid-cols-3 gap-0">
          {content.whatWeDo.services.map((service, i) => (
            <div
              key={service.label}
              className={`relative py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 terra-reveal terra-stagger-${
                i + 1
              } ${isInView ? "in-view" : ""}`}
            >
              {/* Mobile horizontal divider */}
              {i > 0 && (
                <div className="md:hidden w-16 h-px bg-terra-copper/30 mb-8" />
              )}

              {/* Desktop vertical copper hairline */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-terra-copper/20" />
              )}

              <h3 className="font-[family-name:var(--font-terra-display)] text-2xl font-semibold text-terra-espresso mb-6">
                {service.label}
              </h3>

              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    className="font-[family-name:var(--font-terra-body)] text-terra-espresso/75 leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-terra-copper/60 mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
