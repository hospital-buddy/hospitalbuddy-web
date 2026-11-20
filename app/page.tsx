import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import WhyTransparency from "@/components/WhyTransparency";
import Audiences from "@/components/Audiences";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Demo />
        <Features />
        <WhyTransparency />
        <Audiences />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
