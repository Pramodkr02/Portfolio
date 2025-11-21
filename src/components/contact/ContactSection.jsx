import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { ContactWidget } from './ContactWidget';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-900/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-4">
                Let's Work Together
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Have a project in mind or want to discuss a potential collaboration? 
                I'm currently open to new opportunities and would love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-surface-200 text-accent-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Email</h4>
                  <a href="mailto:contact@example.com" className="text-text-secondary hover:text-accent-primary transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-surface-200 text-accent-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Phone</h4>
                  <p className="text-text-secondary">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-surface-200 text-accent-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">Location</h4>
                  <p className="text-text-secondary">San Francisco, CA (Remote Available)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-100 p-8 rounded-2xl border border-border-soft backdrop-blur-sm"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      
      <ContactWidget />
    </section>
  );
};
