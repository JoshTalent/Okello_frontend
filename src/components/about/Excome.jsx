"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { User2, Phone, Mail } from "lucide-react";

const excomMembers = [
  {
    id: 1,
    name: "Okello",
    role: "Founder & CEO",
    phone: "+250 786 026 717",
    email: "okello@studio.com",
    image: "",
  },
  {
    id: 2,
    name: "Josue Ntwari",
    role: "Director",
    phone: "+250 788 234 567",
    email: "josue@studio.com",
    image: "",
  },
];

const Excome = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

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
      {/* Canvas for particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-purple-700 rounded-full mix-blend-soft-light animate-pulse opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-500 rounded-full mix-blend-soft-light animate-pulse opacity-20"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
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
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-2 shadow-lg"></div>
        </motion.div>

        {/* Excom Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {excomMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              className="relative bg-gray-900 rounded-3xl shadow-2xl border-2 border-gray-800 hover:border-purple-500 transition-all duration-500 p-6 flex flex-col items-center overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Rotating role badge */}
              <motion.div
                className="absolute -top-5 right-5 bg-gradient-to-r from-purple-500 to-pink-500 text-black px-3 py-1 rounded-full font-bold text-sm shadow-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {member.role}
              </motion.div>

              {/* Profile Image or Initials */}
              <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold text-black mb-4 shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-110">
                {member.image
                  ? <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  : member.name.split(" ").map(n => n[0]).join("")
                }
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-purple-500 mb-1 text-center">{member.name}</h3>
              <p className="text-gray-400 mb-2 text-center">{member.role}</p>
              <p className="text-gray-300 font-semibold">{member.phone}</p>

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-black/0 hover:bg-black/60 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"
              >
                <a href={`tel:${member.phone}`} className="text-white hover:text-purple-500 transition">
                  <Phone size={24} />
                </a>
                <a href={`mailto:${member.email}`} className="text-white hover:text-purple-500 transition">
                  <Mail size={24} />
                </a>
                <User2 size={24} className="text-white hover:text-purple-500 transition" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Excome;
