import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

export const CustomSelect = ({ options, value, onChange, label, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="space-y-2" ref={containerRef}>
      <label className="text-sm font-medium text-text-secondary">
        {label}
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 rounded-lg bg-surface-200 border ${
            error ? "border-red-500" : isOpen ? "border-accent-primary" : "border-border-soft"
          } text-text-primary flex items-center justify-between focus:outline-none transition-all`}
        >
          <span className={selectedOption ? "text-text-primary" : "text-text-tertiary"}>
            {selectedOption ? selectedOption.label : "Select a subject"}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-text-tertiary" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full mt-2 py-2 rounded-lg bg-bg-900 border border-border-soft shadow-xl max-h-60 overflow-y-auto"
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-surface-300 flex items-center justify-between group transition-colors"
                >
                  <span className={`text-sm ${value === option.value ? "text-accent-primary font-medium" : "text-text-secondary group-hover:text-text-primary"}`}>
                    {option.label}
                  </span>
                  {value === option.value && (
                    <Check className="w-4 h-4 text-accent-primary" />
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {error && (
        <span className="text-xs text-red-500">{error.message}</span>
      )}
    </div>
  );
};
