"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect, useCallback } from "react";
import { Sparkles } from "lucide-react";
import content from "@/data/content.json";
import { useGamification } from "@/contexts/GamificationContext";

export default function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeAchievementCards, setActiveAchievementCards] = useState<
    Set<string>
  >(new Set());
  const { completeAction } = useGamification();
  const achievementCompletedRef = useRef(false);

  // Check if all cards have active achievements
  useEffect(() => {
    const totalCards = content.skills.length;
    if (
      activeAchievementCards.size === totalCards &&
      !achievementCompletedRef.current
    ) {
      achievementCompletedRef.current = true;
      completeAction("action_9");
    }
  }, [activeAchievementCards, completeAction]);

  const handleCardAchievementActive = useCallback(
    (categoryName: string, isActive: boolean) => {
      setActiveAchievementCards((prev) => {
        const newSet = new Set(prev);
        if (isActive) {
          newSet.add(categoryName);
        } else {
          newSet.delete(categoryName);
        }
        return newSet;
      });
    },
    []
  );

  return (
    <section
      id="skills"
      className="min-h-screen py-20 relative overflow-hidden snap-start"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
            {content.sections.skills.title}
          </h2>

          <p className="text-center text-foreground/50 mb-12 text-sm">
            Technologies & Tools
          </p>

          {/* Compact Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.skills.map((category, catIndex) => {
              return (
                <CategoryCard
                  key={category.category}
                  category={category}
                  catIndex={catIndex}
                  inView={inView}
                  hoveredCategory={hoveredCategory}
                  setHoveredCategory={setHoveredCategory}
                  onAchievementActiveChange={handleCardAchievementActive}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({
  category,
  catIndex,
  inView,
  hoveredCategory,
  setHoveredCategory,
  onAchievementActiveChange,
}: {
  category: { category: string; items: { name: string; level: number }[] };
  catIndex: number;
  inView: boolean;
  hoveredCategory: string | null;
  setHoveredCategory: (cat: string | null) => void;
  onAchievementActiveChange: (categoryName: string, isActive: boolean) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isShimmering, setIsShimmering] = useState(false);
  const shimmerTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isAchievementActive, setIsAchievementActive] = useState(false);
  const achievementTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);

    // Clear any existing timeout
    if (shimmerTimeoutRef.current) {
      clearTimeout(shimmerTimeoutRef.current);
    }

    // Set shimmer to false after 2 seconds
    shimmerTimeoutRef.current = setTimeout(() => {
      setIsShimmering(false);
    }, 2000);
  };

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (shimmerTimeoutRef.current) {
      clearTimeout(shimmerTimeoutRef.current);
    }
    setIsShimmering(true);

    // Start achievement icon
    if (achievementTimeoutRef.current) {
      clearTimeout(achievementTimeoutRef.current);
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    setIsAchievementActive(true);
    setProgress(0);

    // Update progress every 30ms (3000ms / 100 steps)
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / 3000) * 100, 100);
      setProgress(newProgress);
    }, 30);

    // Set achievement icon to inactive after 3 seconds
    achievementTimeoutRef.current = setTimeout(() => {
      setIsAchievementActive(false);
      setProgress(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }, 3000);
  };

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Notify parent when achievement active state changes
  useEffect(() => {
    onAchievementActiveChange(category.category, isAchievementActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAchievementActive, category.category]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (shimmerTimeoutRef.current) {
        clearTimeout(shimmerTimeoutRef.current);
      }
      if (achievementTimeoutRef.current) {
        clearTimeout(achievementTimeoutRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: catIndex * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        handleMouseEnter();
        setHoveredCategory(category.category);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
        setHoveredCategory(null);
      }}
      className="glass p-6 rounded-xl hover:glass-strong transition-all duration-300 group relative overflow-hidden"
    >
      {/* Animated Background Gradient on Hover */}
      <AnimatePresence>
        {hoveredCategory === category.category && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Shimmer effect on hover */}
      <AnimatePresence>
        {isShimmering && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/10 to-transparent pointer-events-none"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            exit={{ x: "200%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </AnimatePresence>

      {/* Achievement Icon with Circular Progress */}
      {!isMobile && (
        <AnimatePresence>
          {isAchievementActive && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-3 right-3 z-20"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                {/* Circular progress background */}
                <svg className="absolute inset-0 w-8 h-8 -rotate-90">
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    className="stroke-primary-500/20"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Circular progress */}
                  <motion.circle
                    cx="16"
                    cy="16"
                    r="14"
                    className="stroke-primary-400"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                    transition={{ duration: 0.05 }}
                    strokeDasharray="88"
                    strokeDashoffset={88 - (88 * progress) / 100}
                  />
                </svg>
                {/* Sparkles Icon */}
                <Sparkles className="w-4 h-4 text-primary-400 relative z-10" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Floating Particles on Hover */}

      {/* Category Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary-500/20 relative z-10">
        <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
        <motion.h3 className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
          {category.category}
        </motion.h3>
      </div>

      {/* Skills List */}
      <div className="space-y-3 relative z-10">
        {category.items.map((skill, index) => {
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.3,
                delay: catIndex * 0.1 + index * 0.05,
              }}
              className="flex items-center justify-between"
            >
              <span className="text-sm font-medium text-foreground/90">
                {skill.name}
              </span>

              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-primary-950/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 0.8,
                      delay: catIndex * 0.1 + index * 0.05 + 0.2,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                  />
                </div>
                <span className="text-xs font-mono w-8 text-right text-foreground/40">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
