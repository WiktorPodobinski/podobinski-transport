// components/Contact.js
import React from "react";
import SectionHeader from "./common/SectionHeader";
import ProtectedPhoneNumber from "./common/ProtectedPhoneNumber";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Kontakt"
          description="Skontaktuj się z nami, aby omówić szczegóły transportu materiałów budowlanych"
        />

        <div className="max-w-3xl mx-auto text-center">
          <div
            className="bg-white text-dark rounded-lg shadow-xl p-8 mb-10"
            data-aos="fade-up"
          >
            <div className="flex flex-col md:flex-row items-center justify-center mb-6">
              <div className="mb-4 md:mb-0 md:mr-6">
                <img
                  src="/images/truck-icon.svg"
                  alt="Ikona ciężarówki"
                  className="w-24 h-24"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Firma Usługowo-Handlowa Podobiński Hubert
                </h3>
                <p className="text-gray-600">Niecew 67, 33-322 Korzenna</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-lg mb-2">
                Zadzwoń do nas, aby omówić szczegóły:
              </p>
              <div className="flex justify-center items-center">
                <div className="bg-primary text-white py-3 px-6 rounded-lg text-2xl font-bold flex items-center">
                  <i className="fas fa-phone-alt mr-3"></i>
                  <ProtectedPhoneNumber phoneNumber="123456789" />{" "}
                  {/* Replace with actual phone number */}
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Dostępność: Poniedziałek - Piątek, 7:00 - 18:00
              </p>
            </div>
          </div>

          {/* Service area */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-bold mb-4">Obsługiwany obszar</h4>
            <p className="mb-4">
              Świadczymy usługi transportowe w Niecewie i okolicach do 50 km, w
              tym w miejscowościach:
            </p>
            <div className="flex flex-wrap justify-center gap-2 font-medium">
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Korzenna
              </span>
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Nowy Sącz
              </span>
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Grybów
              </span>
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Bobowa
              </span>
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Łużna
              </span>
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Ciężkowice
              </span>
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Łososina Dolna
              </span>
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Chełmiec
              </span>
              <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                Gródek nad Dunajcem
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
