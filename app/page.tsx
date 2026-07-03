import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Features />
      <Pricing />
      <FinalCta />
    </main>
  );
}