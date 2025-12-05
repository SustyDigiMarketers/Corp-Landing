import React from 'react';
import { hrmsProductData } from '../constants';
import { 
    LongArrowRightIcon, 
    PlusIcon,
    CreditCardIcon,
    CorporateIcon,
    RegulationIcon,
    UsersGroupIcon,
    SettingsIcon
} from '../components/Icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    CreditCardIcon,
    CorporateIcon,
    RegulationIcon,
    UsersGroupIcon,
    SettingsIcon
};

const HrmsProductPage: React.FC = () => {
    const { hero, expect, measure, statistics } = hrmsProductData;
    
    return (
        <div className="animate-fade-in-up overflow-x-hidden bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white pt-24 pb-48 sm:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')" }}></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold">{hero.title}</h1>
                    <div className="mt-8 flex justify-center items-center space-x-4">
                        <button className="flex items-center bg-white text-brand-accent font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                            <PlusIcon className="h-5 w-5 mr-2" />
                            {hero.button1Text}
                        </button>
                        <button className="text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                            {hero.button2Text}
                        </button>
                    </div>
                </div>
                <div className="absolute -bottom-48 sm:-bottom-32 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
                    <div className="relative">
                        <img src={hero.mainImage} alt="SustyHRMS Dashboard" className="w-full h-auto rounded-t-lg shadow-2xl" />
                        {hero.socialIcons.map(({ icon: Icon, position }, index) => (
                            <div key={index} className={`absolute p-2 bg-white rounded-lg shadow-xl ${position} hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer`}>
                                <Icon className="h-8 w-8 text-blue-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expect Section */}
            <section className="pt-56 sm:pt-48 pb-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{expect.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">{expect.description}</p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                        {expect.features.map((feature, index) => {
                            const Icon = iconMap[feature.icon];
                            return (
                                <div key={index} className="p-8 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                    {Icon && <Icon className="h-10 w-10 text-brand-accent mb-4" />}
                                    <h3 className="text-xl font-bold text-brand-text">{feature.title}</h3>
                                    <p className="mt-2 text-brand-text-secondary">{feature.description}</p>
                                    <a href="#" className="mt-6 font-semibold text-brand-accent hover:text-brand-accent-hover flex items-center group">
                                        Learn More <LongArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Measure Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{measure.title}</h2>
                            <p className="mt-6 text-brand-text-secondary">{measure.description}</p>
                            <div className="mt-8 space-y-6">
                                {measure.subFeatures.map(sub => {
                                    const Icon = iconMap[sub.icon];
                                    return(
                                    <div key={sub.title} className="flex items-start gap-4">
                                        {Icon && <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md border"><Icon className="h-6 w-6 text-brand-accent"/></div>}
                                        <div>
                                            <h3 className="text-lg font-semibold">{sub.title}</h3>
                                            <p className="text-brand-text-secondary text-sm mt-1">{sub.description}</p>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src={measure.imageUrl} alt="Social measurement app" className="max-h-[500px] object-contain rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Statistics Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <img src={statistics.imageUrl} alt="Statistics UI" className="max-h-[500px] object-contain rounded-2xl shadow-lg" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{statistics.title}</h2>
                            <p className="mt-6 text-brand-text-secondary">{statistics.description}</p>
                            <button className="mt-8 px-6 py-3 bg-brand-accent text-white font-semibold rounded-md shadow-lg hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105 flex items-center group">
                                {statistics.buttonText}
                                <LongArrowRightIcon className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HrmsProductPage;