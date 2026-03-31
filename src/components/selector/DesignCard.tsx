import Link from "next/link";

interface DesignCardProps {
  name: string;
  subtitle: string;
  description: string;
  href: string;
  colors: { bg: string; accent: string; text: string };
  fontPreview: string;
  bestFor: string;
}

export function DesignCard({
  name,
  subtitle,
  description,
  href,
  colors,
  fontPreview,
  bestFor,
}: DesignCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-white/10 bg-selector-card p-6 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl"
    >
      <div
        className="mb-5 flex h-40 items-center justify-center rounded"
        style={{ backgroundColor: colors.bg }}
      >
        <span
          className="text-4xl font-bold tracking-tight"
          style={{ color: colors.accent, fontFamily: fontPreview }}
        >
          {name}
        </span>
      </div>

      <p className="mb-1 text-xs uppercase tracking-widest text-selector-muted">
        {subtitle}
      </p>

      <p className="mb-4 text-sm leading-relaxed text-selector-text/80">
        {description}
      </p>

      <div className="mb-4 flex items-center gap-2">
        {[colors.bg, colors.accent, colors.text].map((color) => (
          <span
            key={color}
            className="h-4 w-4 rounded-full border border-white/10"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <p className="text-xs italic text-selector-muted">{bestFor}</p>

      <div className="mt-4 flex items-center gap-1 text-xs text-selector-muted transition-colors group-hover:text-white">
        Preview
        <span className="transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </div>
    </Link>
  );
}
