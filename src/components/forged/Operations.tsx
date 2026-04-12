"use client";

import Image from "next/image";
import { useContent } from "@/lib/language-context";
import { useInView } from "@/hooks/useInView";

const operationImages = [
  { image: "/img/la-isla-ore-pile.png", imageAlt: "Ore deposit at La Isla copper project" },
  { image: "/img/san-juan-truck-site.png", imageAlt: "San Juan gold operation site in the Argentine desert" },
];

export default function Operations() {
  const content = useContent();
  const [ref, isInView] = useInView(0.1);

  const operations = [
    { ...content.operations.chile, ...operationImages[0] },
    { ...content.operations.argentina, ...operationImages[1] },
  ];

  return (
    <section id="operations" ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      {/* Copper rule */}
      <div className="h-[1px] bg-forged-copper mb-16" />

      <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.2em] text-sm md:text-base font-medium text-forged-copper mb-12">
        {content.operations.title}
      </p>

      {/* Map */}
      <div className={`relative w-full max-w-4xl mx-auto mb-16 forged-reveal ${isInView ? "in-view" : ""}`}>
        <Image
          src="/img/map-operations.png"
          alt="Map showing Morra Mining operations in Chile and Argentina"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {operations.map((op, i) => (
          <div
            key={op.name}
            className={`forged-reveal ${isInView ? "in-view" : ""} forged-reveal-stagger-${i + 1}`}
          >
            {/* Project image with duotone treatment */}
            <div className="relative h-64 rounded-lg mb-8 overflow-hidden bg-forged-bg2">
              <Image
                src={op.image}
                alt={op.imageAlt}
                fill
                className="object-cover forged-duotone"
              />
              {/* Country label on image */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="font-[var(--font-forged-mono)] text-xs uppercase tracking-[0.2em] text-forged-text/80 bg-forged-bg/60 backdrop-blur-sm px-3 py-1">
                  {op.flag} {op.country}
                </span>
              </div>
            </div>

            {/* Project info */}
            <h3 className="font-[var(--font-forged-display)] text-3xl md:text-4xl mb-3 text-forged-text">
              {op.name}
            </h3>

            <p className="font-[var(--font-forged-mono)] text-sm text-forged-muted mb-2">
              {op.region}
            </p>

            {/* Status badge */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`w-2 h-2 rounded-full ${
                  op.status === "Operating" ? "bg-green-500 animate-pulse-glow" : "bg-forged-copper"
                }`}
              />
              <span className="font-[var(--font-forged-mono)] text-xs uppercase tracking-[0.15em] text-forged-muted">
                {op.status}
              </span>
            </div>

            <div className="space-y-2 mb-6">
              {op.details.map((detail) => (
                <p
                  key={detail}
                  className="font-[var(--font-forged-body)] text-forged-text leading-relaxed"
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
