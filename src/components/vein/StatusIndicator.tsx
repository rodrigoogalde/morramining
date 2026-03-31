interface StatusIndicatorProps {
  color?: "copper" | "teal";
  label?: string;
}

export default function StatusIndicator({
  color = "copper",
  label,
}: StatusIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-2 h-2 rounded-full animate-pulse-glow ${
          color === "copper" ? "bg-vein-copper" : "bg-vein-teal"
        }`}
      />
      {label && (
        <span className="font-[var(--font-vein-mono)] text-xs text-vein-text/60 uppercase tracking-widest">
          {label}
        </span>
      )}
    </div>
  );
}
