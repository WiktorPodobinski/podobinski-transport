// components/common/LightboxModal.js
import React, { useEffect } from "react";

const LightboxModal = ({ images, currentIndex, setCurrentIndex, onClose }) => {
  const currentImage = images[currentIndex];

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose, setCurrentIndex]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-screen px-4">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-50 text-white text-3xl hover:text-gray-300 transition"
          onClick={onClose}
          aria-label="Zamknij"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Navigation arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition"
          onClick={goToPrevious}
          aria-label="Poprzednie zdjęcie"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition"
          onClick={goToNext}
          aria-label="Następne zdjęcie"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Main image */}
        <div className="text-center" onClick={(e) => e.stopPropagation()}>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[80vh] max-w-full object-contain mx-auto"
          />

          {/* Caption */}
          <div className="mt-4 text-white">
            <h4 className="text-xl font-bold">{currentImage.title}</h4>
            <p className="text-gray-300">{currentImage.description}</p>
          </div>

          {/* Counter */}
          <div className="mt-2 text-gray-400">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
