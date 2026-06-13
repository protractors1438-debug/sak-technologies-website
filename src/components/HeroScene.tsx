"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function CentralCore() {
  const outerRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.2;
      outerRef.current.rotation.x += delta * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.1;
    }
  });

  return (
    <group>
      {/* Inner glowing core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
          wireframe={false}
        />
      </mesh>
      {/* Outer wireframe sphere */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

function FloatingElements() {
  return (
    <>
      {/* 1. Browser Window */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh position={[-3, 1.5, -2]}>
          <boxGeometry args={[0.8, 0.5, 0.05]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.2} transparent opacity={0.8} />
        </mesh>
      </Float>

      {/* 2. Database Node */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2.5, 2, -1]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.4} />
        </mesh>
      </Float>

      {/* 3. API Connection Ring */}
      <Float speed={1.2} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[3, -1, 1]}>
          <torusGeometry args={[0.3, 0.05, 16, 32]} />
          <meshStandardMaterial color="#00fff5" emissive="#00fff5" emissiveIntensity={0.3} />
        </mesh>
      </Float>

      {/* 4. Server */}
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh position={[-2.5, -1.5, 1]}>
          <coneGeometry args={[0.2, 0.5, 6]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} transparent opacity={0.9} />
        </mesh>
      </Float>

      {/* 5. Mobile Screen */}
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.8}>
        <mesh position={[1.5, -2, -1]}>
          <boxGeometry args={[0.3, 0.6, 0.05]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} transparent opacity={0.7} />
        </mesh>
      </Float>

      {/* 6. Cloud */}
      <Float speed={1.1} rotationIntensity={1.5} floatIntensity={1}>
        <mesh position={[-1.5, 2.5, 0.5]}>
          <dodecahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} wireframe />
        </mesh>
      </Float>

      {/* 7. Data Column */}
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.8}>
        <mesh position={[4, 0.5, -2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.5, 8]} />
          <meshStandardMaterial color="#00fff5" emissive="#00fff5" emissiveIntensity={0.4} />
        </mesh>
      </Float>

      {/* 8. AI Module */}
      <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh position={[-4, 0, 1]}>
          <octahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} wireframe />
        </mesh>
      </Float>
    </>
  );
}

function CameraRig() {
  useFrame((state) => {
    // Subtly move camera based on pointer position for parallax effect
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      className="cursor-grab active:cursor-grabbing w-full h-full"
      dpr={[1, 2]} // Support high DPI displays
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d4ff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      
      <CentralCore />
      <FloatingElements />
      
      <Stars radius={50} depth={50} count={1000} factor={3} saturation={0.5} fade speed={0.5} />
      <CameraRig />
    </Canvas>
  );
}
