import React, { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#344F1F]">NKK SERVICE</h1>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-[#F4991A] font-medium">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-[#F4991A] font-medium">
            Om os
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#F4991A] font-medium">
            Kontakt
          </a>
          <a href="tel:71119980" className="bg-[#344F1F] text-white px-4 py-2 rounded-md hover:bg-[#2a3f19] transition-colors">
            Ring: 71 11 99 80
          </a>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#services" className="text-gray-700 hover:text-[#F4991A] font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#F4991A] font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Om os
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#F4991A] font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Kontakt
            </a>
            <a href="tel:71119980" className="bg-[#344F1F] text-white px-4 py-2 rounded-md hover:bg-[#2a3f19] transition-colors text-center">
              Ring: 71 11 99 80
            </a>
          </div>
        </div>}
    </header>;
}