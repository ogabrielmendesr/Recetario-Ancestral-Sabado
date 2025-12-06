import React from 'react';
import Button from './ui/Button';
import { PRICE_NEW } from '../constants';

const StickyCTA: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-semibold uppercase">Solo por hoy</span>
          <span className="text-xl font-bold text-brand-primary">US$ {PRICE_NEW}</span>
        </div>
        <Button 
          onClick={scrollToOffer} 
          className="py-2 px-4 text-sm w-auto shadow-none"
        >
          Quiero la Oferta
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;