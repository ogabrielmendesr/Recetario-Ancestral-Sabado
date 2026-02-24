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

export const REMEDY_PREVIEWS = [
  {
    title: "Analgésico natural",
    description: "Lo preparamos a partir de esta supuesta mala hierba común que probablemente hayas visto crecer cerca de tu casa.\n\nLa lechuga silvestre contiene una sustancia espesa, de color blanco lechoso, parecida a la que se encuentra en el interior de la adormidera.\n\nPor eso, también se conoce como lechuga de opio, pero a diferencia de la adormidera, sus efectos son más suaves, es legal y fácil de encontrar.",
    image: "https://i.imgur.com/QUDDEk0.png"
  },
  {
    title: "Gotas de hongos para la esclerosis múltiple",
    description: "Otra cosa que descubrirás son las gotas de hongos que personalmente tomo como parte del protocolo que sigo para controlar mi EM.\n\nHoy en día, sigo utilizando estas gotas.",
    image: null
  },
  {
    title: "Purgante para los parásitos",
    description: "Si alguna vez has bebido agua del grifo, has puesto la mano en el pomo de una puerta, has jugado con tu gato o tu perro, o has caminado descalzo por la hierba, ¡es muy probable que esta pequeña criatura ya esté dentro de ti! Este parásito puede ser la causa de algunos de los problemas de salud que puedas estar padeciendo.\n\nSolo necesitas tres ingredientes: semillas de papaya, miel y agua. En un estudio publicado en el Journal of Medicinal Foods, se administró una combinación de semillas secas de papaya y miel a niños que habían contraído este parásito y se vio que el 71.4% presentaba después las heces limpias.",
    image: "https://i.imgur.com/v8zAK5q.png"
  },
  {
    title: "La «amoxicilina» de la naturaleza",
    description: "No se trata de la sustancia que se fabrica en los laboratorios, pero probablemente sea el mejor remedio natural que conozco para reforzar el sistema inmunitario y combatir las bacterias y las infecciones.",
    image: "https://i.imgur.com/Znleyt4.png"
  },
  {
    title: "Elixir para la memoria",
    description: "Una de las plantas que vamos a necesitar es el romero.\n\nUn estudio descubrió que las personas que trabajaban en una habitación con aroma a romero obtenían entre un 5% y un 7% mejores resultados en las pruebas de memoria.\n\nLo leí incluso en un importante sitio web de noticias (creo que era la BBC) que recomendaba «oler romero para mejorar la memoria».",
    image: "https://i.imgur.com/lheCasd.png"
  },
  {
    title: "Desintoxicante de metales pesados",
    description: "Incluso el polvo que se deposita en nuestras casas y que inhalamos cada día contiene diversos metales. Entonces, ¿cómo puedes librarte de estos metales pesados que envenenan el torrente sanguíneo?\n\nSe puede lograr mediante un proceso llamado quelación. Esto ocurre cuando otra sustancia se une a ellos y los elimina a través de la orina. No te asustes si tu orina se vuelve roja. Es una buena señal de que la quelación está funcionando y de que tu organismo está eliminando los metales.",
    image: "https://i.imgur.com/Fj2K7zi.png"
  },
  {
    title: "Chupitos de gelatina contra la gripe",
    description: "No se trata de la vacuna tradicional contra la gripe.\n\nEste remedio contiene una potente dosis de ingredientes que refuerzan el sistema inmunitario.\n\nNo contiene sustancias químicas nocivas, y tiene un sabor tan bueno que tus hijos no pondrán pegas a la hora de tomarlo.",
    image: "https://i.imgur.com/XrYMiiw.png"
  },
  {
    title: "El mejor probiótico natural",
    description: "Si alguna vez te has preguntado qué ocurre cuando echas sal en una col, esto es exactamente lo que obtienes: zumo de col fermentada, un potente probiótico casero para el intestino.",
    image: "https://i.imgur.com/Ipeuf1F.png"
  },
  {
    title: "Jarabe para las migrañas",
    description: "Cada vez que te duela la cabeza, acércate a tu botica y añade dos o tres gotas de este remedio en una taza de té caliente.\n\nEstá preparado a partir de tres plantas fundamentales que contienen unos compuestos naturales llamados salicilatos, similares a la aspirina.",
    image: "https://i.imgur.com/WkMAKZS.png"
  },
  {
    title: "El bálsamo caliente de la abuela para el dolor de espalda",
    description: "¿Te has despertado alguna vez con la espalda rígida? Esta crema contiene capsaicina, el principio activo de los pimientos picantes, y es sorprendentemente eficaz.\n\nSe ha demostrado que la capsaicina induce la vasodilatación, que es el ensanchamiento de los vasos sanguíneos.\n\nEste aumento del flujo sanguíneo a la zona afectada lubricará la espalda, relajando los músculos y devolviéndoles su flexibilidad en pocos minutos.\n\nAsí que la próxima vez que te despiertes con dolor de espalda, ve a tu nueva botica y utiliza esta pomada.",
    image: "https://i.imgur.com/DaqfFnG.png"
  },
  {
    title: "Sopa de «penicilina»",
    description: "¿Sabes ese momento en que tienes un resfriado y tomas una sopa caliente? De repente te sientes mejor, ya no tienes la nariz taponada y puedes respirar mejor.\n\nSe te descongestiona la nariz, desaparecen algunos de los dolores y tiritonas, y puedes volver a respirar. Pues bien, esta sopa funciona de forma muy similar y, además, también contiene hierbas y vitaminas que ayudan a tu sistema inmunitario a combatir la infección.",
    image: "https://i.imgur.com/Dfdzfre.png"
  },
  {
    title: "Compresa herbal para la fiebre",
    description: "¿Sabías que hay una forma de elaborar una compresa refrescante a partir de una planta que probablemente has pensado todo este tiempo que era una mala hierba?\n\nEsta compresa ayuda a eliminar las toxinas a la vez que enfría la zona y reduce la fiebre.",
    image: "https://i.imgur.com/K315ver.png"
  },
  {
    title: "Almohadilla efecto calor para dolores de garganta",
    description: "Solo tienes que cortar las patatas en rodajas y ponerlas al fuego o en el microondas hasta que estén calientes. Envuélvelas en un paño o mételas en un calcetín. A continuación, aplícatelo en el cuello y déjalo actuar unos minutos.\n\nEsto estimula la circulación y funciona como una almohadilla térmica casera. ¡Es un truco indoloro y sin productos químicos que incluso puedes utilizar con tus hijos! Se tarda menos de tres minutos, ¡y creo de verdad que te encantará!",
    image: "https://i.imgur.com/maY1wg4.png"
  },
  {
    title: "Elixir para el equilibrio intestinal",
    description: "Dicen que la mayoría de los problemas de salud provienen del intestino.\n\nEste remedio a base de hierbas contiene mucílago, que forma una capa protectora alrededor del intestino y bloquea algunas de las toxinas inflamatorias que ingerimos, al tiempo que favorece los movimientos intestinales regulares.",
    image: "https://i.imgur.com/XdFA2sp.png"
  },
  {
    title: "Calcetines con vinagre",
    description: "Cada vez que me resfriaba y tenía fiebre, mi abuela empapaba un par de calcetines viejos en vinagre, me los ponía en los pies, los cubría con una sábana protectora para evitar que la cama oliera demasiado y me dejaba dormir una noche entera con ellos.\n\nQuizás no sea uno de los remedios que recuerdas de tu infancia, pero seguro que encuentras alguno en estas «estanterías».",
    image: "https://i.imgur.com/6JBWTo7.png"
  },
  {
    title: "Sedante casero para aliviar las crisis de angustia",
    description: "Diez de once estudios han demostrado que la inhalación de aceite de lavanda puede reducir significativamente los niveles de ansiedad y los ataques de pánico. Por eso te voy a enseñar cómo hacer un roll-on portátil con aceite de lavanda que podrás llevar siempre contigo.\n\nCuando sientas los primeros síntomas de un ataque de pánico, aplícatelo en las muñecas e inhala. Esto te ayudará a calmarte en solo unos segundos.",
    image: "https://i.imgur.com/S6xxSSW.png"
  },
  {
    title: "Jarabe de los amish para la tos",
    description: "Esta receta es una de las muchas que forman parte del secreto de la extraordinaria salud del pueblo amish.\n\nSe trata de un jarabe casero a la antigua usanza, que puedes utilizar para aliviar la tos, el dolor de garganta y la congestión.\n\nEs muy fácil de preparar, ¡y solo necesitas cinco ingredientes que probablemente ya tienes en casa!",
    image: "https://i.imgur.com/aXBBEit.png"
  },
  {
    title: "Apósito para la tiroides",
    description: "Hago una cataplasma con varias hierbas y le añado un poco de aceite de ricino por encima.\n\nLo unto en una venda, me lo aplico en el cuello y lo dejo actuar de dos a tres horas. ¡Me funciona a la perfección!",
    image: "https://i.imgur.com/fwxEv0C.png"
  },
  {
    title: "Tisana Ristoratrice per il Fegato",
    description: "L’ottanta per cento delle persone con il fegato grasso non sanno di averlo. Se ti sei mai sentito stanco senza una ragione particolare, è molto probabile che il tuo fegato abbia bisogno del tuo aiuto.\n\nTi mostrerò proprio adesso come fare questa ricetta. A dire il vero, non importa se leggi il libro o no; questa ricetta è troppo preziosa, quindi ecco la ricetta! È super facile da preparare e non devi nemmeno comprare le piante!\n\nQuesto perché crescono come erbacce, e la maggior parte delle persone le spruzza con i diserbanti. Quindi vai a raccogliere un po’ di tarassaco, lava bene le radici e tagliale a pezzetti. Fai sobbollire il tutto in acqua per un po’. Lascia in infusione per 10-15 minuti, filtra e gusta la tua tisana.\n\nTuttavia, se vuoi un’alternativa ancora più potente, prova la Tintura Detox per il Fegato. È fatta con alcol invece che con acqua, poiché estrae le proprietà medicinali delle piante molto meglio di qualsiasi altro liquido. Inoltre, dona alla tua nuova medicina erboristica una durata di conservazione di oltre 7 anni, a differenza della tisana che va consumata sul momento.",
    image: "https://i.imgur.com/6dPz0Jb.png"
  },
  {
    title: "Crema Antibiotica Ristoratrice",
    description: "Questa pomata può durare a lungo, e i suoi ingredienti non sono affatto costosi. In effetti, potresti averne già uno a casa nella tua dispensa.\n\nQuesta crema può essere un’alternativa adatta per chi di voi desidera vivere in modo più naturale o semplicemente avere una scorta completa di antisettici nel caso in cui le farmacie restino senza scorte.",
    image: "https://i.imgur.com/9dB26zz.png"
  },
  {
    title: "Sérum para el crecimiento del cabello",
    description: "La planta clave en este caso es el romero. Se realizó un estudio en personas con graves problemas de caída del cabello, comparando los efectos del aceite de romero con el minoxidil.\n\n¿Adivinas qué pasó? El romero, una planta que puedes conseguir fácilmente en la naturaleza o por casi nada en el supermercado, tuvo los mismos resultados que el minoxidil, un medicamento sintético bastante caro.",
    image: "https://i.imgur.com/IKb4DpV.png"
  },
  {
    title: "La aspirina casera",
    description: "Esto es lo que solías encontrar en las estanterías de las boticas antes de que las farmacias tomaran el control.\n\nLa próxima vez que veas un sauce, puedes recoger los tallos y la corteza de crecimiento reciente y guardarlos en un tarro.\n\nPara sentir sus efectos, ¡mastícalo cada vez que te duela la cabeza!",
    image: "https://i.imgur.com/u0nidz0.png"
  },
  {
    title: "Apósito de mostaza",
    description: "Una forma de combatir una infección es aumentar la temperatura corporal, si aún no tienes fiebre. Esta cataplasma de mostaza se utilizaba mucho para descongestionar la flema, despejar las vías respiratorias y aumentar la circulación como consecuencia del calor que produce la mostaza.\n\nNO APLIQUES este apósito DIRECTAMENTE SOBRE LA PIEL. Puede producir irritación y calentarse demasiado. Te mostraré exactamente cómo preparar esta cataplasma y aplicarla de forma segura en la zona afectada.",
    image: "https://i.imgur.com/SJGJdws.png"
  },
  {
    title: "Enjuague bucal que fortalece las encías",
    description: "No solo limpia los dientes, sino que también contiene minerales y aceites esenciales de hierbas que favorecen un microbioma bucal sano.\n\nPorque sí, al igual que tu intestino, tu boca tiene su propio microbioma que, una vez alterado, puede desencadenar toda una serie de problemas, incluido la retracción de las encías.",
    image: "https://i.imgur.com/fHiXdcc.png"
  }
];

export const SALES_NOTIFICATIONS = [
  { name: "Valentina", location: "Buenos Aires, Argentina", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Camila", location: "CDMX, México", image: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Sofía", location: "Santiago, Chile", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Isabella", location: "Bogotá, Colombia", image: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Lucía", location: "Madrid, España", image: "https://randomuser.me/api/portraits/women/90.jpg" },
  { name: "Martina", location: "Rosario, Argentina", image: "https://randomuser.me/api/portraits/women/54.jpg" },
  { name: "Gabriela", location: "Asunción, Paraguay", image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "Mariana", location: "Guadalajara, México", image: "https://randomuser.me/api/portraits/women/28.jpg" },
  { name: "Fernanda", location: "Medellín, Colombia", image: "https://randomuser.me/api/portraits/women/63.jpg" },
  { name: "Catalina", location: "Valparaíso, Chile", image: "https://randomuser.me/api/portraits/women/91.jpg" }
];