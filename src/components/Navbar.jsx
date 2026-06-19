import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);

const AboutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const InternshipIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const ProjectsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const CertificatesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ContactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const MailSocialIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// ─── Nav config ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { name: "Home",         href: "#home",         Icon: HomeIcon },
  { name: "About",        href: "#about",        Icon: AboutIcon },
  { name: "Internship",   href: "#internship",   Icon: InternshipIcon },
  { name: "Projects",     href: "#projects",     Icon: ProjectsIcon },
  { name: "Certificates", href: "#certificates", Icon: CertificatesIcon },
  { name: "Contact",      href: "#contact",      Icon: ContactIcon },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/kishore-kumar-0717542a1", Icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://github.com/Kishore22101",                              Icon: GitHubIcon,   label: "GitHub" },
  { href: "mailto:kishore22oct@gmail.com",                    Icon: MailSocialIcon, label: "Email" },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const drawerVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.24, ease: [0.55, 0, 1, 0.45] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05 + 0.08, duration: 0.2, ease: "easeOut" },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActive]  = useState("Home");

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Scroll spy
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => ({
      name: l.name,
      el: document.querySelector(l.href),
    }));
    let frame = null;
    const tick = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      let cur = "Home";
      for (const s of sections) {
        if (s.el && y + 150 >= s.el.offsetTop) cur = s.name;
      }
      setActive(cur);
      frame = null;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(tick); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return (
    <>
      {/* ── Top Navbar ─────────────────────────────────────────────────── */}
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
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.07 }}
            className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 cursor-pointer select-none"
          >
            Kishore&nbsp;Kumar
          </motion.h1>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-violet-100/90 font-medium">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative group transition-all duration-300 ${
                  activeSection === link.name ? "text-violet-300 font-semibold" : ""
                }`}
                whileHover={{ scale: 1.07 }}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-[3px] rounded-full transition-all duration-300 ${
                    activeSection === link.name
                      ? "w-full bg-violet-400 shadow-md shadow-violet-500/40"
                      : "w-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full"
                  }`}
                />
              </motion.a>
            ))}
          </div>

          {/* Animated Hamburger → X button */}
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.88 }}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-xl text-violet-200 hover:text-violet-300 transition-colors"
            style={{
              background: menuOpen ? "rgba(139,92,246,0.12)" : "transparent",
              border: menuOpen ? "1px solid rgba(139,92,246,0.25)" : "1px solid transparent",
              transition: "background 0.25s, border 0.25s",
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {/* Top line — rotates to \ */}
            <motion.span
              className="absolute block h-[2px] rounded-full bg-current origin-center"
              animate={menuOpen
                ? { rotate: 45, y: 0, width: 18, opacity: 1 }
                : { rotate: 0, y: -6, width: 20, opacity: 1 }
              }
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
            {/* Middle line — fades out */}
            <motion.span
              className="absolute block h-[2px] rounded-full bg-current origin-center"
              animate={menuOpen
                ? { opacity: 0, scaleX: 0 }
                : { opacity: 1, scaleX: 1, width: 20 }
              }
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            {/* Bottom line — rotates to / */}
            <motion.span
              className="absolute block h-[2px] rounded-full bg-current origin-center"
              animate={menuOpen
                ? { rotate: -45, y: 0, width: 18, opacity: 1 }
                : { rotate: 0, y: 6, width: 20, opacity: 1 }
              }
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[80vw] max-w-[320px] z-[70] md:hidden flex flex-col"
              style={{
                background: "linear-gradient(160deg, #0f0c22 0%, #090614 55%, #0c0919 100%)",
                borderLeft: "1px solid rgba(139,92,246,0.18)",
                boxShadow: "-10px 0 50px rgba(0,0,0,0.7)",
              }}
            >
              {/* ── Header ── */}
              <div
                className="flex items-center justify-between px-5 py-5"
                style={{ borderBottom: "1px solid rgba(139,92,246,0.12)" }}
              >
                <span />
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  whileTap={{ scale: 0.88 }}
                  aria-label="Close menu"
                  className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                  style={{
                    background: "rgba(139,92,246,0.12)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    color: "#c4b5fd",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>

              {/* ── Profile block ── */}
              <div
                className="px-5 py-5"
                style={{ borderBottom: "1px solid rgba(139,92,246,0.12)" }}
              >
                <p
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-1.5"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Portfolio
                </p>
                <p className="text-base font-extrabold text-white leading-snug mb-2.5">
                  Kishore Kumar
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: "#a78bfa",
                      boxShadow: "0 0 7px rgba(167,139,250,0.7)",
                    }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#a78bfa" }}
                  >
                    Available for opportunities
                  </span>
                </div>
              </div>

              {/* ── Nav Links ── */}
              <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.name;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => setMenuOpen(false)}
                      whileHover={!isActive ? { x: 4, backgroundColor: "rgba(139,92,246,0.08)" } : {}}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-xl relative transition-all duration-200"
                      style={{
                        color: isActive ? "#c4b5fd" : "rgba(255,255,255,0.65)",
                        background: isActive ? "rgba(139,92,246,0.12)" : "transparent",
                        borderLeft: isActive ? "3px solid #8b5cf6" : "3px solid transparent",
                      }}
                    >
                      {/* Icon */}
                      <span
                        style={{
                          color: isActive ? "#a78bfa" : "rgba(255,255,255,0.35)",
                          flexShrink: 0,
                        }}
                      >
                        <link.Icon />
                      </span>
                      {/* Label */}
                      <span className="text-[15px] font-semibold tracking-wide">
                        {link.name}
                      </span>
                    </motion.a>
                  );
                })}
              </nav>

              {/* ── Social Links ── */}
              <div
                className="px-5 py-5"
                style={{ borderTop: "1px solid rgba(139,92,246,0.12)" }}
              >
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
                      style={{
                        background: "rgba(139,92,246,0.1)",
                        border: "1px solid rgba(139,92,246,0.2)",
                        color: "rgba(196,181,253,0.75)",
                      }}
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
