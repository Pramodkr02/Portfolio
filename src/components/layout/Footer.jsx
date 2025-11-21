import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-900 border-t border-border-soft py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-display font-bold text-text-primary">
              Portfolio<span className="text-accent-primary">.</span>
            </h3>
            <p className="text-text-tertiary text-sm">
              Building digital experiences with code & creativity.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border-soft flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary">
          <p>&copy; {currentYear} All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
