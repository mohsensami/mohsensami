"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ZohalLogo } from "./logos/ZohalLogo";
import { PropertyHunterLogo } from "./logos/PropertyHunterLogo";
import { MatapLogo } from "./logos/MatapLogo";
import content from "@/data/content.json";
import { useGamification } from "@/contexts/GamificationContext";

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { completeAction } = useGamification();

  const activeIndex = selectedIndex !== null ? selectedIndex : hoveredIndex;

  const getLogoComponent = (company: string, size: string = "w-8 h-8") => {
    if (company === "Zohal") {
      return <ZohalLogo className={size} />;
    } else if (company === "Interactive10 - Property Hunter") {
      return <PropertyHunterLogo className={size} />;
    } else if (company === "Matap") {
      return <MatapLogo className={size === "w-8 h-8" ? "w-6 h-6" : size} />;
    }
    return <Briefcase className="w-6 h-6 text-primary-500" />;
  };

  const renderDetailsCard = (index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20, scale: 0.95, height: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1, height: "auto" }}
      exit={{ opacity: 0, y: -20, scale: 0.95, height: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        height: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className="glass-strong p-6 md:p-8 rounded-2xl shadow-2xl shadow-primary-500/20 overflow-hidden"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="glass p-3 rounded-lg">
          {getLogoComponent(content.experience[index].company)}
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
            {content.experience[index].title}
          </h3>
          <p className="text-lg md:text-xl text-primary-500 font-semibold mb-2">
            {content.experience[index].company}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 text-sm text-foreground/60">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{content.experience[index].period}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{content.experience[index].location}</span>
        </div>
      </div>

      <p className="text-foreground/70 mb-6 italic">
        {content.experience[index].description}
      </p>

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-primary-400 mb-3">
          Key Achievements
        </h4>
        <ul className="space-y-3">
          {content.experience[index].achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
              <span className="text-foreground/80">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section
      id="experience"
      className="min-h-screen py-20 relative overflow-hidden snap-start"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
            {content.sections.experience.title}
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Left: Vertical Timeline Tree */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 via-primary-500 to-primary-500/50" />

              <LayoutGroup>
                <div className="space-y-8">
                  {content.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      layout
                      transition={{
                        layout: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="relative pl-16 cursor-pointer"
                        onMouseEnter={() => {
                          setHoveredIndex(index);
                          completeAction("action_6");
                        }}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => {
                          setSelectedIndex(
                            selectedIndex === index ? null : index
                          );
                          completeAction("action_6");
                        }}
                      >
                        {/* Timeline Node */}
                        <div
                          className={`absolute left-0 w-12 h-12 rounded-full border-4 border-background flex items-center justify-center transition-all duration-300 ${
                            activeIndex === index
                              ? "bg-primary-500 scale-110 shadow-lg shadow-primary-500/50"
                              : "bg-primary-500/50 hover:bg-primary-500"
                          }`}
                        >
                          {getLogoComponent(
                            exp.company,
                            "w-8 h-8 transition-opacity " +
                              (activeIndex === index
                                ? "opacity-100"
                                : "opacity-80")
                          )}
                        </div>

                        {/* Node Content */}
                        <div
                          className={`glass p-4 rounded-lg transition-all duration-300 ${
                            activeIndex === index
                              ? "glass-strong shadow-lg shadow-primary-500/20"
                              : "hover:glass-strong"
                          }`}
                        >
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-primary-500 font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-foreground/60">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Mobile Details Card - shown below each experience */}
                      <motion.div
                        className="md:hidden mt-4 pl-16"
                        layout
                        transition={{
                          layout: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                        }}
                      >
                        <AnimatePresence mode="wait">
                          {selectedIndex === index && renderDetailsCard(index)}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </LayoutGroup>
            </div>

            {/* Right: Details Card - Desktop Only */}
            <div className="hidden md:block relative min-h-[400px]">
              <div className="sticky top-24">
                <AnimatePresence mode="wait">
                  {activeIndex !== null ? (
                    renderDetailsCard(activeIndex)
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex items-center justify-center h-full min-h-[400px]"
                    >
                      <p className="text-foreground/40 text-center text-lg">
                        Hover or click on an experience to view details
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
