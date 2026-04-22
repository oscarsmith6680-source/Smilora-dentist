'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate="default"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 123, 255, 0.3)',
        pointerEvents: 'none',
        zIndex: 9999,
        border: '1px solid rgba(0, 123, 255, 0.5)'
      }}
    />
  );
};

export default CustomCursor;
