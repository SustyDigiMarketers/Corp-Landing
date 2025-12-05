import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = "px-8 py-3 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary";
  
  const variantClasses = {
    primary: "bg-brand-accent text-white hover:bg-brand-accent-hover focus:ring-brand-accent",
    secondary: "bg-brand-primary text-brand-text border border-gray-300 hover:bg-gray-100 focus:ring-brand-accent",
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;