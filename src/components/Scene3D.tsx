"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Single minimal ring with subtle rotation and mouse interaction
function MinimalRing({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      const t = state.clock.getElapsedTime();

      // Base rotation
      ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
      ringRef.current.rotation.y = t * 0.15;

      // Mouse-based rotation (subtle)
      ringRef.current.rotation.x += (mousePosition.y - 0.5) * 0.3;
      ringRef.current.rotation.y += (mousePosition.x - 0.5) * 0.3;

      // Floating animation
      ringRef.current.position.y = Math.sin(t * 0.3) * 0.2;

      // Mouse-based position offset (subtle)
      ringRef.current.position.x = (mousePosition.x - 0.5) * 0.5;
      ringRef.current.position.z = (mousePosition.y - 0.5) * 0.5;

      // Mouse-based scale (subtle pulse on hover)
      const distanceFromCenter = Math.sqrt(
        Math.pow(mousePosition.x - 0.5, 2) + Math.pow(mousePosition.y - 0.5, 2)
      );
      const scale = 1 + (0.5 - distanceFromCenter) * 0.2;
      ringRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <torusGeometry args={[2, 0.02, 16, 100]} />
      <meshStandardMaterial
        color="#537FE7"
        transparent
        opacity={0.15}
        emissive="#6B95F0"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Ultra minimal particle field
function MinimalParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const particlesCount = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 4 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      pos[i] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const t = state.clock.getElapsedTime();
      particlesRef.current.rotation.y = t * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#87B1F9"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  );
}

// Interactive glassmorphic background - exported for use across the app
export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    let hasInteracted = false;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });

      // Detect significant mouse movement (interaction)
      if (!hasInteracted) {
        const distance = Math.sqrt(
          Math.pow(e.clientX / window.innerWidth - 0.5, 2) +
            Math.pow(e.clientY / window.innerHeight - 0.5, 2)
        );
        if (distance > 0.1) {
          hasInteracted = true;
          // Trigger gamification action
          const event = new CustomEvent("scene3d-interaction");
          window.dispatchEvent(event);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 3D Particles Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          style={{ opacity: 0.6 }}
        >
          <ambientLight intensity={0.15} />
          <MinimalParticles />
        </Canvas>
      </div>

      {/* Gradient orbs that follow mouse */}
      <div
        className="absolute w-[540px] h-[540px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(83, 127, 231, 0.6) 0%, rgba(107, 149, 240, 0.35) 50%, transparent 70%)",
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: "translate(-50%, -50%)",
          transition:
            "left 0.8s cubic-bezier(0.4, 0, 0.2, 1), top 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(135, 177, 249, 0.5) 0%, rgba(175, 203, 251, 0.25) 50%, transparent 70%)",
          left: `${(1 - mousePosition.x) * 100}%`,
          top: `${(1 - mousePosition.y) * 100}%`,
          transform: "translate(-50%, -50%)",
          transition:
            "left 1s cubic-bezier(0.4, 0, 0.2, 1), top 1s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* Glassmorphic layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/50 via-background/70 to-primary-900/50" />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(83, 127, 231, 0.25) 0%, transparent 50%)`,
          transition: "background 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}

// Only the 3D ring and particles (no background) for hero section
export default function Scene3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ opacity: 0.6 }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={0.2} color="#537FE7" />

        <MinimalRing mousePosition={mousePosition} />
        <MinimalParticles />
      </Canvas>
    </div>
  );
}
