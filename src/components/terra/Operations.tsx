"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";

const operations = [content.operations.chile, content.operations.argentina];

export default function Operations() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="operations" className="bg-terra-paper py-24 lg:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <p
          className={`font-[family-name:var(--font-terra-body)] uppercase tracking-[0.25em] text-xs text-terra-slate mb-4 terra-reveal ${
            isInView ? "in-view" : ""
          }`}
        >
          {content.operations.title}
        </p>

        <div className="w-12 h-px bg-terra-copper/40 mb-16" />

        <div className="grid lg:grid-cols-2 gap-8">
          {operations.map((op, i) => (
            <article
              key={op.name}
              className={`bg-terra-paper border border-terra-copper/10 p-8 rounded-lg shadow-sm terra-reveal terra-stagger-${
                i + 1
              } ${isInView ? "in-view" : ""}`}
            >
              {/* Placeholder image */}
              <div className="offset-frame mb-8">
                <div className="h-48 bg-terra-copper/8 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-[family-name:var(--font-terra-display)] text-3xl font-bold text-terra-copper/30">
                      {op.mineral}
                    </p>
                    <p className="font-[family-name:var(--font-terra-body)] text-xs text-terra-slate/50 uppercase tracking-wider mt-1">
                      {op.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-[family-name:var(--font-terra-display)] text-2xl font-bold text-terra-espresso">
                    {op.name}
                  </h3>
                  <p className="font-[family-name:var(--font-terra-body)] italic text-terra-slate mt-1">
                    {op.region}
                  </p>
                </div>

                <ul className="space-y-2 pt-2">
                  {op.details.map((detail, j) => (
                    <li
                      key={j}
                      className="font-[family-name:var(--font-terra-body)] text-sm text-terra-espresso/75 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-terra-copper/60 mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 pt-4 border-t border-terra-copper/10">
                  <span className="font-[family-name:var(--font-terra-body)] text-xs uppercase tracking-wider text-terra-slate">
                    Capacity
                  </span>
                  <span className="font-[family-name:var(--font-terra-display)] text-lg font-semibold text-terra-copper">
                    {op.output}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
