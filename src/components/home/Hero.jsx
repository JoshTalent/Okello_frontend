"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mouse } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    bg: "bg-[url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f')] bg-cover bg-center",
  },
  {
    id: 2,
    bg: "bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center",
  },
  {
    id: 3,
    bg: "bg-[url('https://images.unsplash.com/photo-1522199755839-a2bacb67c546')] bg-cover bg-center",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Slide background */}
      <AnimatePresence>
        {slides.map((slide, idx) =>
          idx === current ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={`absolute inset-0 ${slide.bg} bg-cover bg-center`}
            >
              <div className="absolute inset-0 bg-black/60" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay geometric shapes for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute top-0 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute bottom-10 right-20 w-80 h-80 bg-purple-700 rounded-full mix-blend-soft-light animate-pulse"
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-20">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase"
        >
          Okello Studios
          <motion.span
            className="block w-20 h-1 bg-purple-500 mt-3 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 max-w-xl text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          Rwanda’s premier creative & production studio. We deliver photography,
          branding, and digital experiences that tell stories and inspire action.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/book"
            className="relative px-8 py-3 font-semibold rounded-full bg-purple-500 hover:bg-purple-600 shadow-lg transition-all duration-300"
          >
            Book Now
          </Link>
          <Link
            to="/contact"
            className="relative px-8 py-3 font-semibold rounded-full border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === idx
                ? "bg-purple-500 scale-125 shadow-lg"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 text-gray-400 animate-bounce z-20">
        <Mouse size={22} />
      </div>
    </section>
  );
};

export default Hero;
