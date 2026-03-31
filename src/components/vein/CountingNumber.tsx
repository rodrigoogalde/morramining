"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface CountingNumberProps {
  target: number;
  suffix?: string;
  color?: "copper" | "teal";
  trigger: boolean;
}

export default function CountingNumber({
  target,
  suffix,
  color = "copper",
  trigger,
}: CountingNumberProps) {
  const value = useCountUp(target, 2000, trigger);

  return (
    <span className="inline-flex items-baseline gap-1">
      <span
        className={`font-[var(--font-vein-mono)] text-4xl font-bold ${
          color === "copper"
            ? "text-vein-copper text-glow-copper"
            : "text-vein-teal text-glow-teal"
        }`}
      >
        {value}
      </span>
      {suffix && (
        <span
          className={`font-[var(--font-vein-mono)] text-sm ${
            color === "copper" ? "text-vein-copper/70" : "text-vein-teal/70"
          }`}
        >
          {suffix}
        </span>
      )}
    </span>
  );
}
