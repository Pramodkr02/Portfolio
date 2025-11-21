import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';

export const HeroVisualCard = () => {
  const cardRef = useRef(null);
  
  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-1 shadow-[0_0_60px_-15px_var(--accent-glow)]"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-bg-900 relative">
          <img 
            src="/Profile.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-900/50 to-transparent" />
        </div>
      </div>
      
      {/* Status Chip */}
      <div 
        style={{ transform: "translateZ(80px)" }}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8"
      >
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-text-primary shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open to work
        </div>
      </div>
    </motion.div>
  );
};
