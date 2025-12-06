import React, { useEffect, useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Star, 
  ShieldCheck, 
  AlertTriangle, 
  Gift,
  Leaf
} from 'lucide-react';
import Button from './components/ui/Button';
import AccordionItem from './components/Accordion';
import StickyCTA from './components/StickyCTA';
import { 
  MODULES, 
  PAIN_POINTS, 
  BENEFITS, 
  BONUSES, 
  FAQS, 
  TESTIMONIALS, 
  PRICE_OLD, 
  PRICE_NEW, 
  SAVINGS 
} from './constants';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Simple countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800 pb-20 md:pb-0">
      
      {/* Top Bar Urgency */}
      <div className="bg-brand-accent text-white text-center py-2 px-4 text-sm font-bold sticky top-0 z-40 shadow-md">
        <div className="flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 animate-pulse" />
          <span>LANZAMIENTO ESPECIAL – Solo por HOY</span>
          <span className="bg-white text-brand-accent px-2 py-0.5 rounded text-xs ml-1">
            {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-brand-dark text-white relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-primary/40 px-4 py-1.5 rounded-full text-brand-light text-sm font-medium mb-6 backdrop-blur-sm border border-brand-light/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            +3.700 familias satisfechas
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-brand-stone">
            Recuperá el <span className="text-brand-accent italic">Saber Ancestral</span> que resolvía todo en casa.
          </h1>

          {/* Product Image below Headline */}
          <div className="flex justify-center mb-10 relative">
            <div className="absolute inset-0 bg-brand-primary/20 blur-2xl rounded-full transform scale-90"></div>
            <img 
              src="https://i.imgur.com/9twhjyk.png" 
              alt="Portada Recetario Ancestral" 
              className="relative w-full max-w-[280px] md:max-w-md drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rounded-lg"
            />
          </div>
          
          <p className="text-lg md:text-xl text-brand-light/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tomá el control de tu salud con remedios simples, naturales y seguros. Lo aprendés una vez, lo usás toda la vida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToOffer} pulse className="w-full sm:w-auto">
              QUIERO MI RECETARIO
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-brand-light/60 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Acceso inmediato por e-mail
          </p>
        </div>
      </section>

      {/* INTRODUCTION / WHAT IS IT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-brand-light rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-brand-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Recetario Ancestral de Remedios Naturales
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            La guía práctica más completa para cuidar tu bienestar de forma natural. 
            Sin palabras difíciles, sin ingredientes raros.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-brand-stone p-6 rounded-xl border border-brand-primary/10">
              <h3 className="font-bold text-brand-dark mb-2 text-xl">300 Remedios</h3>
              <p className="text-sm text-gray-600">Organizados por síntoma (dolor → solución directa)</p>
            </div>
            <div className="bg-brand-stone p-6 rounded-xl border border-brand-primary/10">
              <h3 className="font-bold text-brand-dark mb-2 text-xl">Ingredientes Simples</h3>
              <p className="text-sm text-gray-600">Accesibles que conseguís en cualquier lado</p>
            </div>
            <div className="bg-brand-stone p-6 rounded-xl border border-brand-primary/10">
              <h3 className="font-bold text-brand-dark mb-2 text-xl">Uso Seguro</h3>
              <p className="text-sm text-gray-600">Advertencias claras y dosis responsables</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / AGITATION */}
      <section className="py-16 px-4 bg-brand-stone border-y border-brand-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/seed/herbswoman/600/600" 
                alt="Mujer preocupada por su salud" 
                className="rounded-2xl shadow-xl transform rotate-2" 
              />
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-brand-accent w-6 h-6" />
                <span className="font-bold text-brand-accent uppercase tracking-wider text-sm">¿Te identificás?</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-brand-dark mb-6">
                ¿Sentís que tu cuerpo te pide ayuda y no sabés por dónde empezar?
              </h2>
              <p className="text-gray-700 mb-6 italic">
                No es falta de fuerza. Es falta de orientación clara.
              </p>
              
              <ul className="space-y-4">
                {PAIN_POINTS.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-[20px]">
                      <span className="text-red-500 font-bold">✕</span>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-brand-primary/10 rounded-lg border-l-4 border-brand-primary">
                <p className="font-medium text-brand-dark">
                  👉 Si te ves en 2 o más, este recetario te va a ayudar muchísimo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">El Contenido</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mt-2">
              300 Recetas Naturales <br/>
              <span className="text-brand-primary">Divididas en 7 Pilares</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((module, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-brand-primary/30 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-primary mb-4">
                  <module.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl text-brand-dark mb-2">{module.title}</h3>
                <span className="inline-block px-2 py-1 bg-brand-stone text-xs font-semibold rounded text-gray-500 mb-3">
                  {module.count} Recetas
                </span>
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-4 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Lo que vas a lograr con tu <span className="text-brand-accent">Botica Ancestral</span>
          </h2>
          
          <div className="space-y-6">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 md:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-brand-accent p-2 rounded-full shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-1">{benefit.title}</h3>
                  <p className="text-brand-light/70">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button onClick={scrollToOffer} variant="primary" pulse>
              QUIERO EMPEZAR HOY
            </Button>
          </div>
        </div>
      </section>

      {/* SNEAK PEEK (Visual Placeholder) */}
      <section className="py-16 px-4 bg-brand-stone">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-8">
            Mirá cómo es por dentro
          </h2>
          <div className="relative group">
            {/* Using a book mockup placeholder */}
            <div className="aspect-[16/9] md:aspect-[21/9] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
               <img 
                 src="https://picsum.photos/seed/openbook/1200/600" 
                 alt="Vista previa del libro digital" 
                 className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8">
                 <p className="text-white font-medium drop-shadow-md">Formato digital PDF de alta calidad, listo para imprimir o leer en celular</p>
               </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg rotate-3">
              <span className="font-bold text-brand-primary">Actualizado 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-1 rounded-full font-bold text-sm mb-4">
               <Gift className="w-4 h-4" /> REGALOS EXCLUSIVOS
             </div>
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">
               10 Libros de Regalo (Solo HOY)
             </h2>
             <p className="text-gray-500 mt-2">Valor Total: <span className="line-through">US$ 57</span> → <span className="text-brand-primary font-bold">GRATIS</span></p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
             {BONUSES.map((bonus, idx) => (
               <div key={idx} className="group cursor-default flex flex-col">
                 <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md aspect-[3/4] mb-3 relative">
                   <img src={bonus.image} alt={bonus.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-brand-accent text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">GRATIS</div>
                 </div>
                 <h4 className="font-bold text-sm text-center text-gray-700 leading-tight mb-1 flex-grow">{bonus.title}</h4>
                 <div className="text-center">
                    <span className="text-xs text-gray-400">Valor: </span>
                    <span className="text-xs text-red-500 line-through font-semibold">US$ {bonus.price}</span>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="mt-8 text-center p-4 bg-brand-light/50 rounded-xl">
              <p className="text-brand-primary font-medium">💛 Estos bonos se agregan automáticamente a tu compra HOY.</p>
           </div>
        </div>
      </section>

      {/* OFFER AREA */}
      <section id="offer" className="py-20 px-4 bg-gradient-to-br from-brand-dark to-brand-primary text-white relative">
         <div className="max-w-3xl mx-auto bg-white text-gray-800 rounded-3xl shadow-2xl overflow-hidden">
           {/* Offer Header */}
           <div className="bg-brand-accent p-4 text-center">
             <h3 className="text-white font-bold text-xl uppercase tracking-wider">Oferta Limitada</h3>
           </div>

           <div className="p-8 md:p-12 text-center">
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-2">
               Recetario Ancestral
             </h2>
             <p className="text-gray-500 mb-6">+ Los 10 Libros de Regalo</p>

             {/* Product Image in Offer Block */}
             <div className="flex justify-center mb-8">
               <img 
                 src="https://i.imgur.com/9twhjyk.png" 
                 alt="Pack Recetario Ancestral" 
                 className="w-full max-w-[280px] drop-shadow-xl" 
               />
             </div>

             <div className="flex items-center justify-center gap-4 mb-8">
               <div className="text-gray-400 text-xl font-medium line-through decoration-red-500">
                 US$ {PRICE_OLD}
               </div>
               <div className="text-5xl md:text-6xl font-bold text-brand-primary">
                 US$ {PRICE_NEW}
               </div>
             </div>

             <ul className="text-left max-w-sm mx-auto space-y-3 mb-8 text-gray-700">
               <li className="flex gap-2">
                 <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" />
                 <span>Acceso inmediato y de por vida</span>
               </li>
               <li className="flex gap-2">
                 <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" />
                 <span>300+ Recetas organizadas</span>
               </li>
               <li className="flex gap-2">
                 <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" />
                 <span>10 Bonus exclusivos incluidos</span>
               </li>
               <li className="flex gap-2">
                 <CheckCircle2 className="text-brand-primary w-5 h-5 shrink-0" />
                 <span>Garantía de 30 días</span>
               </li>
             </ul>

             <Button fullWidth pulse className="mb-4 text-xl py-5">
               DESCARGAR AHORA
             </Button>
             
             <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 py-2 rounded-lg">
               <ShieldCheck className="w-4 h-4 text-green-600" />
               <span>Pago 100% Seguro y Encriptado</span>
             </div>
           </div>
           
           <div className="bg-gray-100 p-4 text-center text-sm text-gray-600 border-t border-gray-200">
             <p>Ahorrás <span className="font-bold text-green-600">US$ {SAVINGS}</span> si comprás antes de que el contador llegue a cero.</p>
           </div>
         </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-4 bg-brand-stone">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold mb-12 text-brand-dark">Lo que dicen quienes ya lo usan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-bold text-sm text-gray-800">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center font-serif text-3xl font-bold mb-8 text-brand-dark">Preguntas Frecuentes</h2>
          <div className="space-y-2">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 px-4 bg-brand-stone">
        <div className="max-w-3xl mx-auto text-center border-2 border-dashed border-brand-primary/30 p-8 rounded-3xl relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-stone px-4">
            <ShieldCheck className="w-16 h-16 text-brand-primary" />
          </div>
          <h2 className="mt-8 font-serif text-2xl font-bold text-brand-dark mb-4">Garantía de Satisfacción Total por 30 Días</h2>
          <p className="text-gray-600 mb-6">
            Probalo durante 30 días. Si no te encanta, si no sentís que es la guía más completa que leíste, te devolvemos el 100% de tu dinero. Sin preguntas.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 bg-brand-dark text-center text-white">
        <div className="max-w-2xl mx-auto">
          <Leaf className="w-12 h-12 text-brand-light mx-auto mb-6 opacity-80" />
          <h2 className="font-serif text-3xl font-bold mb-6">Cuidar tu salud de forma natural es más simple de lo que creés.</h2>
          <p className="text-lg text-brand-light/80 mb-8">Solo necesitás una guía clara, práctica y segura.</p>
          <Button onClick={scrollToOffer} variant="primary" className="text-xl px-8 py-5 shadow-2xl shadow-brand-accent/30">
            DESCARGAR MI COPIA AHORA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 py-8 text-center text-xs">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">
            Este producto no sustituye el parecer de un médico profesional. Consulta siempre a un médico para tratar asuntos de salud.
          </p>
          <p>&copy; {new Date().getFullYear()} Recetario Ancestral. Todos los derechos reservados.</p>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
};

export default App;