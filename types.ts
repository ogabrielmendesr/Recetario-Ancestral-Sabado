import { LucideIcon } from 'lucide-react';

export interface ModuleData {
  title: string;
  description: string;
  count: number;
  icon: LucideIcon;
}

export interface BonusData {
  title: string;
  image: string;
  price: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialData {
  name: string;
  text: string;
  stars: number;
}