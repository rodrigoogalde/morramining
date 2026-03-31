"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section ref={ref} id="contact" className="py-24 max-w-7xl mx-auto px-6">
      {/* Headline */}
      <h2
        className={`font-[var(--font-vein-display)] text-[clamp(2rem,7vw,5rem)] leading-none mb-8 max-w-4xl transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        LET&apos;S BUILD YOUR SUPPLY CHAIN
      </h2>

      <p
        className={`font-[var(--font-vein-body)] text-sm text-vein-text/60 mb-12 transition-all duration-700 delay-100 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {content.contact.description}
      </p>

      {/* Emails */}
      <div
        className={`space-y-3 mb-12 transition-all duration-700 delay-200 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <a
          href={`mailto:${content.contact.emails.primary}`}
          className="block font-[var(--font-vein-mono)] text-lg md:text-xl text-vein-text/80 hover:text-vein-copper transition-colors"
        >
          {content.contact.emails.primary}
        </a>
        <a
          href={`mailto:${content.contact.emails.secondary}`}
          className="block font-[var(--font-vein-mono)] text-lg md:text-xl text-vein-text/80 hover:text-vein-copper transition-colors blink-cursor"
        >
          {content.contact.emails.secondary}
        </a>
      </div>

      {/* CTA */}
      <a
        href={`mailto:${content.contact.emails.primary}`}
        className={`inline-block font-[var(--font-vein-body)] text-sm font-semibold bg-vein-copper text-vein-bg px-10 py-4 rounded-full hover:shadow-[0_0_40px_rgba(232,145,58,0.35)] transition-all duration-300 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: "300ms", transitionDuration: "700ms" }}
      >
        {content.contact.cta}
      </a>
    </section>
  );
}
