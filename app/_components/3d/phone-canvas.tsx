"use client";

import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Preload } from "@react-three/drei";
import React, { Suspense } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function PhoneCanvas({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Canvas className="size-full" camera={{ position: [0, 0, 1] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <ambientLight intensity={15} />
      <directionalLight position={[0, 0, 0.5]} />
      {/* <SpotLight intensity={0.1}/> */}
      <Suspense
        fallback={
          <Html as="div">
            <div className="size-full flex items-center justify-center">
              {/* <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
               */}
              <Spinner />
            </div>
          </Html>
        }
      >
        {children}
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
