import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Calendar, Award, Download } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export const ExperienceModal = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={data.company} size="lg">
      <div className="space-y-8">
        {/* Header Info */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b border-border-soft pb-6">
          <div>
            <h3 className="text-2xl font-bold text-text-primary">{data.role}</h3>
            <div className="flex items-center gap-4 text-text-secondary mt-2">
              <span className="flex items-center gap-1 text-sm">
                <MapPin className="w-4 h-4" /> {data.location}
              </span>
              <span className="flex items-center gap-1 text-sm">
                <Calendar className="w-4 h-4" /> {data.period}
              </span>
            </div>
          </div>
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
            style={{ backgroundColor: data.color }}
          >
            {data.company.substring(0, 2)}
          </div>
        </div>

        {/* Description & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-text-primary mb-2">Role Overview</h4>
              <p className="text-text-secondary leading-relaxed">{data.description}</p>
            </div>

            <div>
              <h4 className="font-bold text-text-primary mb-2">Key Achievements</h4>
              <ul className="space-y-2">
                {data.achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-secondary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-text-primary mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 text-xs rounded-md bg-surface-200 text-text-secondary border border-border-soft">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-text-primary flex items-center gap-2">
              <Award className="w-5 h-5 text-accent-primary" /> Certificate
            </h4>
            <div className="relative aspect-[4/3] bg-surface-100 rounded-xl overflow-hidden group border border-border-soft">
              <div className="absolute inset-0 flex items-center justify-center bg-surface-200 text-text-tertiary">
                {/* Placeholder for actual image */}
                <img 
                  src={data.certificate.image} 
                  alt={data.certificate.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/400x300?text=Certificate'; // Fallback
                  }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">{data.certificate.title}</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 w-4 h-4" />
              Download Reference
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
