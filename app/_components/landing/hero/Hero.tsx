import { Button } from "@/components/ui/button";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div
        className="w-full h-full absolute left-0 top-0 -z-1"
        style={{ filter: "blur(70px)" }}
      >
        <div className="absolute left-0 top-0 w-[250vw] h-[250vw] rounded-full bg-blue-700 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 top-0 w-[120vw] h-[120vw] rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 top-0 w-[70vw] h-[70vw] rounded-full bg-blue-500 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 top-0 w-[10vw] h-[10vw] rounded-full bg-blue-300 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="w-full h-full flex flex-row justify-between gap-8 px-8 pt-16">
        <div className=" flex flex-col justify-center items-start gap-4 text-white text-start flex-1">
          <h1 className=" text-5xl mb-8">
            AI-Powered <strong>Pediatric Measurement</strong> for <br /> Safer
            Emergency Care
          </h1>
          <h2 className="text-xl ">
            Digital Broselow uses an AI model that combines age information with
            visual cues from images to predict a child’s height and
            weight—accurately and instantly.
          </h2>
          <Button className="cursor-pointer">Learn More</Button>
        </div>
        <div className="flex-1">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}
