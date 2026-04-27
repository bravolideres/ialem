import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LogoStrip from "@/components/LogoStrip";
import Agency from "@/components/Agency";
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
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><LogoStrip /></Reveal>
      <Reveal><Agency /></Reveal>

      <Reveal><Solution /></Reveal>
      <Reveal><UseCases /></Reveal>
      <LiveDemo />
      <Reveal><Numbers /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Integrations /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CTA /></Reveal>
      
      <Footer />
    </>
  );
}
