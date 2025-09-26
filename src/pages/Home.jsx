"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Abouts from "../components/about/About";
import Pricings from "../components/home/Pricings";
import Team from "../components/home/Team";
import Partners from "../components/home/Partiners";
import Testimonial from "../components/home/Testimonial";
import Gallery from "./Gallery";
import Footer from "../components/Footer";
import { Phone, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="relative py-24">
        <Abouts />
      </section>

      {/* Pricing / Services Section */}
      <section id="services" className="relative py-24">
        <Pricings />
      </section>

      {/* Partners Section */}
      <section id="partners" className="relative py-24">
        <Partners />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24">
        <Testimonial />
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-24">
        <Team />
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative py-24">
        <Gallery />
      </section>

      {/* Footer */}
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

export default Home;
