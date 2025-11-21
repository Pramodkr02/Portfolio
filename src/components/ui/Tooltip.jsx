import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

export const Tooltip = ({ content, children, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 px-3 py-1.5 text-sm text-text-primary bg-surface-300 border border-border-soft rounded-lg shadow-xl backdrop-blur-md whitespace-nowrap bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none",
              className
            )}
            role="tooltip"
          >
            {content}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface-300 border-r border-b border-border-soft rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
