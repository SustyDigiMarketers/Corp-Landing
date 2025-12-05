
import React from 'react';
import { servicesData } from '../constants';
import { Service } from '../types';
import Card from '../components/Card';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <Card className="flex flex-col h-full group">
    <div className="flex-shrink-0">
      <service.icon className="h-10 w-10 text-brand-accent mb-4" />
      <h3 className="text-xl font-bold text-brand-text">{service.name}</h3>
    </div>
    <p className="text-brand-text-secondary my-4 flex-grow">{service.description}</p>
    <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
            {service.tools.map(tool => (
                <span key={tool} className="text-xs bg-brand-primary px-2 py-1 rounded-full text-brand-text-secondary">{tool}</span>
            ))}
        </div>
        <div className="text-sm text-brand-text">Starts from <span className="font-bold text-brand-accent">{service.price_start}</span></div>
    </div>
  </Card>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in-up space-y-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">
          We offer a comprehensive suite of services to power your digital growth.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Development Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.development.map(service => <ServiceCard key={service.name} service={service} />)}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-8">Marketing & Branding</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.marketing.map(service => <ServiceCard key={service.name} service={service} />)}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-8">Design Studio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.design.map(service => <ServiceCard key={service.name} service={service} />)}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Automation & AI</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.automation.map(service => <ServiceCard key={service.name} service={service} />)}
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;
