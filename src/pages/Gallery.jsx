"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import Navbar from "../components/Navbar";
// Gallery items with a new "category" property
const galleryItems = [
  { id: 1, type: "image", category: "Web", src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f", height: "300px" },
  { id: 2, type: "video", category: "Web", src: "https://www.w3schools.com/html/mov_bbb.mp4", height: "500px" },
  { id: 3, type: "image", category: "Video", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", height: "400px" },
  { id: 4, type: "video", category: "Video", src: "https://www.w3schools.com/html/movie.mp4", height: "450px" },
  { id: 5, type: "image", category: "Image", src: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c", height: "350px" },
  { id: 6, type: "image", category: "Web", src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", height: "500px" },
];

// Add "Web" filter
const filters = ["All", "Images", "Videos", "Web"];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  // Filter logic
  const filteredItems = galleryItems.filter((item) =>
    filter === "All"
      ? true
      : filter === "Images"
      ? item.type === "image"
      : filter === "Videos"
      ? item.type === "video"
      : filter === "Web"
      ? item.category === "Web"
      : true
  );

  return (
   <>
   <Navbar />
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 uppercase">
            Our Gallery
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 font-semibold rounded-full border ${
                filter === f
                  ? "bg-purple-500 border-purple-500 text-black"
                  : "border-gray-500 text-white hover:border-purple-500 hover:text-purple-500"
              } transition-all duration-300`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="relative rounded-3xl shadow-2xl overflow-hidden break-inside-avoid border-4 border-gray-800 bg-gray-900"
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelected(item)}
                style={{ height: item.height }}
              >
                {/* Phone Frame */}
                <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden border-4 border-gray-700 shadow-inner">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`Gallery ${item.id}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={item.src}
                        muted
                        loop
                        className="w-full h-full object-cover"
                      />
                      <Play className="absolute inset-0 m-auto w-12 h-12 text-white opacity-70 pointer-events-none" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {selected.type === "image" ? (
                <img
                  src={selected.src}
                  alt="Selected"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              ) : (
                <video
                  src={selected.src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
   </>
  );
};

export default Gallery;
