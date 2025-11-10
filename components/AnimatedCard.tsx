
import React from 'react';

interface AnimatedCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
  image?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ icon, title, description, children, image }) => {
  return (
    <div className="group h-full rounded-2xl bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      {image && (
        <div className="w-full h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        </div>
      )}
      <div className="p-8 flex-grow flex flex-col">
        {icon && <div className="mb-6 text-indigo-500">{icon}</div>}
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 text-base flex-grow">{description}</p>
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
};

export default AnimatedCard;