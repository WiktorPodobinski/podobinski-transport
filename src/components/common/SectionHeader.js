// components/common/SectionHeader.js
import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-12 section-header">
      <h2
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
        data-aos="fade-up"
      >
        {title}
      </h2>
      <div
        className="w-20 h-1 bg-secondary mx-auto mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      ></div>
      {description && (
        <p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
