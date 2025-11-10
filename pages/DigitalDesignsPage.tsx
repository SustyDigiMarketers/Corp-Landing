import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { digitalDesignServices, designShowcase } from '../constants';
import { ArrowRightIcon } from '../components/icons/TechIcons';

const DigitalDesignsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Digital Design & Creatives"
        subtitle="Bringing your brand's vision to life with stunning visuals, from logos and banners to compelling video content and posters."
      />
      <div className="space-y-24">
        {/* Services Section */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Universe of Creative Possibilities</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Our creative team is equipped to handle all your design needs, ensuring a cohesive and powerful brand presence across all platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalDesignServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col text-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-6">{service.title}</h3>
                <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Creative Showcase Section */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Creative Showcase</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              A glimpse into the diverse range of high-quality designs we produce for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {designShowcase.map((item, index) => (
              <div key={index} className={`group relative rounded-2xl overflow-hidden shadow-lg ${index > 1 ? 'col-span-2' : ''}`}>
                <img src={item.image} alt={item.category} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{item.category}</h3>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Creative Process Section */}
        <Section className="bg-gray-50/70">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From Concept to Creation</h2>
            <p className="mt-4 text-lg text-gray-600">Our streamlined process ensures your vision is realized efficiently and effectively.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500">1</h3>
              <h4 className="text-xl font-bold text-gray-800 mt-2">Brief & Concept</h4>
              <p className="text-gray-600 mt-2">We start by understanding your goals and brainstorming initial creative concepts.</p>
            </div>
             <div className="p-6">
              <h3 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">2</h3>
              <h4 className="text-xl font-bold text-gray-800 mt-2">Design & Creation</h4>
              <p className="text-gray-600 mt-2">Our designers bring the concepts to life, crafting the visual assets with precision and care.</p>
            </div>
             <div className="p-6">
              <h3 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-500">3</h3>
              <h4 className="text-xl font-bold text-gray-800 mt-2">Review & Delivery</h4>
              <p className="text-gray-600 mt-2">We collaborate with you for feedback and revisions, ensuring the final delivery is perfect.</p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section>
         <div className="relative text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl py-16 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Have a Creative Project in Mind?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-pink-100">Let's discuss how our design expertise can make your brand stand out.</p>
                <Link to="/contact" className="mt-8 inline-block px-10 py-4 border border-transparent text-lg font-medium rounded-full text-purple-600 bg-white hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                    Get a Design Quote
                </Link>
            </div>
         </div>
       </Section>
      </div>
    </>
  );
};

export default DigitalDesignsPage;
