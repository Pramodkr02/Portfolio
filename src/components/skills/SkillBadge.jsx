import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@/components/ui/Tooltip';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const SkillBadge = ({ name, level, color }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Tooltip content={`${name} - ${level}% Proficiency`}>
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="relative group flex items-center gap-3 p-3 rounded-xl bg-surface-200 border border-border-soft hover:border-accent-primary/50 transition-colors cursor-default"
      >
        {/* Icon Placeholder */}
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {name.substring(0, 2)}
        </div>

        <div className="flex-1 min-w-[100px]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-text-primary">{name}</span>
            <span className="text-xs text-text-tertiary">{level}%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-bg-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 1, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
      </motion.div>
    </Tooltip>
  );
};
