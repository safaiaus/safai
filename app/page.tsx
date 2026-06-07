import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}