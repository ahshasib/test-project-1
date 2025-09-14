import React from "react";
import { Link } from "react-router"; 
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Navbar from "../component/Navbar";

const Home = () => {
  // Random scattered stars
  const stars = Array.from({ length: 50 }).map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    color: ["#E0C3FC", "#B692F6", "#A68BFA"][Math.floor(Math.random() * 3)],
    shadow: "0 0 " + (Math.random() * 6 + 4) + "px rgba(255,255,255,0.7)",
  }));

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{
      backgroundImage: `url(./bg.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Navbar></Navbar>
      <div
      className="w-full h-screen flex items-center justify-center "
      
    >
      {/* Scattered Twinkling Stars */}
      {stars.map((star, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: star.shadow,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: Math.random(),
          }}
        />
      ))}

      {/* First Huge Orbit (Planets) */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full border border-gray-700 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-violet-400 rounded-full animate-pulse shadow-[0_0_15px_5px_rgba(139,92,246,0.8)]"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-violet-500 rounded-full animate-pulse shadow-[0_0_12px_4px_rgba(167,139,250,0.7)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-violet-300 rounded-full animate-pulse shadow-[0_0_18px_6px_rgba(196,181,253,0.9)]"></div>
      </motion.div>

      {/* Second Huge Orbit (Planets) */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full border border-gray-700 flex items-center justify-center"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-violet-400 rounded-full animate-pulse shadow-[0_0_12px_4px_rgba(167,139,250,0.9)]"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-violet-500 rounded-full animate-pulse shadow-[0_0_15px_5px_rgba(139,92,246,0.8)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-violet-300 rounded-full animate-pulse shadow-[0_0_10px_3px_rgba(196,181,253,0.9)]"></div>
      </motion.div>

      {/* Centered Text & Buttons */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          WE BUILD A BETTER WEBSITE <br /> AND MOBILE APPS
        </h1>

        <div className="flex gap-4 mt-4 justify-center flex-wrap">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <Link to="/registration">
            <button className="btn btn-primary">Registration</button>
          </Link>
          <Link to="/order">
            <button className="btn btn-primary">Order</button>
          </Link>
        </div>

        <div className="mt-6">
          <a
            href="https://reallygreatsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition-all"
          >
            WWW.REALLYGREATSITE.COM
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
