"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Sparkles } from "lucide-react";
import content from "@/data/content.json";

interface CongratulationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CongratulationsModal({
  isOpen,
  onClose,
}: CongratulationsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] pointer-events-auto"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md mx-4 pointer-events-auto"
          >
            <div className="relative bg-gradient-to-br from-background via-background to-primary-950/20 border-2 border-yellow-500/30 rounded-2xl shadow-2xl shadow-yellow-500/20 overflow-hidden">
              {/* Animated particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 1, 0.2],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-foreground/10 transition-colors z-10"
              >
                <X size={20} className="text-foreground/70" />
              </button>

              {/* Content */}
              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <motion.div
                  className="flex justify-center"
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full">
                    <Sparkles className="w-12 h-12 text-yellow-400" />
                  </div>
                </motion.div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  {content.achievements.modalTitle}
                </h2>

                {/* Message */}
                <div className="space-y-3 text-center">
                  <p className="text-foreground/90">
                    {content.achievements.modalMessage}
                  </p>
                  <p className="text-sm text-foreground/70">
                    {content.achievements.modalSubMessage}
                  </p>
                </div>

                {/* Feedback section */}
                <div className="space-y-3 pt-4 border-t border-foreground/10">
                  <p className="text-sm text-foreground/60 text-center">
                    {content.achievements.feedbackPrompt}
                  </p>
                  <a
                    href={`mailto:${content.contact.email}?subject=Portfolio Feedback - All Achievements Completed!&body=Hi Mohsen,%0D%0A%0D%0AI've just completed all achievements on your portfolio! Here's my feedback:%0D%0A%0D%0A`}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-medium rounded-lg transition-all hover:scale-105 shadow-lg shadow-yellow-500/30"
                  >
                    <Mail size={18} />
                    {content.achievements.emailButtonLabel}
                  </a>
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 border border-foreground/20 hover:bg-foreground/5 rounded-lg transition-all text-sm text-foreground/70 hover:text-foreground"
                >
                  {content.achievements.closeButtonLabel}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
