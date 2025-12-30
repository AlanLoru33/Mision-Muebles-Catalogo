import React, { useState, useEffect, useCallback, createContext, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import ProductGrid from './components/ProductGrid';
import OurPhilosophy from './components/OurPhilosophy';
import TestimonialsSection from './components/TestimonialsSection';
import WhatsAppCta from './components/WhatsAppCta';
import WorkshopInfo from './components/WorkshopInfo';
import Footer from './components/Footer';
import FloatingTriggers from './components/FloatingTriggers';
import CartModal from './components/CartModal';
import ProductCustomizerModal from './components/ProductCustomizerModal';
import { Product } from './types';
import { PRODUCTS, WORDS_FOR_TYPING } from './constants';

declare const GLightbox: any;
declare const AOS: any;

interface CartContextType {
  cart: string[];
  addToCart: (name: string) => void;
  removeFromCart: (index: number) => void;
  updateCartCount: () => void;
  onAddToCartCustomized: (productName: string, customization: { woodColor: string; frameColor: string }) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cart, setCart] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCustomizerModalOpen, setIsCustomizerModalOpen] = useState<boolean>(false);
  const [selectedProductToCustomize, setSelectedProductToCustomize] = useState<Product | null>(null);

  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ touchNavigation: true, loop: true });
    }

    const storedCart = localStorage.getItem('mision_mueble_cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateCartCount = useCallback(() => {}, []);

  const addToCart = useCallback((name: string) => {
    setCart((prevCart) => {
      if (!prevCart.includes(name)) {
        const newCart = [...prevCart, name];
        localStorage.setItem('mision_mueble_cart', JSON.stringify(newCart));
        return newCart;
      }
      return prevCart;
    });
  }, []);

  const onAddToCartCustomized = useCallback((productName: string, customization: { woodColor: string; frameColor: string }) => {
    const customizedName = `${productName} (Madera: ${customization.woodColor}, Caño: ${customization.frameColor})`;
    setCart((prevCart) => {
      const newCart = [...prevCart, customizedName];
      localStorage.setItem('mision_mueble_cart', JSON.stringify(newCart));
      return newCart;
    });
    setIsCustomizerModalOpen(false);
    setSelectedProductToCustomize(null);
  }, []);

  const removeFromCart = useCallback((index: number) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((_, i) => i !== index);
      localStorage.setItem('mision_mueble_cart', JSON.stringify(newCart));
      return newCart;
    });
  }, []);

  const toggleCartModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleCustomizeProduct = useCallback((product: Product) => {
    setSelectedProductToCustomize(product);
    setIsCustomizerModalOpen(true);
  }, []);

  const handleCloseCustomizerModal = useCallback(() => {
    setIsCustomizerModalOpen(false);
    setSelectedProductToCustomize(null);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return PRODUCTS;
    return PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const cartContextValue = useMemo(() => ({
    cart,
    addToCart,
    removeFromCart,
    updateCartCount,
    onAddToCartCustomized,
  }), [cart, addToCart, removeFromCart, updateCartCount, onAddToCartCustomized]);

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 -z-20 bg-negro-profundo">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85))] bg-cover bg-center animate-kenBurns"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2000')` }}>
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15 pointer-events-none"></div>
        </div>

        <Navbar scrolled={scrolled} />
        <FloatingTriggers toggleModal={toggleCartModal} cartCount={cart.length} />

        <Hero words={WORDS_FOR_TYPING} />
        
        <div id="product-grid">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProductGrid products={filteredProducts} onAddToCart={addToCart} onCustomize={handleCustomizeProduct} />
        </div>

        <div id="philosophy">
          <OurPhilosophy />
        </div>
        
        <TestimonialsSection />
        
        <div id="workshop">
          <WorkshopInfo />
        </div>

        <div id="contact">
          <WhatsAppCta />
        </div>
        
        <Footer />

        <CartModal
          isOpen={isModalOpen}
          onClose={toggleCartModal}
          cartItems={cart}
          onRemoveItem={removeFromCart}
        />

        {selectedProductToCustomize && (
          <ProductCustomizerModal
            isOpen={isCustomizerModalOpen}
            onClose={handleCloseCustomizerModal}
            product={selectedProductToCustomize}
            onAddToCartCustomized={onAddToCartCustomized}
          />
        )}
      </div>
    </CartContext.Provider>
  );
};

export default App;