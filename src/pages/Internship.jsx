import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Internship() {
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="section-wrap">
        <motion.h2
          className="section-title text-4xl font-bold mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Briefcase className="inline-block mr-3 text-violet-400" size={36} />
          My Internships
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {internships.map((p, i) => (
            <motion.div
              key={i}
              className={`bg-gradient-to-r ${p.color} p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <div className="glass-panel rounded-2xl p-6 h-full flex flex-col justify-between text-left">
                <div>
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
