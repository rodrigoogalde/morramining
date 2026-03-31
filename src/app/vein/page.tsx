import Navbar from "@/components/vein/Navbar";
import Hero from "@/components/vein/Hero";
import AboutUs from "@/components/vein/AboutUs";
import WhatWeDo from "@/components/vein/WhatWeDo";
import DataTicker from "@/components/vein/DataTicker";
import Operations from "@/components/vein/Operations";
import ValueProposition from "@/components/vein/ValueProposition";
import BusinessModel from "@/components/vein/BusinessModel";
import Markets from "@/components/vein/Markets";
import Advisory from "@/components/vein/Advisory";
import Contact from "@/components/vein/Contact";
import Footer from "@/components/vein/Footer";

const sectionTickerItems = [
  "COPPER",
  "GOLD",
  "CONCENTRATE",
  "OFFTAKE",
  "SUPPLY CHAIN",
  "CHILE",
  "ARGENTINA",
  "SMELTERS",
  "REFINERIES",
  "TRADING",
];

export default function VeinPage() {
  return (
    <main className="vein-grid relative">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <DataTicker items={sectionTickerItems} />
      <Operations />
      <ValueProposition />
      <BusinessModel />
      <Markets />
      <Advisory />
      <DataTicker items={sectionTickerItems} />
      <Contact />
      <Footer />
    </main>
  );
}
