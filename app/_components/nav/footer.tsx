import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full py-8">
      <div className="px-4 container mx-auto w-full flex flex-col gap-8 justify-between items-start md:flex-row md:gap-4">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary">QUICK LINKS</h4>
          <ul className="flex flex-col gap-2">
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
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-primary">Social Media</h4>
          <div className="flex flex-row gap-2">
            <Linkedin className="w-10 h-10" />
            <Facebook className="w-10 h-10" />
            <Twitter className="w-10 h-10" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-4xl text-primary font-semibold">
            DIGITAL <strong>BROSELOW</strong>
          </div>
          <p className="text-sm">&copy; 2025. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
