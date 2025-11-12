import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-9xl font-extrabold text-[#ffd07a] drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl md:text-4xl font-semibold mt-4"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-3 text-gray-300 text-lg max-w-md"
      >
        The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-3 rounded-full text-lg font-semibold text-black bg-[#ffd07a] hover:bg-[#e6b85e] transition-all duration-300"
      >
        Go Home
      </motion.button>
    </div>
  );
}

export default NotFound;
