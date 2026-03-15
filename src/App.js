import React, { useEffect } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Internship from "./pages/Internship.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Certificates from "./pages/Certificates.jsx";
import Projects from "./pages/Projects.jsx";



function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="theme-shell text-slate-100 font-poppins overflow-x-hidden">
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
  );
}

export default App;
