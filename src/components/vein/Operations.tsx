"use client";

import { content } from "@/lib/content";
import { useInView } from "@/hooks/useInView";
import StatusIndicator from "./StatusIndicator";
import CountingNumber from "./CountingNumber";

export default function Operations() {
  const [ref, isInView] = useInView(0.15);

  const ops = [
    { data: content.operations.chile, accent: "copper" as const },
    { data: content.operations.argentina, accent: "teal" as const },
  ];

  return (
    <section ref={ref} id="operations" className="py-24 max-w-7xl mx-auto px-6">
      {/* Section label */}
      <p className="font-[var(--font-vein-mono)] text-xs uppercase tracking-widest text-vein-copper mb-12">
        {content.operations.title}
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        {ops.map(({ data, accent }, i) => (
          <div
            key={data.name}
            className={`bg-vein-bg2 p-8 transition-all duration-700 ${
              accent === "copper"
                ? "border border-vein-copper/30 hover:glow-copper"
                : "border border-vein-teal/30 hover:glow-teal"
            } ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            {/* Status */}
            <StatusIndicator
              color={accent}
              label={`${data.country} // ${data.region}`}
            />

            {/* Project name */}
            <h3 className="font-[var(--font-vein-display)] text-3xl md:text-4xl tracking-wide mt-6 mb-4">
              {data.name.toUpperCase()}
            </h3>

            {/* Details */}
            <div className="space-y-2 mb-6">
              {data.details.map((detail) => (
                <p
                  key={detail}
                  className="font-[var(--font-vein-body)] text-sm text-vein-text/60"
                >
                  {detail}
                </p>
              ))}
            </div>

            {/* Specs */}
            <div className="border-t border-vein-text/10 pt-6 flex items-end justify-between">
              <div>
                <p className="font-[var(--font-vein-mono)] text-xs text-vein-text/40 uppercase tracking-widest mb-1">
                  Monthly Output
                </p>
                <CountingNumber
                  target={data.outputNumber}
                  suffix="T/MO"
                  color={accent}
                  trigger={isInView}
                />
              </div>
              <div className="text-right">
                <p className="font-[var(--font-vein-mono)] text-xs text-vein-text/40 uppercase tracking-widest mb-1">
                  Mineral
                </p>
                <p
                  className={`font-[var(--font-vein-mono)] text-sm font-bold ${
                    accent === "copper"
                      ? "text-vein-copper"
                      : "text-vein-teal"
                  }`}
                >
                  {data.mineral}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
