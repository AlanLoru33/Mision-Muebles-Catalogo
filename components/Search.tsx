import React from 'react';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-xl md:max-w-3xl mx-auto -mt-16 md:-mt-20 mb-24 md:mb-32 px-5 z-20 relative" data-aos="fade-up">
      <div className="bg-black border-2 border-naranja rounded-full p-1.5 flex shadow-[0_15px_40px_rgba(0,0,0,0.8)] focus-within:shadow-[0_0_20px_rgba(255,159,28,0.4)] transition-all duration-300">
        <input
          type="text"
          id="main-search"
          placeholder="Buscar tu próximo mueble..."
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-1 bg-transparent border-none px-8 py-4 text-white text-lg md:text-xl focus:ring-0 focus:outline-none placeholder-white/30"
        />
        <button className="bg-naranja w-14 md:w-16 h-14 md:h-16 rounded-full flex items-center justify-center text-black hover:bg-white transition-colors duration-300">
          <i className="fas fa-search text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;