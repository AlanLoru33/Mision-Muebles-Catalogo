import React from 'react';
import { InfoCard } from '../types';

const MapCard: React.FC<{ card: InfoCard }> = ({ card }) => {
  return (
    <div className="text-center" data-aos="fade-up" data-aos-delay={card.delay}>
      <i className={`fas ${card.icon} text-5xl text-naranja mb-6`}></i>
      <h4 className="font-industrial text-lg tracking-wider mb-4">
        {card.title}
      </h4>
      <div className="relative w-full h-64 overflow-hidden rounded-xl group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13098.814522927233!2d-58.4215359!3d-34.7865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd23ef5a0d331%3A0x6d91024efb5ef602!2sLomas%20de%20Zamora%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1709249678170!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // Changed to no-referrer-when-downgrade for broader compatibility
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          title="Ubicación del taller en Lomas de Zamora"
        ></iframe>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center text-white/80 group-hover:text-transparent text-sm font-title uppercase tracking-widest pointer-events-none">
          Ver en Mapa
        </div>
      </div>
      <p className="text-gray-400 text-sm max-w-sm mx-auto mt-6">
        {card.description}
      </p>
    </div>
  );
};

export default MapCard;