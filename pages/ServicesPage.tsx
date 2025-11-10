import React, { useState } from 'react';
import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import { services, trustedCompanyLogos } from '../constants';
import { CheckmarkCircleIcon, FlagIcon, UserIcon, ToolsIcon, ChartUpIcon, ChevronDownIcon } from '../components/icons/TechIcons';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {

  const [activeTab, setActiveTab] = useState<number | null>(0);

  const detailedServices = [
    {
      ...services[0],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      subServices: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing (SMM)',
        'Pay-Per-Click (PPC) Advertising',
        'Email & WhatsApp Automation',
        'Content Strategy & Creation',
        'Conversion Rate Optimization (CRO)'
      ]
    },
    {
      ...services[1],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
      subServices: [
        'Custom Web Solutions',
        'Mobile App Development (iOS & Android)',
        'Scalable SaaS Product Development',
        'E-commerce Platform Building',
        'UI/UX Design & Prototyping',
        'Maintenance & Support'
      ]
    },
    {
      ...services[2],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
      subServices: [
        'Custom AI Chatbots & Voice Assistants',
        'Machine Learning Models',
        'Data Analysis & Visualization Tools',
        'AI-Powered Workflow Engines',
        'Natural Language Processing (NLP)',
        'Predictive Analytics'
      ]
    },
    {
      ...services[3],
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
      subServices: [
        'CRM & ERP Integration',
        'Custom API Development',
        'Cloud Infrastructure Management (AWS, Azure)',
        'Legacy System Modernization',
        'Data Warehousing & ETL',
        'Enterprise Security Solutions'
      ]
    },
  ];
  
  const approachSteps = [
      { icon: FlagIcon, title: 'Strategic Discovery', description: 'We start by understanding your unique challenges and goals to build a data-driven roadmap for success.'},
      { icon: UserIcon, title: 'User-Centric Design', description: 'Crafting intuitive and engaging digital experiences is at the heart of everything we build.'},
      { icon: ToolsIcon, title: 'Agile Development', description: 'Our iterative and transparent process ensures we deliver high-quality results, efficiently and on time.'},
      { icon: ChartUpIcon, title: 'Data-Driven Growth', description: 'We measure what matters, providing clear insights and optimizing for continuous growth and ROI.'},
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Crafting bespoke digital solutions that drive growth, innovation, and success for your business."
      >
        <Link 
          to="/domain" 
          className="px-5 py-3 text-sm sm:px-8 sm:text-base border border-transparent font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap"
        >
            Domain Name
        </Link>
        <Link 
          to="/hosting" 
          className="px-5 py-3 text-sm sm:px-8 sm:text-base border border-transparent font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 whitespace-nowrap"
        >
            Hosting
        </Link>
        <Link 
          to="/services/digital-marketing" 
          className="px-5 py-3 text-sm sm:px-8 sm:text-base border border-transparent font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 whitespace-nowrap"
        >
            Marketing
        </Link>
      </PageHeader>
      <div className="space-y-20">

        {/* Detailed Services Tabs Section */}
        <Section>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Complete Suite of Solutions</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We provide end-to-end services to meet your digital needs, from initial strategy to final implementation and beyond.</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
                {/* Desktop: Tabs */}
                <div className="hidden md:block">
                    {/* Tab Buttons */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {detailedServices.map((service, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`p-4 rounded-lg text-center font-semibold transition-all duration-300 ${activeTab === index ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 transition-all duration-500 min-h-[480px]">
                      {detailedServices.map((service, index) => (
                        <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
                          <div className="grid md:grid-cols-2 gap-8 items-center">
                              <div>
                                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                  <p className="text-gray-600 mb-6">{service.description}</p>
                                  <ul className="space-y-3">
                                      {service.subServices.map(sub => (
                                          <li key={sub} className="flex items-center gap-3">
                                              <CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                                              <span className="text-gray-700">{sub}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                              <div className="h-64 md:h-auto">
                                  <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-xl" loading="lazy" />
                              </div>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>

                {/* Mobile: Accordion */}
                <div className="md:hidden space-y-4">
                    {detailedServices.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                          <button 
                              onClick={() => setActiveTab(activeTab === index ? null : index)}
                              className="w-full flex justify-between items-center text-left p-4"
                              aria-expanded={activeTab === index}
                              aria-controls={`accordion-content-${index}`}
                          >
                              <span className="font-medium text-gray-800">{service.title}</span>
                              <ChevronDownIcon className={`w-6 h-6 text-indigo-500 transition-transform duration-300 ${activeTab === index ? 'rotate-180' : ''}`} />
                          </button>
                          <div 
                              id={`accordion-content-${index}`}
                              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeTab === index ? 'max-h-[1000px]' : 'max-h-0'}`}
                          >
                              <div className="p-4 border-t border-gray-200">
                                  <div className="grid gap-8 items-center">
                                      <div className="h-48">
                                          <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-xl" loading="lazy" />
                                      </div>
                                      <div>
                                          <p className="text-gray-600 mb-6">{service.description}</p>
                                          <ul className="space-y-3">
                                              {service.subServices.map(sub => (
                                                  <li key={sub} className="flex items-center gap-3">
                                                      <CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
                                                      <span className="text-gray-700">{sub}</span>
                                                  </li>
                                              ))}
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </Section>
        
        {/* Our Approach Section */}
        <Section>
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Approach to Excellence</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">A transparent and collaborative process designed to deliver outstanding results every time.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {approachSteps.map((step, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <step.icon className="w-8 h-8"/>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </Section>

        {/* Social Proof & Stats Section */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Proven Results, Global Reach</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our commitment to quality and innovation has allowed us to partner with amazing clients and deliver projects that make a real impact.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                      <p className="text-4xl font-extrabold text-indigo-600">100+</p>
                      <p className="mt-1 font-semibold text-gray-600">Happy Clients</p>
                  </div>
                   <div className="bg-white p-6 rounded-xl shadow-lg">
                      <p className="text-4xl font-extrabold text-pink-600">110+</p>
                      <p className="mt-1 font-semibold text-gray-600">Successful Projects</p>
                  </div>
                   <div className="bg-white p-6 rounded-xl shadow-lg">
                      <p className="text-4xl font-extrabold text-purple-600">6+</p>
                      <p className="mt-1 font-semibold text-gray-600">Years of Experience</p>
                  </div>
                   <div className="bg-white p-6 rounded-xl shadow-lg">
                      <p className="text-4xl font-extrabold text-green-600">15+</p>
                      <p className="mt-1 font-semibold text-gray-600">Countries Served</p>
                  </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-80 lg:h-96 bg-gray-100 rounded-2xl p-8 flex items-center justify-center">
                 <div className="grid grid-cols-3 gap-6 opacity-40">
                    {trustedCompanyLogos.concat(trustedCompanyLogos).slice(0, 9).map((company, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <company.component className="h-8 md:h-10 w-auto" />
                        </div>
                    ))}
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div>
                 <p className="absolute bottom-8 text-xl font-bold text-gray-700">Trusted by Industry Leaders</p>
            </div>
          </div>
        </Section>
        
        {/* Final CTA */}
        <Section>
         <div className="relative text-center bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl py-16 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Have a project in mind?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100">Let's discuss how our innovative solutions can elevate your business.</p>
                <Link to="/contact" className="mt-8 inline-block px-10 py-4 border border-transparent text-lg font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                    Get a Free Consultation
                </Link>
            </div>
         </div>
       </Section>

      </div>
    </>
  );
};

export default ServicesPage;