import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#344F1F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NKK SERVICE</h3>
            <p className="mb-4">
              Professionel multiservice til konkurrencedygtige priser. Vi
              leverer kvalitetsarbejde til både private og erhverv.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F4991A] transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#F4991A] transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#F4991A] transition-colors">
                  Vinduespudsning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4991A] transition-colors">
                  Bilklargøring
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4991A] transition-colors">
                  Fliserens
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4991A] transition-colors">
                  Algebehandling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4991A] transition-colors">
                  Facaderens
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hurtige links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#F4991A] transition-colors">
                  Hjem
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F4991A] transition-colors">
                  Om os
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4991A] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F4991A] transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F4991A] transition-colors">
                  Privatlivspolitik
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt os</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-2" />
                <a href="tel:71119980" className="hover:text-[#F4991A] transition-colors">
                  71 11 99 80
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:info@nkkservice.com" className="hover:text-[#F4991A] transition-colors">
                  info@nkkservice.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} NKK SERVICE. Alle rettigheder
            forbeholdes.
          </p>
        </div>
      </div>
    </footer>;
}