import React from 'react';

const OurPhilosophy: React.FC = () => {
  return (
    <section className="bg-negro-profundo py-24 md:py-32 px-5 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        <div className="lg:w-1/2" data-aos="fade-right">
          <div className="relative group mx-auto max-w-sm">
            {/* Glow Naranja */}
            <div className="absolute -inset-6 bg-naranja opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            <div className="relative rounded-full border-4 border-naranja p-0.5 bg-black overflow-hidden shadow-[0_0_50px_rgba(255,159,28,0.3)] aspect-square">
              {/* Textura industrial */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-10 pointer-events-none"></div>
              
              <img
                src="https://i.ibb.co/kVNxkY2H/premium-photo-1668373496860-0c4bb952835c.avif" 
                alt="Muebles industriales de alta calidad"
                className="w-full h-full object-cover rounded-full transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
          <h2 className="font-industrial text-naranja text-4xl md:text-6xl tracking-tight mb-8 drop-shadow-md">
            Nuestra Filosofía
          </h2>
          <div className="space-y-6">
            <p className="text-white text-lg md:text-xl leading-relaxed font-body font-light">
              En <span className="text-naranja font-bold">Misión Mueble</span>, cada pieza es un testimonio de fuerza y diseño. 
              Desde nuestro taller en <span className="text-naranja">Lomas de Zamora</span>, convertimos el hierro bruto y la madera noble en piezas eternas.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-body">
              No hacemos muebles en serie. Forjamos soluciones personalizadas que combinan la estética industrial más pura con la funcionalidad que tu hogar necesita hoy.
            </p>
          </div>
          
          <div className="mt-10 inline-flex items-center gap-4 border-l-4 border-naranja pl-6 py-4 bg-naranja/5 rounded-r-2xl">
            <i className="fas fa-hammer text-naranja text-2xl"></i>
            <p className="text-white text-lg italic font-title tracking-widest uppercase">
              "Calidad que se siente al tacto."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;