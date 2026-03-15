import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Layers3,
  Linkedin,
  ShieldCheck,
} from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "Core Java Developer",
];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);

  const highlights = [
    {
      label: "Primary Focus",
      value: "Java and Full Stack Engineering",
      icon: Layers3,
    },
    {
      label: "Working Style",
      value: "Clean, scalable, production-minded delivery",
      icon: ShieldCheck,
    },
  ];

  const profileLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kishore-k-0717542a1/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/Kishore22101",
      icon: Github,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/10 via-transparent to-fuchsia-900/10" style={{ zIndex: 0 }} />

      <div className="section-wrap">
        <div className="glass-panel rounded-[2rem] px-6 py-8 md:px-12 md:py-14 relative z-10 grid items-center gap-8 lg:gap-12 lg:grid-cols-[1.2fr_0.95fr]">
          <div className="order-2 lg:order-1 relative z-10 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="section-kicker mb-6"
            >
              <span className="royal-glow-dot" />
              Portfolio Presentation
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl xl:text-6xl font-extrabold mb-4 text-violet-50 leading-[1.08]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Designing and building
              <span className="block section-accent mt-2">refined digital experiences</span>
            </motion.h1>
            <div className="royal-divider lg:mx-0" />

            <motion.p
              className="text-2xl md:text-3xl text-violet-100 font-semibold mb-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              Kishore Kumar
            </motion.p>

            <motion.p
              key={currentRole}
              className="text-xl md:text-2xl text-violet-200 font-medium min-h-[2rem]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {ROLES[currentRole]}
            </motion.p>

            <motion.p
              className="text-lg text-violet-100/85 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              B.Tech - Artificial Intelligence & Data Science
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-violet-100/70 mt-3 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              I develop polished full-stack applications with strong backend thinking, disciplined front-end execution, and an emphasis on clarity, performance, and professional presentation.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#about"
                className="btn-neon inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Explore Profile <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="/assets/Kishore_Resume.pdf"
                download
                className="btn-ghost inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Download Resume <Download size={18} />
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              {profileLinks.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="glass-panel-soft rounded-xl px-4 py-3 inline-flex items-center gap-3 text-violet-100/90"
                >
                  <Icon size={18} className="text-violet-300" />
                  <span className="text-sm font-medium">{label}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {highlights.map(({ label, value, icon: Icon }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="info-card royal-hover rounded-2xl p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-violet-300" />
                  </div>
                  <p className="meta-label mb-2">{label}</p>
                  <p className="meta-value text-base leading-relaxed">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end mb-2 lg:mb-0">
            <motion.div
              className="hero-frame royal-surface w-full max-w-[380px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="glass-panel-soft rounded-[1.75rem] px-6 py-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="meta-label mb-2">Profile</p>
                    <p className="meta-value text-xl">Kishore Kumar</p>
                  </div>
                  <div className="section-kicker text-xs">Available for opportunities</div>
                </div>

                <motion.div
                  className="relative mx-auto w-36 h-36 md:w-48 md:h-48 rounded-[1.5rem] overflow-hidden"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 180, damping: 14 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-[1.5rem] border border-violet-300/60 shadow-[0_0_32px_rgba(139,92,246,0.45)]"
                    animate={{
                      boxShadow: [
                        "0 0 14px rgba(139,92,246,0.35)",
                        "0 0 32px rgba(168,85,247,0.45)",
                        "0 0 18px rgba(139,92,246,0.38)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  />

                  <motion.img
                    src="/assets/kishore.png"
                    alt="Kishore Kumar"
                    className="relative z-10 w-full h-full rounded-[1.5rem] object-contain p-1.5 border border-[#18102b] bg-[#120c22]"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  />
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="info-card rounded-2xl p-4 text-left">
                    <p className="meta-label mb-2">Discipline</p>
                    <p className="meta-value text-sm leading-relaxed">Artificial Intelligence and Data Science</p>
                  </div>
                  <div className="info-card rounded-2xl p-4 text-left">
                    <p className="meta-label mb-2">Location</p>
                    <p className="meta-value text-sm leading-relaxed">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
