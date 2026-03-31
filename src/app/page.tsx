import { DesignCard } from "@/components/selector/DesignCard";

const designs = [
  {
    name: "FORGED",
    subtitle: "Dark Industrial Editorial",
    description:
      "Dark charcoal canvas with film grain texture, copper accent lines that animate on scroll. Instrument Serif meets industrial authority.",
    href: "/forged",
    colors: { bg: "#1A1A1E", accent: "#C17F4E", text: "#F0ECE4" },
    fontPreview: "'Instrument Serif', serif",
    bestFor: 'Best for: "We are established & serious"',
  },
  {
    name: "TERRA",
    subtitle: "Warm Light Editorial",
    description:
      "Cream backgrounds with topographic contour patterns, elegant Cormorant Garamond serif. Premium consulting document aesthetic.",
    href: "/terra",
    colors: { bg: "#F5F0E8", accent: "#B07A3E", text: "#2C2419" },
    fontPreview: "'Cormorant Garamond', serif",
    bestFor: 'Best for: "We are trustworthy partners"',
  },
  {
    name: "VEIN",
    subtitle: "Kinetic Data-Driven Brutalist",
    description:
      "Deep black with scrolling data tickers, animated SVG vein networks, and dual copper/teal accents. Commodity trading terminal meets brutalism.",
    href: "/vein",
    colors: { bg: "#0D0D0F", accent: "#E8913A", text: "#E8E8EC" },
    fontPreview: "'Bebas Neue', sans-serif",
    bestFor: 'Best for: "We are technically capable"',
  },
];

export default function SelectorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-selector-bg px-6 py-16 text-selector-text">
      <h1 className="mb-2 text-center text-3xl font-bold tracking-tight md:text-4xl">
        Morra Mining
      </h1>
      <p className="mb-12 text-center text-sm text-selector-muted">
        Select a design direction to preview
      </p>

      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {designs.map((d) => (
          <DesignCard key={d.name} {...d} />
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-selector-muted/60">
        Each design uses the same content — only the visual treatment differs.
      </p>
    </main>
  );
}
