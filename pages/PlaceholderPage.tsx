import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in-up">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">
          This page is under construction. Check back soon for exciting updates!
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
