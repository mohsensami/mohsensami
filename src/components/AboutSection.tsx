"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import content from "@/data/content.json";

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 relative overflow-hidden snap-start"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
            {content.sections.about.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/20 max-h-[650px]">
                <Image
                  src="/model/original-model.jpg"
                  // src="/model/original-model.png"
                  alt={content.sections.about.videoAlt}
                  width={650}
                  height={650}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">
                  {content.sections.about.subtitle}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-primary-500 rounded-full" />
              </div>

              {content.sections.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-foreground/80 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-2 gap-6 pt-6">
                {content.sections.about.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="glass p-6 rounded-xl hover:glass-strong transition-all duration-300"
                  >
                    <div className="text-4xl font-bold text-primary-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
