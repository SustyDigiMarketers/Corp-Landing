
import React from 'react';
import { portfolioData } from '../constants';
import Card from '../components/Card';
import { ArrowRightIcon } from '../components/Icons';

const PortfolioPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">
          We take pride in delivering results. Here's a look at some of our success stories.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {portfolioData.projects.map(project => (
          <Card key={project.client} className="group overflow-hidden">
            <div className="relative">
              <img src={project.images[0]} alt={`${project.client} before`} className="rounded-lg w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold">View Project</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-brand-accent font-semibold">{project.service}</p>
              <h3 className="text-2xl font-bold mt-1">{project.client}</h3>
              <p className="mt-4 text-brand-text-secondary">
                Result: <span className="font-semibold text-brand-text">{project.result}</span>
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
