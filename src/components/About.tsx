import React from 'react';
import { CheckCircle } from 'lucide-react';
export function About() {
  const benefits = ['Professionel service med fokus på kvalitet', 'Erfarne og pålidelige medarbejdere', 'Fleksible løsninger tilpasset dine behov', 'Miljøvenlige rengøringsmidler', 'Konkurrencedygtige priser'];
  return <section id="about" className="py-16 bg-[#F9F5F0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="NKK Service team" className="rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#344F1F] mb-4">
              Om NKK Service
            </h2>
            <p className="text-gray-700 mb-6">
              NKK Service er din pålidelige partner til alle former for
              rengørings- og vedligeholdelsesopgaver. Vi har mange års erfaring
              og leverer altid arbejde af højeste kvalitet til
              konkurrencedygtige priser.
            </p>
            <p className="text-gray-700 mb-6">
              Vores team består af erfarne fagfolk, der sætter en ære i at
              levere grundigt og professionelt arbejde hver gang. Vi bruger kun
              miljøvenlige og effektive rengøringsmidler.
            </p>
            <div className="space-y-3">
              {benefits.map((benefit, index) => <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-[#F4991A] mr-2" />
                  <span>{benefit}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}