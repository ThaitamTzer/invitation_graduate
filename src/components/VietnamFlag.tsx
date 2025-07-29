"use client";

import React from "react";
import { motion } from "framer-motion";

interface VietnamFlagProps {
  numOfColumns?: number;
  staggeredDelay?: number;
  className?: string;
}

function VietnamFlag({
  numOfColumns = 20,
  staggeredDelay = 65,
  className = "",
}: VietnamFlagProps) {
  return (
    <motion.div
      className={`vietnam-flag ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {Array.from({ length: numOfColumns }, (_, index) => (
        <motion.div
          key={index}
          className="flag-column"
          style={{
            animationDelay: index * staggeredDelay + "ms",
          }}
          whileHover={{ scale: 1.1 }}
        />
      ))}
      {/* Star in the center */}
      <motion.div
        className="star-container"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg className="vietnam-star" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default VietnamFlag;
