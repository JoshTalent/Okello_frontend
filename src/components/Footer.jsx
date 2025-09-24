"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 py-20 bg-black text-white overflow-hidden">
      {/* Floating Gradient Wave */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={{ y: 50 }}
        animate={{ y: [-30, 30, -30] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-600 via-purple-900 to-black opacity-30 blur-3xl"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About / Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-extrabold text-purple-500 mb-4">
            Okello St<span className="text-white">udio</span>'s
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Rwanda’s premier creative and production studio specializing in photography,
            branding, web & digital experiences. Crafting visually compelling stories.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-purple-500 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:info@okellostudio.com" className="hover:text-purple-500 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-purple-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-purple-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-500 transition">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-purple-500 transition">Services</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-purple-500 transition">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-500 transition">Contact</Link>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-purple-500 mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get our latest updates and offers directly in your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-full bg-gray-900 text-white focus:outline-none border border-gray-700"
            />
            <button className="px-6 py-2 bg-purple-500 rounded-r-full text-black font-semibold hover:bg-purple-600 transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom / Powered by */}
      <div className="relative z-10 mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4 p-4">
        <span>&copy; {new Date().getFullYear()} Okello Studios. All rights reserved.</span>
        <span>
          Powered by{" "}
          <a
            href="https://gnintellex.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:underline font-semibold"
          >
            GNA IntelleX
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
