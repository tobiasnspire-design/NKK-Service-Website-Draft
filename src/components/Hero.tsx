import React from 'react';
export function Hero() {
  return <section className="bg-[#F2EAD3] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#344F1F] mb-4">
              Professionel multiservice til private og erhverv
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Vi tilbyder vinduespudsning, bilklargøring, fliserens,
              algebehandling, facaderens og meget mere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#F4991A] text-white font-medium px-6 py-3 rounded-md hover:bg-[#e38c17] transition-colors text-center">
                Få et tilbud
              </a>
              <a href="#services" className="border-2 border-[#344F1F] text-[#344F1F] font-medium px-6 py-3 rounded-md hover:bg-[#344F1F] hover:text-white transition-colors text-center">
                Se alle services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Professionel rengøring" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>;
}