import React from 'react';
import { FOOTER_CATEGORIES, FOOTER_HELP_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 md:py-32 px-5 border-t border-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-naranja/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 relative z-10">
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h5 className="font-industrial text-naranja mb-6 text-sm md:text-base tracking-wider">
            Misión Mueble
          </h5>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-body">
            Transformamos el hierro y la madera en piezas de arte funcionales desde Lomas de Zamora. Durabilidad y estilo industrial puro.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://instagram.com/misionmueble" className="w-11 h-11 bg-gray-900 flex items-center justify-center text-naranja rounded-xl text-lg transition-all duration-300 border border-gray-800 hover:bg-naranja hover:text-black hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-11 h-11 bg-gray-900 flex items-center justify-center text-naranja rounded-xl text-lg transition-all duration-300 border border-gray-800 hover:bg-naranja hover:text-black hover:-translate-y-1">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/5491168592886" className="w-11 h-11 bg-gray-900 flex items-center justify-center text-naranja rounded-xl text-lg transition-all duration-300 border border-gray-800 hover:bg-naranja hover:text-black hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h5 className="font-industrial text-naranja mb-6 text-sm md:text-base tracking-wider">Categorías</h5>
          <ul className="list-none text-gray-500 text-sm leading-relaxed font-body">
            {FOOTER_CATEGORIES.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.href} className="hover:text-naranja transition-all duration-300">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h5 className="font-industrial text-naranja mb-6 text-sm md:text-base tracking-wider">Ayuda</h5>
          <ul className="list-none text-gray-500 text-sm leading-relaxed font-body">
            {FOOTER_HELP_LINKS.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.href} className="hover:text-naranja transition-all duration-300">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h5 className="font-industrial text-naranja mb-6 text-sm md:text-base tracking-wider">Contacto</h5>
          <div className="text-gray-500 text-sm leading-relaxed font-body">
            <p className="text-white font-bold mb-1">Ema Cabañas</p>
            <p><i className="fas fa-map-marker-alt text-naranja mr-2"></i> Lomas de Zamora, Buenos Aires</p>
            <p><i className="fas fa-clock text-naranja mr-2"></i> Entregas Sábados</p>
          </div>
        </div>
      </div>

      {/* PLACA TÉCNICA DE AUTOR (Estilo Industrial) */}
      <div className="mt-24 pt-12 border-t border-white/5 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="bg-negro-taller/50 border border-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:border-naranja/30 transition-all duration-500">
            <div className="text-left">
              <p className="text-[10px] font-industrial text-gray-600 tracking-widest uppercase mb-1">Developed by</p>
              <h6 className="font-title text-xl text-white tracking-wider">ALAN LUCIANO LORU</h6>
              <p className="text-[11px] text-naranja/80 font-industrial tracking-widest uppercase opacity-70">Software Engineering • Lomas de Zamora</p>
            </div>
            <div className="h-px md:h-12 w-12 md:w-px bg-gray-800"></div>
            <a 
              href="https://github.com/AlanLoru33" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="text-right">
                <p className="text-[9px] font-industrial text-gray-500 uppercase">View Projects on</p>
                <p className="text-xs font-industrial text-gray-400 group-hover:text-naranja transition-colors">GitHub Repository</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-black border border-gray-800 flex items-center justify-center group-hover:border-naranja group-hover:bg-naranja group-hover:text-black transition-all">
                <i className="fab fa-github text-xl"></i>
              </div>
            </a>
          </div>
          <p className="mt-8 text-[9px] text-gray-700 font-industrial tracking-widest uppercase">
            © 2025 Misión Mueble • Crafted with Precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;