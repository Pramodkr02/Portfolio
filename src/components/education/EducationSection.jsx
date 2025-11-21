import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EducationCard } from './EducationCard';
import { EducationModal } from './EducationModal';
import { EDUCATION_DATA } from '@/data/education';

export const EducationSection = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-bg-900/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
          >
            Education & Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary"
          >
            My academic journey and professional certifications.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary/50 to-transparent -translate-x-1/2" />
          
          {/* Left Line (Mobile) */}
          <div className="md:hidden absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-primary/50 to-transparent" />

          <div className="space-y-12 md:space-y-24">
            {EDUCATION_DATA.map((edu, index) => (
              <EducationCard 
                key={edu.id} 
                data={edu} 
                index={index} 
                onClick={() => setSelectedEducation(edu)} 
              />
            ))}
          </div>
        </div>
      </div>

      <EducationModal 
        isOpen={!!selectedEducation} 
        onClose={() => setSelectedEducation(null)} 
        data={selectedEducation} 
      />
    </section>
  );
};
