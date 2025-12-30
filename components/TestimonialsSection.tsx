import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial; delay: number }> = ({ testimonial, delay }) => {
  return (
    <div
      className="bg-negro-taller p-8 rounded-3xl border border-white border-opacity-5 flex flex-col items-center text-center shadow-xl transition-all duration-600 ease-slow-ease hover:border-naranja hover:scale-[1.02]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <i className="fas fa-quote-right text-naranja text-4xl mb-6 opacity-70"></i>
      <p className="text-gray-300 text-base italic mb-6">
        "{testimonial.quote}"
      </p>
      <p className="font-industrial text-naranja text-sm uppercase tracking-wider font-bold">
        - {testimonial.author}
      </p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-negro-profundo py-20 md:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-industrial text-naranja text-4xl md:text-5xl text-center tracking-wide mb-16 md:mb-20" data-aos="fade-down">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;