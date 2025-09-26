"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Photography",
    description: "Professional photoshoots for brands, events, and products.",
    price: "$150",
    features: ["1-hour session", "10 edited photos", "High-resolution images", "Online gallery"],
  },
  {
    id: 2,
    title: "Videography",
    description: "Capture stunning videos for commercials, campaigns, and social media.",
    price: "$300",
    features: ["2-hour session", "Full HD video", "Basic editing included", "1-minute highlight video"],
    popular: true,
  },
  {
    id: 3,
    title: "Branding & Design",
    description: "Creative branding, logos, and digital design solutions for your business.",
    price: "$250",
    features: ["Logo & brand identity", "Social media graphics", "Marketing templates", "3 revisions included"],
  },
  {
    id: 4,
    title: "Social Media Management",
    description: "Boost your online presence with professional social media content.",
    price: "$200",
    features: ["Content calendar", "5 posts per week", "Engagement monitoring", "Monthly performance report"],
  },
  {
    id: 5,
    title: "Web Design",
    description: "Professional website design for your brand with responsive layouts.",
    price: "$400",
    features: ["Custom responsive design", "SEO-friendly structure", "CMS integration", "3-page website", "1-month support"],
  },
];

const Pricings = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title & Intro */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 uppercase">
            Studio Services & Pricing
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg md:text-xl">
            Explore our premium services designed to elevate your brand’s visual identity.
            Choose the package that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className={`relative bg-gray-900/70 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between shadow-xl border border-gray-800 hover:border-purple-500 hover:shadow-2xl transition-all duration-500 ${
                service.popular ? "scale-105 border-purple-500 shadow-purple-500/50" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-bold text-black uppercase shadow-lg animate-bounce">
                  Most Popular
                </div>
              )}

              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-500">{service.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
                <p className="text-3xl md:text-4xl font-extrabold text-white mt-2">{service.price}</p>

                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: service.popular
                    ? "0 0 25px rgba(128,0,255,0.8)"
                    : "0 0 15px rgba(128,0,255,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full py-3 font-semibold rounded-full text-black transition ${
                  service.popular ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-purple-500"
                }`}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
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
  );
};

export default Pricings;
