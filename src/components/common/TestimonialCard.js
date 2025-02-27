// components/common/TestimonialCard.js
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { content, author, company, rating } = testimonial;

  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${
            i < rating ? "text-secondary" : "text-gray-300"
          }`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md mx-auto text-center">
      {/* Quotation mark */}
      <div className="text-5xl text-secondary opacity-20 mb-4">
        <i className="fas fa-quote-left"></i>
      </div>

      {/* Rating stars */}
      <div className="flex justify-center mb-4 space-x-1">{renderStars()}</div>

      {/* Testimonial content */}
      <p className="text-gray-600 mb-6 italic">"{content}"</p>

      {/* Author information */}
      <div className="mt-4">
        <p className="font-bold text-primary">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
