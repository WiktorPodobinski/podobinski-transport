// components/Footer.js
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-secondary">F.U.H.</span> Podobiński
            </div>
            <p className="text-gray-400 mt-2">
              Transport materiałów budowlanych
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">Niecew 67, 33-322 Korzenna</p>
          </div>

          <div>
            <a
              href="#home"
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition duration-300"
              aria-label="Powrót na górę strony"
            >
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>

        <hr className="border-gray-800 my-6" />

        <div className="text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Firma Usługowo-Handlowa Podobiński Hubert. Wszelkie
            prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
