import Image from "next/image";
import Hero from "./_components/landing/hero/Hero";
import KeyInnovations from "./_components/landing/key-innovations/KeyInnovations";
import Closing from "./_components/closing/Closing";
import HowItWorks from "./_components/landing/how-it-works/HowItWorks";
import ThreeDBackgroundContainer from "./_components/3d/three-d-background-container";
import NavBar from "./_components/nav/navbar";
import Footer from "./_components/nav/footer";

export default function Home() {
  return (
    <main>
      <ThreeDBackgroundContainer>
        <NavBar/>
        <Hero id="hero" />
        <HowItWorks id="how-it-works" />
        <KeyInnovations id="key-innovations" />
        <Closing id="closing" />
        <Footer/>
      </ThreeDBackgroundContainer>
    </main>
  );
}
