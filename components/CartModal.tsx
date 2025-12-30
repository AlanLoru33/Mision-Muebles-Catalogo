import React, { useMemo } from 'react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: string[];
  onRemoveItem: (index: number) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const whatsappMessage = useMemo(() => {
    if (cartItems.length === 0) {
      return "¡Hola Ema! Me gustaría consultar por muebles industriales.";
    }
    return `¡Hola Ema! Me interesa presupuestar: ${cartItems.join(', ')}.`;
  }, [cartItems]);

  const whatsappLink = `https://wa.me/5491168592886?text=${encodeURIComponent(whatsappMessage)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex justify-center items-center backdrop-blur-md">
      <div className="bg-negro-taller w-11/12 max-w-md md:max-w-lg rounded-3xl p-8 md:p-10 border border-naranja animate-fade-in-up">
        <h2 className="text-naranja mb-6 font-industrial text-xl md:text-2xl text-center">
          Mi Presupuesto
        </h2>
        <div id="cart-items-list" className="max-h-80 overflow-y-auto pr-2">
          {cartItems.length === 0 ? (
            <p className="text-center py-8 text-gray-500 text-base">
              No hay muebles en tu lista.
            </p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 px-5 bg-white bg-opacity-5 rounded-xl mb-4"
              >
                <span className="text-white text-sm md:text-base flex items-center">
                  <i className="fas fa-hammer text-naranja mr-3"></i> {item}
                </span>
                <button
                  onClick={() => onRemoveItem(index)}
                  className="text-red-500 text-xs md:text-sm font-bold uppercase hover:text-red-400 transition-colors"
                >
                  Borrar
                </button>
              </div>
            ))
          )}
        </div>
        <a
          href={whatsappLink}
          id="wa-final-link"
          className="block w-full py-5 bg-[#25D366] text-white text-center text-lg font-black rounded-xl mt-8 transition-transform duration-300 hover:scale-[1.02]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>
        <button
          onClick={onClose}
          className="mt-6 bg-transparent border-none text-gray-600 cursor-pointer w-full text-sm tracking-wider uppercase hover:text-gray-400 transition-colors"
        >
          Cerrar Ventana
        </button>
      </div>
    </div>
  );
};

export default CartModal;
