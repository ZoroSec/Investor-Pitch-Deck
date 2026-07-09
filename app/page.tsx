import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Showcase } from "@/components/sections/Showcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { InvestorDemo } from "@/components/sections/InvestorDemo";
import { Metrics } from "@/components/sections/Metrics";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Problem />
        <Solution />
        <Showcase />
        <HowItWorks />
        <InvestorDemo />
        <Metrics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
