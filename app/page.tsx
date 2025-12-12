import Image from "next/image";
import Hero from "./_components/landing/hero/Hero";
import HowItWorks from "./_components/landing/how-it-works/HowItWorks";

export default function Home() {
  return <main>
    <Hero/>
    <HowItWorks/>
  </main>;
}
