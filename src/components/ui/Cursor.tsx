import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);

    // Add event listeners to all clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    clickables.forEach(element => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      clickables.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  // Hide on mobile/touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 24,
      width: 24,
      backgroundColor: "rgba(79, 70, 229, 0.4)"
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 48,
      width: 48,
      backgroundColor: "rgba(79, 70, 229, 0.2)",
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  };

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 300,
        mass: 0.5
      }}
    />
  );
};

export default Cursor;