import type { Metadata } from "next";
import { bebasNeue, syne, jetbrainsMono } from "@/lib/fonts";
import "./vein.css";

export const metadata: Metadata = {
  title: "Morra Mining — Vein",
};

export default function VeinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${bebasNeue.variable} ${syne.variable} ${jetbrainsMono.variable} bg-vein-bg text-vein-text min-h-screen`}
    >
      {children}
    </div>
  );
}
