// components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          data-aos="fade-up"
        >
          Transport materiałów budowlanych
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Profesjonalny przewóz żwiru, piasku, grysu, klińca i innych materiałów
          budowlanych w regionie Niecewa i okolicach
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <a
            href="#contact"
            className="bg-secondary text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-primary transition duration-300 inline-block"
          >
            Skontaktuj się z nami
          </a>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a
          href="#about"
          className="text-white opacity-70 hover:opacity-100 transition duration-300"
        >
          <i className="fas fa-chevron-down text-3xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
