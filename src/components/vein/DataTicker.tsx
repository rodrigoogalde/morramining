"use client";

interface DataTickerProps {
  items: string[];
  separator?: string;
}

export default function DataTicker({
  items,
  separator = " | ",
}: DataTickerProps) {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-vein-text/10 py-3">
      <div className="flex animate-ticker w-max gap-0">
        {duplicated.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center shrink-0">
            <span
              className={`font-[var(--font-vein-mono)] text-xs uppercase tracking-widest ${
                i % 2 === 0 ? "text-vein-copper" : "text-vein-teal"
              }`}
            >
              {item}
            </span>
            <span className="text-vein-text/30 font-[var(--font-vein-mono)] text-xs mx-4">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
