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
          ? "backdrop-blur-md bg-white/90 dark:bg-gray-900/80 shadow-lg border-b border-yellow-300/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.08 }}
          className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 cursor-pointer select-none"
        >
          Kishore&nbsp;Kumar
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`relative group transition-all duration-300 ${
                activeSection === link.name
                  ? "text-yellow-500 font-semibold"
                  : ""
              }`}
              whileHover={{ scale: 1.07 }}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300
                  ${
                    activeSection === link.name
                      ? "w-full bg-yellow-500 shadow-md"
                      : "w-0 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full"
                  }`}
              ></span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="md:hidden backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-t border-yellow-300/20 shadow-lg text-center py-6 space-y-6"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                className={`block text-lg font-semibold tracking-wide transition-all ${
                  activeSection === link.name
                    ? "text-yellow-500"
                    : "text-gray-800 dark:text-gray-200"
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
