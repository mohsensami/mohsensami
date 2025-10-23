"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone, Download } from "lucide-react";
import dynamic from "next/dynamic";
import content from "@/data/content.json";
import { useGamification } from "@/contexts/GamificationContext";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10" />,
});

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const { completeAction } = useGamification();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start"
    >
      <Scene3D />

      <motion.div
        className="relative z-10 container mx-auto px-6 py-20 md:py-0 text-center"
        style={{ opacity, scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {content.personal.name}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl font-light text-foreground/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content.personal.title}
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12 text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={`tel:${content.contact.phone}`}
              className="flex items-center gap-2 hover:text-primary-500 transition-colors"
            >
              <Phone size={18} strokeWidth={2} />
              <span>{content.contact.phone}</span>
            </a>
            <a
              href={`mailto:${content.contact.email}`}
              className="flex items-center gap-2 hover:text-primary-500 transition-colors"
            >
              <Mail size={18} strokeWidth={2} />
              <span>{content.contact.email}</span>
            </a>
            <a
              href={content.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-500 transition-colors"
            >
              <Linkedin size={18} strokeWidth={2} />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} strokeWidth={2} />
              <span>{content.personal.location}</span>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/70 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {content.personal.bio.split(content.personal.yearsExperience)[0]}
            <span className="font-bold text-primary-500">
              {content.personal.yearsExperience}
            </span>
            {content.personal.bio.split(content.personal.yearsExperience)[1]}
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="/resume/MohsenSamiResume.pdf"
              download
              onClick={() => completeAction("action_1")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={18} />
              <span>{content.gameMode.buttons.resumeDownload}</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-500 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
