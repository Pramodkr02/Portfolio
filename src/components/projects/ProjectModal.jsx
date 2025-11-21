import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight, Star, GitFork } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} size="lg">
      <div className="space-y-8">
        {/* Image Carousel */}
        <div className="relative aspect-video bg-surface-100 rounded-xl overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex].src}
              alt={project.images[currentImageIndex].alt}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent-primary"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent-primary"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Overview</h3>
              <p className="text-text-secondary leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm rounded-full bg-surface-200 text-text-primary border border-border-soft">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <ExternalLink className="mr-2 w-4 h-4" />
                Live Demo
              </Button>
              <Button variant="outline" href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Github className="mr-2 w-4 h-4" />
                View Code
              </Button>
            </div>

            <div className="p-4 rounded-xl bg-surface-100 border border-border-soft">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-secondary">Stars</span>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold">{project.metrics.stars}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Forks</span>
                <div className="flex items-center gap-1 text-text-primary">
                  <GitFork className="w-4 h-4" />
                  <span className="font-bold">{project.metrics.forks}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
