"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface KeyboardHintProps {
  keyLabel: string;
  onClick: () => void;
}

export default function KeyboardHint({ keyLabel, onClick }: KeyboardHintProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.kbd
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.15,
        boxShadow: "0 0 20px rgba(83, 127, 231, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      className="px-1.5 py-0.5 bg-primary-500/20 border border-primary-500 rounded text-xs w-6 text-center cursor-pointer transition-all hover:bg-primary-500/30 hover:border-primary-400 inline-flex items-center justify-center"
    >
      <motion.span
        animate={{
          scale: isHovered ? 1 / 1.15 : 1,
          color: isHovered ? "#87B1F9" : "#6B95F0",
        }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        {keyLabel}
      </motion.span>
    </motion.kbd>
  );
}
