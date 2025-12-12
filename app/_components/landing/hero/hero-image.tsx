"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function HeroImage() {
  const imageRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    // getting item cards
    const itemCards = gsap.utils.toArray<HTMLDivElement>(".item-card");

    const timeline = gsap.timeline();
    // scalign up images
    timeline.to(imageRef.current, {
      scale: 1,
    });

    // moving items
    const circleRadius = 300;
    const angle = ( Math.PI) / itemCards.length;
    itemCards.forEach((itemCard, index) => {
      timeline.to(itemCard, {
        xPercent: Math.cos(angle * (index)) * circleRadius,
        yPercent:  -Math.sin(angle * (index + 1)) *circleRadius,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
      }, "-=0.2");
    });
  });
  return (
    <div className="relative flex justify-center items-center">
      <img ref={imageRef} src="/broselow-app.svg" className="w-96 scale-0" />
      <div className=" absolute flex flex-col items-center gap-2 p-4 opacity-0 item-card bg-primary rounded-md text-white min-w-32">
        <h2>Weight</h2>
        <p>32kg</p>
      </div>
      <div className=" absolute flex flex-col items-center gap-2 p-4 opacity-0 item-card bg-primary rounded-md text-white min-w-32">
        <h2>Weight</h2>
        <p>32kg</p>
      </div>
      <div className=" absolute flex flex-col items-center gap-2 p-4 opacity-0 item-card bg-primary rounded-md text-white min-w-32">
        <h2>Weight</h2>
        <p>32kg</p>
      </div>
      <div className=" absolute flex flex-col items-center gap-2 p-4 opacity-0 item-card bg-primary rounded-md text-white min-w-32">
        <h2>Weight</h2>
        <p>32kg</p>
      </div>
    </div>
  );
}

function InfoCard() {
  return <div></div>;
}
