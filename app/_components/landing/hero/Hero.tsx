import { Button } from "@/components/ui/button";
import HeroImage from "./hero-image";

export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* <div
        className="w-full h-full absolute left-0 top-0 -z-1"
        style={{ filter: "blur(70px)" }}
      >
        <div className="absolute left-0 top-0 w-[250vw] h-[250vw] rounded-full bg-blue-700 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 top-0 w-[120vw] h-[120vw] rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 top-0 w-[70vw] h-[70vw] rounded-full bg-blue-500 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 top-0 w-[10vw] h-[10vw] rounded-full bg-blue-300 -translate-x-1/2 -translate-y-1/2"></div>
      </div> */}
      <div className="w-full h-full flex flex-col justify-between gap-8 px-8 pt-16">
        <div className=" flex flex-col justify-center items-center gap-4 text-black text-center">
          <h1 className=" text-5xl mb-8">
            AI-Powered <strong>Pediatric Measurement</strong> for <br /> Safer
            Emergency Care
          </h1>
          <h2 className="text-xl ">
            HerdWatch is a wearable, AI-powered livestock monitoring system that
            <br />
            gives farmers real-time insights into the wellbeing and movement of
            their animals.
          </h2>
          <Button className="cursor-pointer">Learn More</Button>
        </div>
        {/* <div>
          <img src="/broselow-app.svg" className="w-96" />
        </div> */}
        <HeroImage />
      </div>
    </div>
  );
}
