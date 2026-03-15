import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Internship", href: "#internship" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect which section is visible
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      let current = "home";
      sections.forEach((section, i) => {
        if (section && section.getBoundingClientRect().top <= 120) {
          current = navLinks[i].name;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#090614]/85 shadow-[0_10px_30px_rgba(5,3,13,0.7)] border-b border-violet-400/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.08 }}
          className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 cursor-pointer select-none"
        >
          Kishore&nbsp;Kumar
        </motion.h1>

        <div className="hidden md:flex space-x-8 text-violet-100/90 font-medium">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`relative group transition-all duration-300 ${
                activeSection === link.name
                  ? "text-violet-300 font-semibold"
                  : ""
              }`}
              whileHover={{ scale: 1.07 }}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300
                  ${
                    activeSection === link.name
                      ? "w-full bg-violet-400 shadow-md shadow-violet-500/40"
                      : "w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full"
                  }`}
              ></span>
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-violet-100"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="md:hidden backdrop-blur-xl bg-[#0b0718]/95 border-t border-violet-400/25 shadow-lg text-center py-6 space-y-6"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                className={`block text-lg font-semibold tracking-wide transition-all ${
                  activeSection === link.name
                    ? "text-violet-300"
                    : "text-violet-100"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
