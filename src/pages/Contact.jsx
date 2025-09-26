"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const API_CONTACT = "https://okellobackend-production.up.railway.app/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(API_CONTACT, formData);
      if (res.data.success) {
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error sending contact message:", err);
      alert(err.response?.data?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-black text-white">
      <Navbar />

      <section className="relative py-24">
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
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Reach out for bookings, inquiries, or collaboration opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-purple-500">Studio Info</h3>
              <p className="text-gray-400">
                Okello Studios <br />
                Kigali, Rwanda <br />
                Phone:{" "}
                <a
                  href="tel:+250788123456"
                  className="text-purple-400 hover:underline"
                >
                  +250 788 123 456
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:contact@okellostudios.com"
                  className="text-purple-400 hover:underline"
                >
                  contact@okellostudios.com
                </a>
              </p>

              {/* Social Media */}
              <div className="flex items-center space-x-4 mt-4">
                <a href="#" target="_blank" className="text-purple-500 hover:text-white">
                  <Linkedin size={28} />
                </a>
                <a href="#" target="_blank" className="text-purple-500 hover:text-white">
                  <Twitter size={28} />
                </a>
                <a href="#" target="_blank" className="text-purple-500 hover:text-white">
                  <Instagram size={28} />
                </a>
                <a href="mailto:contact@okellostudios.com" className="text-purple-500 hover:text-white">
                  <Mail size={28} />
                </a>
              </div>

              {/* Google Maps */}
              <div className="mt-6 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123456789!2d30.058!3d-1.944"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={5}
                required
                className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
              ></textarea>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(128,0,255,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 font-semibold rounded-full bg-purple-500 text-white shadow-lg transition ${
                  loading ? "opacity-70 cursor-not-allowed" : "hover:bg-purple-600"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/250786026717"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition"
        >
          <MessageCircle size={26} />
        </a>

        {/* Floating Call Button */}
        <a
          href="tel:+250786026717"
          className="fixed bottom-20 right-6 z-50 bg-purple-500 text-white p-4 rounded-full shadow-xl hover:bg-purple-600 transition"
        >
          <Phone size={26} />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
