"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, Creative Co.",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Okello Studios transformed our brand! The visuals and storytelling exceeded our expectations.",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Marketing Head, MediaWorks",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    message:
      "Their professionalism and creativity are unmatched. Highly recommend for video and web projects.",
  },
  {
    id: 3,
    name: "Sara Williams",
    role: "Entrepreneur",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    message:
      "A phenomenal team! Our campaign engagement increased dramatically thanks to Okello Studios.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 overflow-hidden bg-black text-white">
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-purple-500 rounded-full opacity-20"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: Math.random() * 4 + 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 uppercase mb-2">
          What Our Clients Say
        </h2>
        <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto mb-10"></div>

        <AnimatePresence>
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-2xl p-10 shadow-2xl relative"
          >
            <p className="text-gray-300 text-lg md:text-xl mb-6">
              "{testimonials[current].message}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[current].photo}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
              />
              <div className="text-left">
                <h4 className="font-bold text-purple-500 text-lg">{testimonials[current].name}</h4>
                <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div
              className="absolute top-1/2 -translate-y-1/2 left-6 md:left-4 cursor-pointer text-purple-500 hover:text-white transition text-3xl select-none"
              onClick={prevTestimonial}
            >
              &#10094;
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-6 md:right-4 cursor-pointer text-purple-500 hover:text-white transition text-3xl select-none"
              onClick={nextTestimonial}
            >
              &#10095;
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                current === idx ? "bg-purple-500 scale-125" : "bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
