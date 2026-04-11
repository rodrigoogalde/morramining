import Navbar from "@/components/forged/Navbar";
import Hero from "@/components/forged/Hero";
import AboutUs from "@/components/forged/AboutUs";
import WhatWeDo from "@/components/forged/WhatWeDo";
import Operations from "@/components/forged/Operations";
import ValueProposition from "@/components/forged/ValueProposition";
import BusinessModel from "@/components/forged/BusinessModel";
import Markets from "@/components/forged/Markets";
import Advisory from "@/components/forged/Advisory";
import StrategicPositioning from "@/components/forged/StrategicPositioning";
import Contact from "@/components/forged/Contact";
import Footer from "@/components/forged/Footer";

export default function HomePage() {
  return (
    <main className="forged-grain">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Operations />
      <ValueProposition />
      <BusinessModel />
      <Markets />
      <Advisory />
      <StrategicPositioning />
      <Contact />
      <Footer />
    </main>
  );
}
