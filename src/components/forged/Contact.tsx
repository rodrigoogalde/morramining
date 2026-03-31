"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
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
        <h2 className="font-[var(--font-forged-display)] text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
          {content.contact.cta}
        </h2>

        <p className="font-[var(--font-forged-body)] text-forged-muted text-lg mb-10">
          {content.contact.description}
        </p>

        {/* Email links */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <a
            href={`mailto:${content.contact.emails.primary}`}
            className="font-[var(--font-forged-mono)] text-forged-copper hover:underline underline-offset-4 transition-colors duration-300"
          >
            {content.contact.emails.primary}
          </a>
          <a
            href={`mailto:${content.contact.emails.secondary}`}
            className="font-[var(--font-forged-mono)] text-forged-copper hover:underline underline-offset-4 transition-colors duration-300"
          >
            {content.contact.emails.secondary}
          </a>
        </div>

        {/* CTA button */}
        <a
          href={`mailto:${content.contact.emails.primary}`}
          className="inline-flex items-center justify-center px-10 py-4 bg-forged-copper text-forged-bg font-[var(--font-forged-body)] font-medium text-sm uppercase tracking-[0.15em] hover:bg-forged-copper/90 transition-colors duration-300"
        >
          {content.hero.cta.primary}
        </a>
      </div>
    </section>
  );
}
