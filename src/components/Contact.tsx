import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Tak for din henvendelse! Vi kontakter dig hurtigst muligt.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    });
  };
  return <section id="contact" className="py-16 bg-[#F2EAD3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#344F1F] mb-4">Kontakt Os</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Har du spørgsmål eller ønsker du et uforpligtende tilbud? Udfyld
            kontaktformularen eller kontakt os direkte.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Navn
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4991A]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4991A]" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4991A]" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service
                  </label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4991A]">
                    <option value="">Vælg service</option>
                    <option value="vinduespudsning">Vinduespudsning</option>
                    <option value="bilklargøring">Bilklargøring</option>
                    <option value="fliserens">Fliserens</option>
                    <option value="algebehandling">Algebehandling</option>
                    <option value="facaderens">Facaderens</option>
                    <option value="tagrenderens">Tagrenderens</option>
                    <option value="flagstang">Flagstang service</option>
                    <option value="andet">Andet</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Besked
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F4991A]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#344F1F] text-white font-medium py-3 px-6 rounded-md hover:bg-[#2a3f19] transition-colors">
                Send besked
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-semibold text-[#344F1F] mb-6">
                Kontaktinformation
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={24} className="text-[#F4991A] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Telefon</h4>
                    <a href="tel:71119980" className="text-gray-700 hover:text-[#F4991A]">
                      71 11 99 80
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="text-[#F4991A] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a href="mailto:info@nkkservice.com" className="text-gray-700 hover:text-[#F4991A]">
                      info@nkkservice.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={24} className="text-[#F4991A] mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Dækningsområde
                    </h4>
                    <p className="text-gray-700">Vi dækker hele Sjælland</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-4">Åbningstider</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mandag - Fredag</span>
                    <span className="text-gray-900">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lørdag</span>
                    <span className="text-gray-900">09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Søndag</span>
                    <span className="text-gray-900">Lukket</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}