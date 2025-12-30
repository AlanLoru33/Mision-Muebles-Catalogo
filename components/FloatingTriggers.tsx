import React, { useState, useEffect } from 'react';

interface FloatingTriggersProps {
  toggleModal: () => void;
  cartCount: number;
}

const FloatingTriggers: React.FC<FloatingTriggersProps> = ({ toggleModal, cartCount }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed right-6 bottom-6 md:right-10 md:bottom-10 flex flex-col gap-4 z-40">
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-naranja hover:text-black transition-all duration-300 animate-fade-in"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
      
      <a
        href="https://instagram.com/misionmueble"
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl shadow-2xl transition-all duration-300 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] hover:scale-110 hover:-rotate-6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      
      <button
        onClick={toggleModal}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-black text-2xl shadow-2xl transition-all duration-300 bg-naranja relative hover:scale-110 active:scale-90 ${cartCount > 0 ? 'animate-pulse' : ''}`}
      >
        <i className="fas fa-hammer"></i>
        {cartCount > 0 && (
          <div className="absolute -top-2 -left-2 bg-white text-black w-6 h-6 rounded-full flex items-center justify-center font-black text-[10px] border-2 border-naranja animate-bounce">
            {cartCount}
          </div>
        )}
      </button>

      <a
        href="https://wa.me/5491168592886"
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl shadow-2xl transition-all duration-300 bg-[#25D366] hover:scale-110 hover:rotate-6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default FloatingTriggers;