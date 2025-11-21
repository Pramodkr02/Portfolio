import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { ExperienceModal } from './ExperienceModal';
import { EXPERIENCE_DATA } from '@/data/experience';

export const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary"
          >
            My career journey and professional milestones.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-strong to-transparent -translate-x-1/2" />
          
          {/* Left Line (Mobile) */}
          <div className="md:hidden absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-strong to-transparent" />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
              <ExperienceCard 
                key={exp.id} 
                data={exp} 
                index={index} 
                onClick={() => setSelectedExp(exp)} 
              />
            ))}
          </div>
        </div>
      </div>

      <ExperienceModal 
        isOpen={!!selectedExp} 
        onClose={() => setSelectedExp(null)} 
        data={selectedExp} 
      />
    </section>
  );
};
