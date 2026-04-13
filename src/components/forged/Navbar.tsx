"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useContent, useLanguage } from "@/lib/language-context";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const content = useContent();
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { label: content.nav.about, href: "#about" },
    { label: content.nav.operations, href: "#operations" },
    { label: content.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "forged-navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-16 lg:px-24 py-5">
        {/* Logo */}
        <a href="#" className="group relative block">
          <Image
            src="/logo.png"
            alt="Morra Mining"
            width={468}
            height={317}
            className="h-16 md:h-20 w-auto navbar-logo"
            priority
          />
        </a>

        {/* Links + Language Toggle */}
        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="forged-underline font-[var(--font-forged-body)] text-sm text-forged-muted hover:text-forged-text transition-colors duration-300 uppercase tracking-[0.15em]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-forged-muted hover:text-forged-copper transition-colors duration-300"
            aria-label="Toggle language"
          >
            <Globe size={18} strokeWidth={1.5} />
            <span className="font-[var(--font-forged-mono)] text-xs uppercase tracking-[0.15em]">
              {language === "en" ? "EN" : "中文"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
