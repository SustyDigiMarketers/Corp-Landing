import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-brand-secondary border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-brand-accent/20 hover:border-brand-accent/50 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;