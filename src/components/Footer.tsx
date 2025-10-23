"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
  return (
    <footer className="glass py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-foreground/60 flex items-center justify-center gap-2">
            {content.footer.builtWith}
            <Heart
              className="w-4 h-4 text-primary-500 fill-primary-500"
              strokeWidth={2}
            />
            {content.footer.by} {content.footer.author}
          </p>
          <p className="text-foreground/40 text-sm mt-2">
            © {new Date().getFullYear()} {content.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
