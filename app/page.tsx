import Image from "next/image";
import Hero from "./_components/landing/hero/Hero";
import HowItWorks from "./_components/landing/how-it-works/HowItWorks";
import KeyInnovations from "./_components/key-innovations/KeyInnovations";
import Closing from "./_components/closing/Closing";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <KeyInnovations />
      <Closing/>
    </main>
  );
}
