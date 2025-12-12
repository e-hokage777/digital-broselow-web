"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // appllying styles to gallery photos
    const photos = gsap.utils.toArray(".gallery-photo:not(:first-child)");
    gsap.set(photos, { yPercent: 101 });

    const animation = gsap.to(photos, {
      yPercent: 0,
    //   duration: 1,
      stagger: 1,
    });

    ScrollTrigger.create({
      trigger: rootRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".gallery",
      animation: animation,
      scrub: true,
      pinSpacing: false,
    });
  }, []);

  return (
    <section className="px-8 bg-gray-100">
      <div ref={rootRef} className="flex flex-row gap-8">
        <div>
          <div className="min-h-screen flex flex-col justify-center gap-4 flex-1">
            <h2 className="text-3xl">Title</h2>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.
            </p>
          </div>
          <div className="min-h-screen flex flex-col justify-center gap-4 flex-1">
            <h2 className="text-3xl">Title</h2>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.
            </p>
          </div>
          <div className="min-h-screen flex flex-col justify-center gap-4 flex-1">
            <h2 className="text-3xl">Title</h2>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.
            </p>
          </div>
        </div>
        {/** images here */}
        <div className="h-screen flex-1">
          <div className="flex justify-center items-center h-full gallery">
            <div className="w-[40vw] h-[40vw] ">
              <div className="w-full h-full bg-green-500 gallery-photo"></div>
              <div className="w-full h-full bg-red-500 gallery-photo"></div>
              <div className="w-full h-full bg-yellow-500 gallery-photo"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
