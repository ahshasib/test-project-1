import React from 'react'
import { Link } from 'react-router'
import { motion } from "framer-motion";

const Home = () => {
  return (
   
        <div className="relative w-full h-screen overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: "linear-gradient(-45deg, #0f0f0f, #1c1c1c, #2a2a2a, #0d0d0d)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Shadow animation layer */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Your content */}
      <div className="relative z-10  text-white">
        <h1 className="text-5xl font-bold text-center py-5">Dark Gradient Background ✨</h1>
        <div className='flex justify-center items-center w-full h-screen gap-5 '>
            <Link to="/login" className=' btn btn-primary'><button>Login</button></Link>
            <Link to="/registration" className=' btn btn-primary'><button>registration</button></Link>
        </div>
      </div>
    </div>
       
    
  )
}

export default Home