"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Text, Stars } from "@react-three/drei";
import * as THREE from "three";

function ParticleHead() {
  const pointsRef = useRef<THREE.Points>(null!);
  
  // Generate random points in a sphere shape as a placeholder for head contour
  const points = useMemo(() => {
    const count = 6000;
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.5 + Math.random() * 0.5;
      
      // Slightly oval to mimic head shape
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta) * 0.8;
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 1.1;
      p[i * 3 + 2] = r * Math.cos(phi) * 0.9;
    }
    return p;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  const floatingTexts = ["FEAR", "LOVE", "MEMORY", "DESIRE", "REGRET", "HOPE", "BELIEF"];

  return (
    <group>
      <Points ref={pointsRef} positions={points} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Abstract internal floating words */}
      {floatingTexts.map((txt, i) => (
        <Float key={txt} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <Text
            position={[
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 3,
              (Math.random() - 0.5) * 2,
            ]}
            fontSize={0.15}
            color="#ffffff"
            fillOpacity={0.1}
            anchorX="center"
            anchorY="middle"
          >
            {txt}
          </Text>
        </Float>
      ))}
    </group>
  );
}

export default function ThreeHead() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ParticleHead />
      </Canvas>
    </div>
  );
}
