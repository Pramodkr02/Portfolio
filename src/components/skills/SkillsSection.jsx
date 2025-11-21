import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillCategory } from './SkillCategory';
import { SKILLS_DATA } from '@/data/skills';
import { cn } from '@/utils/cn';

const FILTERS = ['All', 'Frontend', 'Backend', 'Tools'];

export const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredData = activeFilter === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(cat => cat.id === activeFilter.toLowerCase() || cat.title.includes(activeFilter));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary"
          >
            A comprehensive overview of my technical skills and proficiency levels across various domains.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeFilter === filter
                  ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/25"
                  : "bg-surface-200 text-text-secondary hover:bg-surface-300 hover:text-text-primary"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredData.map((category, index) => (
              <SkillCategory 
                key={category.id} 
                {...category} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
