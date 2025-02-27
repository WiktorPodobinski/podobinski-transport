// components/Testimonials.js
import React, { useState, useEffect } from "react";
import SectionHeader from "./common/SectionHeader";
import TestimonialCard from "./common/TestimonialCard";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      content:
        "Współpracuję z firmą Podobiński od ponad 5 lat i jestem bardzo zadowolony z ich usług. Transport zawsze na czas, materiały wysokiej jakości, a obsługa profesjonalna i życzliwa. Polecam każdemu, kto szuka niezawodnego dostawcy materiałów budowlanych.",
      author: "Jan Kowalski",
      company: "Kowalski Budownictwo",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Firma Podobiński to solidny partner biznesowy. Ich terminowość i elastyczność w działaniu sprawia, że współpraca przebiega bezproblemowo. Mogę liczyć na szybką realizację nawet najbardziej naglących zleceń. Polecam!",
      author: "Anna Nowak",
      company: "Nowak Development",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Korzystałem z usług firmy Podobiński przy budowie domu i byłem bardzo zadowolony. Transport piasku i żwiru został zrealizowany szybko i sprawnie, a materiały były wysokiej jakości. Z czystym sumieniem polecam.",
      author: "Marek Wiśniewski",
      company: "klient indywidualny",
      rating: 5,
    },
    {
      id: 4,
      content:
        "Profesjonalizm na każdym etapie współpracy. Firma dotrzymuje obietnic i terminów, a jakość dostarczanych materiałów jest zawsze na najwyższym poziomie. Szczerze polecam usługi firmy Podobiński.",
      author: "Katarzyna Lewandowska",
      company: "Lewandowscy Ogrody",
      rating: 5,
    },
  ];

  // Auto play slides
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
        );
      }, 5000); // Change slide every 5 seconds
    }

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  // Pause autoplay when user interacts with carousel
  const pauseAutoPlay = () => {
    setAutoPlay(false);
    // Resume after 10 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
    pauseAutoPlay();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
    pauseAutoPlay();
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Opinie klientów"
          description="Poznaj opinie naszych zadowolonych klientów, którzy skorzystali z naszych usług"
        />

        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="relative">
            {/* Testimonial slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-primary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition duration-300 focus:outline-none"
              onClick={goToPrevSlide}
              aria-label="Poprzednia opinia"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-primary p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition duration-300 focus:outline-none"
              onClick={goToNextSlide}
              aria-label="Następna opinia"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 mx-1 rounded-full focus:outline-none transition-all duration-300 ${
                  index === currentSlide ? "bg-secondary w-6" : "bg-gray-300"
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
