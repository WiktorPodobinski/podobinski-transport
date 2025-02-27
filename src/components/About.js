// components/About.js
import React from "react";
import SectionHeader from "./common/SectionHeader";

const About = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="O naszej firmie"
          description="Poznaj historię i misję firmy Podobiński - Twojego zaufanego partnera w transporcie materiałów budowlanych"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ponad 10 lat doświadczenia
            </h3>
            <p className="text-gray-600 mb-4">
              Firma Usługowo-Handlowa Podobiński Hubert to rodzinne
              przedsiębiorstwo z wieloletnim doświadczeniem w branży
              transportowej. Specjalizujemy się w przewozie wszelkiego rodzaju
              materiałów budowlanych, takich jak żwir, piasek, grys, kliniec,
              ziemia oraz masa ziemnoskalna.
            </p>
            <p className="text-gray-600 mb-4">
              Naszą misją jest zapewnienie niezawodnych i terminowych usług
              transportowych, które spełniają najwyższe standardy jakości.
              Dzięki doświadczonej kadrze i nowoczesnemu sprzętowi, jesteśmy w
              stanie sprostać nawet najbardziej wymagającym zleceniom.
            </p>
            <p className="text-gray-600">
              Działamy głównie w Niecewie i okolicznych miejscowościach w
              promieniu 50 km, obsługując zarówno firmy budowlane, jak i
              klientów indywidualnych. Naszym priorytetem jest zadowolenie
              klienta i budowanie długotrwałych relacji opartych na zaufaniu i
              profesjonalizmie.
            </p>
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <img
              src="/images/about.jpg"
              alt="Flota transportowa firmy Podobiński"
              width="600"
              height="400"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Company values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div
            className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="text-4xl text-secondary mb-4">
              <i className="fas fa-truck"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Niezawodność</h4>
            <p className="text-gray-600">
              Terminowa realizacja zleceń i niezawodność naszych usług to nasze
              główne priorytety.
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="text-4xl text-secondary mb-4">
              <i className="fas fa-medal"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Jakość</h4>
            <p className="text-gray-600">
              Stawiamy na najwyższą jakość świadczonych usług i materiałów,
              które transportujemy.
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-4xl text-secondary mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Uczciwość</h4>
            <p className="text-gray-600">
              Uczciwe podejście do klienta i transparentne warunki współpracy to
              fundament naszej działalności.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
