import React, { useMemo } from 'react';

const WhatsAppCta: React.FC = () => {
  const whatsappMessage = useMemo(() => {
    return "¡Hola Ema! Me gustaría iniciar un proyecto a medida o consultar sobre sus muebles industriales.";
  }, []);

  const whatsappLink = `https://wa.me/5491168592886?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 md:py-28 px-5 bg-negro-taller text-center border-t-2 border-naranja">
      <div className="max-w-4xl mx-auto" data-aos="zoom-in">
        <h2 className="font-industrial text-blanco text-3xl md:text-4xl tracking-wide mb-8">
          ¿Listo para tu próximo mueble industrial?
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-10">
          Contáctanos directamente por WhatsApp para presupuestos, diseños a medida y cualquier consulta. ¡Transformemos juntos tu espacio!
        </p>
        <a
          href={whatsappLink}
          className="inline-flex items-center gap-4 px-10 py-5 bg-naranja text-black text-xl md:text-2xl font-black rounded-full shadow-naranja-glow shadow-2xl transition-all duration-300 uppercase tracking-widest hover:scale-105 hover:bg-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp text-3xl"></i>
          ¡Hablemos de tu proyecto!
        </a>
      </div>
    </section>
  );
};

export default WhatsAppCta;