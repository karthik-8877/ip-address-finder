// src/components/ThreeDEarth.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

function ThreeDEarth() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        height: "100vh",
        width: "100vw",
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#1E90FF"
          attach="material"
          distort={0.3}
          speed={1.5}
        />
      </Sphere>
    </Canvas>
  );
}

export default ThreeDEarth;
