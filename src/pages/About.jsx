import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Languages, Sparkles, Target } from "lucide-react";

const PROFILE_CARDS = [
  {
    title: "Education",
    value: "B.Tech in Artificial Intelligence and Data Science",
    icon: GraduationCap,
  },
  {
    title: "Primary Direction",
    value: "Java development and full stack web application engineering",
    icon: Target,
  },
  {
    title: "Communication",
    value: "English, Tamil, and German (A1)",
    icon: Languages,
  },
  {
    title: "Approach",
    value: "Continuous learning, disciplined execution, and clean presentation",
    icon: Sparkles,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="relative py-24 overflow-hidden"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55 }}
    >
      <div className="absolute top-28 left-12 w-80 h-80 bg-violet-500/18 blur-[120px] rounded-full pointer-events-none hidden md:block" />
      <div className="absolute bottom-28 right-12 w-80 h-80 bg-fuchsia-500/18 blur-[120px] rounded-full pointer-events-none hidden md:block" />

      <div className="section-wrap">
        <div className="text-center mb-14">
          <div className="section-kicker mb-5"><span className="royal-glow-dot" />Professional Overview</div>
        <motion.h2
          className="section-title text-center text-4xl md:text-5xl mb-5"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="section-accent">Me</span>
        </motion.h2>
          <div className="royal-divider" />
          <p className="section-subtitle">
            A concise profile of my academic background, technical direction, and the standards I bring to software development.
          </p>
        </div>

        <motion.div
          className="relative glass-panel royal-surface rounded-3xl p-8 md:p-14"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-lg text-violet-100/85 leading-relaxed mb-6">
                I am a dedicated <span className="font-semibold text-violet-300">B.Tech</span> third-year student in <span className="font-semibold text-violet-300">Artificial Intelligence and Data Science</span> at <span className="font-semibold text-violet-300">J.N.N Institute of Engineering</span>, focused on building meaningful and dependable software.
              </p>

              <p className="text-lg text-violet-100/85 leading-relaxed mb-6">
                I completed my Higher Secondary Education at <span className="font-semibold text-violet-300">D.V.S Reddy Higher Secondary School, Minjur</span>, where I built a disciplined academic foundation and a consistent interest in technology.
              </p>

              <p className="text-lg text-violet-100/85 leading-relaxed mb-6">
                My strongest interests are in <span className="font-semibold text-violet-300">Java development</span> and <span className="font-semibold text-violet-300">full stack web engineering</span>. I prefer applications that combine strong logic, efficient architecture, and a polished visual finish.
              </p>

              <p className="text-lg text-violet-100/85 leading-relaxed">
                I continue to refine my technical depth through practical projects, internships, and ongoing study of modern development tools and frameworks.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              {PROFILE_CARDS.map(({ title, value, icon: Icon }, index) => (
                <motion.div
                  key={title}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="info-card royal-hover rounded-2xl p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-violet-300" />
                  </div>
                  <p className="meta-label mb-2">{title}</p>
                  <p className="meta-value text-sm leading-relaxed">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-violet-400/12">
            <h3 className="text-xl font-semibold text-violet-200 mb-4">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "Java",
                "Python",
                "C",
                "Swift",
                "HTML",
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "MySQL",
                "GitHub",
                "Machine Learning",
                "Data Analysis",
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
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
