import type { Metadata } from "next";
import { cormorantGaramond, libreFranklin } from "@/lib/fonts";
import "./terra.css";

export const metadata: Metadata = {
  title: "Morra Mining — Terra",
  description:
    "Reliable copper and gold supply from Chile and Argentina. Production. Trading. Project Development.",
};

export default function TerraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${cormorantGaramond.variable} ${libreFranklin.variable} bg-terra-cream text-terra-espresso min-h-screen`}
    >
      {children}
    </div>
  );
}
