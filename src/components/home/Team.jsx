"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Phone, User2 } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Josue NTWARI",
    role: "Full Stack Developer",
    phone: "+250 788 456 789",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 2,
    name: "GATARE Patric",
    role: "Frontend Developer",
    phone: "+250 788 123 456",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: 3,
    name: "Alpe INEZA MANZI",
    role: "Full Stack Developer",
    phone: "+250 788 456 789",
    linkedin: "#",
    twitter: "#",
  },
];

const Team = () => {
  const canvasRef = useRef(null);

  // Particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(128,0,255,${Math.random() * 0.5})`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
            Our Development Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-2 shadow-md"></div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              className="relative bg-gray-900 rounded-3xl shadow-2xl border-2 border-gray-800 hover:border-purple-500 hover:bg-gradient-to-tl hover:from-purple-900 hover:via-purple-700 hover:to-gray-900 transition-all duration-500 p-6 flex flex-col items-center overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Profile circle */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold text-black mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              {/* Member info */}
              <h3 className="text-xl font-bold text-purple-500 mb-1 text-center">{member.name}</h3>
              <p className="text-gray-400 mb-2 text-center">{member.role}</p>
              <p className="flex items-center justify-center gap-2 text-gray-300 mt-2">
                <Phone className="w-5 h-5 text-purple-500" />
                {member.phone}
              </p>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-black/0 hover:bg-black/60 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"
              >
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-white hover:text-purple-500 transition" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6 text-white hover:text-purple-500 transition" />
                </a>
                <User2 className="w-6 h-6 text-white hover:text-purple-500 transition" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
