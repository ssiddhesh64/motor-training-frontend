import { useState, useEffect } from 'react';
import { roadSigns } from '../data/roadSigns';

const getImagePath = (category, slug) =>
  `${import.meta.env.BASE_URL}signs/${category.toLowerCase()}/${slug}.jpg`;

export default function RoadSignsUI() {
  const categories = Object.keys(roadSigns);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [selected, setSelected] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelected(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl font-medium transition
                ${
                  activeTab === cat
                    ? 'bg-blue-500 text-white'
                    : 'bg-white shadow'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {roadSigns[activeTab].map((sign) => (
            <div
              key={sign.id}
              onClick={() => setSelected({ ...sign, category: activeTab })}
              className="bg-white rounded-2xl p-3 shadow hover:shadow-lg cursor-pointer transition"
            >
              <img
                src={getImagePath(activeTab, sign.slug)}
                alt={sign.name}
                className="w-full h-24 object-contain mb-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `/signs/${activeTab.toLowerCase()}/${sign.slug}.jpg`;
                }}
              />
              <p className="text-center text-sm font-medium">{sign.name}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 max-w-md w-full relative mx-4"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition text-lg cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <img
                src={getImagePath(selected.category, selected.slug)}
                alt={selected.name}
                className="w-full h-40 object-contain mb-4"
              />

              <h2 id="modal-title" className="text-lg font-bold text-center">
                {selected.name}
              </h2>

              <p className="text-center text-gray-500 mt-2 text-sm">
                Category: {selected.category}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
