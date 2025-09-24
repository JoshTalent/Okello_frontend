"use client";
import React from "react";
import { motion } from "framer-motion";

const excomMembers = [
  {
    id: 1,
    name: "Okello",
    role: "Founder & Ceo",
    phone: "+250 786 026 717",
  },
  {
    id: 2,
    name: "Josue Ntwari",
    role: "Director",
    phone: "+250 788 234 567",
  }
];

const Excome = () => {
  return (
    <section className="relative py-24 bg-black text-white">
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
            Our Executive Committee
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
        </motion.div>

        {/* Excom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {excomMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              className="bg-gray-900 rounded-2xl shadow-2xl border-2 border-gray-800 hover:border-purple-500 transition-all duration-500 p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-black">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <h3 className="text-xl font-bold text-purple-500">{member.name}</h3>
              <p className="text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-300 font-semibold">{member.phone}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excome;
