// App.js - Main application component
import React, { useState, useEffect } from "react";
// Jeśli zainstalujesz AOS przez npm, możesz odkomentować poniższe linie
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  // State to track if the page has been scrolled (for header styling)
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize AOS animation library if needed
    // eslint-disable-next-line no-undef
    if (typeof AOS !== "undefined") {
      // eslint-disable-next-line no-undef
      AOS.init({
        duration: 800,
        once: true,
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="font-sans text-dark">
      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
