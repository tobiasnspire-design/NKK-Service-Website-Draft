import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export function ServiceCard({
  title,
  description,
  icon
}: ServiceCardProps) {
  return <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-[#F4991A] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#344F1F]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
}