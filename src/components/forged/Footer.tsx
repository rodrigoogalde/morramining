import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="px-8 md:px-16 lg:px-24 pb-12 pt-8">
      {/* Copper rule */}
      <div className="h-[1px] bg-forged-copper/30 mb-8" />

      <p className="font-[var(--font-forged-body)] text-forged-muted text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} {content.company.name}. All rights
        reserved.
      </p>
    </footer>
  );
}
