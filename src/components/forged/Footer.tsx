"use client";

import Image from "next/image";
import { useContent } from "@/lib/language-context";

export default function Footer() {
  const content = useContent();

  return (
    <footer className="px-8 md:px-16 lg:px-24 pb-12 pt-8">
      {/* Copper rule */}
      <div className="h-[1px] bg-forged-copper/30 mb-8" />

      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-4">
        <Image
          src="/logo.png"
          alt="Morra Mining"
          width={468}
          height={317}
          className="h-7 w-auto footer-logo"
        />
        <p className="font-[var(--font-forged-body)] text-forged-muted text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} {content.company.name}.{" "}
          {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
