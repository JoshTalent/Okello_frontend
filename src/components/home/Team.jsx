"use client";
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Phone } from "lucide-react";

const teamMembers = [
  {
    id: 4,
    name: "Josue NTWARI",
    role: "Full Stack Developer",
    phone: "+250 788 456 789",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 1,
    name: "GATARE Patric",
    role: "Frontend Developer",
    phone: "+250 788 123 456",
    linkedin: "#",
    twitter: "#",
  }, 
  {
    id: 4,
    name: "Alpe INEZA MANZI",
    role: "Full Stack Developer",
    phone: "+250 788 456 789",
    linkedin: "#",
    twitter: "#",
  },
];

const Team = () => {
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
            Our Development Team
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              className="bg-gray-900 rounded-2xl shadow-2xl border-2 border-gray-800 hover:border-purple-500 hover:bg-gradient-to-tl hover:from-purple-900 hover:via-purple-700 hover:to-gray-900 transition-all duration-500 p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-bold text-purple-500">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                <p className="flex items-center justify-center gap-2 text-gray-300 mt-2">
                  <Phone className="w-5 h-5 text-purple-500" />
                  {member.phone}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center space-x-4 mt-6">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-purple-500 hover:text-white transition" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6 text-purple-500 hover:text-white transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
