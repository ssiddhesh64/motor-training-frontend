import { useState, useEffect, useCallback } from 'react';
import gallery from '../data/gallery';
import RoadSignsUI from '../components/RoadSignsUI';

function Gallery() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlider = (group, index) => {
    setSelectedGroup(group);
    setCurrentIndex(index);
  };

  const closeSlider = useCallback(() => {
    setSelectedGroup(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedGroup) {
      setCurrentIndex((prev) => (prev + 1) % selectedGroup.images.length);
    }
  }, [selectedGroup]);

  const prevImage = useCallback(() => {
    if (selectedGroup) {
      setCurrentIndex(
        (prev) =>
          (prev - 1 + selectedGroup.images.length) % selectedGroup.images.length
      );
    }
  }, [selectedGroup]);

  useEffect(() => {
    if (!selectedGroup) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeSlider();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGroup, closeSlider, nextImage, prevImage]);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Gallery</h2>
        <RoadSignsUI />
        {/* GROUPS */}
        {gallery.map((group, gIndex) => (
          <div key={gIndex} className="mt-10">
            <h3 className="text-xl font-semibold mb-4">{group.group}</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.images.map((img, index) => (
                <div
                  key={index}
                  className="break-inside-avoid overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    src={img}
                    alt=""
                    onClick={() => openSlider(group, index)}
                    className="w-full aspect-[4/3] object-cover cursor-pointer hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* MODAL SLIDER */}
        {selectedGroup && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) closeSlider();
            }}
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              onClick={closeSlider}
              className="absolute top-5 right-5 text-white text-3xl cursor-pointer hover:text-gray-300 transition"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            <button
              onClick={prevImage}
              className="absolute left-5 text-white text-4xl cursor-pointer hover:text-gray-300 transition p-2"
              aria-label="Previous image"
            >
              ‹
            </button>

            <img
              src={selectedGroup.images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1} of ${selectedGroup.images.length}`}
              className="max-h-[80vh] max-w-[85vw] rounded-lg select-none"
            />

            <button
              onClick={nextImage}
              className="absolute right-5 text-white text-4xl cursor-pointer hover:text-gray-300 transition p-2"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
