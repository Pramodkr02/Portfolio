import { useState, useEffect } from 'react';

export function useEffectSettings() {
  const [settings, setSettings] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('effect-settings');
      if (saved) return JSON.parse(saved);
    }
    return {
      effectsEnabled: true,
      particleIntensity: 0.6,
      threeEnabled: true,
      highContrast: false,
    };
  });

  useEffect(() => {
    localStorage.setItem('effect-settings', JSON.stringify(settings));
    
    // Apply global CSS variables based on settings if needed
    document.documentElement.style.setProperty('--effects-intensity', settings.effectsEnabled ? settings.particleIntensity : 0);
  }, [settings]);

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return { settings, updateSettings };
}
