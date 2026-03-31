import Link from "next/link";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-terra-cream border-t border-terra-copper/15 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-terra-body)] text-sm text-terra-slate">
          &copy; {new Date().getFullYear()} {content.company.name}. All rights
          reserved.
        </p>

        <Link
          href="/"
          className="font-[family-name:var(--font-terra-body)] text-sm text-terra-slate hover:text-terra-copper transition-colors copper-underline"
        >
          Back to designs
        </Link>
      </div>
    </footer>
  );
}
