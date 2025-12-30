import React, { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';

interface ProductCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onAddToCartCustomized: (productName: string, customization: { woodColor: string; frameColor: string }) => void;
}

const woodColors = ['virgen', 'natural', 'nogal', 'roble claro', 'estilo campo'];
const frameColors = ['blanco', 'negro'];

const ProductCustomizerModal: React.FC<ProductCustomizerModalProps> = ({ isOpen, onClose, product, onAddToCartCustomized }) => {
  const [selectedWoodColor, setSelectedWoodColor] = useState(woodColors[0]);
  const [selectedFrameColor, setSelectedFrameColor] = useState(frameColors[0]);

  // Reset selections when product changes or modal opens
  useEffect(() => {
    if (isOpen && product) {
      setSelectedWoodColor(woodColors[0]);
      setSelectedFrameColor(frameColors[0]);
    }
  }, [isOpen, product]);

  const handleAddToCart = useCallback(() => {
    onAddToCartCustomized(product.name, {
      woodColor: selectedWoodColor,
      frameColor: selectedFrameColor,
    });
  }, [onAddToCartCustomized, product.name, selectedWoodColor, selectedFrameColor]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex justify-center items-center backdrop-blur-md p-5" onClick={onClose}>
      <div
        className="bg-negro-taller w-11/12 max-w-2xl rounded-3xl p-8 md:p-10 border border-naranja animate-fade-in-up relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-naranja transition-colors text-3xl"
          aria-label="Cerrar personalizador"
        >
          <i className="fas fa-times"></i>
        </button>

        <h2 className="text-naranja mb-6 font-industrial text-2xl md:text-3xl text-center">
          Personalizar: {product.name}
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={product.image} // For a full solution, this image would update based on selections
              alt={product.name}
              className="w-full h-auto rounded-xl border border-gray-700 shadow-lg object-cover"
              loading="lazy"
            />
            {/* Future improvement: dynamic image based on selectedWoodColor and selectedFrameColor */}
            <p className="text-gray-400 text-center text-sm mt-3">
              *La imagen mostrada es de referencia. La personalización se aplicará al diseño.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div>
              <label htmlFor="wood-color" className="block text-gray-300 text-lg font-title mb-2">
                Color de Madera:
              </label>
              <select
                id="wood-color"
                value={selectedWoodColor}
                onChange={(e) => setSelectedWoodColor(e.target.value)}
                className="w-full bg-black bg-opacity-50 border border-naranja text-white p-3 rounded-md focus:ring-naranja focus:border-naranja"
              >
                {woodColors.map((color) => (
                  <option key={color} value={color} className="bg-negro-taller text-white capitalize">
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="frame-color" className="block text-gray-300 text-lg font-title mb-2">
                Color de Caño:
              </label>
              <select
                id="frame-color"
                value={selectedFrameColor}
                onChange={(e) => setSelectedFrameColor(e.target.value)}
                className="w-full bg-black bg-opacity-50 border border-naranja text-white p-3 rounded-md focus:ring-naranja focus:border-naranja"
              >
                {frameColors.map((color) => (
                  <option key={color} value={color} className="bg-negro-taller text-white capitalize">
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 p-4 bg-black bg-opacity-30 rounded-xl border-l-4 border-naranja">
              <p className="text-white text-base">
                Tu elección:
              </p>
              <p className="text-gray-300 text-sm">
                Madera: <span className="text-naranja capitalize">{selectedWoodColor}</span>
              </p>
              <p className="text-gray-300 text-sm">
                Caño: <span className="text-naranja capitalize">{selectedFrameColor}</span>
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full px-5 py-4 mt-6 bg-naranja text-black text-xl font-black rounded-md shadow-naranja-glow shadow-2xl transition-all duration-300 uppercase tracking-widest hover:scale-105 hover:bg-white"
            >
              Agregar a mi lista (Personalizado)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizerModal;