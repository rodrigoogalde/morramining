"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 2000, trigger = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      // Use rAF to avoid synchronous setState in effect
      rafRef.current = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(rafRef.current);
    }

    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, trigger]);

  return value;
}
