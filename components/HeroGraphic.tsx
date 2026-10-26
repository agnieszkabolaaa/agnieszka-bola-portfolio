"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type * as THREE from "three";

// Wireframe torus knot — the dense interlocking curves of a (p=2,q=3)
// trefoil create a visually complex "mathematical model" look while
// remaining fully see-through so headline text stays readable.
function TorusKnot() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, dt) => {
    mesh.current.rotation.x += dt * 0.13;
    mesh.current.rotation.y += dt * 0.20;
  });

  return (
    <mesh ref={mesh} scale={1.55}>
      <torusKnotGeometry args={[1, 0.34, 180, 16, 2, 3]} />
      <meshBasicMaterial color="#FF6A2F" wireframe transparent opacity={0.55} />
    </mesh>
  );
}

export default function HeroGraphic() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <TorusKnot />
    </Canvas>
  );
}
