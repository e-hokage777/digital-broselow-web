import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function BackgroundModel(props: { [key: string]: unknown }) {
  const { nodes, materials } = useGLTF("/models/background.glb");
  return (
    <group {...props} dispose={null}>
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-4, 4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.pyramid as THREE.Mesh).geometry}
          material={materials["Material.001"]}
        />
      </Float>

      <Float
        speed={0.2} // Animation speed, defaults to 1
        rotationIntensity={50} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-4, 4]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001 as THREE.Mesh).geometry}
          material={materials.Material}
          position={[-0.761, 0, 2.598]}
        />
      </Float>

      
      <Float
        speed={2}
        rotationIntensity={2}
        floatIntensity={1}
        floatingRange={[-4, 4]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Sphere as THREE.Mesh).geometry}
          material={materials["Material.003"]}
          position={[-1.301, 2.025, 0]}
        />
      </Float>

      <Float
        speed={1}
        rotationIntensity={2}
        floatIntensity={1}
        floatingRange={[-4, 4]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder as THREE.Mesh).geometry}
          material={materials["Material.004"]}
          position={[-1.821, 0, 0]}
          scale={[0.571, 1, 0.571]}
        />
      </Float>

      <Float
        speed={-2}
        rotationIntensity={20}
        floatIntensity={1}
        floatingRange={[-4, 4]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Torus as THREE.Mesh).geometry}
          material={materials["Material.002"]}
          position={[0, 1.21, 0]}
          rotation={[0.599, 0, 0]}
        />
      </Float>
    </group>
  );
}

useGLTF.preload("/background.glb");
