import { Card, CardContent } from "@/components/ui/card";
import PhoneCanvas from "../../3d/phone-canvas";
import { Lock, PersonStanding, ThumbsUp, User } from "lucide-react";
import HowItWorksSubSection from "./hiw-subsection";
import React from "react";

export default function HowItWorks(props: React.ComponentProps<"section">) {
  return (
    <section className="min-h-screen" {...props}>
      <div className="h-full container mx-auto py-8">
        <div>
          <h1 className="text-xl font-bold text-secondary">How it works</h1>
          <h2 className="text-4xl">What makes Digital Broselow <strong>tick</strong> ?</h2>
        </div>

        <div className="mt-16">
          <HowItWorksSubSection
            icon={<Lock size={64} className="text-white" />}
            description="Secure image collection via a simple web app used in hospitals and schools"
          />
          <HowItWorksSubSection
            icon={<User size={64} className="text-white" />}
            description="Automated face blurring to protect privacy"
            right
          />
          <HowItWorksSubSection
            icon={<PersonStanding size={64} className="text-white" />}
            description="Background segmentation, normalization, and augmentation to ensure high-quality model training"
          />
          <HowItWorksSubSection
            icon={<ThumbsUp size={64} className="text-white" />}
            description="Grad-CAM visualization for interpretable predictions based on true anatomical feature"
            right
          />
        </div>
      </div>
    </section>
  );
}
