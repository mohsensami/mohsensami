"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useGamification } from "@/contexts/GamificationContext";

interface DraggableBubbleProps {
  onReveal: () => void;
  direction: "left" | "right";
  icon: React.ReactNode;
  hint: string;
}

export default function DraggableBubble({
  onReveal,
  direction,
  icon,
  hint,
}: DraggableBubbleProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);
  const { completeAction } = useGamification();

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    setIsDragging(false);

    // Check drag direction and distance
    const dragThreshold = 150;
    const isCorrectDirection =
      direction === "right"
        ? info.offset.x > dragThreshold
        : info.offset.x < -dragThreshold;

    if (isCorrectDirection) {
      // Reveal modal and spring back to original position
      onReveal();
      completeAction("action_2");
      setShouldReset(true);
      setTimeout(() => setShouldReset(false), 50);
    } else {
      // Spring back to original position (wrong direction)
      setShouldReset(true);
      setTimeout(() => setShouldReset(false), 50);
    }
  };

  const ChevronComponent = direction === "right" ? ChevronRight : ChevronLeft;
  const chevronDirection = direction === "right" ? 1 : -1;

  return (
    <>
      {/* Hint Pulsing Chevron and Text */}
      <motion.div
        initial={{ opacity: 0, x: direction === "right" ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
        className={`absolute ${
          direction === "right" ? "left-40" : "right-40"
        } top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none`}
      >
        {direction === "left" && (
          <p className="text-sm text-foreground/70 mr-8">{hint}</p>
        )}

        <div className="relative">
          <motion.div
            animate={{
              x: [0, 8 * chevronDirection, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronComponent
              size={32}
              className="text-primary-500"
              strokeWidth={3}
            />
          </motion.div>
          <motion.div
            animate={{
              x: [0, 8 * chevronDirection, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className={`absolute top-0 ${
              direction === "right" ? "left-0" : "right-0"
            }`}
          >
            <ChevronComponent
              size={32}
              className="text-primary-400"
              strokeWidth={2}
            />
          </motion.div>
        </div>

        {direction === "right" && (
          <p className="text-sm text-foreground/70 ml-8">{hint}</p>
        )}
      </motion.div>

      {/* Draggable 3D Bubble */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.2}
        dragConstraints={
          direction === "right"
            ? { left: 0, right: 300, top: -100, bottom: 100 }
            : { left: -300, right: 0, top: -100, bottom: 100 }
        }
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
        animate={{
          opacity: 1,
          scale: isDragging ? 1.2 : 1,
          x: shouldReset ? 0 : undefined,
          y: shouldReset ? 0 : undefined,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={`absolute top-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing ${
          direction === "right" ? "left-12" : "right-12"
        }`}
        style={{
          zIndex: 40,
        }}
      >
        <div className="relative w-24 h-24">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-primary-500/50 blur-xl" />

          {/* Glassmorphic bubble */}
          <div className="absolute inset-2 rounded-full glass-strong flex items-center justify-center">
            {/* Icon */}
            {icon}
          </div>

          {/* Pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full border-2 border-primary-400/70"
          />
        </div>
      </motion.div>
    </>
  );
}
