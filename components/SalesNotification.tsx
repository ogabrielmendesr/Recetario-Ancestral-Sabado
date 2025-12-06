import React, { useState, useEffect } from 'react';
import { SALES_NOTIFICATIONS } from '../constants';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

interface SalesNotificationProps {
  triggerId: string;
}

const SalesNotification: React.FC<SalesNotificationProps> = ({ triggerId }) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(SALES_NOTIFICATIONS[0]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(triggerId);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Start triggering when the offer section is approaching viewport or inside it
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsActive(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerId]);

  useEffect(() => {
    if (!isActive) return;

    const showNotification = () => {
      // Pick random data
      const randomData = SALES_NOTIFICATIONS[Math.floor(Math.random() * SALES_NOTIFICATIONS.length)];
      setData(randomData);
      setVisible(true);

      // Hide after 3 seconds
      setTimeout(() => {
        setVisible(false);
      }, 3000);

      // Schedule next notification (random 7-15s)
      const nextInterval = Math.floor(Math.random() * (15000 - 7000 + 1) + 7000);
      timeoutId = setTimeout(showNotification, nextInterval);
    };

    // Initial delay
    let timeoutId = setTimeout(showNotification, 5000);

    return () => clearTimeout(timeoutId);
  }, [isActive]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80 pointer-events-none">
      <div className="bg-white rounded-lg shadow-xl p-3 border border-brand-primary/20 flex items-center gap-3 animate-fade-in-down transform transition-all duration-500">
        <div className="bg-green-100 p-2 rounded-full shrink-0">
          <ShoppingBag className="w-5 h-5 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-800 truncate">{data.name}</p>
          <p className="text-xs text-gray-500 truncate">{data.location}</p>
          <div className="flex items-center gap-1 mt-1">
             <CheckCircle2 className="w-3 h-3 text-brand-primary" />
             <p className="text-[10px] text-brand-primary font-semibold">Compró Recetario Ancestral</p>
          </div>
        </div>
        <div className="text-[10px] text-gray-400 self-start">Ahora</div>
      </div>
    </div>
  );
};

export default SalesNotification;