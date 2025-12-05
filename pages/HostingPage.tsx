
import React from 'react';
import { hostingPageData } from '../constants';
import { CheckCircleIcon, CloudLockIcon, MoneyBack30Icon, IndieproLogo, On3xtgnLogo, TakeAwayLogo, JcLogo, UptimeIcon, SecureServerIcon, DedicatedSupportIcon, GlobeIcon, LaunchIcon } from '../components/Icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    UptimeIcon,
    SecureServerIcon,
    DedicatedSupportIcon,
    MoneyBack30Icon,
    CloudLockIcon,
    CheckCircleIcon,
    GlobeIcon,
    LaunchIcon
};

const logoMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    IndieproLogo,
    On3xtgnLogo,
    TakeAwayLogo,
    JcLogo
};

const HostingPage: React.FC = () => {
    const { hero, domainSearch, whyChooseUs, topBanner, partners, powerfulServer } = hostingPageData;

    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white pt-24 pb-20 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-800 rounded-full opacity-30 blur-2xl"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-800 rounded-full opacity-30 blur-2xl"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-sm font-bold text-blue-300">{hero.tagline}</span>
                            <h1 className="text-5xl md:text-7xl font-extrabold mt-2 tracking-tight">
                                {hero.title}
                            </h1>
                            <p className="mt-6 text-lg text-indigo-200">{hero.description}</p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-3 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg">
                                    Get Started
                                </button>
                                <button className="px-8 py-3 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 bg-white/10 text-white hover:bg-white/20">
                                    Know More
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                           <img src={hero.imageUrl} alt="Premium Hosting" className="w-full max-w-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Domain Search Section */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-4">
                        <input type="text" placeholder="Enter Address" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <button className="w-full md:w-auto px-8 py-3 font-semibold rounded-md transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700">
                            Search
                        </button>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                        {domainSearch.tlds.map(tld => (
                             <div key={tld.name} className="flex items-center space-x-2">
                                <span className="font-bold text-gray-800">{tld.name}</span>
                                <span className="text-gray-500 text-sm">{tld.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm font-bold text-blue-600">{whyChooseUs.tagline}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{whyChooseUs.title}</h2>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.features.map(feature => {
                            const Icon = iconMap[feature.icon];
                            return(
                                <div key={feature.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    {Icon && <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4"/>}
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="mt-2 text-brand-text-secondary">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-24 space-y-24">
                {/* Top Banner Section */}
                <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-2xl">
                    <h2 className="text-2xl font-bold text-center mb-8">{topBanner.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {topBanner.features.map(feature => {
                            const Icon = iconMap[feature.icon];
                            return (
                                <div key={feature.title} className="flex items-center gap-6 bg-white/10 p-6 rounded-lg">
                                    {Icon && <Icon className="w-16 h-16 text-white flex-shrink-0" />}
                                    <div>
                                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                                        <p className="text-sm text-indigo-200 mt-1">{feature.description}</p>
                                        <button className="mt-3 text-sm font-semibold bg-white text-blue-700 px-3 py-1 rounded-md hover:bg-gray-200">Know More</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                
                {/* Partners Section */}
                <section>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                        {partners.map(p => {
                            const Logo = logoMap[p.logo];
                            return Logo ? <Logo key={p.name} className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" /> : null
                        })}
                    </div>
                </section>
                
                {/* Powerful Server Section */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex justify-center">
                        <img src={powerfulServer.imageUrl} alt="Powerful Server" className="w-full max-w-lg"/>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{powerfulServer.title}</h2>
                        <div className="mt-8 space-y-6">
                            {powerfulServer.features.map(feature => {
                                const Icon = iconMap[feature.icon];
                                return (
                                    <div key={feature.title} className="flex items-start gap-4">
                                        {Icon && 
                                            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-blue-600"/>
                                            </div>
                                        }
                                        <div>
                                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                                            <p className="text-brand-text-secondary mt-1">{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HostingPage;