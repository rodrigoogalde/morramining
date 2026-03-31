import Link from "next/link";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 pb-12 pt-8">
      {/* Copper rule */}
      <div className="h-[1px] bg-forged-copper/30 mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[var(--font-forged-body)] text-forged-muted text-sm">
          &copy; {new Date().getFullYear()} {content.company.name}. All rights
          reserved.
        </p>

        <Link
          href="/"
          className="font-[var(--font-forged-mono)] text-xs text-forged-muted hover:text-forged-copper transition-colors duration-300 uppercase tracking-[0.15em]"
        >
          Back to designs
        </Link>
      </div>
    </footer>
  );
}
