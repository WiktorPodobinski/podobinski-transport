// components/common/GalleryItem.js
import React, { useEffect, useRef } from "react";

const GalleryItem = ({ image, onClick, delay }) => {
  const { src, alt, title, description } = image;
  const imgRef = useRef();

  // Implement lazy loading using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          imgRef.current.src = src;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, [src]);

  return (
    <div
      className="overflow-hidden rounded-lg shadow-md cursor-pointer gallery-item transition-all duration-300 hover:shadow-xl"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-delay={delay}
      role="button"
      tabIndex="0"
      aria-label={`Zobacz zdjęcie: ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          ref={imgRef}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3C/svg%3E"
          alt={alt}
          width="600"
          height="400"
          loading="lazy"
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition duration-300"></div>
      </div>
      <div className="p-4 bg-white">
        <h4 className="font-semibold text-primary">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
