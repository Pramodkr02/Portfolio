import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const ProjectCard = ({ project, onClick, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card 
        className="group h-full flex flex-col p-0 overflow-hidden cursor-pointer"
        onClick={onClick}
        hoverEffect={true}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-surface-200">
          <img 
            src={project.images[0].src} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <Button 
              size="sm" 
              variant="secondary"
              onClick={(e) => { e.stopPropagation(); window.open(project.liveUrl, '_blank'); }}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Demo
            </Button>
            <Button 
              size="sm" 
              variant="secondary"
              onClick={(e) => { e.stopPropagation(); window.open(project.repoUrl, '_blank'); }}
            >
              <Github className="w-4 h-4 mr-2" /> Code
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors line-clamp-1">
              {project.title}
            </h3>
          </div>
          
          <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-1">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.techTags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-md bg-surface-200 text-text-tertiary">
                {tag}
              </span>
            ))}
            {project.techTags.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-md bg-surface-200 text-text-tertiary">
                +{project.techTags.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 text-xs text-text-tertiary pt-4 border-t border-border-soft">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span>{project.metrics.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="w-3 h-3" />
              <span>{project.metrics.forks}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
