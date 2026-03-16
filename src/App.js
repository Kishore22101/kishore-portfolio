import React, { useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Internship from "./pages/Internship.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Certificates from "./pages/Certificates.jsx";
import Projects from "./pages/Projects.jsx";
import RoyalBackground from "./components/RoyalBackground.jsx";

function App() {
  const fullName = useMemo(() => "KISHORE KUMAR", []);
  const [typedLength, setTypedLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const typeTimer = setInterval(() => {
      setTypedLength((prev) => {
        if (prev >= fullName.length) {
          clearInterval(typeTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(typeTimer);
  }, [fullName]);

  // Once fully typed, pause then start slide-up exit
  useEffect(() => {
    if (typedLength < fullName.length) return undefined;
    const pauseTimer = setTimeout(() => setLoaderExiting(true), 550);
    return () => clearTimeout(pauseTimer);
  }, [typedLength, fullName.length]);

  // Remove loader from DOM after exit animation finishes
  useEffect(() => {
    if (!loaderExiting) return undefined;
    const removeTimer = setTimeout(() => setIsLoading(false), 680);
    return () => clearTimeout(removeTimer);
  }, [loaderExiting]);

  const typedName = fullName.slice(0, typedLength);
  const typedNameForDisplay = typedName.replace(" ", "\n");
  const progress = (typedLength / fullName.length) * 100;

  if (isLoading) {
    return (
      <div
        className={`portfolio-loader${loaderExiting ? " portfolio-loader--exit" : ""}`}
        role="status"
        aria-live="polite"
        aria-label="Portfolio is loading"
      >
        <h1 className="portfolio-loader-title">{typedNameForDisplay}</h1>
        <div className="portfolio-loader-bar" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="theme-shell text-slate-100 font-poppins overflow-x-hidden relative isolate">
      <RoyalBackground />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Internship />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
