import Link from "next/link";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="py-12 px-6 max-w-7xl mx-auto">
      {/* Copper rule */}
      <div className="w-full h-px bg-vein-copper/30 mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[var(--font-vein-mono)] text-xs text-vein-text/40">
          &copy; {new Date().getFullYear()} {content.company.name}. All rights
          reserved.
        </p>

        <Link
          href="/"
          className="font-[var(--font-vein-mono)] text-xs text-vein-text/40 hover:text-vein-copper transition-colors"
        >
          Back to designs
        </Link>
      </div>
    </footer>
  );
}
