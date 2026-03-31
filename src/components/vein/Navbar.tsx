"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/content";

const navLinks = [
  { label: "Operations", href: "#operations" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-vein-bg/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-[var(--font-vein-display)] text-2xl tracking-wider text-vein-text"
        >
          {content.company.shortName}
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative font-[var(--font-vein-body)] uppercase text-xs tracking-widest text-vein-text/70 hover:text-vein-text transition-colors"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-vein-copper scale-0 group-hover:scale-100 transition-transform duration-200" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
