"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

const SATELLITES = [
  { angle: 0.3, radius: 2.15, y: 0.55, color: "#5eead4", size: 0.1 },
  { angle: 1.65, radius: 2.4, y: -0.45, color: "#67e8f9", size: 0.075 },
  { angle: 3.1, radius: 2.05, y: 0.2, color: "#a78bfa", size: 0.085 },
  { angle: 4.4, radius: 2.55, y: -0.7, color: "#5eead4", size: 0.06 },
  { angle: 5.35, radius: 2.2, y: 0.85, color: "#93c5fd", size: 0.07 },
];

function SceneContent({ reducedMotion }: { reducedMotion: boolean }) {
  const root = useRef<THREE.Group>(null);
  const orbit = useRef<THREE.Group>(null);
  const orbitOuter = useRef<THREE.Group>(null);
  const satellites = useRef<THREE.Group>(null);

  const satellitePositions = useMemo(
    () =>
      SATELLITES.map((item) => ({
        ...item,
        position: [
          Math.cos(item.angle) * item.radius,
          item.y,
          Math.sin(item.angle) * item.radius,
        ] as [number, number, number],
      })),
    [],
  );

  useFrame((state, delta) => {
    const d = Math.min(delta, 0.05);

    if (root.current && !reducedMotion) {
      root.current.rotation.y = THREE.MathUtils.damp(
        root.current.rotation.y,
        state.pointer.x * 0.42,
        2.4,
        d,
      );
      root.current.rotation.x = THREE.MathUtils.damp(
        root.current.rotation.x,
        -state.pointer.y * 0.28,
        2.4,
        d,
      );
    }

    if (!reducedMotion) {
      if (orbit.current) orbit.current.rotation.z += d * 0.14;
      if (orbitOuter.current) orbitOuter.current.rotation.y -= d * 0.1;
      if (satellites.current) satellites.current.rotation.y += d * 0.18;
    }
  });

  return (
    <group ref={root}>
      <Float
        speed={reducedMotion ? 0 : 1.4}
        rotationIntensity={reducedMotion ? 0 : 0.35}
        floatIntensity={reducedMotion ? 0 : 0.9}
      >
        <mesh>
          <icosahedronGeometry args={[1.42, 14]} />
          <MeshDistortMaterial
            color="#0a1d29"
            emissive="#0d5f56"
            emissiveIntensity={0.22}
            metalness={0.94}
            roughness={0.18}
            distort={0.34}
            speed={reducedMotion ? 0 : 1.5}
            envMapIntensity={0.6}
          />
        </mesh>

        <mesh scale={1.045}>
          <icosahedronGeometry args={[1.42, 1]} />
          <meshBasicMaterial
            color="#5eead4"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>

        <mesh scale={1.32} rotation={[0.35, 0.8, 0.15]}>
          <icosahedronGeometry args={[1.42, 1]} />
          <meshBasicMaterial
            color="#7dd3fc"
            wireframe
            transparent
            opacity={0.055}
          />
        </mesh>
      </Float>

      <group ref={orbit} rotation={[1.22, 0.14, 0]}>
        <mesh>
          <torusGeometry args={[2.08, 0.006, 12, 180]} />
          <meshBasicMaterial color="#5eead4" transparent opacity={0.42} />
        </mesh>
        <mesh>
          <torusGeometry args={[2.26, 0.004, 12, 180]} />
          <meshBasicMaterial color="#5eead4" transparent opacity={0.14} />
        </mesh>
      </group>

      <group ref={orbitOuter} rotation={[0.55, 0.9, 0.42]}>
        <mesh>
          <torusGeometry args={[2.62, 0.004, 12, 180]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.22} />
        </mesh>
      </group>

      <group ref={satellites}>
        {satellitePositions.map((satellite, index) => (
          <mesh key={index} position={satellite.position}>
            <octahedronGeometry args={[satellite.size, 0]} />
            <meshStandardMaterial
              color={satellite.color}
              emissive={satellite.color}
              emissiveIntensity={1.6}
              metalness={0.4}
              roughness={0.3}
            />
          </mesh>
        ))}
      </group>

      <Sparkles
        count={60}
        scale={[6.5, 5.5, 4]}
        size={2}
        speed={reducedMotion ? 0 : 0.35}
        opacity={0.5}
        color="#99f6e4"
      />
    </group>
  );
}

export default function HeroScene() {
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.4], fov: 40 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[4, 5, 6]}
        intensity={2.4}
        color="#e6fbff"
      />
      <pointLight
        position={[-4, -2, 4]}
        intensity={26}
        distance={14}
        color="#5eead4"
      />
      <pointLight
        position={[4, 2, -4]}
        intensity={22}
        distance={14}
        color="#a78bfa"
      />
      <SceneContent reducedMotion={reducedMotion} />
      <Stars
        radius={60}
        depth={38}
        count={1300}
        factor={3.2}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 0.5}
      />
    </Canvas>
  );
}
