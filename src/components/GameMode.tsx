"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import dynamic from "next/dynamic";
import {
  X,
  Minimize2,
  Maximize2,
  Mail,
  Phone,
  Linkedin,
  CodeXml,
  BriefcaseBusiness,
  Download,
  ScrollText,
  Sparkles,
} from "lucide-react";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import content from "@/data/content.json";
import { useGamification } from "@/contexts/GamificationContext";
import Image from "next/image";

const KeyboardHint = dynamic(() => import("./KeyboardHint"), { ssr: false });
const DraggableBubble = dynamic(() => import("./DraggableBubble"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });
const DraggableParticles = dynamic(() => import("./DraggableParticles"), {
  ssr: false,
});
const CongratulationsModal = dynamic(() => import("./CongratulationsModal"), {
  ssr: false,
});

type SectionId = "about" | "experience" | "skills" | "education" | "contact";

interface SectionModal {
  id: SectionId;
  title: string;
  component: React.ReactNode;
  initialPosition: { x: number; y: number };
  isVisible: boolean;
  isMinimized: boolean;
}

export default function GameMode() {
  const router = useRouter();
  const { completeAction, completedActions } = useGamification();
  const [showCongratulationsModal, setShowCongratulationsModal] =
    useState(false);
  const [modals, setModals] = useState<Record<SectionId, SectionModal>>({
    about: {
      id: "about",
      title: "About Me",
      component: <AboutSection />,
      initialPosition: { x: 100, y: 100 },
      isVisible: false,
      isMinimized: false,
    },
    experience: {
      id: "experience",
      title: "Experience",
      component: <ExperienceSection />,
      initialPosition: { x: 150, y: 150 },
      isVisible: false,
      isMinimized: false,
    },
    skills: {
      id: "skills",
      title: "Skills",
      component: <SkillsSection />,
      initialPosition: { x: 200, y: 200 },
      isVisible: false,
      isMinimized: false,
    },
    education: {
      id: "education",
      title: "Education",
      component: <EducationSection />,
      initialPosition: { x: 250, y: 250 },
      isVisible: false,
      isMinimized: false,
    },
    contact: {
      id: "contact",
      title: "Contact",
      component: <ContactSection />,
      initialPosition: { x: 300, y: 300 },
      isVisible: false,
      isMinimized: false,
    },
  });

  const showModal = (id: SectionId) => {
    setModals((prev) => ({
      ...prev,
      [id]: { ...prev[id], isVisible: true, isMinimized: false },
    }));
  };

  const hideModal = (id: SectionId) => {
    setModals((prev) => ({
      ...prev,
      [id]: { ...prev[id], isVisible: false },
    }));
  };

  const toggleMinimize = (id: SectionId) => {
    setModals((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: !prev[id].isMinimized },
    }));
  };

  const handleGoldenButtonClick = () => {
    completeAction("action_10");
    setShowCongratulationsModal(true);
  };

  // Check if 9 actions are completed (all except action_10)
  const shouldShowGoldenButton = completedActions.size === 9;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 overflow-hidden bg-background cursor-none"
    >
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Draggable Particles Background */}
      <DraggableParticles />

      {/* Center Video with Name and Contact */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative flex flex-col items-center gap-6">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
          >
            {content.personal.name}
          </motion.h1>

          {/* Video */}
          <div className="w-96 h-96 rounded-full border-2 border-primary-500/30 flex items-center justify-center">
            <Image
              alt="blink"
              src="/model/blink.jpg"
              width="400"
              height="400"
              className="rounded-full"
            />
            {/*<video
              className="w-80 h-80 rounded-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              ref={(video) => {
                if (video) {
                  (video as HTMLVideoElement).playbackRate = 3;
                }
              }}
            >
              <source src="/model/blink.mp4" type="video/mp4" />
            </video>*/}
          </div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
          >
            <a
              href={`mailto:${content.contact.email}`}
              className="glass px-4 py-2 rounded-full text-sm hover:glass-strong transition-all hover:scale-105 flex items-center gap-2"
            >
              <Mail size={16} className="text-primary-400" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${content.contact.phone}`}
              className="glass px-4 py-2 rounded-full text-sm hover:glass-strong transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone size={16} className="text-primary-400" />
              <span>Call</span>
            </a>
            <a
              href={content.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-4 py-2 rounded-full text-sm hover:glass-strong transition-all hover:scale-105 flex items-center gap-2"
            >
              <Linkedin size={16} className="text-primary-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/resume/MohsenSamiResume.pdf"
              download
              onClick={() => completeAction("action_1")}
              className="glass px-4 py-2 rounded-full text-sm hover:glass-strong transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download size={16} className="text-primary-400" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Switch to Simple Mode button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        onClick={() => {
          completeAction("action_7");
          router.push("/simple");
        }}
        className="absolute top-8 left-8 flex items-center gap-2 px-3 py-2 text-foreground/55 hover:text-foreground/75 transition-colors pointer-events-auto"
      >
        <ScrollText size={14} />
        <span className="text-xs">
          {content.gameMode.buttons.switchToSimple}
        </span>
      </motion.button>

      {/* Draggable Bubble for Skills (Right - drag left) */}
      <DraggableBubble
        onReveal={() => showModal("skills")}
        direction="left"
        icon={<CodeXml size={32} className="text-primary-300" />}
        hint={content.gameMode.hints.skills}
      />

      {/* Draggable Bubble for Experience (Left - drag right) */}
      <DraggableBubble
        onReveal={() => showModal("experience")}
        direction="right"
        icon={<BriefcaseBusiness size={32} className="text-primary-300" />}
        hint={content.gameMode.hints.experience}
      />

      {/* Keyboard Hints: About, Education & Contact (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="absolute bottom-24 right-24 flex flex-col gap-3"
      >
        <div className="flex items-center gap-3">
          <p className="text-sm text-foreground/70">press</p>
          <KeyboardHint
            keyLabel={content.gameMode.hints.aboutKey}
            onClick={() => showModal("about")}
          />
          <p className="text-sm text-foreground/70">
            {content.gameMode.hints.about}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-foreground/70">press</p>
          <KeyboardHint
            keyLabel={content.gameMode.hints.educationKey}
            onClick={() => showModal("education")}
          />
          <p className="text-sm text-foreground/70">
            {content.gameMode.hints.education}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-foreground/70">press</p>
          <KeyboardHint
            keyLabel={content.gameMode.hints.contactKey}
            onClick={() => showModal("contact")}
          />
          <p className="text-sm text-foreground/70">
            {content.gameMode.hints.contact}
          </p>
        </div>
      </motion.div>

      {/* Golden Achievement Button (Bottom Center) */}
      <AnimatePresence>
        {shouldShowGoldenButton && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 200,
            }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 pointer-events-auto"
          >
            <motion.button
              onClick={handleGoldenButtonClick}
              className="relative px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold rounded-full shadow-lg shadow-yellow-500/50 transition-all hover:scale-110 flex items-center gap-2"
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(234, 179, 8, 0.5)",
                  "0 10px 60px rgba(234, 179, 8, 0.8)",
                  "0 10px 40px rgba(234, 179, 8, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-5 h-5" />
              <span>{content.achievements.goldenButtonLabel}</span>
              <Sparkles className="w-5 h-5" />

              {/* Animated particles around button */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: Math.cos((i * Math.PI * 2) / 8) * 40,
                    y: Math.sin((i * Math.PI * 2) / 8) * 40,
                    opacity: [1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Draggable Modals */}
      <AnimatePresence>
        {Object.values(modals).map((modal) =>
          modal.isVisible ? (
            <DraggableModal
              key={modal.id}
              modal={modal}
              onClose={() => hideModal(modal.id)}
              onToggleMinimize={() => toggleMinimize(modal.id)}
            />
          ) : null,
        )}
      </AnimatePresence>

      {/* Keyboard Handler */}
      <KeyboardHandler
        onShowAbout={() => showModal("about")}
        onShowEducation={() => showModal("education")}
        onShowContact={() => showModal("contact")}
        onKeyboardUsed={() => completeAction("action_4")}
      />

      {/* Congratulations Modal */}
      <CongratulationsModal
        isOpen={showCongratulationsModal}
        onClose={() => setShowCongratulationsModal(false)}
      />
    </motion.div>
  );
}

function DraggableModal({
  modal,
  onClose,
  onToggleMinimize,
}: {
  modal: SectionModal;
  onClose: () => void;
  onToggleMinimize: () => void;
}) {
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      initial={{
        x: modal.initialPosition.x,
        y: modal.initialPosition.y,
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: modal.isMinimized ? 0.5 : 1,
        opacity: 1,
      }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="fixed rounded-2xl shadow-2xl shadow-primary-500/30 z-50"
      style={{
        width: modal.isMinimized ? "300px" : "420px",
        maxWidth: "95vw",
        maxHeight: "80vh",
        background: "rgba(8, 12, 25, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(83, 127, 231, 0.2)",
      }}
    >
      {/* Window Header */}
      <div
        className="flex items-center justify-between p-4 border-b border-primary-500/20 cursor-move"
        onPointerDown={(e) => dragControls.start(e)}
      >
        <h3 className="font-bold text-lg bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
          {modal.title}
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleMinimize}
            className="p-2 rounded-lg hover:bg-primary-500/20 transition-colors"
          >
            {modal.isMinimized ? (
              <Maximize2 size={16} className="text-foreground/70" />
            ) : (
              <Minimize2 size={16} className="text-foreground/70" />
            )}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-red-500/20 transition-colors"
          >
            <X size={16} className="text-foreground/70" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      {!modal.isMinimized && (
        <div className="overflow-y-auto max-h-[60vh]">
          <div className="modal-embed">{modal.component}</div>
        </div>
      )}
    </motion.div>
  );
}

function KeyboardHandler({
  onShowAbout,
  onShowEducation,
  onShowContact,
  onKeyboardUsed,
}: {
  onShowAbout: () => void;
  onShowEducation: () => void;
  onShowContact: () => void;
  onKeyboardUsed: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "a") {
        onShowAbout();
        onKeyboardUsed();
      }
      if (key === "e") {
        onShowEducation();
        onKeyboardUsed();
      }
      if (key === "c") {
        onShowContact();
        onKeyboardUsed();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onShowAbout, onShowEducation, onShowContact, onKeyboardUsed]);

  return null;
}
