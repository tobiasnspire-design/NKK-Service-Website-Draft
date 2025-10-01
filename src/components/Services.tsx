import React from 'react';
import { ServiceCard } from './ServiceCard';
import { Droplets, Car, Home, Wind, Flag, Brush, ShowerHead } from 'lucide-react';
export function Services() {
  const services = [{
    title: 'Vinduespudsning',
    description: 'Professionel vinduespudsning til både private og erhverv med fokus på kvalitet og grundighed.',
    icon: <Droplets size={32} />
  }, {
    title: 'Bilklargøring',
    description: 'Komplet rengøring og klargøring af din bil, både indvendigt og udvendigt.',
    icon: <Car size={32} />
  }, {
    title: 'Fliserens',
    description: 'Effektiv rengøring af fliser og belægning, som fjerner snavs, mos og alger.',
    icon: <ShowerHead size={32} />
  }, {
    title: 'Algebehandling',
    description: 'Forebyggende behandling mod alger på tag, facade og andre overflader.',
    icon: <Droplets size={32} />
  }, {
    title: 'Facaderens',
    description: 'Grundig rensning af facader, der fjerner skidt, alger og forurening.',
    icon: <Home size={32} />
  }, {
    title: 'Tagrenderens',
    description: 'Rensning og vedligeholdelse af tagrender for at sikre optimal afvanding.',
    icon: <Wind size={32} />
  }, {
    title: 'Flagstang service',
    description: 'Vedligeholdelse og servicering af flagstænger, inkl. udskiftning af line og tilbehør.',
    icon: <Flag size={32} />
  }, {
    title: 'Andre opgaver',
    description: 'Vi udfører også andre mindre opgaver. Kontakt os for at høre mere om dine muligheder.',
    icon: <Brush size={32} />
  }];
  return <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#344F1F] mb-4">
            Vores Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi tilbyder en bred vifte af professionelle services til både
            private og erhverv. Vores erfarne team sikrer altid et resultat i
            topklasse.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />)}
        </div>
      </div>
    </section>;
}