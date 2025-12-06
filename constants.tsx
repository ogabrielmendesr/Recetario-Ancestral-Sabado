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
    image: "https://i.imgur.com/s1udgPq.png"
  },
  {
    title: "Digestión",
    description: "Hinchazón, acidez, hígado cargado, colon irritable, empacho, gases.",
    count: 90,
    image: "https://i.imgur.com/sTOMQi6.png"
  },
  {
    title: "Ansiedad y Sueño",
    description: "Insomnio, estrés, palpitaciones por nervios, pensamientos acelerados.",
    count: 30,
    image: "https://i.imgur.com/Spn95Ul.png"
  },
  {
    title: "Defensas y Resfríos",
    description: "Resfríos, gripe, tos seca/con flema, congestión, garganta irritada.",
    count: 60,
    image: "https://i.imgur.com/lIx8doO.png"
  },
  {
    title: "Metabolismo y Peso",
    description: "Retención, colesterol, azúcar, metabolismo lento, hígado graso.",
    count: 30,
    image: "https://i.imgur.com/EGyZDRG.png"
  },
  {
    title: "Dolor Articular y Huesos",
    description: "Artrosis leve, rigidez matinal, circulación, menopausia.",
    count: 30,
    image: "https://i.imgur.com/QFmQKT3.png"
  },
  {
    title: "Piel y Circulación",
    description: "Piel seca, irritaciones, manchas, caída del pelo, varices leves.",
    count: 30,
    image: "https://i.imgur.com/VcD4imC.png"
  }
];

export const PAIN_POINTS = [
  "Dependés de pastillas para todo.",
  "Tenés dolores o malestares que siempre vuelven.",
  "Quisieras usar plantas, pero te da miedo hacerlo mal.",
  "Lo “natural” que ves en redes es carísimo o confuso.",
  "Sentís que se perdió el conocimiento ancestral de tu familia."
];

export const TRANSFORMATION = [
  "Tu botiquín será 100% natural y sin químicos.",
  "Sabrás exactamente qué tomar apenas sientas un síntoma.",
  "Prepararás tus propios remedios con seguridad y confianza.",
  "Ahorrarás dinero en farmacia usando ingredientes de tu cocina.",
  "Serás el guardián de la salud natural de tu familia."
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
  { title: "Aromaterapia Fácil en 7 Minutos", image: "https://i.imgur.com/9AhpvPN.png", price: 5 },
  { title: "Baños Mágicos y Sahumerios", image: "https://i.imgur.com/odmXZeA.png", price: 7 },
  { title: "SOS 7 días Antiinflamación", image: "https://i.imgur.com/wzghos5.png", price: 7 },
  { title: "Guía Herbal para la Mujer Radiante", image: "https://i.imgur.com/oIOzdVx.png", price: 6 },
  { title: "Botiquín Natural Infantil", image: "https://i.imgur.com/8tqJmmv.png", price: 10 },
  { title: "Conservá tus Hierbas", image: "https://i.imgur.com/SfYZAHE.png", price: 4 },
  { title: "Belleza Herbal: Piel, Pelo y Manos", image: "https://i.imgur.com/a9N4iAg.png", price: 6 },
  { title: "Cocina en 10 minutos", image: "https://i.imgur.com/vmYIdzL.png", price: 5 },
  { title: "Protocolo Express por Síntoma", image: "https://i.imgur.com/2FROdIf.png", price: 6 },
  { title: "Kit de Urgencias Naturales", image: "https://i.imgur.com/YMgsYr7.png", price: 5 }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Esto reemplaza al médico?",
    answer: "No. Este recetario es una herramienta complementaria para el bienestar cotidiano. Ante síntomas graves, persistentes o dudas, siempre debés consultar a un profesional de la salud."
  },
  {
    question: "¿Se puede usar en niños / embarazadas?",
    answer: "Sí. El libro incluye tablas de seguridad específicas y apartados donde se aclara qué plantas son aptas y cuáles evitar en niños, embarazo y lactancia."
  },
  {
    question: "¿Y si no tengo todas las plantas?",
    answer: "No te preocupes. La mayoría de los ingredientes se consiguen en cualquier dietética o mercado. Además, te enseñamos cómo sustituir hierbas si te falta alguna."
  },
  {
    question: "¿Es muy difícil de hacer?",
    answer: "Para nada. Todas las recetas están explicadas paso a paso, con un lenguaje sencillo y sin términos complicados. Es como seguir una receta de cocina fácil."
  },
  {
    question: "¿Cómo me llega el ebook?",
    answer: "El acceso es inmediato y automático. Una vez confirmado tu pago, recibís un correo electrónico con el enlace de descarga directa a tu celular o computadora."
  },
  {
    question: "¿Qué hago si no me llega el mail?",
    answer: "A veces puede ir a la carpeta de 'Spam' o 'Promociones'. Buscalo ahí. Si no lo encontrás, escribinos a soporte y te lo reenviamos al instante."
  },
  {
    question: "¿En qué lo puedo ver?",
    answer: "Es un archivo digital en formato PDF de alta calidad. Podés leerlo en tu celular, tablet, computadora o incluso imprimirlo si preferís el papel."
  },
  {
    question: "¿Tiene garantía?",
    answer: "Sí, total. Tenés 30 días para probarlo. Si sentís que no es para vos, nos avisás y te devolvemos el 100% de tu dinero sin preguntas."
  },
  {
    question: "¿Qué pasa si nunca usé plantas medicinales?",
    answer: "Es ideal para vos. Empezamos desde cero: cómo elegir las plantas, cómo prepararlas y cómo usarlas de forma segura. No necesitás experiencia previa."
  },
  {
    question: "¿Por qué este recetario y no lo gratis de Google?",
    answer: "En internet hay mucha información contradictoria o peligrosa. Aquí tenés un método organizado, probado y con dosis seguras, ahorrándote tiempo y riesgos."
  },
  {
    question: "¿Cuánto tardan en hacer efecto?",
    answer: "Depende del caso. Un té digestivo puede aliviarte en 15 minutos, mientras que un tratamiento para la ansiedad puede requerir unos días de constancia para ver cambios profundos."
  },
  {
    question: "¿Los bonus también vienen al instante?",
    answer: "Sí. Junto con el Recetario Ancestral recibís automáticamente los 10 libros de regalo para descargar en el momento."
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