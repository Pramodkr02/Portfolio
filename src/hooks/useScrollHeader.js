import { useState, useEffect } from 'react';

export function useScrollHeader(threshold = 32) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check threshold for glass effect
      setIsScrolled(currentScrollY > threshold);

      // Check direction for hide/show (disabled for sticky behavior)
      // if (currentScrollY > lastScrollY && currentScrollY > 100) {
      //   setIsVisible(false);
      // } else {
      //   setIsVisible(true);
      // }
      setIsVisible(true);

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY, threshold]);

  return { isScrolled, isVisible };
}
