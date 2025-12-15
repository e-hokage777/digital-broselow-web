"use client"

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";

export default function PhoneCanvas({children}: {children?: React.ReactNode}) {
  return (
    <Canvas className="size-full" camera={{position: [0, 0, 1]}}>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false}  />
      <ambientLight intensity={15} />
      <directionalLight position={[0, 0, 0.5]}/>
      {/* <SpotLight intensity={0.1}/> */}
      {children}
    </Canvas>
  );
}
