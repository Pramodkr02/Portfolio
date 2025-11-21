import React from 'react';
import { cn } from '@/utils/cn';
import { Loader2 } from 'lucide-react';

export const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  children,
  as: Component = 'button',
  href,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-accent-primary text-white hover:bg-accent-primary/90 shadow-lg shadow-accent-primary/20",
    secondary: "bg-surface-200 text-text-primary hover:bg-surface-300 border border-border-soft backdrop-blur-sm",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-100",
    outline: "border border-accent-primary text-accent-primary hover:bg-accent-primary/10",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-lg",
    icon: "h-10 w-10",
  };

  const Comp = href ? 'a' : Component;

  return (
    <Comp
      ref={ref}
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Comp>
  );
});

Button.displayName = "Button";
