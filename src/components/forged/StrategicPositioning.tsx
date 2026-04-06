"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function StrategicPositioning() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="py-32 md:py-40 px-8 md:px-16 lg:px-24">
      <div
        className={`max-w-4xl mx-auto text-center forged-reveal ${
          isInView ? "in-view" : ""
        }`}
      >
        {/* Copper rule */}
        <div className="h-[1px] w-24 bg-forged-copper mx-auto mb-12" />

        <h2 className="font-[var(--font-forged-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8 text-forged-text">
          {content.strategicPositioning.headline}
        </h2>

        <p className="font-[var(--font-forged-body)] text-lg md:text-xl text-forged-muted leading-relaxed max-w-2xl mx-auto">
          {content.strategicPositioning.text}
        </p>
      </div>
    </section>
  );
}
