import React from "react";
import { Link } from "react-router"; // react-router-dom ব্যবহার করুন
import { motion } from "framer-motion";

const Home = () => {
  // একটি ফাংশন বানালাম যেটা random floating animation বানাবে
  const floating = () => ({
    x: [0, Math.random() * 100 - 50, 0], // এলোমেলোভাবে বামে-ডানে যাবে
    y: [0, Math.random() * 100 - 50, 0], // এলোমেলোভাবে উপরে-নিচে যাবে
    transition: {
      duration: 8 + Math.random() * 4, // প্রতিটি বলের জন্য ভিন্ন ভিন্ন সময়
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  });

  return (
    <div  className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center bg-cover bg-center"
    style={{ backgroundImage: `url(./bg.png)` }}>
      {/* Floating Circles */}
      <motion.div
        className="absolute top-10 left-10 w-28 h-28 rounded-full bg-gradient-to-r from-yellow-400 to-green-400"
        animate={floating()}
      />
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
        animate={floating()}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-r from-red-400 to-orange-500"
        animate={floating()}
      />
      <motion.div
        className="absolute bottom-10 right-40 w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-teal-400"
        animate={floating()}
      />
      <motion.div
        className="absolute top-40 left-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 -translate-x-1/2"
        animate={floating()}
      />

      {/* Main Text */}
      <h1 className="text-white text-3xl md:text-5xl font-bold">
        WE BUILD A BETTER WEBSITE <br /> AND MOBILE APPS
      </h1>

      <div className="flex gap-4 mt-4">
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

      {/* Website link */}
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
  );
};

export default Home;
