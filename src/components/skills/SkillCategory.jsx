import React from 'react';
import { motion } from 'framer-motion';
import { SkillBadge } from './SkillBadge';
import { Card } from '@/components/ui/Card';

export const SkillCategory = ({ title, description, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-display font-bold text-text-primary mb-2">{title}</h3>
          <p className="text-sm text-text-tertiary">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} {...skill} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
