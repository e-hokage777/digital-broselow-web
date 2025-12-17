"use client";

import React, { forwardRef } from "react";
import { useGLTF, useTexture, Decal, Html, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PhoneModelProps {
  [key: string]: unknown;
}

export const PhoneModel = forwardRef<THREE.Group, PhoneModelProps>(
  ({ ...props }: PhoneModelProps, ref) => {
    const { nodes, materials } = useGLTF(
      "/models/apple_iphone_based_mobile_phone.glb"
    );
    const texture = useTexture("/images/broselow-cap.png");
    texture.repeat.set(2, 1.03);

    return (
      <group dispose={null}>
        <Float
          speed={1}
          rotationIntensity={0}
          floatIntensity={0}
          floatingRange={[-0.05, 0.05]}
        >
          <group ref={ref} scale={0.07} rotation={[-0, -Math.PI / 8, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  (nodes.MobilePhone_Phone_Main_0 as THREE.Mesh).geometry
                }
                material={materials.Phone_Main}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  (nodes.MobilePhone_Phone_Emission_0 as THREE.Mesh).geometry
                }
                // material={materials.Phone_Emission}
              >
                <Decal
                  position={[0, 0.0, 0]}
                  rotation={[0, 0, 0]}
                  scale={[7, 0.01, 14]}
                />

                <meshBasicMaterial map={texture} toneMapped={false}  />
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  (nodes.MobilePhone_Phone_Alpha_0 as THREE.Mesh).geometry
                }
                material={materials.Phone_Alpha}
              />
            </group>
          </group>
        </Float>
      </group>
    );
  }
);

useGLTF.preload("/models/apple_iphone_based_mobile_phone.glb");
