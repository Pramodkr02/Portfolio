import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const SVGBackgroundMorph = () => {
  const { theme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  const isDark = theme === 'dark';
  
  // Simplified paths for morphing (blobs)
  const path1 = "M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.7,-11.7,85.6,2.4C83.5,16.5,75.1,29.6,65.3,40.7C55.6,51.8,44.5,60.9,32.1,68.2C19.7,75.5,6,81,-7.2,80.1C-20.4,79.2,-33.1,71.9,-44.7,63.3C-56.3,54.7,-66.8,44.8,-73.9,32.8C-81,20.8,-84.7,6.7,-82.6,-6.4C-80.5,-19.5,-72.6,-31.6,-62.7,-41.6C-52.8,-51.6,-40.9,-59.5,-28.6,-67.1C-16.3,-74.7,-3.6,-82,10.2,-83.2C24,-84.4,32.5,-83.3,45.7,-76.3Z";
  const path2 = "M41.7,-71.3C54.6,-63.9,66.1,-54.6,73.6,-42.8C81.1,-31,84.6,-16.7,83.1,-2.9C81.6,10.9,75.1,24.2,66.1,35.8C57.1,47.4,45.6,57.3,32.9,64.2C20.2,71.1,6.3,75,-7.1,74.1C-20.5,73.2,-33.4,67.5,-44.8,59.4C-56.2,51.3,-66.1,40.8,-72.8,28.6C-79.5,16.4,-83,2.5,-80.4,-10.3C-77.8,-23.1,-69.1,-34.8,-58.9,-44.3C-48.7,-53.8,-37,-61.1,-25.1,-66.8C-13.2,-72.5,-1.1,-76.6,11.4,-78C23.9,-79.4,35.9,-78.1,41.7,-71.3Z";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full opacity-50 blur-[80px]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.path
          d={path1}
          fill={isDark ? "#7C5CFF" : "#6B4CFF"}
          animate={{
            d: [path1, path2, path1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          transform="translate(100 100)"
        />
      </motion.svg>
      
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 w-full h-full opacity-40 blur-[100px]"
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.path
          d={path2}
          fill={isDark ? "#00D4FF" : "#00B2E8"}
          animate={{
            d: [path2, path1, path2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          transform="translate(100 100)"
        />
      </motion.svg>
    </div>
  );
};
