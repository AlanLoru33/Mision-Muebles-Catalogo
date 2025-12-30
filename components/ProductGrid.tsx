import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (name: string) => void;
  onCustomize: (product: Product) => void; // Nueva prop
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, onCustomize }) => {
  return (
    <div id="product-grid" className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 px-5 pb-24 md:pb-32">
      {products.length === 0 ? (
        <p className="text-center text-gray-400 text-lg col-span-full py-16">
          No se encontraron productos con ese criterio de búsqueda.
        </p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onCustomize={onCustomize} // Pasar la prop
          />
        ))
      )}
    </div>
  );
};

export default ProductGrid;