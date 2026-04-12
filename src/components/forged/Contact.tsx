"use client";

import { useContent } from "@/lib/language-context";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const content = useContent();
  const [ref, isInView] = useInView(0.1);

  return (
    <section
      id="contact"
      ref={ref}
      className="px-8 md:px-16 lg:px-24 py-32 md:py-40 text-center"
    >
      <div
        className={`max-w-2xl mx-auto forged-reveal ${isInView ? "in-view" : ""}`}
      >
        <p className="font-[var(--font-forged-mono)] uppercase tracking-[0.2em] text-sm md:text-base font-medium text-forged-copper mb-8">
          {content.contact.title}
        </p>

        <h2 className="font-[var(--font-forged-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
          {content.contact.cta}
        </h2>

        <p className="font-[var(--font-forged-body)] text-forged-muted text-lg mb-10">
          {content.contact.description}
        </p>

        {/* Email */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <a
            href={`mailto:${content.contact.email}`}
            className="font-[var(--font-forged-mono)] text-forged-copper hover:underline underline-offset-4 transition-colors duration-300"
          >
            {content.contact.email}
          </a>
        </div>

        {/* Address */}
        <p className="font-[var(--font-forged-body)] text-forged-muted text-sm mb-12">
          {content.contact.address}
        </p>

        {/* CTA button */}
        <a
          href={`mailto:${content.contact.email}`}
          className="inline-flex items-center justify-center px-10 py-4 bg-forged-copper text-forged-bg font-[var(--font-forged-body)] font-medium text-sm uppercase tracking-[0.15em] hover:bg-forged-copper/90 transition-colors duration-300"
        >
          {content.hero.cta.primary}
        </a>
      </div>
    </section>
  );
}
