"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function KeyInnovations(props: React.ComponentProps<"section">) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // appllying styles to gallery photos
    const photos = gsap.utils.toArray(".gallery-photo:not(:first-child)");
    gsap.set(photos, { yPercent: 101 });

    const animation = gsap.to(photos, {
      yPercent: 0,
      stagger: 1,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: rootRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".gallery",
      animation: animation,
      scrub: true,
    });
  }, []);

  return (
    <section className="px-8 py-16 section-key-innovations" {...props}>
      <h1 className="text-5xl text-center">Key Innovations</h1>
      {/* <p className="text-center">
        Digital Broselow uses an AI model that combines age information with
        visual cues from images to predict a child&apos;s height and
        weight—accurately and instantly
      </p> */}
      <div ref={rootRef} className="flex flex-row gap-8">
        <div className="flex-1">
          <div className="mt-8 flex flex-col gap-4 md:mt-0">
            <div
              data-color="#f0d0c280"
              className="md:min-h-screen flex flex-col justify-center gap-4 flex-1 text-container"
            >
              <h2 className="text-3xl uppercase">Locally Tailored Design</h2>
              <p className="text-xl">
                Most pediatric estimation tools are developed using growth data
                from Europe or North America, which often do not reflect the
                physical development patterns of children in Ghana. Digital
                Broselow is trained on locally collected pediatric data,
                ensuring predictions are grounded in the real anthropometric
                characteristics of Ghanaian children. By learning from height,
                weight, age, and visual features specific to this population,
                the system delivers more accurate and context-appropriate
                estimates, reducing reliance on subjective visual judgment and
                improving clinical confidence during emergency care.
              </p>
            </div>
            <div className="w-full h-50hv rounded-lg overflow-hidden md:hidden">
              <img
                className="size-full object-cover"
                src="/images/health-care-personnel-and-child.jpg"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 md:mt-0">
            <div
              data-color="#417fb980"
              className="md:min-h-screen flex flex-col justify-center gap-4 flex-1 text-container"
            >
              <h2 className="text-3xl">Non-Contact Measurements</h2>
              <p className="text-xl">
                In emergency and critical care situations, physically weighing
                or measuring a child can be unsafe, time-consuming, or simply
                impractical. Digital Broselow eliminates this challenge by
                providing rapid, non-contact height and weight estimation
                directly from images. This approach minimizes unnecessary
                handling, reduces stress for both patients and caregivers, and
                allows healthcare providers to act faster—supporting safer, more
                efficient emergency decision-making when time is critical.
              </p>
            </div>
            <div className="w-full h-50hv rounded-lg overflow-hidden md:hidden">
              <img
                className="size-full object-cover"
                src="/images/non-contact-measurement.jpg"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 md:mt-0">
            <div
              data-color="#39739d80"
              className="md:min-h-screen flex flex-col justify-center gap-4 flex-1 text-container"
            >
              <h2 className="text-3xl">Strong Early Performance</h2>
              <p className="text-xl">
                Initial testing on early datasets has shown promising accuracy,
                with results indicating the system&apos;s ability to outperform
                commonly used estimation tools when applied to Ghanaian
                children. These early findings demonstrate the model&apos;s
                potential to significantly reduce dosing errors linked to
                inaccurate weight estimation. While further validation is
                ongoing, the preliminary results provide strong evidence that
                Digital Broselow can evolve into a clinically reliable tool,
                capable of improving pediatric outcomes in real-world hospital
                and emergency settings.
              </p>
            </div>
            <div className="w-full h-50hv rounded-lg overflow-hidden md:hidden">
              <img
                className="size-full object-cover"
                src="/images/health-care-personnel-looking-at-phone.jpg"
              />
            </div>
          </div>
        </div>
        {/** images here */}
        <div className="hidden h-screen flex-1 md:block">
          <div className="flex justify-center items-center h-full gallery">
            <div className="w-[40vw] h-[40vw] relative overflow-hidden rounded-xl">
              <div className="w-full h-full bg-green-500 absolute left-0 top-0 gallery-photo">
                <img
                  className="size-full object-cover"
                  src="/images/health-care-personnel-and-child.jpg"
                />
              </div>
              <div className="w-full h-full bg-red-500 absolute left-0 top-0 gallery-photo">
                <img
                  className="size-full object-cover"
                  src="/images/non-contact-measurement.jpg"
                />
              </div>
              <div className="w-full h-full bg-yellow-500 absolute left-0 top-0 gallery-photo">
                <img
                  className="size-full object-cover"
                  src="/images/health-care-personnel-looking-at-phone.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
