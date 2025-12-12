"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Closing() {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      width: "100vw",
      height: "100vh",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        endTrigger: sectionRef.current,
        end: "bottom bottom",
        pin: containerRef.current,
        scrub: true,
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="px-8 min-h-screen flex flex-col items-center justify-center gap-8 py-8"
    >
      <h1 className="text-6xl text-center font-bold">
        BUILT FOR <br /> IMPACT
      </h1>
      <div ref={containerRef} className="w-full h-[60vh] flex justify-center">
        <div
          ref={imageRef}
          className="w-[50vh] h-full rounded-md overflow-hidden origin-center"
        >
          <img
            src="/images/non-contact-measurement.jpg"
            alt="Impact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="text-sm max-w-[50vw]">
        Digital Broselow reflects Dipper Lab&apos;s commitment to safe,
        effective, and context-aware AI healthcare solutions. Once completed, it
        will serve as a reliable tool for pediatric care in Ghana—with the
        potential to scale across Africa and other regions facing similar
        challenges.
      </p>

      <div className="h-screen">

      </div>
    </section>
  );
}
