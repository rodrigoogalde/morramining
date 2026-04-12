"use client";

import Image from "next/image";
import { useContent } from "@/lib/language-context";
import { useInView } from "@/hooks/useInView";

export default function StrategicPositioning() {
  const content = useContent();
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="relative py-32 md:py-40 px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Background image with duotone treatment */}
      <div className="absolute inset-0">
        <Image
          src="/img/san-juan-sunset.jpeg"
          alt="Desert landscape at sunset"
          fill
          className="object-cover forged-duotone opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forged-bg via-forged-bg/80 to-forged-bg" />
      </div>

      <div
        className={`relative z-10 max-w-4xl mx-auto text-center forged-reveal ${
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
