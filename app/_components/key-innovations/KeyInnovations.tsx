import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function KeyInnovations() {
  return (
    <section className="px-8 bg-gray-100 py-16">
      <h1 className="text-5xl mb-8">Key Innovations</h1>
      <div className="flex justify-between gap-8">
        <Card className="p-0">
          <div className=" h-64 overflow-hidden rounded-md">
            <img
              src="/images/non-contact-measurement.jpg"
              alt="Non-Contact Measurement"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-4 pt-2 pb-8">
            <h2 className="text-2xl">Non-Contact Measurement</h2>
            <p>
              Estimates height and weight directly from images—no physical
              handling required.
            </p>
          </div>
        </Card>
        <Card className="p-0">
          <div className=" h-64 overflow-hidden rounded-md">
            <img
              src="/images/non-contact-measurement.jpg"
              alt="Non-Contact Measurement"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-4 pt-2 pb-8">
            <h2 className="text-2xl">Non-Contact Measurement</h2>
            <p>
              Estimates height and weight directly from images—no physical
              handling required.
            </p>
          </div>
        </Card>
        <Card className="p-0">
          <div className=" h-64 overflow-hidden rounded-md">
            <img
              src="/images/non-contact-measurement.jpg"
              alt="Non-Contact Measurement"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-4 pt-2 pb-8">
            <h2 className="text-2xl">Non-Contact Measurement</h2>
            <p>
              Estimates height and weight directly from images—no physical
              handling required.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
