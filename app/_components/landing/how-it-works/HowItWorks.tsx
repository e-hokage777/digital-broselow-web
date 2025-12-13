import { Card, CardContent } from "@/components/ui/card";
import PhoneCanvas from "../../3d/phone-canvas";
import { Lock } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="min-h-screen h-screen">
      <div className="h-full container mx-auto py-8">
        <div>
          <h1 className="text-xl font-bold text-secondary">How it works</h1>
          <h2 className="text-4xl">All you need is your phone</h2>
        </div>

        <div className="mt-16">
          <div className="flex flex-row justify-start py-8">
            <Card className="bg-primary py-8 max-w-1/3">
              <CardContent>
                <div className="flex flex-col gap-4 items-center">
                  <Lock size={64} className="text-white" />
                  <p className="text-2xl text-white">
                    Secure image collection via a simple web app used in
                    hospitals and schools Automated face blurring to protect
                    privacy
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-row justify-end py-8">
            <Card className="bg-secondary py-8 max-w-1/3">
              <CardContent>
                <div className="flex flex-col gap-4 items-center">
                  <Lock size={64} className="text-white" />
                  <p className="text-2xl text-white">
                    Secure image collection via a simple web app used in
                    hospitals and schools Automated face blurring to protect
                    privacy
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
