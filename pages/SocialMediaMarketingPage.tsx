import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { smmStats, smmFeatures, smmBenefits } from '../constants';
import { CheckmarkCircleIcon } from '../components/icons/TechIcons';

const SocialMediaMarketingPage: React.FC = () => {
  return (
    <>
      {/* Custom Hero Section */}
      <section className="relative w-screen ml-[calc(50%-50vw)] pt-24 pb-12 bg-transparent overflow-hidden">
        {/* Animated background from other pages */}
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <div className="absolute bg-purple-200 rounded-full w-96 h-96 -top-20 -left-20 filter blur-3xl opacity-30 animate-bubble1"></div>
          <div className="absolute bg-pink-200 rounded-full w-80 h-80 -bottom-20 -right-10 filter blur-3xl opacity-30 animate-bubble2"></div>
        </div>
        
        <div className="relative z-10 w-full md:w-4/5 mx-auto px-4 md:px-0 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Amplify Your Brand's Voice Across Social Media</h1>
            <p className="mt-4 text-gray-600">
              We create and execute dynamic social media strategies—from crafting engaging posts and managing digital assets to fostering influencer collaborations—that build communities and drive results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/contact" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors shadow-lg transform hover:scale-105">
                Get a Free Consultation
              </Link>
            </div>
            <div className="mt-12 flex justify-center lg:justify-start gap-8">
              {smmStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <stat.icon className="w-6 h-6 text-indigo-500" />
                  <div>
                    <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center h-96 lg:h-[500px]">
            <img src="https://images.unsplash.com/photo-1611162616801-6990c87443ea?q=80&w=800&auto=format&fit=crop" alt="App screenshot on a phone" className="absolute bottom-0 h-full max-h-[480px] object-contain z-10 animate-float" />
            
            {/* Floating UI Elements */}
            <div className="absolute top-10 left-0 w-40 p-3 bg-white rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <p className="text-xs font-bold">Paid Ads</p>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-xs text-gray-500">Active Campaigns</p>
            </div>
             <div className="absolute top-1/4 right-0 w-32 p-3 bg-white rounded-lg shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-xs font-bold text-purple-600">Engagement</p>
                <p className="text-2xl font-bold">50%+</p>
                <p className="text-xs text-gray-500">Increase QoQ</p>
            </div>
             <div className="absolute bottom-10 left-5 w-48 p-3 bg-white rounded-lg shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <p className="text-xs font-bold">200K+</p>
                <div className="flex items-end h-8 gap-1 mt-1">
                    <div className="w-1/3 h-4 bg-indigo-400 rounded-sm"></div>
                    <div className="w-1/3 h-8 bg-purple-400 rounded-sm"></div>
                    <div className="w-1/3 h-6 bg-pink-400 rounded-sm"></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section className="bg-gray-50/70">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Comprehensive Social Media Services</h2>
                <p className="mt-4 text-gray-600">
                    We offer a full suite of services to manage and grow your social media presence, turning followers into loyal customers.
                </p>
                <Link to="#" className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition-colors transform hover:scale-105">
                    Explore Our Work
                </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {smmFeatures.map((feature) => (
                    <div key={feature.title} className="p-6 bg-white rounded-xl text-gray-800 shadow-lg h-full transition-transform hover:-translate-y-1">
                        <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 rounded-lg mb-3">
                            <feature.icon className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h4 className="font-bold text-sm sm:text-base">{feature.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </Section>
      
      {/* Benefits Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center items-center">
                <img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&auto=format&fit=crop" alt="Person working on social media benefits" className="max-w-sm rounded-lg" />
                <div className="absolute top-0 left-0 w-40 p-3 bg-white rounded-lg shadow-2xl animate-float">
                    <p className="text-xs font-semibold text-pink-500">Influencer Outreach</p>
                    <p className="text-3xl font-bold text-gray-800">60</p>
                    <p className="text-xs text-gray-500">New collaborations</p>
                </div>
                <div className="absolute bottom-0 right-0 w-52 p-4 bg-gray-800 text-white rounded-lg shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
                    <p className="text-4xl font-bold">92,5%</p>
                    <p className="text-sm">Positive Sentiment</p>
                </div>
                 <div className="absolute bottom-1/4 -left-8 w-40 p-3 bg-white rounded-lg shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                    <p className="text-xs font-semibold text-indigo-500">Real Time</p>
                    <p className="text-sm text-gray-600">Analytics Monitoring</p>
                </div>
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unlock Growth with Strategic Social Media Management</h2>
                <p className="mt-4 text-gray-600">
                    Partnering with us means gaining a dedicated team focused on elevating your brand's digital footprint and delivering measurable success.
                </p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                    {smmBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </Section>
    </>
  );
};

export default SocialMediaMarketingPage;