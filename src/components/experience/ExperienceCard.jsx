import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const ExperienceCard = ({ data, index, onClick }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-bg-900 border-2 border-accent-primary z-10 -translate-x-1/2 shadow-[0_0_10px_var(--accent-primary)]" />

      {/* Spacer for Desktop */}
      <div className="hidden md:block w-1/2" />

      {/* Content Card */}
      <motion.div 
        className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <Card 
          className="group cursor-pointer relative overflow-hidden border-l-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{ borderLeftColor: data.color }}
          onClick={onClick}
        >
          {/* Background Gradient on Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${data.color}, transparent)` }}
          />

          <div className="flex justify-between items-start mb-2">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md mb-3"
              style={{ backgroundColor: data.color }}
            >
              {data.company.substring(0, 2)}
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-surface-200 text-text-secondary flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {data.period}
            </span>
          </div>

          <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
            {data.role}
          </h3>
          <h4 className="text-base font-medium text-text-secondary mb-3">{data.company}</h4>
          
          <p className="text-sm text-text-tertiary line-clamp-2 mb-4">
            {data.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex -space-x-2">
              {data.skills.slice(0, 3).map((skill, i) => (
                <div 
                  key={i}
                  className="w-6 h-6 rounded-full bg-surface-300 border border-bg-900 flex items-center justify-center text-[10px] text-text-secondary overflow-hidden"
                  title={skill}
                >
                  {skill[0]}
                </div>
              ))}
              {data.skills.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-surface-300 border border-bg-900 flex items-center justify-center text-[8px] text-text-secondary">
                  +{data.skills.length - 3}
                </div>
              )}
            </div>
            
            <div className="flex items-center text-xs font-bold text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
              View Details <ArrowRight className="ml-1 w-3 h-3" />
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
