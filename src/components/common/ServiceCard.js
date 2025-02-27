// components/common/ServiceCard.js
import React from "react";

const ServiceCard = ({ service, delay }) => {
  const { title, description, image, feature, icon } = service;

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          width="400"
          height="300"
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-secondary">
          <i className={`fas ${icon} mr-2`}></i>
          <span>{feature}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
