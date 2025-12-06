import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

interface FloatingCTAProps {
  triggerId: string;
  targetId: string;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ triggerId, targetId }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.getElementById(triggerId);
      if (triggerElement) {
        // Show button if we have scrolled PAST the top of the trigger element
        const triggerPosition = triggerElement.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY > triggerPosition) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerId]);

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:left-1/2 md:-translate-x-1/2 md:w-auto md:max-w-md animate-fade-in-up">
      <Button 
        onClick={handleClick}
        fullWidth
        className="shadow-2xl !bg-brand-accent hover:!bg-orange-500 !border-orange-700 text-white uppercase tracking-wider py-3 text-sm md:text-base"
      >
        Quiero la Oferta
      </Button>
    </div>
  );
};

export default FloatingCTA;