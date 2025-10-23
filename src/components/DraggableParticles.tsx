"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGamification } from "@/contexts/GamificationContext";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number; // velocity x
  vy: number; // velocity y
  size: number;
  color: string;
}

interface ExplosionParticle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

export default function DraggableParticles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [explosions, setExplosions] = useState<ExplosionParticle[]>([]);
  const [explodedIds, setExplodedIds] = useState<Set<number>>(new Set());
  const [, forceUpdate] = useState({});
  const particlesRef = useRef<Particle[]>([]);
  const { completeAction } = useGamification();

  // Initialize particles
  useEffect(() => {
    const particleCount = 30;
    const colors = ["#537FE7", "#6B95F0", "#87B1F9", "#AFCBFB"];
    const width = typeof window !== "undefined" ? window.innerWidth : 1920;
    const height = typeof window !== "undefined" ? window.innerHeight : 1080;

    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5, // Slow velocity
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1920;
    const height = typeof window !== "undefined" ? window.innerHeight : 1080;
    let animationFrameId: number;

    const animate = () => {
      particlesRef.current = particlesRef.current.map((particle) => {
        let { x, y, vx, vy } = particle;

        // Apply attraction force to mouse cursor
        const dx = mousePos.x - x;
        const dy = mousePos.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const attractionRadius = 150;

        if (distance < attractionRadius && distance > 0) {
          const force = (1 - distance / attractionRadius) * 0.08;
          vx += (dx / distance) * force;
          vy += (dy / distance) * force;
        }

        // Apply velocity
        x += vx;
        y += vy;

        // Damping
        vx *= 0.98;
        vy *= 0.98;

        // Add slight random movement
        vx += (Math.random() - 0.5) * 0.1;
        vy += (Math.random() - 0.5) * 0.1;

        // Boundary bounce
        if (x < 0 || x > width) vx *= -0.8;
        if (y < 0 || y > height) vy *= -0.8;

        // Keep in bounds
        x = Math.max(0, Math.min(width, x));
        y = Math.max(0, Math.min(height, y));

        return { ...particle, x, y, vx, vy };
      });

      forceUpdate({});
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  // Clean up explosions
  useEffect(() => {
    if (explosions.length > 0) {
      const timer = setTimeout(() => {
        setExplosions([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [explosions]);

  const handleClick = (particle: Particle) => {
    // Mark particle as exploded
    setExplodedIds((prev) => new Set([...prev, particle.id]));

    // Trigger gamification action
    completeAction("action_8");

    // Create explosion particles
    const explosionCount = 12;
    const newExplosions: ExplosionParticle[] = Array.from(
      { length: explosionCount },
      (_, i) => {
        const angle = (i / explosionCount) * Math.PI * 2;
        const speed = Math.random() * 1.5 + 1;
        return {
          id: `${particle.id}-${i}-${Date.now()}`,
          x: particle.x,
          y: particle.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: particle.color,
          size: Math.random() * 3 + 2,
        };
      }
    );

    setExplosions((prev) => [...prev, ...newExplosions]);
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Particles */}
      {particlesRef.current
        .filter((particle) => !explodedIds.has(particle.id))
        .map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              x: particle.x,
              y: particle.y,
              width: particle.size,
              height: particle.size,
            }}
            onClick={() => handleClick(particle)}
            whileHover={{ scale: 1.5 }}
          >
            <motion.div
              className="w-full h-full rounded-full"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: `radial-gradient(circle, ${particle.color}, transparent)`,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              }}
            />
          </motion.div>
        ))}

      {/* Explosion Particles */}
      <AnimatePresence>
        {explosions.map((exp) => (
          <motion.div
            key={exp.id}
            className="absolute pointer-events-none"
            initial={{
              x: exp.x,
              y: exp.y,
              scale: 1,
              opacity: 0.8,
            }}
            animate={{
              x: exp.x + exp.vx * 70,
              y: exp.y + exp.vy * 70,
              scale: [1, 1.2, 0],
              opacity: [0.8, 0.5, 0],
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            style={{
              width: exp.size,
              height: exp.size,
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: `radial-gradient(circle, ${exp.color}, transparent)`,
                boxShadow: `0 0 ${exp.size * 3}px ${exp.color}`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
