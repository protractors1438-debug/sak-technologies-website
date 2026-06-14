"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

// 1. Central Core Component (Orange digital core)
function CentralCore() {
  const outerRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.15;
      outerRef.current.rotation.x += delta * 0.08;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.05;
      innerRef.current.rotation.z += delta * 0.03;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1;
      ringRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Inner glowing core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#FF8C42"
          emissive="#FF8C42"
          emissiveIntensity={0.4}
          transparent
          opacity={0.35}
          wireframe={false}
        />
      </mesh>
      
      {/* Outer wireframe sphere */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#FF6B35"
          emissive="#FF6B35"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Outer orbital connection ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.9, 0.02, 8, 48]} />
        <meshStandardMaterial
          color="#FFA726"
          emissive="#FFA726"
          emissiveIntensity={0.6}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

// 2. Custom 3D Web Mockups

// A. 3D Browser Window Widget
function BrowserWidget() {
  return (
    <group>
      {/* Browser Base */}
      <mesh>
        <boxGeometry args={[1.2, 0.8, 0.03]} />
        <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.1} transparent opacity={0.85} />
      </mesh>
      {/* Browser Wireframe Frame */}
      <mesh>
        <boxGeometry args={[1.22, 0.82, 0.032]} />
        <meshStandardMaterial color="#FF6B35" wireframe emissive="#FF6B35" emissiveIntensity={0.2} transparent opacity={0.3} />
      </mesh>
      {/* Browser Header Bar */}
      <mesh position={[0, 0.33, 0.015]}>
        <boxGeometry args={[1.16, 0.08, 0.01]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
      </mesh>
      {/* Window Controls (Red, Yellow, Green dots) */}
      <mesh position={[-0.48, 0.33, 0.022]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <mesh position={[-0.42, 0.33, 0.022]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>
      <mesh position={[-0.36, 0.33, 0.022]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#10b981" />
      </mesh>
      {/* Mock Content Lines */}
      <mesh position={[0.1, 0.1, 0.02]}>
        <boxGeometry args={[0.7, 0.03, 0.01]} />
        <meshStandardMaterial color="#FF8C42" emissive="#FF8C42" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.1, -0.05, 0.02]}>
        <boxGeometry args={[0.3, 0.03, 0.01]} />
        <meshStandardMaterial color="#FFA726" emissive="#FFA726" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.15, -0.2, 0.02]}>
        <boxGeometry args={[0.8, 0.02, 0.01]} />
        <meshStandardMaterial color="#FF8C42" opacity={0.5} transparent />
      </mesh>
    </group>
  );
}

// B. 3D Mobile Phone Frame
function MobileWidget() {
  return (
    <group>
      {/* Outer Frame */}
      <mesh>
        <boxGeometry args={[0.45, 0.9, 0.04]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Screen area */}
      <mesh position={[0, 0, 0.021]}>
        <boxGeometry args={[0.39, 0.82, 0.01]} />
        <meshStandardMaterial color="#FF8C42" emissive="#FF8C42" emissiveIntensity={0.3} transparent opacity={0.7} />
      </mesh>
      {/* Speaker Bar */}
      <mesh position={[0, 0.42, 0.022]}>
        <boxGeometry args={[0.1, 0.015, 0.01]} />
        <meshBasicMaterial color="#080808" />
      </mesh>
      {/* UI Elements on screen */}
      <mesh position={[0, 0.25, 0.026]}>
        <boxGeometry args={[0.28, 0.15, 0.01]} />
        <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0.02, 0.026]}>
        <boxGeometry args={[0.28, 0.02, 0.01]} />
        <meshBasicMaterial color="#FFF8F0" />
      </mesh>
      <mesh position={[0, -0.1, 0.026]}>
        <boxGeometry args={[0.28, 0.02, 0.01]} />
        <meshBasicMaterial color="#FFF8F0" opacity={0.6} transparent />
      </mesh>
      {/* Bottom Home Bar */}
      <mesh position={[0, -0.42, 0.022]}>
        <boxGeometry args={[0.15, 0.01, 0.01]} />
        <meshBasicMaterial color="#FFF8F0" opacity={0.3} transparent />
      </mesh>
    </group>
  );
}

// C. 3D Code Editor Panel
function CodeWidget() {
  return (
    <group>
      {/* Base Code Window */}
      <mesh>
        <boxGeometry args={[0.9, 0.6, 0.03]} />
        <meshStandardMaterial color="#0a0a0a" roughness={0.5} transparent opacity={0.9} />
      </mesh>
      {/* Glowing Border */}
      <mesh>
        <boxGeometry args={[0.91, 0.61, 0.031]} />
        <meshStandardMaterial color="#FFA726" wireframe emissive="#FFA726" emissiveIntensity={0.1} transparent opacity={0.4} />
      </mesh>
      {/* Simulated Code Lines */}
      <mesh position={[-0.15, 0.16, 0.016]}>
        <boxGeometry args={[0.4, 0.02, 0.01]} />
        <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[-0.2, 0.08, 0.016]}>
        <boxGeometry args={[0.3, 0.02, 0.01]} />
        <meshStandardMaterial color="#FFA726" emissive="#FFA726" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-0.05, 0.0, 0.016]}>
        <boxGeometry args={[0.5, 0.02, 0.01]} />
        <meshStandardMaterial color="#FF8C42" emissive="#FF8C42" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.12, -0.08, 0.016]}>
        <boxGeometry args={[0.35, 0.02, 0.01]} />
        <meshStandardMaterial color="#FFA726" emissive="#FFA726" emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[-0.25, -0.16, 0.016]}>
        <boxGeometry args={[0.15, 0.02, 0.01]} />
        <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

// D. Analytics / Dashboard Chart Widget
function DashboardWidget() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[0.85, 0.55, 0.02]} />
        <meshStandardMaterial color="#111111" transparent opacity={0.8} />
      </mesh>
      {/* Border */}
      <mesh>
        <boxGeometry args={[0.87, 0.57, 0.022]} />
        <meshStandardMaterial color="#FF8C42" wireframe transparent opacity={0.2} />
      </mesh>
      {/* Chart bars */}
      <mesh position={[-0.22, -0.05, 0.012]}>
        <boxGeometry args={[0.07, 0.22, 0.01]} />
        <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-0.08, 0.04, 0.012]}>
        <boxGeometry args={[0.07, 0.4, 0.01]} />
        <meshStandardMaterial color="#FFA726" emissive="#FFA726" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.06, -0.09, 0.012]}>
        <boxGeometry args={[0.07, 0.14, 0.01]} />
        <meshStandardMaterial color="#FF8C42" emissive="#FF8C42" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.2, 0.08, 0.012]}>
        <boxGeometry args={[0.07, 0.48, 0.01]} />
        <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

// E. API Connection Node
function ConnectionWidget() {
  const orbRef = useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    if (orbRef.current) {
      orbRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={orbRef}>
      {/* Central Node */}
      <mesh>
        <sphereGeometry args={[0.14, 16, 16]} />
        <meshStandardMaterial color="#FF8C42" emissive="#FF8C42" emissiveIntensity={0.6} />
      </mesh>
      {/* Outer orbits */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.45, 0.01, 8, 32]} />
        <meshBasicMaterial color="#FF6B35" opacity={0.3} transparent />
      </mesh>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[0.45, 0.01, 8, 32]} />
        <meshBasicMaterial color="#FFA726" opacity={0.3} transparent />
      </mesh>
      {/* Satellites */}
      <mesh position={[0.32, 0.32, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#FF6B35" />
      </mesh>
      <mesh position={[-0.45, 0, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#FFA726" />
      </mesh>
      <mesh position={[0.2, -0.4, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#FF8C42" />
      </mesh>
    </group>
  );
}

// F. Digital Architecture Blocks
function ArchitectureWidget() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial
        color="#FFA726"
        emissive="#FFA726"
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// 3. Main Elements Container
function FloatingElements() {
  return (
    <>
      {/* 1. Browser Window (Top Left) */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
        <group position={[-3.2, 1.6, -1.5]} rotation={[0.1, 0.3, -0.05]}>
          <BrowserWidget />
        </group>
      </Float>

      {/* 2. Mobile Phone Mockup (Bottom Right) */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.5}>
        <group position={[2.8, -1.5, -0.8]} rotation={[-0.1, -0.4, 0.1]}>
          <MobileWidget />
        </group>
      </Float>

      {/* 3. Code Editor Panel (Top Right) */}
      <Float speed={1.3} rotationIntensity={0.3} floatIntensity={1.3}>
        <group position={[3, 1.8, -2]} rotation={[0.05, -0.25, 0.05]}>
          <CodeWidget />
        </group>
      </Float>

      {/* 4. Analytics Dashboard Widget (Bottom Left) */}
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.4}>
        <group position={[-2.8, -1.6, 0.5]} rotation={[0.1, 0.2, -0.1]}>
          <DashboardWidget />
        </group>
      </Float>

      {/* 5. API Connection Node (Left Side) */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.6}>
        <group position={[-4, 0, 1]} rotation={[0, 0, 0.2]}>
          <ConnectionWidget />
        </group>
      </Float>

      {/* 6. Digital Architecture Block (Right Side) */}
      <Float speed={1.6} rotationIntensity={1.5} floatIntensity={1.2}>
        <group position={[4.2, 0.2, 0.5]}>
          <ArchitectureWidget />
        </group>
      </Float>
    </>
  );
}

// Camera parallax script based on cursor coordinates
function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 1.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 1.5, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      className="cursor-grab active:cursor-grabbing w-full h-full"
      dpr={[1, 2]}
    >
      {/* Warm Orange / Amber ambient and point lighting */}
      <ambientLight intensity={0.4} color="#FFF8F0" />
      <pointLight position={[10, 8, 8]} intensity={1.5} color="#FF6B35" />
      <pointLight position={[-10, -8, -5]} intensity={0.8} color="#FFA726" />
      <directionalLight position={[0, 5, 2]} intensity={0.5} color="#FFF8F0" />
      
      <CentralCore />
      <FloatingElements />
      
      {/* Starfield with orange-tinted speed/saturation */}
      <Stars radius={50} depth={50} count={900} factor={3} saturation={0.7} fade speed={0.4} />
      <CameraRig />
    </Canvas>
  );
}
