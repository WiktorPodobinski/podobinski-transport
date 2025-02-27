// components/Gallery.js
import React, { useState } from "react";
import SectionHeader from "./common/SectionHeader";
import GalleryItem from "./common/GalleryItem";
import LightboxModal from "./common/LightboxModal";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/gallery1.jpg",
      alt: "Transport żwiru - realizacja",
      title: "Transport żwiru",
      description: "Dostawa na plac budowy w Korzennej",
    },
    {
      id: 2,
      src: "/images/gallery/gallery2.jpg",
      alt: "Transport piasku - realizacja",
      title: "Transport piasku",
      description: "Realizacja dla klienta indywidualnego",
    },
    {
      id: 3,
      src: "/images/gallery/gallery3.jpg",
      alt: "Transport grysu - realizacja",
      title: "Transport grysu",
      description: "Dostawa dla firmy budowlanej",
    },
    {
      id: 4,
      src: "/images/gallery/gallery4.jpg",
      alt: "Wywrotka podczas pracy",
      title: "Nasza flota",
      description: "Nowoczesne wywrotki podczas pracy",
    },
    {
      id: 5,
      src: "/images/gallery/gallery5.jpg",
      alt: "Transport klińca - realizacja",
      title: "Transport klińca",
      description: "Realizacja na budowie drogi",
    },
    {
      id: 6,
      src: "/images/gallery/gallery6.jpg",
      alt: "Transport ziemi - realizacja",
      title: "Transport ziemi",
      description: "Dostawa dla gospodarstwa rolnego",
    },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    // Disable body scroll when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Re-enable body scroll when lightbox is closed
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Galeria realizacji"
          description="Zobacz zdjęcia z naszych realizacji i przekonaj się o jakości świadczonych usług"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              onClick={() => openLightbox(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* Lightbox for gallery images */}
      {lightboxOpen && (
        <LightboxModal
          images={galleryImages}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
};

export default Gallery;
