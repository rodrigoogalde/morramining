import Navbar from "@/components/terra/Navbar";
import Hero from "@/components/terra/Hero";
import AboutUs from "@/components/terra/AboutUs";
import WhatWeDo from "@/components/terra/WhatWeDo";
import Operations from "@/components/terra/Operations";
import ValueProposition from "@/components/terra/ValueProposition";
import BusinessModel from "@/components/terra/BusinessModel";
import Markets from "@/components/terra/Markets";
import Advisory from "@/components/terra/Advisory";
import Contact from "@/components/terra/Contact";
import Footer from "@/components/terra/Footer";

export default function TerraPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* bg-terra-cream via hero (default) */}
        <Hero />
        {/* bg-terra-paper */}
        <AboutUs />
        {/* bg-terra-cream */}
        <WhatWeDo />
        {/* bg-terra-paper */}
        <Operations />
        {/* bg-terra-paper — value proposition shares bg with operations for flow */}
        <ValueProposition />
        {/* bg-terra-cream */}
        <BusinessModel />
        {/* bg-terra-paper */}
        <Markets />
        {/* bg-terra-cream */}
        <Advisory />
        {/* bg-terra-cream — contact on cream for warm close */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
