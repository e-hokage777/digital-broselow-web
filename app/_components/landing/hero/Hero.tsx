"use client";

import { Button } from "@/components/ui/button";
import PhoneCanvas from "../../3d/phone-canvas";
import { useEffect, useRef } from "react";
import { PhoneModel } from "../../3d/phone-model";
import { Group } from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero(props: React.ComponentProps<"section">) {
  const phoneRef = useRef<Group>(null);

  useGSAP(() => {
    if (!phoneRef.current) return;
    gsap.to(phoneRef.current!.rotation, {
      y: Math.PI * 2,
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, [phoneRef.current]);

  useEffect(() => {
    console.log(phoneRef.current)
  }, [phoneRef.current]);

  return (
    <section className="w-full h-screen overflow-hidden" {...props}>
      <div className="w-full h-full flex flex-row justify-between gap-8 px-8 pt-16">
        <div className=" flex flex-col justify-center items-start gap-4  text-start flex-1">
          <h1 className=" text-5xl mb-8">
            AI-Powered{" "}
            <strong className="text-primary">Pediatric Measurement</strong> for{" "}
            <br /> Safer Emergency Care
          </h1>
          <h2 className="text-xl ">
            Digital Broselow uses an AI model that combines age information with
            visual cues from images to predict a child’s height and
            weight—accurately and instantly.
          </h2>
          <Button className="cursor-pointer">Learn More</Button>
        </div>
        <div className="hidden md:block md:flex-1">
          {/* <HeroImage /> */}
          <PhoneCanvas>
            <PhoneModel ref={phoneRef} />
          </PhoneCanvas>
        </div>
      </div>
    </section>
  );
}
