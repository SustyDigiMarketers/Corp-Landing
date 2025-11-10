import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { uiUxServices, uiUxProcess } from '../constants';
// FIX: Import CheckBadgeIcon to resolve reference errors.
import { ArrowRightIcon, CheckBadgeIcon } from '../components/icons/TechIcons';

const UiUxPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="UI/UX Design Services"
        subtitle="Crafting intuitive, engaging, and aesthetically pleasing user experiences that drive results for applications, websites, and software."
      />
      <div className="space-y-24">
        {/* Services Section */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Spectrum of UI/UX Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              From initial concept to final polish, we provide end-to-end design services to create products that are both beautiful and highly functional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {uiUxServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-6 transition-all duration-300 hover:shadow-xl hover:border-indigo-200">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Design Process Section */}
        <Section className="bg-gray-50/70">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Proven Design Process</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              A collaborative and iterative journey to transform complex problems into elegant solutions.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200"></div>
            {uiUxProcess.map((item, index) => (
              <div key={index} className={`flex items-center w-full mb-8 md:mb-0 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="md:w-1/2">
                  <div className={`relative p-6 bg-white rounded-2xl shadow-lg border border-gray-200 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-indigo-500 rounded-full hidden md:block" style={index % 2 === 0 ? { right: '-1.5rem' } : { left: '-1.5rem' }}></div>
                    <p className="text-sm font-bold text-indigo-500">{item.step}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Design that Drives Results Section */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Design that Drives Business Growth</h2>
              <p className="mt-4 text-lg text-gray-600">
                A great user experience is more than just aesthetics. It's a critical driver of user engagement, conversion rates, and long-term brand loyalty. We design interfaces that not only look good but also perform exceptionally.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-center gap-3"><CheckBadgeIcon className="w-6 h-6 text-green-500" /> Increased User Engagement & Retention</li>
                <li className="flex items-center gap-3"><CheckBadgeIcon className="w-6 h-6 text-green-500" /> Higher Conversion Rates</li>
                <li className="flex items-center gap-3"><CheckBadgeIcon className="w-6 h-6 text-green-500" /> Enhanced Brand Perception & Loyalty</li>
                <li className="flex items-center gap-3"><CheckBadgeIcon className="w-6 h-6 text-green-500" /> Reduced Development Rework</li>
              </ul>
            </div>
            <div className="relative p-2 bg-gradient-to-br from-indigo-200 to-pink-200 rounded-2xl shadow-2xl">
              <img src="https://images.unsplash.com/photo-1631216223450-4223405f66a2?q=80&w=1200&auto=format&fit=crop" alt="UI/UX design before and after comparison" className="rounded-xl w-full h-full object-cover" />
            </div>
          </div>
        </Section>
        
        {/* CTA */}
        <Section>
         <div className="relative text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl py-16 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
            <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Ready to Elevate Your User Experience?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100">Let's collaborate to create a digital product that your users will love.</p>
                <Link to="/contact" className="mt-8 inline-block px-10 py-4 border border-transparent text-lg font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                    Start a Project
                </Link>
            </div>
         </div>
       </Section>
      </div>
    </>
  );
};

export default UiUxPage;