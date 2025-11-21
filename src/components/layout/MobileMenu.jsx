import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

export const MobileMenu = ({ isOpen, onClose, links, onResumeClick }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.06, duration: 0.3 }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 flex flex-col bg-bg-900/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Menu"
        >
          <div className="flex items-center justify-end p-6">
            <button
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                custom={i}
                variants={itemVariants}
                onClick={onClose}
                className="text-3xl font-display font-bold text-text-primary hover:text-accent-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            
            <motion.div
              custom={links.length}
              variants={itemVariants}
              className="mt-8 flex flex-col gap-6 items-center"
            >
              <Button onClick={onResumeClick} size="lg" className="w-full min-w-[200px]">
                <FileText className="mr-2 w-5 h-5" />
                Resume
              </Button>

              <div className="flex gap-6">
                <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-text-secondary hover:text-accent-primary transition-colors" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
