
import React from 'react';
import Button from '../components/Button';

interface NotFoundPageProps {
  navigateToHome: () => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ navigateToHome }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center animate-fade-in-up">
      <h1 className="text-9xl font-bold text-brand-accent">404</h1>
      <h2 className="text-4xl md:text-5xl font-bold mt-4">Page Not Found</h2>
      <p className="mt-4 max-w-md text-brand-text-secondary">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <div className="mt-8">
        <Button onClick={navigateToHome}>Go Back Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
