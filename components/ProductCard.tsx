import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (name: string) => void;
  onCustomize: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onCustomize }) => {
  return (
    <article
      className="group bg-negro-taller/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 transition-all duration-700 relative flex flex-col hover:border-naranja/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
      data-aos="fade-up"
    >
      {/* Premium Badge Overlay */}
      <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl font-title text-lg z-20 shadow-2xl transition-transform group-hover:scale-110">
        <span className="text-naranja">$</span>{product.transferPrice.toLocaleString('es-AR')}
      </div>

      <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
        <div className="bg-black/80 backdrop-blur-md text-naranja border border-naranja/20 px-3 py-1 rounded-lg text-[9px] font-industrial tracking-[0.2em] uppercase">
          Fabricación Propia
        </div>
      </div>

      {/* Image Container */}
      <div className="w-full h-80 md:h-96 overflow-hidden relative">
        <a href={product.image} className="glightbox" data-gallery="products">
          <div className="absolute inset-0 bg-gradient-to-t from-negro-taller via-transparent to-transparent opacity-60 z-10"></div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </a>
      </div>

      {/* Content Area */}
      <div className="p-8 flex-grow flex flex-col relative bg-negro-taller">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-naranja/20 to-transparent"></div>
        
        <h3 className="font-title text-2xl text-white mb-2 tracking-wide group-hover:text-naranja transition-colors duration-500 uppercase">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-xs mb-8 line-clamp-2 font-body leading-relaxed font-light italic">
          {product.description}
        </p>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
          {product.specs.slice(0, 4).map((spec, index) => (
            <div key={index} className="flex items-center gap-2 text-[10px] text-gray-400 font-body uppercase tracking-widest border-b border-white/5 pb-2">
              <i className="fas fa-microchip text-[8px] text-naranja/40"></i>
              {spec}
            </div>
          ))}
        </div>

        {/* Price & Action Section */}
        <div className="mt-auto pt-6 flex flex-col gap-4">
          <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">Contado / Transf.</span>
              <span className="text-xl font-bold text-verde-exito tracking-tight">${product.transferPrice.toLocaleString('es-AR')}</span>
            </div>
            <div className="h-10 w-px bg-white/10 mx-4"></div>
            <div className="flex flex-col text-right">
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">Precio Lista</span>
              <span className="text-sm text-gray-400 line-through opacity-50">${product.listPrice.toLocaleString('es-AR')}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="flex-[2] py-4 bg-naranja text-black font-industrial text-[10px] tracking-[0.2em] uppercase font-black rounded-xl transition-all hover:bg-white hover:scale-[1.02] shadow-[0_10px_30px_rgba(255,159,28,0.2)] active:scale-95"
              onClick={() => onAddToCart(product.name)}
            >
              Presupuestar
            </button>
            <button
              className="flex-1 py-4 bg-white/5 text-white/40 hover:text-white border border-white/5 rounded-xl transition-all hover:bg-white/10 flex items-center justify-center group/btn"
              onClick={() => onCustomize(product)}
              title="Personalizar"
            >
              <i className="fas fa-cog text-sm group-hover/btn:rotate-90 transition-transform duration-500"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;