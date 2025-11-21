import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const onSubmit = async (data) => {
    setStatus('sending');
    try {
      // Replace with your actual EmailJS service/template/public key
      // const result = await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   data,
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // );
      
      // Mock success for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
          <div className="relative">
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-4 py-3 rounded-lg bg-surface-200 border ${errors.name ? 'border-red-500' : 'border-border-soft'} text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all`}
              placeholder="John Doe"
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name && (
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-3 top-3 text-red-500"
              >
                <AlertCircle className="w-5 h-5" />
              </motion.span>
            )}
          </div>
          {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
          <div className="relative">
            <input
              id="email"
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full px-4 py-3 rounded-lg bg-surface-200 border ${errors.email ? 'border-red-500' : 'border-border-soft'} text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all`}
              placeholder="john@example.com"
              aria-invalid={errors.email ? 'true' : 'false'}
            />
             {errors.email && (
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-3 top-3 text-red-500"
              >
                <AlertCircle className="w-5 h-5" />
              </motion.span>
            )}
          </div>
          {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-text-secondary">Subject</label>
        <select
          id="subject"
          {...register('subject')}
          className="w-full px-4 py-3 rounded-lg bg-surface-200 border border-border-soft text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Project Proposal">Project Proposal</option>
          <option value="Freelance">Freelance Opportunity</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { 
            required: 'Message is required',
            minLength: { value: 20, message: 'Message must be at least 20 characters' }
          })}
          className={`w-full px-4 py-3 rounded-lg bg-surface-200 border ${errors.message ? 'border-red-500' : 'border-border-soft'} text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary transition-all resize-none`}
          placeholder="Tell me about your project..."
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
      </div>

      <Button 
        type="submit" 
        className="w-full md:w-auto min-w-[150px]"
        disabled={status === 'sending' || status === 'success'}
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Sending...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle className="mr-2 w-4 h-4" /> Message Sent
          </>
        ) : (
          <>
            <Send className="mr-2 w-4 h-4" /> Send Message
          </>
        )}
      </Button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span>Thank you! I'll get back to you as soon as possible.</span>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-2"
          >
            <AlertCircle className="w-5 h-5" />
            <span>Something went wrong. Please try again or email me directly.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};
