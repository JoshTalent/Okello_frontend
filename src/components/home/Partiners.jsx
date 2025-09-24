"use client";
import React from "react";
import { motion } from "framer-motion";

const partners = [
  {
    id: 1,
    name: "GNA IntelleX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
    link: "https://gnaintellex.com",
  },
  {
    id: 2,
    name: "Creative Studio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
    link: "#",
  },
  {
    id: 3,
    name: "MediaWorks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
    link: "#",
  },
  {
    id: 4,
    name: "DesignLab",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
    link: "#",
  },
  {
    id: 5,
    name: "NextGen Media",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Placeholder_logo.png",
    link: "#",
  },
];

const Partners = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 uppercase">
            Our Partners
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg">
            We collaborate with industry leaders to deliver the best services.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-10 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
          >
            {[...partners, ...partners].map((partner, idx) => (
              <a
                key={idx}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 object-contain"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
