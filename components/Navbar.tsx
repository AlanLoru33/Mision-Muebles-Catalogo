import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const navLinks = [
    { name: 'Productos', href: '#product-grid' },
    { name: 'Filosofía', href: '#philosophy' },
    { name: 'Servicios', href: '#workshop' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full px-5 md:px-12 lg:px-20 flex justify-between items-center z-50 transition-all duration-700 ${
      scrolled ? 'bg-negro-profundo/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'
    }`}>
      {/* Brand Logo */}
      <div 
        className="flex items-center gap-4 group cursor-pointer" 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <div className={`relative flex items-center justify-center rounded-xl border border-naranja/50 transition-all duration-500 bg-black/50 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
          <div className="absolute inset-0 bg-naranja/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <i className="fas fa-hammer text-naranja text-xl group-hover:rotate-12 transition-transform"></i>
        </div>
        <div className="flex flex-col">
          <span className={`font-industrial text-white tracking-[-0.1em] transition-all leading-none ${scrolled ? 'text-lg' : 'text-xl'}`}>MISIÓN</span>
          <span className="text-naranja font-title text-[9px] tracking-[0.6em] uppercase opacity-80">Mueble</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-12">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative text-[10px] font-industrial text-gray-400 hover:text-white tracking-[0.25em] uppercase transition-all duration-300"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-naranja transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Origin Badge */}
      <div className="hidden md:flex flex-col items-end">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-naranja animate-pulse"></div>
          <p className="text-[9px] font-industrial text-gray-400 tracking-[0.4em] uppercase">
            LOMAS DE ZAMORA <span className="text-white/20">|</span> PBA
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;