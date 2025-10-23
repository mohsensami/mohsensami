"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import content from "@/data/content.json";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: content.contact.phone,
    href: `tel:${content.contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: content.contact.email,
    href: `mailto:${content.contact.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: content.contact.linkedinLabel,
    href: content.contact.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: content.personal.location,
    href: null,
  },
];

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 relative overflow-hidden snap-start"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-xl text-foreground/70 mb-16 max-w-2xl mx-auto"
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group glass block p-6 rounded-xl hover:glass-strong transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="glass p-3 rounded-lg group-hover:glass-strong transition-all">
                        <item.icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground group-hover:text-primary-500 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="glass p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="glass p-3 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
          >
            <p className="text-foreground/60 mb-8">
              Interested in working together? Let&apos;s schedule a call or send
              me an email.
            </p>

            <a
              href={`mailto:${content.contact.email}`}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
