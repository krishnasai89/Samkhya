"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function PrakritiMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // Subtle cosmic rotations
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;

    // Dynamically morph the geometry vertices using math noise logic
    // This creates the "liquid/fluid" look before it hits the ASCII converter
    const geometry = meshRef.current.geometry;
    const positionAttribute = geometry.attributes.position;

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      const z = positionAttribute.getZ(i);

      // Create a fluid wave effect based on vertex positions and time
      const wave =
        Math.sin(x * 2 + time) * 0.15 + Math.cos(y * 2 + time) * 0.15;

      // Slightly push the vertices out along their normals
      positionAttribute.setZ(i, z + wave * 0.1);
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} scale={2}>
      {/* High-detail sphere so the ASCII rendering looks smooth and defined */}
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#ffffff"
        wireframe={false}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
}
