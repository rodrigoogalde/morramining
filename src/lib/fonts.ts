import {
  Instrument_Serif,
  DM_Sans,
  DM_Mono,
  Cormorant_Garamond,
  Libre_Franklin,
  Bebas_Neue,
  Syne,
  JetBrains_Mono,
} from "next/font/google";

// FORGED fonts
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forged-display",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-forged-body",
});

export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forged-mono",
});

// TERRA fonts
export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-terra-display",
});

export const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-terra-body",
});

// VEIN fonts
export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vein-display",
});

export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vein-body",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-vein-mono",
});
