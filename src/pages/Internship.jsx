import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Internship() {
  const reduceMotion = useReducedMotion();

  const internships = [
    {
      title: "Data Science Intern — CODTECH IT SOLUTIONS",
      duration: "Jan 25, 2025 – Mar 25, 2025",
      desc: "Performed exploratory data analysis and built ML models for prediction and insights using real datasets. Gained practical experience in data preprocessing, visualization, and performance evaluation.",
      tech: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      color: "from-violet-500 to-indigo-500",
    },
    {
      title: "Full Stack Web Development Intern — Edu Tantr",
      duration: "May 10, 2025 – Aug 10, 2025",
      desc: "Worked with modern front-end and back-end technologies to build responsive web apps and contributed to real-time deployment practices.",
      projectDetails: [
        "Developed a full-featured Food Delivery App named EatzUp with login, cart, order, and payment modules.",
        "Integrated MongoDB Atlas for cloud database storage and optimized API responses.",
        "Implemented JWT authentication, Axios integration, and PDF invoice generation.",
        "Used Tailwind CSS and React for a modern, responsive, and animated UI."
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      color: "from-fuchsia-500 to-violet-500",
    },
  ];

  return (
    <motion.section
      id="internship"
      className="py-20 text-center"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="section-wrap">
        <div className="text-center mb-12">
          <div className="section-kicker mb-5"><span className="royal-glow-dot" />Experience</div>
        <motion.h2
          className="section-title text-4xl font-bold mb-5"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <Briefcase className="inline-block mr-3 text-violet-400" size={36} />
          My Internships
        </motion.h2>
          <div className="royal-divider" />
          <p className="section-subtitle">
            Practical experience that strengthened my foundation in data science, full stack engineering, and structured project delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {internships.map((p, i) => (
            <motion.div
              key={i}
              className={`bg-gradient-to-r ${p.color} p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300`}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ delay: i * 0.08, duration: 0.42 }}
            >
              <div className="glass-panel royal-surface royal-hover rounded-2xl p-6 h-full flex flex-col justify-between text-left">
                <div>
                  <div className="section-kicker text-xs mb-4">Internship Experience</div>
                  <h3 className="text-2xl font-semibold text-violet-200 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-violet-100/60 mb-3">
                    {p.duration}
                  </p>
                  <p className="text-violet-100/80 mb-3 leading-relaxed">
                    {p.desc}
                  </p>

                  {p.projectDetails && (
                    <ul className="text-violet-100/75 list-disc list-inside mb-4 space-y-1">
                      {p.projectDetails.map((detail, j) => (
                        <li key={j} className="leading-snug">{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="chip px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
