import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "EatzUp — Full Stack Food Delivery App",
      desc: "A complete food ordering platform with login, cart, order, payment, and PDF invoice generation. Built with MERN stack and a modern, responsive UI.",
      video: "https://www.loom.com/share/7ef6e7d69813471d87d6547c005c8c82?sid=af770c27-b3e7-4003-956f-361f2141cf4a", // 🔗 replace this with your actual demo video link
      github: "https://github.com/Kishore22101/Food-Delivery-App",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      color: "from-violet-500 to-fuchsia-500",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 text-center"
    >
      <div className="section-wrap">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-4xl font-bold mb-12"
        >
          <Code className="inline-block mr-3 text-violet-400" size={36} />
          Featured Projects
        </motion.h2>

        <div className="flex justify-center">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className={`w-full md:w-2/3 lg:w-1/2 p-[2px] rounded-2xl shadow-lg bg-gradient-to-r ${proj.color} transform hover:shadow-2xl transition-all duration-300`}
            >
              <div className="glass-panel rounded-2xl p-8 text-violet-50">
                <h3 className="text-2xl font-semibold mb-3">{proj.title}</h3>

                <p className="text-base text-violet-100/80 mb-5 leading-relaxed">{proj.desc}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="chip px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-5">
                  {proj.video && (
                    <motion.a
                      href={proj.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="btn-neon flex items-center gap-2"
                    >
                      <ExternalLink size={18} /> Demo
                    </motion.a>
                  )}

                  {proj.github && (
                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="btn-ghost flex items-center gap-2"
                    >
                      <Github size={18} /> Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
