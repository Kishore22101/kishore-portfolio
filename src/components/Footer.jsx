import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/kishore-kumar-0717542a1",
      label: "LinkedIn",
    },
    {
      icon: <Github size={22} />,
      href: "https://github.com/Kishore22101",
      label: "GitHub",
    },
    {
      icon: <Mail size={22} />,
      href: "mailto:kishore22oct@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-[#070411] via-[#0b0718] to-[#06030f] text-center py-14 mt-20 border-t border-violet-400/20 overflow-hidden shadow-[0_-4px_30px_rgba(124,58,237,0.22)]"
    >
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-violet-500 animate-gradient" />

      <div className="absolute top-10 left-20 w-48 h-48 bg-violet-500/15 blur-3xl rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-fuchsia-500/15 blur-3xl rounded-full animate-pulse hidden md:block"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-violet-300 tracking-wide drop-shadow-lg">
          Join the Journey
        </h2>

        <div className="flex justify-center gap-8 mb-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              whileHover={{ scale: 1.25, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group p-3 rounded-full bg-violet-500 text-white shadow-md transition-all duration-300 hover:shadow-violet-500/50 hover:bg-violet-400 ring-2 ring-transparent hover:ring-violet-300"
            >
              <motion.div
                whileHover={{
                  rotate: 10,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                {social.icon}
              </motion.div>
            </motion.a>
          ))}
        </div>

        <p className="text-violet-100/70 text-sm mb-1">
          © {new Date().getFullYear()}{" "}
          <span className="text-violet-300 font-semibold">Kishore Kumar</span> — All Rights Reserved.
        </p>

        <motion.p
          className="mt-4 text-xs text-violet-100/55 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Designed & Developed by{" "}
          <span className="text-violet-300 font-medium">Kishore Kumar</span>
        </motion.p>
      </div>
    </motion.footer>
  );
}
