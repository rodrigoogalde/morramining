import type { Metadata } from "next";
import { instrumentSerif, dmSans, dmMono } from "@/lib/fonts";
import "./globals.css";
import "./forged.css";

export const metadata: Metadata = {
  title: "Morra Mining — Reliable Copper & Gold Supply",
  description:
    "Reliable copper and gold supply from Chile and Argentina. Production. Trading. Project Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${dmMono.variable} bg-forged-bg text-forged-text min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
