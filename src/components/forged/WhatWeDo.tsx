"use client";

import Image from "next/image";
import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

const serviceImages = [
  { src: "/img/la-isla-flag-andes.png", alt: "Chilean flag at an Andes mountain peak" },
  { src: "/img/san-juan-flotation-plant.png", alt: "Mineral flotation processing plant" },
  { src: "/img/la-isla-aerial.png", alt: "Aerial view of La Isla mining project" },
];

export default function WhatWeDo() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section ref={ref} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
      <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.3em] text-xs text-forged-copper mb-12">
        {content.whatWeDo.title}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {content.whatWeDo.services.map((service, i) => (
          <div
            key={service.label}
            className={`bg-forged-bg2 forged-card-hover forged-reveal ${
              isInView ? "in-view" : ""
            } forged-reveal-stagger-${i + 1}`}
          >
            {/* Card image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={serviceImages[i].src}
                alt={serviceImages[i].alt}
                fill
                className="object-cover forged-duotone"
              />
            </div>

            <div className="p-8">
              <h3 className="font-[var(--font-forged-display)] text-2xl md:text-3xl mb-6 text-forged-text">
                {service.label}
              </h3>
              <p className="font-[var(--font-forged-body)] text-forged-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
