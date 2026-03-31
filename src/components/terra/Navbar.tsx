"use client";

import { useState, useEffect } from "react";
import { content } from "@/lib/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Operations", href: "#operations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-terra-cream/90 backdrop-blur-md shadow-sm"
          : "bg-terra-cream/70 backdrop-blur-sm"
      } border-b border-terra-copper/10`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-[family-name:var(--font-terra-display)] italic text-2xl text-terra-espresso tracking-tight"
        >
          {content.company.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="copper-underline font-[family-name:var(--font-terra-body)] font-medium text-sm text-terra-espresso/80 hover:text-terra-espresso transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          onClick={() => {
            const menu = document.getElementById("terra-mobile-menu");
            if (menu) menu.classList.toggle("hidden");
          }}
        >
          <span className="block w-5 h-px bg-terra-espresso" />
          <span className="block w-5 h-px bg-terra-espresso" />
          <span className="block w-3 h-px bg-terra-espresso" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="terra-mobile-menu"
        className="hidden md:hidden bg-terra-cream/95 backdrop-blur-md border-t border-terra-copper/10 px-6 pb-4"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block py-3 font-[family-name:var(--font-terra-body)] font-medium text-sm text-terra-espresso/80 hover:text-terra-copper transition-colors border-b border-terra-copper/5 last:border-b-0"
            onClick={() => {
              const menu = document.getElementById("terra-mobile-menu");
              if (menu) menu.classList.add("hidden");
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
