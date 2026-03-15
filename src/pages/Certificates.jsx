import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Full Stack Web Development Internship & Course Completion",
      org: "Edu Tantr",
      link: "https://www.linkedin.com/posts/kishore-k-0717542a1_web-development-internship-activity-7357825659819216897-OUPN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEjnVFUB1iYleVzTu4IuG8g6X1s9YBQIM08",
      desc: "Completed an intensive internship and full stack course using React, Node.js, Express, MongoDB, and Tailwind CSS.",
      date: "May 2025",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Introduction to Internet of Things",
      org: "NPTEL",
      link: "https://www.linkedin.com/posts/kishore-k-0717542a1_introduction-to-internet-of-things-activity-7333934063260471296-00uy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEjnVFUB1iYleVzTu4IuG8g6X1s9YBQIM08",
      desc: "Learned the fundamentals of IoT, sensors, and data transmission technologies.",
      date: "April 2024",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Cloud Computing",
      org: "NPTEL",
      link: "https://www.linkedin.com/posts/kishore-k-0717542a1_cloudcomputing-nptel-certification-activity-7267583398762680321-jiRE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEjnVFUB1iYleVzTu4IuG8g6X1s9YBQIM08",
      desc: "Covered virtualization, cloud deployment models, and distributed computing concepts.",
      date: "Jan 2024",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "The Complete HTML Course",
      org: "Udemy",
      link: "https://www.linkedin.com/posts/kishore-k-0717542a1_html-webdevelopment-continuouslearning-activity-7230961175725797376-hr_a?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEjnVFUB1iYleVzTu4IuG8g6X1s9YBQIM08",
      desc: "Mastered HTML5 essentials and best practices for modern, semantic web design.",
      date: "Sep 2023",
      color: "from-violet-500 to-indigo-500",
    },
    {
      title: "Java for Beginners",
      org: "Udemy",
      link: "https://www.linkedin.com/posts/kishore-k-0717542a1_greate-teaching-udemy-activity-7194756624442437635-JPI4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEjnVFUB1iYleVzTu4IuG8g6X1s9YBQIM08",
      desc: "Learned core Java concepts including OOP, arrays, loops, and file handling.",
      date: "Jun 2023",
      color: "from-fuchsia-500 to-violet-500",
    },
    {
      title: "GitHub Certificate",
      org: "PrepInsta",
      link: "https://www.linkedin.com/posts/kishore-k-0717542a1_github-activity-7334449160068153344-4uXb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEjnVFUB1iYleVzTu4IuG8g6X1s9YBQIM08",
      desc: "Certified for completing GitHub fundamentals and practical version control operations.",
      date: "Mar 2024",
      color: "from-slate-500 to-violet-500",
    },
  ];

  return (
    <motion.section
      id="certificates"
      className="py-20 text-center"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="section-wrap">
        <div className="text-center mb-12">
          <div className="section-kicker mb-5"><span className="royal-glow-dot" />Credentials</div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-4xl font-bold mb-5"
        >
          <Award className="inline-block mr-3 text-violet-400" size={36} />
          Certificates & Achievements
        </motion.h2>
          <div className="royal-divider" />
          <p className="section-subtitle">
            Certifications and learning milestones that support my technical profile and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className={`relative p-[2px] rounded-2xl shadow-xl hover:shadow-2xl bg-gradient-to-r ${cert.color} transform transition-all duration-300`}
            >
              <div className="glass-panel royal-surface royal-hover rounded-2xl p-6 h-full flex flex-col justify-between text-left hover:shadow-inner">
                <div>
                  <div className="section-kicker text-xs mb-4">Certification</div>
                  <h3 className="text-xl font-semibold text-violet-200 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-violet-100/70 mb-1 italic">
                    {cert.org}
                  </p>
                  <p className="text-xs text-violet-100/60 mb-3">
                    {cert.date}
                  </p>
                  <p className="text-violet-100/75 text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:underline self-start"
                >
                  <ExternalLink size={16} /> View Certificate
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
