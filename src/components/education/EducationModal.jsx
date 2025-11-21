import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export const EducationModal = ({ isOpen, onClose, data }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  if (!data) return null;

  const nextCert = () => {
    setCurrentCertIndex((prev) => (prev + 1) % data.certs.length);
  };

  const prevCert = () => {
    setCurrentCertIndex((prev) => (prev - 1 + data.certs.length) % data.certs.length);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={data.institution} size="lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-text-primary">{data.degree}</h3>
            <p className="text-text-secondary">{data.branch}</p>
            <p className="text-sm text-text-tertiary mt-1">{data.startYear} - {data.endYear}</p>
            {data.gpa && <p className="text-sm font-medium text-accent-primary mt-2">GPA: {data.gpa}</p>}
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-2">Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {data.coursework.map((course) => (
                <span key={course} className="px-2 py-1 text-xs rounded-md bg-surface-200 text-text-secondary">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-primary mb-2">Skills Acquired</h4>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 text-xs rounded-full border border-accent-primary/30 text-accent-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Certificates */}
        <div className="space-y-4">
          <h4 className="font-bold text-text-primary">Certificates & Achievements</h4>
          {data.certs.length > 0 ? (
            <div className="relative aspect-[4/3] bg-surface-100 rounded-xl overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentCertIndex}
                  src={data.certs[currentCertIndex].image}
                  alt={data.certs[currentCertIndex].title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">{data.certs[currentCertIndex].title}</p>
              </div>

              {data.certs.length > 1 && (
                <>
                  <button 
                    onClick={prevCert}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent-primary"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextCert}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent-primary"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="aspect-[4/3] bg-surface-100 rounded-xl flex items-center justify-center text-text-tertiary">
              No certificates uploaded
            </div>
          )}
          
          <Button variant="outline" className="w-full">
            <Download className="mr-2 w-4 h-4" />
            Download Transcript
          </Button>
        </div>
      </div>
    </Modal>
  );
};
