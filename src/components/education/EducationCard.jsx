import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const EducationCard = ({ data, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Dot (Desktop) */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-bg-900 border-2 border-accent-primary z-10 shadow-[0_0_10px_var(--accent-primary)] animate-edu-dot" />
      
      {/* Timeline Line (Mobile) */}
      <div className="md:hidden absolute left-0 top-8 w-3 h-3 rounded-full bg-accent-primary z-10 animate-edu-dot" />

      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'}`}>
        <Card 
          className="group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-accent-primary/30"
          onClick={onClick}
        >
          <div className={`flex flex-col gap-4 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
            <div className="flex items-center gap-3 text-accent-primary">
              <GraduationCap className="w-6 h-6" />
              <span className="font-bold">{data.degree}</span>
            </div>
            
            <div className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <h3 className="text-xl font-bold text-text-primary">{data.institution}</h3>
              <p className="text-text-secondary font-medium">{data.branch}</p>
              <div className="flex items-center gap-2 text-sm text-text-tertiary mt-2 justify-start md:justify-inherit">
                <Calendar className="w-4 h-4" />
                <span>{data.startYear} - {data.endYear}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {data.skills.slice(0, 3).map((skill) => (
                <span key={skill} className="px-2 py-1 text-xs rounded-md bg-surface-200 text-text-secondary">
                  {skill}
                </span>
              ))}
              {data.skills.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-md bg-surface-200 text-text-secondary">
                  +{data.skills.length - 3}
                </span>
              )}
            </div>

            <Button variant="ghost" size="sm" className="mt-2 group-hover:text-accent-primary transition-colors">
              View Details <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};
