// components/CustomCursor/CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Dot (Center Point) */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Ring 1 (closest) */}
      <motion.div
        className="cursor-ring ring-1"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Ring 2 (middle) */}
      <motion.div
        className="cursor-ring ring-2"
        animate={{
          x: position.x - 14,
          y: position.y - 14,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Ring 3 (outer) */}
      <motion.div
        className="cursor-ring ring-3"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
