
import React from 'react';
import { aboutData } from '../constants';
import {
    HuluLogo,
    BbcStudiosLogo,
    UniversalLogo,
    AdobeLogo,
    BusinessPlanningIcon,
    FinancialPlanningIcon,
    MarketAnalysisIcon
} from '../components/Icons';

const logoMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    HuluLogo,
    BbcStudiosLogo,
    UniversalLogo,
    AdobeLogo,
};

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    BusinessPlanningIcon,
    FinancialPlanningIcon,
    MarketAnalysisIcon,
};

const AboutUsPage: React.FC = () => {
    const { hero, partners, whatYouCanDo, features, support, newsletter, globalPresence } = aboutData;

    return (
        <div className="animate-fade-in-up space-y-24 md:space-y-32 pb-24 bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-500 to-indigo-700 text-white pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">{hero.welcomeText}</span>
                    <h1 className="text-4xl md:text-6xl font-bold mt-4">{hero.title}</h1>
                    <p className="mt-4 max-w-xl mx-auto text-indigo-200">{hero.subtitle}</p>
                    <button className="mt-8 px-8 py-3 bg-yellow-400 text-brand-text font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition-colors">
                        {hero.ctaText}
                    </button>
                </div>
                <div className="relative mt-12 max-w-4xl mx-auto px-4">
                    <img src={hero.image} alt="TeamFlow Dashboard" className="rounded-t-xl shadow-2xl" />
                </div>
            </section>

            {/* Partners Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-16 relative z-20">
                <div className="bg-white p-8 rounded-xl shadow-xl border">
                    <h3 className="text-brand-text-secondary font-semibold">{partners.title}</h3>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                        {partners.logos.map(logoKey => {
                            const Logo = logoMap[logoKey];
                            return Logo ? <Logo key={logoKey} className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition" /> : null;
                        })}
                    </div>
                </div>
            </section>

            {/* What you can do Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">{whatYouCanDo.title}</h2>
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whatYouCanDo.items.map(item => {
                        const Icon = iconMap[item.icon];
                        return (
                            <div key={item.title} className="p-8">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {Icon && <Icon className="w-8 h-8 text-yellow-500" />}
                                </div>
                                <h3 className="font-bold text-xl">{item.title}</h3>
                                <p className="mt-2 text-brand-text-secondary">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Features Sections */}
            <div className="space-y-20">
                {features.map((feature, index) => (
                    <section key={feature.title} className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                            <div className={`flex justify-center ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                                <img src={feature.image} alt={feature.title} className="rounded-lg shadow-xl max-w-md w-full" />
                            </div>
                            <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                                <h2 className="text-3xl font-bold">{feature.title}</h2>
                                <p className="mt-4 text-brand-text-secondary">{feature.description}</p>
                                {feature.ctaText && (
                                    <a href="#" className="mt-6 inline-block font-semibold text-blue-600 hover:underline">{feature.ctaText} &rarr;</a>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            
            <div className="bg-gray-50 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                     {/* 24/7 Support */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                         <h3 className="text-2xl font-bold">{support.title}</h3>
                        <p className="mt-4 text-brand-text-secondary">{support.description}</p>
                        <a href="#" className="mt-6 inline-block font-semibold text-yellow-500 hover:underline">{support.ctaText} &rarr;</a>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <span className="text-sm font-semibold text-brand-accent">{newsletter.supportText}</span>
                         <h3 className="text-2xl font-bold mt-1">{newsletter.title}</h3>
                        <div className="mt-4 flex">
                            <input type="email" placeholder={newsletter.placeholder} className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                            <button className="px-4 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700">&rarr;</button>
                        </div>
                    </div>
                    
                    {/* Quick Contact / Location Highlight */}
                     <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
                         <h3 className="text-2xl font-bold text-brand-text">Visit Us</h3>
                         <p className="mt-2 text-brand-text-secondary">We have offices in key global locations.</p>
                         <button className="mt-6 px-6 py-2 bg-brand-accent text-white font-semibold rounded-full hover:bg-brand-accent-hover transition-colors">
                             Contact Local Team
                         </button>
                    </div>
                </div>
            </div>

            {/* Global Presence Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
                <h2 className="text-3xl md:text-4xl font-bold">{globalPresence.title}</h2>
                <p className="mt-4 text-brand-text-secondary max-w-2xl mx-auto">{globalPresence.description}</p>
                
                <div className="mt-16 relative max-w-6xl mx-auto select-none">
                    {/* Map Image Container */}
                    <div className="relative">
                        <img 
                            src={globalPresence.mapImage} 
                            alt="Global Presence Map" 
                            className="w-full h-auto opacity-20 grayscale contrast-125" 
                        />
                        
                        {/* Interactive Locations */}
                        {globalPresence.locations.map((loc) => (
                            <div 
                                key={loc.name} 
                                className="absolute group cursor-pointer" 
                                style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}
                            >
                                {/* Animated Beacon Marker */}
                                <div className="relative flex items-center justify-center w-8 h-8">
                                    {/* Outer expansion ring */}
                                    <span className="absolute w-full h-full rounded-full bg-brand-accent/20 animate-ping duration-[2000ms]"></span>
                                    {/* Inner pulsing ring */}
                                    <span className="absolute w-5 h-5 rounded-full bg-brand-accent/40 animate-pulse duration-[1500ms]"></span>
                                    {/* Core dot */}
                                    <span className="relative w-2.5 h-2.5 rounded-full bg-brand-accent border border-white shadow-[0_0_10px_rgba(79,70,229,0.6)] transition-transform duration-300 group-hover:scale-125"></span>
                                </div>
                                
                                {/* Styled Tooltip Card */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
                                    <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 text-left min-w-[140px]">
                                        <p className="text-[10px] font-bold text-brand-accent uppercase tracking-wider mb-0.5">Location</p>
                                        <p className="text-sm font-bold text-gray-800">{loc.name}</p>
                                    </div>
                                    {/* Tooltip Arrow */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white filter drop-shadow-sm"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUsPage;
