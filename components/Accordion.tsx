import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-primary/20 rounded-lg bg-white overflow-hidden mb-3">
      <button
        className="w-full px-5 py-4 text-left flex justify-between items-center bg-white hover:bg-brand-light/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-brand-dark text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-primary" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-brand-primary/10">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;