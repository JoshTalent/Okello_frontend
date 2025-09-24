"use client";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // for active link highlighting

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 shadow-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-extrabold tracking-wide uppercase cursor-pointer text-white"
        >
          Okello St<span className="text-purple-500">udio</span>'s
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.href}
                className={`font-semibold tracking-wide transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-purple-500"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {link.label}
              </Link>
              <motion.span
                layoutId="underline"
                className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 rounded-full transition-all duration-300`}
                style={{
                  width: location.pathname === link.href ? "100%" : 0,
                }}
              ></motion.span>
            </motion.div>
          ))}

          {/* Book Now Button */}
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128,0,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="ml-6 px-6 py-2 font-semibold rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition"
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg shadow-lg"
          >
            <motion.div
              className="flex flex-col items-center space-y-6 py-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0, transition: { delay: idx * 0.05 } },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.href}
                    className={`font-bold text-lg tracking-wide transition ${
                      location.pathname === link.href
                        ? "text-purple-500"
                        : "text-white hover:text-purple-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link to="/booking" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128,0,255,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-8 py-2 font-semibold rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition"
                >
                  Book Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
