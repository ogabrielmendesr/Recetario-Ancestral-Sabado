import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  AlertTriangle, 
  Gift,
  Leaf,
  XCircle,
  ArrowRight,
  Play
} from 'lucide-react';
import Button from './components/ui/Button';
import AccordionItem from './components/Accordion';
import { 
  MODULES, 
  PAIN_POINTS, 
  TRANSFORMATION,
  BENEFITS, 
  BONUSES, 
  FAQS, 
  TESTIMONIALS, 
  PRICE_OLD, 
  PRICE_NEW, 
  SAVINGS 
} from './constants';

const App: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 pb-20 md:pb-0">
      
      {/* 2. HERO SECTION */}
      <section className="bg-brand-dark text-white relative overflow-hidden pt-12 pb-16">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          {/* Social Proof Badge - Pill Style */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-3 border border-brand-light/30 bg-brand-primary/20 rounded-full pl-2 pr-6 py-2 backdrop-blur-md shadow-lg hover:bg-brand-primary/30 transition-colors">
              {/* Faces */}
              <img 
                src="https://i.imgur.com/jok3swQ.png" 
                alt="Clientes felices" 
                className="h-10 w-auto object-contain"
              />
              
              {/* Stars & Text Column */}
              <div className="flex flex-col items-start text-left justify-center">
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-brand-stone font-semibold text-xs md:text-sm tracking-wide leading-none">
                  +3.700 familias satisfechas
                </span>
              </div>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-brand-stone max-w-5xl mx-auto">
            Volvé a tomar el control de <span className="text-brand-accent italic">Tu Salud</span> hoy mismo..<br />
            <span className="block mt-4 text-xl md:text-3xl font-medium text-brand-light/90">Recuperando el Saber Ancestral que resolvía todo en casa</span>
          </h1>

          {/* Product Image */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://i.imgur.com/9twhjyk.png" 
              alt="Portada Recetario Ancestral" 
              className="w-full max-w-[280px] md:max-w-md drop-shadow-2xl"
            />
          </div>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-brand-light/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light px-4">
             Remedios simples, naturales y seguros al alcance de tu mano.
          </p>
        </div>
      </section>

      {/* 3. TESTIMONIALS (Moved Up) */}
      <section className="py-12 px-4 bg-brand-stone border-b border-brand-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-4 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-xs text-gray-800">{t.name}</span>
                  <span className="text-[10px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Verificado
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIFE BEFORE (The Problem) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold text-gray-800 mb-2">
            Así es tu vida hoy...
          </h2>
          <p className="text-center text-gray-500 mb-10">¿Te sentís identificado con esto?</p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-red-400">
             <ul className="space-y-4">
               {PAIN_POINTS.map((point, index) => (
                 <li key={index} className="flex items-start gap-4 p-2 hover:bg-red-50 transition-colors rounded-lg">
                   <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                   <span className="text-gray-700 font-medium text-lg">{point}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 5. LIFE AFTER (The Transformation) */}
      <section className="py-16 px-4 bg-brand-primary text-white relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold mb-2">
            ...Y así podría ser mañana
          </h2>
          <p className="text-center text-brand-light/70 mb-10">Cuando tengas el conocimiento en tus manos</p>
          
          <div className="bg-brand-dark/50 p-8 rounded-2xl shadow-xl border-l-8 border-green-400 backdrop-blur-sm">
             <ul className="space-y-4">
               {TRANSFORMATION.map((point, index) => (
                 <li key={index} className="flex items-start gap-4 p-2 hover:bg-white/5 transition-colors rounded-lg">
                   <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                   <span className="text-white font-medium text-lg">{point}</span>
                 </li>
               ))}
             </ul>
          </div>
        </div>
      </section>

      {/* 6. CHECKLIST (Is this for you?) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-brand-light rounded-full mb-6">
            <AlertTriangle className="w-8 h-8 text-brand-accent" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-brand-dark mb-6">
            ¿Este Recetario es para vos?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Si sentís que dependés demasiado de la farmacia, si querés soluciones más naturales pero tenés miedo de equivocarte, o si simplemente querés recuperar la autonomía sobre tu salud...
          </p>
          <div className="p-6 bg-brand-stone rounded-xl border border-brand-primary/20">
            <p className="font-bold text-xl text-brand-primary">
              ENTONCES ESTE LIBRO FUE ESCRITO PARA VOS.
            </p>
          </div>
        </div>
      </section>

      {/* 7. VIDEO PREVIEW (Walkthrough) */}
      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-8">
            Mirá todo lo que incluye por dentro
          </h2>
          
          <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
             {!isVideoPlaying ? (
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <img 
                    src="https://i.imgur.com/SmfHuwd.png" 
                    alt="Video demostrativo" 
                    className="w-full h-auto block opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-accent/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
             ) : (
                <div className="w-full bg-black">
                  <video
                    className="w-full h-auto"
                    controls
                    autoPlay
                    src="https://i.imgur.com/SmfHuwd.mp4"
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
             )}
          </div>
        </div>
      </section>

      {/* 8. MODULES (7 Pillars) */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">
              300 Recetas Naturales <br/>
              <span className="text-brand-primary">Divididas en 7 Pilares</span>
            </h2>
            <p className="mt-4 text-gray-500">Todo organizado para que encuentres la solución en segundos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((module, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:border-brand-primary/30 hover:shadow-xl transition-all hover:-translate-y-1 group">
                {/* Image Section */}
                <div className="w-full h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={module.image} 
                    alt={module.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-brand-dark flex-1 leading-tight">{module.title}</h3>
                  </div>
                  <span className="inline-block px-2 py-1 bg-brand-stone text-xs font-semibold rounded text-gray-500 mb-3">
                    {module.count} Recetas
                  </span>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LIFE WITH PRODUCT (Benefits) */}
      <section className="py-20 px-4 bg-brand-stone">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-brand-dark">
            Tu vida con la <span className="text-brand-accent">Botica Ancestral</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-brand-primary/10 p-2 rounded-full shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-brand-dark">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BONUSES HEADER */}
      <section className="pt-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1.5 rounded-full font-bold text-sm mb-6 animate-pulse">
             <Gift className="w-4 h-4" /> OFERTA ESPECIAL DE HOY
           </div>
           <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">
             Comprá hoy y llevate <br className="hidden md:block" /> estos regalos exclusivos
           </h2>
           <p className="text-xl text-gray-500">Valor real: <span className="line-through decoration-red-500 font-semibold">US$ 61</span> → <span className="text-green-600 font-bold">GRATIS HOY</span></p>
        </div>
      </section>

      {/* 11. BONUSES LIST */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
             {BONUSES.map((bonus, idx) => (
               <div key={idx} className="group cursor-default flex flex-col">
                 <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md aspect-[3/4] mb-3 relative border border-gray-100">
                   <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-brand-accent text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">GRATIS</div>
                 </div>
                 <h4 className="font-bold text-sm text-center text-gray-700 leading-tight mb-1 flex-grow px-1">{bonus.title}</h4>
                 <div className="text-center">
                    <span className="text-xs text-gray-400">Precio normal: </span>
                    <span className="text-xs text-red-500 line-through font-semibold">US$ {bonus.price}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 12. PRICE ANCHORING (Summary) */}
      <section className="pb-8 px-4 bg-white">
        <div className="max-w-md mx-auto bg-brand-stone p-6 rounded-xl border border-gray-200">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center text-gray-500">
              <span>Recetario Ancestral (PDF)</span>
              <span className="line-through">US$ 67</span>
            </div>
            <div className="flex justify-between items-center text-gray-500">
              <span>Pack 10 Bonus Exclusivos</span>
              <span className="line-through">US$ 61</span>
            </div>
            <div className="h-px bg-gray-300 my-2"></div>
            <div className="flex justify-between items-center font-bold text-lg text-brand-dark">
              <span>Valor Total</span>
              <span className="line-through decoration-red-500">US$ 128</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. OFFER BLOCK */}
      <section id="offer" className="py-12 px-4 bg-gradient-to-br from-brand-dark to-brand-primary text-white">
         <div className="max-w-3xl mx-auto bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden transform md:scale-105 transition-transform">
           {/* Header */}
           <div className="bg-brand-accent p-4 text-center">
             <h3 className="text-white font-bold text-2xl uppercase tracking-wider flex items-center justify-center gap-2">
               <Star className="w-5 h-5 fill-white" /> Oferta Limitada <Star className="w-5 h-5 fill-white" />
             </h3>
           </div>

           <div className="p-8 md:p-12 text-center">
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-2">
               Pack Recetario Ancestral
             </h2>
             <p className="text-gray-500 mb-6 font-medium">+ Acceso de por vida + 10 Regalos</p>

             {/* Product Image */}
             <div className="flex justify-center mb-8">
               <img 
                 src="https://i.imgur.com/9twhjyk.png" 
                 alt="Pack Completo" 
                 className="w-full max-w-[260px] drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
               />
             </div>

             {/* Deliverables Checklist */}
             <div className="max-w-md mx-auto mb-8 text-left space-y-3 px-2">
                {[
                  "Guía completa de más de 300 recetas naturales",
                  "Organizado por síntomas para solución directa",
                  "10 Libros Exclusivos de Regalo (Valor US$ 61)",
                  "Ingredientes fáciles de conseguir en casa",
                  "Explicaciones claras y seguras para toda la familia",
                  "Acceso inmediato y de por vida al material digital"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-green-100 p-1 rounded-md shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium leading-tight">{item}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3 pl-1">
                    <span className="text-gray-500 text-sm md:text-base font-medium leading-tight italic ml-9">y mucho más...</span>
                </div>
             </div>

             {/* Pricing Display Redesign */}
             <div className="flex flex-col items-center justify-center text-center mb-8 mt-6">
               <h4 className="text-red-500 font-bold text-2xl md:text-3xl mb-1 leading-none">
                 Precio Regular por Todo:
               </h4>
               <div className="text-red-500 text-4xl md:text-5xl font-bold line-through decoration-red-500 mb-6 relative inline-block">
                 <span className="text-black opacity-20 absolute top-1/2 left-0 w-full h-1 bg-red-500 -rotate-3"></span>
                 US$ {PRICE_OLD}
               </div>

               <p className="text-gray-900 font-bold text-lg md:text-xl mb-2 leading-tight">
                 Precio Especial HOY de Lanzamiento, por solo...
               </p>
               
               <div className="text-[5rem] md:text-[6rem] font-extrabold text-green-500 tracking-tighter leading-none mb-3 drop-shadow-sm">
                 US$ {PRICE_NEW}
               </div>
               
               <p className="text-gray-800 text-sm md:text-base font-medium max-w-xs mx-auto leading-snug">
                 <span className="font-bold">APROVECHA AHORA:</span> No encontrarás este precio más adelante.
               </p>
             </div>

             <a 
               href="https://pay.hotmart.com/U103291016R?checkoutMode=10" 
               target="_blank" 
               rel="noopener noreferrer"
               className="block w-full max-w-sm mx-auto mb-6"
             >
               <Button 
                 fullWidth 
                 pulse 
                 className="!bg-green-500 !hover:bg-green-600 !border-b-4 !border-green-700 text-white text-lg md:text-xl py-4 shadow-xl shadow-green-500/30 w-full uppercase"
               >
                 ¡Obtén acceso ahora!
               </Button>
             </a>

             {/* Trust Seal Image */}
             <div className="flex justify-center mb-6">
                <img 
                  src="https://i.imgur.com/yirzFHl.png" 
                  alt="Compra Segura" 
                  className="w-full max-w-[300px] object-contain"
                />
             </div>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gray-500 mt-6">
               <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>Pago 100% Seguro</span>
               </div>
               <div className="flex items-center gap-1">
                  <Leaf className="w-4 h-4 text-green-600" />
                  <span>Entrega Inmediata</span>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* 14. GUARANTEE BLOCK */}
      <section className="py-16 px-4 bg-brand-stone">
        <div className="max-w-3xl mx-auto text-center border-2 border-dashed border-brand-primary/30 p-8 rounded-3xl relative bg-white">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full border border-brand-primary/20">
            <ShieldCheck className="w-12 h-12 text-brand-primary" />
          </div>
          <h2 className="mt-6 font-serif text-2xl font-bold text-brand-dark mb-4">Garantía de Satisfacción de 30 Días</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Estamos tan seguros de la calidad de este material que te damos 30 días para probarlo. 
            Si no te encanta, te devolvemos el 100% de tu dinero. Sin preguntas.
          </p>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Tu compra está protegida</p>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold mb-2 text-brand-dark">¿Tenés dudas?</h2>
          <p className="text-center text-gray-500 mb-10">Acá respondemos las consultas más comunes</p>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA */}
      <section className="py-20 px-4 bg-brand-dark text-center text-white relative">
        <div className="absolute inset-0 bg-brand-primary opacity-10 pattern-dots"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <Leaf className="w-12 h-12 text-brand-light mx-auto mb-6 opacity-80" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">¿Listo para tomar el control de tu salud?</h2>
          <p className="text-lg text-brand-light/80 mb-8">No dejes pasar la oportunidad de tener una farmacia natural en tu casa.</p>
          
          <div className="bg-white/10 p-6 rounded-xl mb-8 backdrop-blur-sm border border-white/10 inline-block">
             <div className="text-sm uppercase tracking-widest text-brand-light/70 mb-1">Precio Promocional</div>
             <div className="text-4xl font-bold text-white mb-1">US$ {PRICE_NEW}</div>
             <div className="text-sm text-red-300 line-through">antes US$ {PRICE_OLD}</div>
          </div>

          <div className="block">
             <Button onClick={scrollToOffer} variant="primary" className="text-xl px-10 py-5 shadow-2xl shadow-brand-accent/30 w-full md:w-auto">
               QUIERO ACCEDER YA <ArrowRight className="ml-2 w-5 h-5 inline" />
             </Button>
          </div>
        </div>
      </section>

      {/* 17. Footer */}
      <footer className="bg-gray-900 text-gray-500 py-10 text-center text-xs">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-6 leading-relaxed">
            Este producto no sustituye el parecer de un médico profesional. Consulta siempre a un médico para tratar asuntos de salud.
            Los resultados pueden variar de persona a persona.
          </p>
          <div className="flex justify-center gap-4 mb-6 text-gray-400">
             <span className="cursor-pointer hover:text-white">Términos de Uso</span>
             <span>|</span>
             <span className="cursor-pointer hover:text-white">Política de Privacidad</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Recetario Ancestral. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;