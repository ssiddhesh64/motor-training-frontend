import { useState } from 'react';
import gallery from '../data/gallery';
import RoadSignsUI from '../components/RoadSignsUI';

function Gallery() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlider = (group, index) => {
    setSelectedGroup(group);
    setCurrentIndex(index);
  };

  const closeSlider = () => {
    setSelectedGroup(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % selectedGroup.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + selectedGroup.images.length) % selectedGroup.images.length
    );
  };

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
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              onClick={closeSlider}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ✕
            </button>

            <button
              onClick={prevImage}
              className="absolute left-5 text-white text-3xl"
            >
              ‹
            </button>

            <img
              src={selectedGroup.images[currentIndex]}
              alt=""
              className="max-h-[80vh] rounded-lg"
            />

            <button
              onClick={nextImage}
              className="absolute right-5 text-white text-3xl"
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
