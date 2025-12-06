import { 
  Leaf, 
  Droplet, 
  Moon, 
  Shield, 
  Flame, 
  Bone, 
  Activity 
} from 'lucide-react';
import { ModuleData, BonusData, FaqItem, TestimonialData } from './types';

export const PRICE_OLD = 67;
export const PRICE_NEW = 15;
export const SAVINGS = PRICE_OLD - PRICE_NEW;

export const MODULES: ModuleData[] = [
  {
    title: "Inflamación y Dolores",
    description: "Articulaciones, cervical, rodillas, frío/humedad, dolor muscular.",
    count: 30,
    icon: Activity
  },
  {
    title: "Digestión",
    description: "Hinchazón, acidez, hígado cargado, colon irritable, empacho, gases.",
    count: 90,
    icon: Droplet
  },
  {
    title: "Ansiedad y Sueño",
    description: "Insomnio, estrés, palpitaciones por nervios, pensamientos acelerados.",
    count: 30,
    icon: Moon
  },
  {
    title: "Defensas y Resfríos",
    description: "Resfríos, gripe, tos seca/con flema, congestión, garganta irritada.",
    count: 60,
    icon: Shield
  },
  {
    title: "Metabolismo y Peso",
    description: "Retención, colesterol, azúcar, metabolismo lento, hígado graso.",
    count: 30,
    icon: Flame
  },
  {
    title: "Dolor Articular y Huesos",
    description: "Artrosis leve, rigidez matinal, circulación, menopausia.",
    count: 30,
    icon: Bone
  },
  {
    title: "Piel y Circulación",
    description: "Piel seca, irritaciones, manchas, caída del pelo, varices leves.",
    count: 30,
    icon: Leaf
  }
];

export const PAIN_POINTS = [
  "Dependés de pastillas para todo.",
  "Tenés dolores o malestares que siempre vuelven.",
  "Quisieras usar plantas, pero te da miedo hacerlo mal.",
  "Lo “natural” que ves en redes es carísimo o confuso.",
  "Sentís que se perdió el conocimiento ancestral de tu familia."
];

export const BENEFITS = [
  {
    title: "Crear más de 300 remedios paso a paso",
    desc: "Organizados por síntoma para saber EXACTAMENTE qué hacer en cada situación."
  },
  {
    title: "Dominar 20–30 plantas medicinales esenciales",
    desc: "Qué curan, cómo usarlas, cómo sustituirlas y cómo conservarlas."
  },
  {
    title: "Preparar jarabes, ungüentos, tinturas y tónicos",
    desc: "Explicado de forma simple, clara y segura."
  },
  {
    title: "Cuidar a tu familia con seguridad",
    desc: "Incluye tabla de contraindicaciones para niños, embarazadas e hipertensos."
  }
];

export const BONUSES: BonusData[] = [
  { title: "El Arte de la Aromaterapia", image: "https://picsum.photos/seed/aroma/300/400", price: 7 },
  { title: "Aromaterapia Fácil en 7 Minutos", image: "https://picsum.photos/seed/oil/300/400", price: 5 },
  { title: "SOS 7 días Antiinflamación", image: "https://picsum.photos/seed/food/300/400", price: 7 },
  { title: "Guía Herbal para la Mujer Radiante", image: "https://picsum.photos/seed/woman/300/400", price: 6 },
  { title: "Botiquín Natural Infantil", image: "https://picsum.photos/seed/child/300/400", price: 6 },
  { title: "Conservá tus Hierbas", image: "https://picsum.photos/seed/herbs/300/400", price: 4 },
  { title: "Belleza Herbal (piel, pelo y manos)", image: "https://picsum.photos/seed/beauty/300/400", price: 6 },
  { title: "Cocina Natural en 10 Minutos", image: "https://picsum.photos/seed/kitchen/300/400", price: 5 },
  { title: "Protocolo Express por Síntoma", image: "https://picsum.photos/seed/checklist/300/400", price: 6 },
  { title: "Kit de Urgencias Naturales", image: "https://picsum.photos/seed/kit/300/400", price: 5 }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Reemplaza al médico?",
    answer: "No. Este recetario es una guía complementaria para el bienestar y malestares menores. Siempre debés consultar a un profesional ante síntomas graves o persistentes."
  },
  {
    question: "¿Sirve para niños / embarazadas?",
    answer: "Sí, incluye una sección específica y tablas de seguridad/contraindicaciones claras para niños, embarazadas y personas hipertensas."
  },
  {
    question: "¿Qué hago si no tengo todas las plantas?",
    answer: "El recetario te enseña cómo sustituir hierbas y utiliza ingredientes accesibles que podés conseguir en cualquier dietética o mercado local."
  },
  {
    question: "¿Cómo llega el ebook?",
    answer: "El acceso es inmediato. Una vez confirmado el pago, recibirás un correo electrónico con el enlace de descarga directa y acceso a la plataforma."
  },
  {
    question: "¿Incluye garantía?",
    answer: "Sí, tenés 30 días de garantía total. Si no estás satisfecho, te devolvemos el 100% de tu dinero sin hacer preguntas."
  }
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    name: "María Fernández",
    text: "Increíble la cantidad de información. Ya preparé el jarabe para la tos y funcionó de maravilla con mis nietos.",
    stars: 5
  },
  {
    name: "Carlos Ruiz",
    text: "Me gusta que es directo al punto. Busco 'dolor de cabeza' y tengo la solución. Nada de teorías aburridas.",
    stars: 5
  },
  {
    name: "Ana Gutierrez",
    text: "Los bonos valen más que el precio del libro. La guía de aromaterapia me encantó. ¡Gracias!",
    stars: 5
  }
];