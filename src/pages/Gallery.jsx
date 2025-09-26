// src/pages/GalleryPage.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import axios from "axios";
import Navbar from "../components/Navbar";

const API_GALLERY = "https://okellobackend-production.up.railway.app/gallery";
const filters = ["All", "Images", "Videos", "Web"];

const GalleryPage = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch gallery items
  const fetchGallery = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_GALLERY);
      if (res.data.success) {
        setGalleryItems(
          res.data.data.map((item, idx) => ({
            ...item,
            id: idx + 1, // unique id
          }))
        );
      }
    } catch (err) {
      console.error("Failed to fetch gallery:", err);
      alert("Failed to load gallery items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Filter gallery items
  const filteredItems = galleryItems.filter((item) =>
    filter === "All"
      ? true
      : filter === "Images"
      ? item.type === "image"
      : filter === "Videos"
      ? item.type === "video"
      : filter === "Web"
      ? item.category?.toLowerCase() === "web"
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
          {loading ? (
            <p className="text-center text-gray-400">Loading gallery...</p>
          ) : (
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
                    style={{ height: item.height || "300px" }}
                  >
                    <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden border-4 border-gray-700 shadow-inner">
                      {item.type === "image" ? (
                        <img
                          src={encodeURI(item.src)}
                          alt={`Gallery ${item.id}`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <video
                            src={encodeURI(item.src)}
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
          )}
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
                    src={encodeURI(selected.src)}
                    alt="Selected"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                ) : (
                  <video
                    src={encodeURI(selected.src)}
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

export default GalleryPage;
