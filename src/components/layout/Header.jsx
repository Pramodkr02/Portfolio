import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, Sun, Moon, FileText } from 'lucide-react';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { ScrollProgress } from './ScrollProgress';
import { cn } from '@/utils/cn';

const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const { isScrolled, isVisible } = useScrollHeader();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleResumeClick = () => {
    // Placeholder for resume download logic
    console.log('Download Resume');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ScrollProgress />
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-bg-900/80 backdrop-blur-md border-border-soft h-16" : "bg-transparent h-20",
          !isVisible && "-translate-y-full"
        )}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-display font-bold text-text-primary hover:scale-105 transition-transform"
            aria-label="Home"
          >
            Portfolio<span className="text-accent-primary">.</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-secondary hover:text-accent-primary hover:bg-surface-200 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button onClick={handleResumeClick} size="sm" variant="outline">
              <FileText className="mr-2 w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-text-primary"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
        onResumeClick={handleResumeClick}
      />
    </>
  );
};
