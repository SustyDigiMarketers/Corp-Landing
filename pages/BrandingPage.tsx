
import React from 'react';
import { Page } from '../types';
import { brandingPageData } from '../constants';
import Button from '../components/Button';
import { MattWillLogo, AnubisLogo, AlonzLogo, SouthwellLogo, OldvintagLogo, PlusOutlineIcon } from '../components/Icons';

interface BrandingPageProps {
    navigateTo: (page: Page) => void;
}

const logoMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    MattWillLogo,
    AnubisLogo,
    AlonzLogo,
    SouthwellLogo,
    OldvintagLogo,
};

const BrandingPage: React.FC<BrandingPageProps> = ({ navigateTo }) => {
    const { hero, levelUp, services, partners, cta } = brandingPageData;

    return (
        <div className="animate-fade-in-up bg-brand-secondary py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                {/* Hero Section */}
                <section className="relative bg-brand-primary p-8 md:p-12 rounded-3xl shadow-lg overflow-hidden">
                    <PlusOutlineIcon className="absolute top-8 left-8 w-6 h-6 text-blue-300" />
                    <PlusOutlineIcon className="absolute bottom-8 right-8 w-6 h-6 text-yellow-300" />
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text leading-tight">
                                {hero.title}
                            </h1>
                            <p className="mt-6 text-lg text-brand-text-secondary">
                                {hero.description}
                            </p>
                            <div className="mt-8">
                                 <button className="px-8 py-3 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg">
                                    {hero.buttonText}
                                </button>
                            </div>
                        </div>
                        <div className="relative h-96 lg:h-auto">
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Abstract Shapes */}
                                <div className="absolute w-48 h-10 bg-blue-400 rounded-full transform -rotate-45 -translate-x-16"></div>
                                <div className="absolute w-56 h-10 bg-purple-400 rounded-full transform -rotate-45 translate-x-12 top-20"></div>
                                <div className="absolute w-40 h-10 bg-pink-400 rounded-full transform -rotate-45 translate-x-8 bottom-16"></div>
                                <div className="absolute w-52 h-10 bg-yellow-400 rounded-full transform -rotate-45 translate-x-24"></div>
                                <div className="absolute w-12 h-12 bg-pink-400 rounded-full top-16 left-10"></div>
                                <div className="absolute w-8 h-8 bg-yellow-400 rounded-full bottom-12 right-12"></div>
                                <div className="absolute w-10 h-10 bg-purple-400 rounded-full top-1/2 left-4"></div>
                            </div>
                            <img src={hero.imageUrl} alt="Marketing professional" className="relative z-10 w-full h-full object-contain object-bottom" />
                        </div>
                    </div>
                </section>

                {/* Level Up Section */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img src={levelUp.imageUrl} alt="Digital Media illustration" className="max-w-md w-full" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{levelUp.title}</h2>
                        <p className="mt-4 text-brand-text-secondary">{levelUp.description}</p>
                        <div className="mt-6">
                            <button className="px-8 py-3 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg">
                                {levelUp.buttonText}
                            </button>
                        </div>
                    </div>
                </section>
                
                {/* Services Split Section */}
                <div className="bg-brand-primary p-8 md:p-12 rounded-3xl shadow-lg">
                    <div className="space-y-12">
                        {services.map((service, index) => (
                            <section key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                                    <h2 className="text-2xl font-bold text-brand-text">{service.title}</h2>
                                    <p className="mt-4 text-brand-text-secondary">{service.description}</p>
                                    <a href="#" className="mt-4 inline-block font-semibold text-brand-accent hover:underline">{service.linkText} &rarr;</a>
                                </div>
                                <div className={`flex justify-center ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
                                    <img src={service.imageUrl} alt={service.title} className="max-w-sm w-full rounded-xl shadow-md"/>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

                {/* Partners Section */}
                <section className="text-center">
                    <h3 className="text-lg font-semibold text-brand-text-secondary">{partners.title}</h3>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4 max-w-4xl mx-auto">
                        {partners.logos.map(logo => {
                            const LogoComponent = logoMap[logo.component];
                            return LogoComponent ? <LogoComponent key={logo.name} className="h-8 mx-auto opacity-70" /> : null;
                        })}
                    </div>
                </section>
                
                {/* CTA Section */}
                <section className="bg-brand-primary p-8 md:p-12 rounded-3xl shadow-lg text-center">
                    <h2 className="text-2xl font-bold text-brand-text">{cta.title}</h2>
                    <p className="mt-2 text-brand-text-secondary">{cta.subtitle}</p>
                    <div className="mt-6 max-w-md mx-auto flex">
                        <input 
                            type="email" 
                            placeholder={cta.placeholder} 
                            className="w-full p-3 bg-brand-secondary border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                        />
                        <button className="px-6 py-3 font-semibold rounded-r-md transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg">
                            Sign Up
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BrandingPage;
