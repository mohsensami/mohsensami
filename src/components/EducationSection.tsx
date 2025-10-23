"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar } from "lucide-react";
import content from "@/data/content.json";

export default function EducationSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="education" className="min-h-screen py-20 relative snap-start">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
            {content.sections.education.title}
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-2xl hover:glass-strong transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
          >
            <div className="flex items-start gap-6">
              <div className="glass p-4 rounded-full">
                <GraduationCap
                  className="w-8 h-8 text-primary-500"
                  strokeWidth={2}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {content.education.degree}
                </h3>
                <p className="text-xl text-primary-500 font-semibold mb-4">
                  {content.education.institution}
                </p>

                <div className="flex items-center gap-2 text-foreground/60 mb-6">
                  <Calendar size={18} strokeWidth={2} />
                  <span>{content.education.period}</span>
                </div>

                <div className="space-y-3 text-foreground/80">
                  {content.education.descriptions.map((desc, index) => (
                    <p key={index} className="leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
