// components/Services.js
import React from "react";
import SectionHeader from "./common/SectionHeader";
import ServiceCard from "./common/ServiceCard";

const Services = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Transport żwiru",
      description:
        "Oferujemy przewóz żwiru różnych frakcji, idealne do prac drogowych, fundamentów i projektów zagospodarowania terenu.",
      image: "/images/services/zwir.jpg",
      feature: "Różne frakcje do wyboru",
      icon: "fa-check-circle",
    },
    {
      id: 2,
      title: "Transport piasku",
      description:
        "Dostarczamy piasek budowlany, rzeczny i płukany, niezbędny przy pracach budowlanych, drogowych i ogrodowych.",
      image: "/images/services/piasek.jpg",
      feature: "Wysoka jakość materiału",
      icon: "fa-check-circle",
    },
    {
      id: 3,
      title: "Transport grysu",
      description:
        "Zapewniamy transport grysu różnych rodzajów i frakcji, stosowanego w budownictwie drogowym i dekoracyjnym.",
      image: "/images/services/grys.jpg",
      feature: "Dostępne różne kolory",
      icon: "fa-check-circle",
    },
    {
      id: 4,
      title: "Transport klińca",
      description:
        "Dostarczamy kliniec wykorzystywany do podbudowy dróg, placów i innych powierzchni wymagających stabilnego podłoża.",
      image: "/images/services/kliniec.jpg",
      feature: "Idealne do utwardzania nawierzchni",
      icon: "fa-check-circle",
    },
    {
      id: 5,
      title: "Transport ziemi",
      description:
        "Oferujemy przewóz ziemi ogrodowej, urodzajnej, idealnej do zakładania ogrodów, trawników i rekultywacji terenów.",
      image: "/images/services/ziemia.jpg",
      feature: "Ziemia wysokiej jakości",
      icon: "fa-check-circle",
    },
    {
      id: 6,
      title: "Transport masy ziemnoskalnej",
      description:
        "Zapewniamy transport masy ziemnoskalnej do prac związanych z ukształtowaniem terenu i budową nasypów.",
      image: "/images/services/masa.jpg",
      feature: "Idealna do niwelacji terenu",
      icon: "fa-check-circle",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Nasze usługi"
          description="Oferujemy kompleksowe usługi transportowe materiałów budowlanych dla firm i klientów indywidualnych"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-lg text-gray-600 mb-6">
            Potrzebujesz transportu materiałów budowlanych w okolicach Niecewa?
          </p>
          <a
            href="#contact"
            className="bg-secondary text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-primary transition duration-300 inline-block"
          >
            Zapytaj o ofertę
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
