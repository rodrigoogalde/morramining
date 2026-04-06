import {
  Instrument_Serif,
  DM_Sans,
  DM_Mono,
} from "next/font/google";

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
