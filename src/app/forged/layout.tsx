import type { Metadata } from "next";
import { instrumentSerif, dmSans, dmMono } from "@/lib/fonts";
import "./forged.css";

export const metadata: Metadata = {
  title: "Morra Mining — Forged",
  description:
    "Reliable copper and gold supply from Chile and Argentina. Production. Trading. Project Development.",
};

export default function ForgedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable} bg-forged-bg text-forged-text min-h-screen`}
    >
      {children}
    </div>
  );
}
