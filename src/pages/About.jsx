import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-28 left-12 w-80 h-80 bg-violet-500/18 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-28 right-12 w-80 h-80 bg-fuchsia-500/18 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="section-wrap">
        <motion.h2
          className="section-title text-center text-4xl md:text-5xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="section-accent">Me</span>
        </motion.h2>

        <motion.div
          className="relative glass-panel rounded-3xl p-10 md:p-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-violet-100/85 leading-relaxed mb-6">
            I'm a passionate{" "}
            <span className="font-semibold text-violet-300">B.Tech</span> 3rd year student in{" "}
            <span className="font-semibold text-violet-300">Artificial Intelligence & Data Science</span>{" "}
            at <span className="font-semibold text-violet-300">J.N.N Institute of Engineering</span>.
            I enjoy building meaningful technology that creates real impact.
          </p>

          <p className="text-lg text-violet-100/85 leading-relaxed mb-6">
            I completed my Higher Secondary Education (11th & 12th) at{" "}
            <span className="font-semibold text-violet-300">
              D.V.S Reddy Higher Secondary School, Minjur
            </span>, where I strengthened my foundation in academics and discipline.
          </p>

          <p className="text-lg text-violet-100/85 leading-relaxed mb-6">
            My core interests lie in{" "}
            <span className="font-semibold text-violet-300">Java Programming</span> and{" "}
            <span className="font-semibold text-violet-300">Full Stack Web Development</span>.
            I enjoy developing smooth, functional applications that merge powerful backend logic with clean frontend design.
          </p>

          <p className="text-lg text-violet-100/85 leading-relaxed mb-6">
            I’m continuously learning and exploring new tools, frameworks, and technologies to enhance my development and problem-solving skills.
          </p>

          <p className="text-lg text-violet-100/85 leading-relaxed">
            <strong className="text-violet-300">Languages:</strong> English, Tamil
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-violet-200 mb-4">
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
                  className="chip px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
