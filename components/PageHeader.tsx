import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, children }) => {
  return (
    <section className="relative text-center min-h-screen flex flex-col items-center justify-center overflow-hidden w-screen ml-[calc(50%-50vw)]">
      <div aria-hidden="true" className="absolute inset-0 z-0 hero-fade-in">
        <div className="absolute bg-purple-200 rounded-full w-96 h-96 -top-20 -left-20 filter blur-3xl opacity-40 animate-bubble1" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bg-pink-200 rounded-full w-80 h-80 -bottom-20 -right-10 filter blur-3xl opacity-40 animate-bubble2" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bg-indigo-200 rounded-lg w-72 h-72 top-1/3 left-1/2 filter blur-3xl opacity-40 animate-bubble3" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 w-full md:w-4/5 mx-auto px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text hero-fade-in-up" style={{ animationDelay: '100ms' }}>
              {title}
          </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 hero-fade-in-up" style={{ animationDelay: '300ms' }}>
          {subtitle}
        </p>
        {children && (
            <div className="mt-10 flex flex-row justify-center items-center gap-2 sm:gap-4 hero-fade-in-up" style={{ animationDelay: '500ms' }}>
                {children}
            </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;