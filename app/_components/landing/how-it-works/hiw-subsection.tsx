"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function HowItWorksSubSection({
  icon,
  description,
  right,
}: {
  icon: React.ReactNode;
  description: string;
  right?: boolean;
}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(cardRef.current, {
      duration: 0.5,
      ease: "power4.out",
      xPercent: right ? -50 : 50,
      opacity: 0,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
      },
    });
  });

  return (
    <div
      ref={triggerRef}
      className={cn(
        "flex flex-row justify-start py-8 overflow-x-hidden",
        right && "justify-end"
      )}
    >
      <Card
        ref={cardRef}
        className={cn("bg-primary py-8 max-w-2/3 md:max-w-1/3", right && "bg-secondary")}
      >
        <CardContent>
          <div className="flex flex-col gap-4 items-center">
            {icon}
            <p className="text-2xl text-white">{description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
