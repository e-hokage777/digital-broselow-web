"use client";
import { Canvas } from "@react-three/fiber";
import BackgroundModel from "./background-models";
import { OrbitControls, Sky } from "@react-three/drei";

export default function GradientBackground() {
  return (
    <Canvas camera={{ position: [-3, 3, 5] }}>
      {/* <color attach="background" args={["#c0e8f0"]} /> */}
      <OrbitControls />
      <ambientLight intensity={2} />
      {/* <directionalLight position={[-10, 10, -10]} intensity={8} /> */}
      <BackgroundModel />
    </Canvas>
  );
}
