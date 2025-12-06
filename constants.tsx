import { 
  Leaf, 
  Droplet, 
  Moon, 
  Shield, 
  Flame, 
  Bone, 
  Activity 
} from 'lucide-react';
import { ModuleData, BonusData, FaqItem, TestimonialData, BenefitData } from './types';

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

export const BENEFITS: BenefitData[] = [
  {
    title: "Crear Más de 300 Remedios Naturales Paso a Paso",
    desc: "Organizados por síntoma para que sepas exactamente qué hacer cuando aparece un dolor, una tos o cualquier malestar común. Con ingredientes simples y accesibles.",
    tags: ["INFUSIONES", "JARABES", "TÓNICOS"]
  },
  {
    title: "Dominar 20-30 Plantas Medicinales Esenciales",
    desc: "Qué curan, cómo conservarlas, dónde conseguirlas y qué hacer si no encontrás la planta original. Plantas de Argentina y Latinoamérica que ya conocés.",
    tags: ["PLANTAS SECAS", "FRASCOS", "HIERBAS FRESCAS"]
  },
  {
    title: "Preparar Jarabes, Ungüentos, Tinturas, Cremas y Oleatos",
    desc: "Todas las formas de preparación explicadas paso a paso: infusiones, decocciones, ungüentos, jarabes, tinturas, baños y vapores. Con dosis seguras y tiempos exactos.",
    tags: ["UNGÜENTOS", "TINTURAS", "ELIXIRES"]
  },
  {
    title: "Usar Plantas para Aliviar Dolores, Fortalecer Defensas y Reducir Estrés",
    desc: "Protocolos organizados por problema: dolores e inflamación, sistema respiratorio, digestivo, piel, sueño, ansiedad, defensas y salud femenina. Todo lo que necesitás saber.",
    tags: ["DOLORES", "BELLEZA", "DESCANSO"]
  },
  {
    title: "Cultivar Tus Propias Hierbas y Mantener una Botica Natural Sustentable",
    desc: "Cómo secar, conservar y organizar tus hierbas. Frascos, rótulos, duración real, higiene y cómo armar tu stock de invierno para tener todo siempre a mano.",
    tags: ["CULTIVO", "ORGANIZACIÓN", "BOTICA"]
  },
  {
    title: "Cuidar Tu Salud y la de Tu Familia con Confianza desde el Conocimiento Ancestral",
    desc: "Sabiendo cuándo usar remedios naturales y cuándo SÍ ir al médico. Con tabla de contraindicaciones para niños, embarazadas e hipertensos. Uso responsable y seguro.",
    tags: ["FAMILIA", "SALUD", "CONFIANZA"]
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
    stars: 5,
    verified: true
  },
  {
    name: "Carlos Ruiz",
    text: "Me gusta que es directo al punto. Busco 'dolor de cabeza' y tengo la solución. Nada de teorías aburridas.",
    stars: 5,
    verified: true
  },
  {
    name: "Ana Gutierrez",
    text: "Los bonos valen más que el precio del libro. La guía de aromaterapia me encantó. ¡Gracias!",
    stars: 5,
    verified: true
  }
];

export const BOTTOM_TESTIMONIALS: TestimonialData[] = [
  {
    name: "María Elena V. (Córdoba)",
    text: "Lo que yo buscaba 👏 Tengo 57 años y quería volver a lo que hacía mi abuela. Ya hice el jarabe de miel y cebolla para mis nietos y funcionó en 2 días 🤧➡️😊. Súper claro y serio, NO es cualquier cosa.",
    stars: 5,
    verified: true
  },
  {
    name: "Patricia G. (Lanús)",
    text: "Me encantó porque te dice cuándo usar lo natural y cuándo ir al médico 🙌. Lo usé para la tos de mi nena y para una irritación mía, todo con cosas que tenía en casa 🌿.",
    stars: 5,
    verified: true
  },
  {
    name: "Silvina D. (Rosario)",
    text: "Socio, esto es oro 💚 Hice el oleato de lavanda y la cremita calmante para mi mamá (articulaciones) y le re bajó la molestia. Amo que tenga 300 recetas, no sabés con cuál arrancar 😅.",
    stars: 5,
    verified: true
  },
  {
    name: "Graciela P. (Mar del Plata)",
    text: "Me pasaba que tomaba la infusión y después comía cualquier cosa 😂. Con el bonus de cocina limpia ya entendí cómo acompañar la inflamación. Se nota que está armado con criterio.",
    stars: 5,
    verified: true
  },
  {
    name: "Roxana L. (Barracas)",
    text: "Lo uso TODOS los días. Ya armé mi botica casera con frascos y etiquetas como dice ahí 😍. Me encanta porque es femenino, ordenado y argentino. Nada rebuscado.",
    stars: 5,
    verified: true
  },
  {
    name: "Eduardo R. (papá de dos)",
    text: "Lo compré para mi esposa pero lo uso yo 😂. El protocolo express para dolor de cabeza me salvó antes de ir a laburar. Claro, rápido y con cosas que tenés en la cocina.",
    stars: 5,
    verified: true
  }
];