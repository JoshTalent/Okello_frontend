import React from "react";
import Navbar from "../components/Navbar";
import Abouts from "../components/about/About";
import Footer from "../components/Footer";
import Testimonial from "../components/home/Testimonial";
import Excome from "../components/about/Excome";
import { Phone, MessageCircle } from "lucide-react";

const About = () => {
  return (
    <div className="relative bg-black text-white">
      <Navbar />
      <Abouts />
      <Excome />
      <Testimonial />
      <Footer />

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
    </div>
  );
};

export default About;
