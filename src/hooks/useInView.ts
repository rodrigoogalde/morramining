"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useInView(threshold = 0.15, triggerOnce = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (isInView && triggerOnce) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, isInView]);

  return [ref, isInView] as const;
}
