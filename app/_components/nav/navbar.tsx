import { Button } from "@/components/ui/button";
import Link from "next/link";
import { div } from "three/tsl";

export default function NavBar() {
  return (
    <div className="w-full  fixed left-0 top-0 z-100  flex justify-center" style={{backdropFilter: "blur(10px)"}}>
      <div className="flex justify-between items-center py-8 bg-transparent w-full container">
        <Link href="#hero" className="text-xl font-bold text-primary">Digital Broselow</Link>
        <nav>
          <ul className="flex flex-row gap-4 font-semibold">
            <li>
              <Link href="#hero">Home</Link>
            </li>
            <li>
              <Link href="#how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="#key-innovations">Key Innovations</Link>
            </li>
            <li>
              <Link href="#closing">Purpose</Link>
            </li>
          </ul>
        </nav>
        <Button>Contact Us</Button>
      </div>
    </div>
  );
}
