import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Mail, Calendar, Video } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 mb-2 w-64 bg-surface-200 border border-border-soft rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md"
          >
            <div className="p-4 space-y-3">
              <h4 className="font-bold text-text-primary text-sm">Quick Actions</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                href="mailto:contact@example.com"
              >
                <Mail className="mr-2 w-4 h-4" /> Email Me
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                href="#"
              >
                <Calendar className="mr-2 w-4 h-4" /> Schedule Call
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-start"
                href="#"
              >
                <Video className="mr-2 w-4 h-4" /> Video Intro
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-accent-primary text-white shadow-lg shadow-accent-primary/30 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-primary"
        animate={{
          boxShadow: isOpen ? "0 0 0 rgba(0,0,0,0)" : "0 10px 30px rgba(124, 92, 255, 0.3)",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
