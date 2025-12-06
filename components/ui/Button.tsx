import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  pulse?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-xl";
  
  const variants = {
    primary: "bg-brand-accent hover:bg-orange-500 text-white border-b-4 border-orange-700 hover:border-orange-600",
    secondary: "bg-brand-primary hover:bg-brand-dark text-white border-b-4 border-brand-dark",
    outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-light"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const pulseClass = pulse ? "animate-pulse" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};

export default Button;