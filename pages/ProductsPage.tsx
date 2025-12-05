import React from 'react';
import { productsData } from '../constants';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCircleIcon } from '../components/Icons';

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in-up space-y-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our SaaS Products</h1>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">
          Proprietary tools built to give your business a competitive edge.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {productsData.products.map(product => (
          <Card key={product.name} className="flex flex-col">
            <h2 className="text-2xl font-bold text-brand-accent">{product.name}</h2>
            <p className="text-brand-text-secondary my-3">{product.tagline}</p>
            <ul className="space-y-2 my-6 flex-grow">
              {product.features.map(feature => (
                <li key={feature} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
                <p className="text-3xl font-bold mb-4">{product.price}</p>
                <Button onClick={() => {}} className="w-full">Get Started</Button>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="bg-brand-secondary p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Request a Demo</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
          <input type="email" placeholder="Work Email" className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
          <select className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent">
            <option>Select Product</option>
            {productsData.products.map(p => <option key={p.name}>{p.name}</option>)}
          </select>
          <Button onClick={() => {}} className="w-full">Submit Request</Button>
        </form>
      </div>

    </div>
  );
};

export default ProductsPage;