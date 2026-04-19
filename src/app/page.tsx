import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Solution from "@/components/Solution";
import LiveDemo from "@/components/LiveDemo";
import HowItWorks from "@/components/HowItWorks";
import Numbers from "@/components/Numbers";
import Integrations from "@/components/Integrations";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealWrapper from "@/components/RevealWrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RevealWrapper><LogoStrip /></RevealWrapper>
      
      <RevealWrapper stagger><Solution /></RevealWrapper>
      <RevealWrapper stagger><UseCases /></RevealWrapper>
      <RevealWrapper><LiveDemo /></RevealWrapper>
      <RevealWrapper stagger><Numbers /></RevealWrapper>
      <RevealWrapper stagger><Testimonials /></RevealWrapper>
      <RevealWrapper stagger><HowItWorks /></RevealWrapper>
      <RevealWrapper stagger><Integrations /></RevealWrapper>
      <RevealWrapper stagger><FAQ /></RevealWrapper>
      <RevealWrapper><CTA /></RevealWrapper>
      
      <Footer />
    </>
  );
}
