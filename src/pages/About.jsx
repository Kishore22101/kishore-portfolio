import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-yellow-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-28 left-12 w-80 h-80 bg-yellow-300/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-28 right-12 w-80 h-80 bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-yellow-500">Me</span>
      </motion.h2>

      {/* Card */}
      <motion.div
        className="relative max-w-4xl mx-auto bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl border border-yellow-200/50 dark:border-gray-700 rounded-3xl shadow-[0_8px_40px_-10px_rgba(0,0,0,0.25)] p-10 md:p-14"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I'm a passionate{" "}
          <span className="font-semibold text-yellow-500">B.Tech</span> 3rd year student in{" "}
          <span className="font-semibold text-yellow-500">Artificial Intelligence & Data Science</span>{" "}
          at <span className="font-semibold text-yellow-500">J.N.N Institute of Engineering</span>.  
          I enjoy building meaningful technology that creates real impact.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I completed my Higher Secondary Education (11th & 12th) at{" "}
          <span className="font-semibold text-yellow-500">
            D.V.S Reddy Higher Secondary School, Minjur
          </span>, where I strengthened my foundation in academics and discipline.
        </p>

        {/* ✅ Updated Point 1 */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          My core interests lie in{" "}
          <span className="font-semibold text-yellow-500">Java Programming</span> and{" "}
          <span className="font-semibold text-yellow-500">Full Stack Web Development</span>. 
          I enjoy developing smooth, functional applications that merge powerful backend logic with clean frontend design.
        </p>

        {/* ✅ Updated Point 2 */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I’m continuously learning and exploring new tools, frameworks, and technologies to enhance my development and problem-solving skills.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong className="text-yellow-500">Languages:</strong> English, Tamil
        </p>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-yellow-400 mb-4">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "SQL",
              "Python",
              "C",
            ].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 text-sm md:text-base bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-full border border-yellow-300/60 dark:border-gray-600 shadow-sm hover:shadow-yellow-400/30 transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
