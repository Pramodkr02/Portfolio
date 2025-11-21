import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@/components/ui/Tooltip';

export const SkillBadge = ({ name, iconType, src, component: Icon, color }) => {
  return (
    <Tooltip content={name}>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="relative group flex items-center justify-center p-4 rounded-2xl bg-surface-200 border border-border-soft hover:border-accent-primary/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-accent-primary/20"
      >
        <div className="w-12 h-12 flex items-center justify-center">
          {iconType === 'image' ? (
            <img 
              src={src} 
              alt={name} 
              className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110" 
            />
          ) : (
            <Icon 
              className="w-full h-full transition-transform duration-300 group-hover:scale-110" 
              style={{ color: color }} 
            />
          )}
        </div>
        
        {/* Name Reveal on Hover (Optional, since we have tooltip) */}
        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-xs font-bold text-text-primary bg-surface-300 px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
            {name}
          </span>
        </div>
      </motion.div>
    </Tooltip>
  );
};
