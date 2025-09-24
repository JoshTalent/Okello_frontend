"use client";
import React from "react";
import { motion } from "framer-motion";

const Abouts = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Section Title */}
      <motion.div
        className="max-w-7xl mx-auto px-6 mb-12 text-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 tracking-wide uppercase">
          About Us
        </h2>
        <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-purple-500 relative inline-block"
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            About Okello Studios
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-purple-500 rounded-full"></span>
          </motion.h2>

          <motion.h3
            className="text-xl md:text-2xl font-semibold text-gray-300 flex items-center gap-2"
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
            }}
          >
            <span className="w-1 h-8 bg-purple-500 rounded-full inline-block"></span>
            Rwanda’s Premier Creative & Production Studio
          </motion.h3>

          <motion.div
            className="space-y-4 text-gray-400 leading-relaxed text-lg md:text-xl"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.p
              variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
            >
              At Okello Studios, we transform ideas into compelling visual stories.
              Our team specializes in photography, branding, and digital experiences
              that elevate brands and captivate audiences.
            </motion.p>
            <motion.p
              variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
            >
              We pride ourselves on delivering world-class creative solutions that
              resonate locally and globally.
            </motion.p>
            <motion.p
              variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
            >
              Our mission is to inspire and innovate through visual storytelling.
              Whether it’s a corporate project, a commercial campaign, or artistic
              endeavor, Okello Studios provides exceptional quality and unmatched creativity.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <div className="flex-1 relative w-full h-[500px] md:h-[600px]">
          <motion.img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
            alt="Creative Work 1"
            className="absolute top-0 left-0 w-3/5 h-4/5 md:w-3/5 md:h-4/5 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            initial={{ y: 20, opacity: 0, rotate: -2 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Creative Work 2"
            className="absolute top-16 right-0 w-2/5 h-2/5 md:w-2/5 md:h-2/5 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            initial={{ y: 20, opacity: 0, rotate: 2 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
            alt="Creative Work 3"
            className="absolute bottom-0 left-1/3 w-2/5 h-2/5 md:w-2/5 md:h-2/5 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
            initial={{ y: 20, opacity: 0, rotate: -1 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </div>

      {/* Mobile Adjustments: Stack images */}
      <div className="lg:hidden mt-10 grid grid-cols-1 gap-4 px-6">
        <motion.img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
          alt="Creative Work 1"
          className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Creative Work 2"
          className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
          alt="Creative Work 3"
          className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </section>
  );
};

export default Abouts;
