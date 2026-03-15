import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Typewriter-like rotating text
  const roles = [
    "Full Stack Developer 💻",
    "Core Java 🤖",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-fuchsia-900/10 to-indigo-950/20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ backgroundSize: "200% 200%", zIndex: 0 }}
      />

      <motion.div
        className="absolute w-56 h-56 bg-violet-500/20 rounded-full blur-3xl top-12 left-8"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl bottom-16 right-8"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="section-wrap">
        <div className="glass-panel rounded-[2rem] px-6 py-10 md:px-12 md:py-14 relative z-10 flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-10">
          <motion.div
            className="relative w-52 h-52 md:w-72 md:h-72 rounded-full"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-violet-400 shadow-[0_0_32px_#8b5cf6]"
              animate={{
                boxShadow: [
                  "0 0 12px #8b5cf6",
                  "0 0 26px #8b5cf6",
                  "0 0 42px #a855f7",
                  "0 0 26px #8b5cf6",
                  "0 0 12px #8b5cf6",
                ],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <motion.img
              src="/assets/kishore.jpg"
              alt="Kishore Kumar"
              className="relative z-10 w-full h-full rounded-full object-cover shadow-lg border-4 border-[#18102b] bg-[#18102b] p-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          <div className="relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4 text-violet-50"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm <span className="section-accent">Kishore Kumar</span> 👋
            </motion.h1>

            <motion.p
              key={currentRole}
              className="text-xl md:text-2xl text-violet-200 font-medium h-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {roles[currentRole]}
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
              className="text-base text-violet-100/70 mt-1 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              I love turning ideas into powerful full-stack applications — blending Java, creativity, and modern web technologies to craft seamless user experiences.
            </motion.p>

            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#about"
                className="btn-neon"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Know More About Me
              </motion.a>

              <motion.a
                href="/assets/Kishore_Resume.pdf"
                download
                className="btn-ghost"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
