import React from 'react';
import { INFO_CARDS } from '../constants';
import { InfoCard } from '../types';
import MapCard from './MapCard'; // Re-import MapCard

const InfoCardComponent: React.FC<{ card: InfoCard }> = ({ card }) => {
  return (
    <div className="text-center" data-aos="fade-up" data-aos-delay={card.delay}>
      <i className={`fas ${card.icon} text-5xl text-naranja mb-6`}></i>
      <h4 className="font-industrial text-lg tracking-wider mb-4">
        {card.title}
      </h4>
      <p className="text-gray-400 text-sm max-w-sm mx-auto">
        {card.description}
      </p>
    </div>
  );
};

const WorkshopInfo: React.FC = () => {
  return (
    <section className="bg-negro-taller bg-opacity-90 py-20 md:py-28 border-t-2 border-naranja px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20"> {/* Adjusted grid-cols for 3 cards */}
        {INFO_CARDS.map((card) => (
          card.id === 'workshop-location' ? (
            <MapCard key={card.id} card={card} />
          ) : (
            <InfoCardComponent key={card.id} card={card} />
          )
        ))}
      </div>
    </section>
  );
};

export default WorkshopInfo;