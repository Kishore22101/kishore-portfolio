import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-20 text-center overflow-hidden"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500 animate-gradient" />

      <div className="absolute top-10 left-16 w-56 h-56 bg-violet-500/25 blur-3xl rounded-full hidden md:block"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-fuchsia-500/25 blur-3xl rounded-full hidden md:block"></div>

      <div className="section-wrap">
        <div className="text-center mb-10">
          <div className="section-kicker mb-5"><span className="royal-glow-dot" />Contact</div>
          <motion.h2
            className="section-title text-3xl md:text-4xl font-extrabold mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s <span className="section-accent">Connect</span>
          </motion.h2>
          <div className="royal-divider" />

          <motion.p
            className="section-subtitle text-base md:text-lg mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I’m open to internships, collaborations, or thoughtful discussions around software development and project work.
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] items-stretch mb-10">
          <div className="glass-panel royal-surface royal-hover rounded-2xl p-8 text-left">
            <div className="section-kicker text-xs mb-4">Professional Communication</div>
            <h3 className="text-2xl font-semibold text-violet-100 mb-4">Open to meaningful opportunities</h3>
            <p className="text-violet-100/75 leading-relaxed mb-6">
              I welcome conversations regarding internships, collaborative projects, and professional opportunities in full stack and Java development.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="info-card royal-hover rounded-2xl p-4">
                <p className="meta-label mb-2">Preferred Channel</p>
                <p className="meta-value text-sm">Email or LinkedIn for structured communication</p>
              </div>
              <div className="info-card royal-hover rounded-2xl p-4">
                <p className="meta-label mb-2">Current Interest</p>
                <p className="meta-value text-sm">Internships, collaborative work, and strong development opportunities</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <motion.a
            href="mailto:kishore22oct@gmail.com"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass-panel rounded-xl p-6 w-full md:w-72 hover:shadow-violet-400/30 transition-all duration-300 cursor-pointer no-underline"
          >
            <Mail className="mx-auto mb-2 text-violet-300" size={26} />
            <p className="text-sm text-violet-200 font-semibold mb-1">
              Email
            </p>
            <p className="text-violet-100/85 text-sm underline">
              kishore22oct@gmail.com
            </p>
          </motion.a>

          <motion.a
            href="tel:+916385127709"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="glass-panel rounded-xl p-6 w-full md:w-72 hover:shadow-violet-400/30 transition-all duration-300 cursor-pointer no-underline"
          >
            <Phone className="mx-auto mb-2 text-violet-300" size={26} />
            <p className="text-sm text-violet-200 font-semibold mb-1">
              Phone
            </p>
            <p className="text-violet-100/85 text-sm underline">
              +91 63851 27709
            </p>
          </motion.a>
        </div>
        </div>

        <motion.a
          href="https://www.linkedin.com/in/kishore-k-0717542a1"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, boxShadow: "0 0 18px #8b5cf6" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 btn-neon"
        >
          <Linkedin size={22} />
          Connect on LinkedIn
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500 animate-gradient" />
    </motion.section>
  );
}