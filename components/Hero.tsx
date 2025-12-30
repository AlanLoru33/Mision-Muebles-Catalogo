import React, { useState, useEffect } from 'react';

interface HeroProps {
  words: string[];
}

const Hero: React.FC<HeroProps> = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 40 : 120;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <section className="relative min-h-[110vh] flex flex-col justify-center items-center text-center px-5 pt-32 overflow-hidden bg-black">
      {/* Deep Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(255,159,28,0.08)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-40"></div>
      </div>

      {/* Main Branding Sphere */}
      <div 
        className="mb-16 relative group animate-float"
        data-aos="zoom-out"
        data-aos-duration="1500"
      >
        {/* Orbiting Ring */}
        <div className="absolute -inset-10 rounded-full border border-naranja/10 animate-spin-slow pointer-events-none"></div>
        <div className="absolute -inset-1 border border-naranja/40 rounded-full blur-[2px] opacity-30"></div>

        {/* The Frame */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-naranja via-black to-naranja shadow-[0_0_120px_rgba(255,159,28,0.25)] overflow-hidden">
          <div className="absolute inset-0 bg-black rounded-full overflow-hidden">
             <img 
              src="https://i.ibb.co/LdLmyL0m/Imagen-de-Whats-App-2025-12-20-a-las-21-04-36-e2c66e03.jpg" 
              alt="Logo de Misión Mueble" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-[3s] group-hover:scale-110"
            />
            {/* Industrial Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-naranja/20 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
      
      {/* Typography */}
      <div className="relative z-10 max-w-5xl">
        <h1
          className="font-industrial text-6xl md:text-8xl lg:text-9xl tracking-[-0.12em] uppercase mb-4 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,1)]"
          data-aos="fade-up"
        >
          MISIÓN<span className="text-naranja">.</span>MUEBLE
        </h1>
        
        <div
          className="h-12 flex items-center justify-center font-title text-2xl md:text-3xl text-gray-400 tracking-[0.5em] uppercase font-light"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {displayedText}<span className="w-1 h-8 bg-naranja ml-2 animate-pulse"></span>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-16 flex flex-col items-center gap-4 text-white/30 hover:text-naranja transition-colors cursor-pointer group" onClick={() => document.getElementById('product-grid')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] font-industrial tracking-[0.3em] uppercase group-hover:translate-y-1 transition-transform">Explorar Catálogo</span>
        <div className="w-px h-16 bg-gradient-to-b from-naranja to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;