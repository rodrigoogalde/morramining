"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

const operations = [content.operations.chile, content.operations.argentina];

export default function Operations() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="operations" ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Copper rule */}
      <div className="h-[1px] bg-forged-copper mb-16" />

      <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.3em] text-xs text-forged-copper mb-12">
        {content.operations.title}
      </p>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {operations.map((op, i) => (
          <div
            key={op.name}
            className={`forged-reveal ${isInView ? "in-view" : ""} forged-reveal-stagger-${i + 1}`}
          >
            {/* Placeholder image area with gradient + grain */}
            <div className="relative h-64 bg-gradient-to-br from-forged-bg2 to-forged-bg rounded-lg mb-8 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06] bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22200%22%20height=%22200%22%3E%3Cfilter%20id=%22g%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.7%22%20numOctaves=%222%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23g)%22/%3E%3C/svg%3E')]" />
              {/* Country label on image */}
              <div className="absolute bottom-4 left-4">
                <span className="font-[var(--font-forged-mono)] text-xs uppercase tracking-[0.2em] text-forged-muted/70">
                  {op.country}
                </span>
              </div>
            </div>

            {/* Project info */}
            <h3 className="font-[var(--font-forged-display)] text-3xl md:text-4xl mb-3 text-forged-text">
              {op.name}
            </h3>

            <p className="font-[var(--font-forged-mono)] text-sm text-forged-muted mb-4">
              {op.region}
            </p>

            <div className="space-y-2 mb-6">
              {op.details.map((detail) => (
                <p
                  key={detail}
                  className="font-[var(--font-forged-body)] text-forged-muted/80 leading-relaxed"
                >
                  {detail}
                </p>
              ))}
            </div>

            {/* Output spec */}
            <div className="flex items-baseline gap-3 pt-4 border-t border-forged-copper/20">
              <span className="font-[var(--font-forged-display)] text-2xl text-forged-copper">
                {op.output}
              </span>
              <span className="font-[var(--font-forged-mono)] text-xs text-forged-muted uppercase tracking-[0.15em]">
                {op.mineral} concentrate
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
