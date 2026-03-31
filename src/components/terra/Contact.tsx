"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section id="contact" className="bg-terra-cream py-24 lg:py-32">
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <h2
          className={`font-[family-name:var(--font-terra-display)] font-bold text-[clamp(2rem,4vw,3.5rem)] leading-tight text-terra-espresso mb-6 terra-reveal ${
            isInView ? "in-view" : ""
          }`}
        >
          {content.contact.cta}
        </h2>

        <p
          className={`font-[family-name:var(--font-terra-body)] text-terra-slate text-lg mb-10 terra-reveal terra-stagger-1 ${
            isInView ? "in-view" : ""
          }`}
        >
          {content.contact.description}
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 terra-reveal terra-stagger-2 ${
            isInView ? "in-view" : ""
          }`}
        >
          <a
            href={`mailto:${content.contact.emails.primary}`}
            className="font-[family-name:var(--font-terra-body)] text-terra-copper hover:text-terra-copper/80 transition-colors copper-underline"
          >
            {content.contact.emails.primary}
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-terra-copper/40" />
          <a
            href={`mailto:${content.contact.emails.secondary}`}
            className="font-[family-name:var(--font-terra-body)] text-terra-copper hover:text-terra-copper/80 transition-colors copper-underline"
          >
            {content.contact.emails.secondary}
          </a>
        </div>

        <div
          className={`terra-reveal terra-stagger-3 ${
            isInView ? "in-view" : ""
          }`}
        >
          <a
            href={`mailto:${content.contact.emails.primary}`}
            className="inline-flex items-center rounded-full bg-terra-copper text-terra-paper px-10 py-3.5 font-[family-name:var(--font-terra-body)] font-medium hover:bg-terra-copper/90 transition-colors"
          >
            {content.hero.cta.primary}
          </a>
        </div>
      </div>
    </section>
  );
}
