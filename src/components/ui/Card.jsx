import React from 'react';
import { cn } from '@/utils/cn';

export const Card = React.forwardRef(({
  className,
  children,
  hoverEffect = true,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "glass-card rounded-xl p-6",
        hoverEffect && "hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";
