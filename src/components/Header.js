// components/Header.js
import React, { useState, useEffect } from "react";

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        !event.target.closest("#mobileMenu") &&
        !event.target.closest("#menuBtn")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              <span className="text-secondary">F.U.H.</span> Podobiński
            </span>
          </div>

          {/* Menu on larger screens */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="font-medium hover:text-secondary transition duration-300"
            >
              Strona główna
            </a>
            <a
              href="#about"
              className="font-medium hover:text-secondary transition duration-300"
            >
              O firmie
            </a>
            <a
              href="#services"
              className="font-medium hover:text-secondary transition duration-300"
            >
              Usługi
            </a>
            <a
              href="#gallery"
              className="font-medium hover:text-secondary transition duration-300"
            >
              Galeria
            </a>
            <a
              href="#testimonials"
              className="font-medium hover:text-secondary transition duration-300"
            >
              Opinie
            </a>
            <a
              href="#contact"
              className="font-medium text-white bg-secondary py-2 px-4 rounded-md hover:bg-primary transition duration-300"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="menuBtn"
              aria-label="Menu mobilne"
              className="text-dark focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i
                className={`fas ${
                  mobileMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobileMenu"
          className={`md:hidden bg-white mt-4 rounded-md shadow-lg transition-all duration-300 ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="#home"
              onClick={handleLinkClick}
              className="font-medium hover:text-secondary transition duration-300"
            >
              Strona główna
            </a>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="font-medium hover:text-secondary transition duration-300"
            >
              O firmie
            </a>
            <a
              href="#services"
              onClick={handleLinkClick}
              className="font-medium hover:text-secondary transition duration-300"
            >
              Usługi
            </a>
            <a
              href="#gallery"
              onClick={handleLinkClick}
              className="font-medium hover:text-secondary transition duration-300"
            >
              Galeria
            </a>
            <a
              href="#testimonials"
              onClick={handleLinkClick}
              className="font-medium hover:text-secondary transition duration-300"
            >
              Opinie
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="font-medium text-center text-white bg-secondary py-2 px-4 rounded-md hover:bg-primary transition duration-300"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
