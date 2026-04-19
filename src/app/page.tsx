import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Solution from "@/components/Solution";
import LiveDemo from "@/components/LiveDemo";
import HowItWorks from "@/components/HowItWorks";
import Numbers from "@/components/Numbers";
import Integrations from "@/components/Integrations";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Solution />
      <UseCases />
      <LiveDemo />
      <Numbers />
      <HowItWorks />
      <Integrations />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
