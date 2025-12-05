import React from 'react';
import { webDevelopmentPageData } from '../constants';
import { 
    MoneybackIcon, 
    TechnicalSupportIcon,
    FigmaLogo, 
    GoogleLogo, 
    RedditLogo,
    SketchLogo,
    PhoneInTalkIcon,
    DevelopmentIcon,
    ExperienceIcon,
    StrategyIcon,
    ResearchIcon,
    BrandingIdentityIcon
} from '../components/Icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    MoneybackIcon,
    TechnicalSupportIcon,
    DevelopmentIcon,
    ExperienceIcon,
    StrategyIcon,
    ResearchIcon,
    BrandingIdentityIcon
};

const logoMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    FigmaLogo,
    GoogleLogo,
    RedditLogo,
    SketchLogo
};

// Fix: Changed to a named export to resolve the "no default export" error.
export const WebDevelopmentPage: React.FC = () => {
    const { hero, engagingMinds, chooseUs, clients, solutions } = webDevelopmentPageData;

    return (
        <div className="bg-white text-brand-text animate-fade-in-up overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-24 pb-12 overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')" }}></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="pt-8">
                             <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                                <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V4zM7 9a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2v-6a2 2 0 00-2-2H7z"/></svg>
                                <span>{hero.subtitle}</span>
                             </div>
                            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">{hero.title}</h1>
                            <p className="mt-6 text-indigo-200">{hero.description}</p>
                            <button className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                                {hero.buttonText} &rarr;
                            </button>
                        </div>
                        <div className="relative h-[500px] mt-8 lg:mt-0">
                             <img src={hero.imageUrl} alt="Digital Agency Illustration" className="absolute bottom-0 -right-16 lg:-right-8 w-full max-w-2xl"/>
                             <div className="absolute top-10 right-10 w-12 h-12 bg-white/20 rounded-full animate-pulse"></div>
                             <div className="absolute bottom-1/4 left-0 w-8 h-8 bg-white/20 rounded-lg animate-pulse delay-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engaging Creative Minds Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="text-sm font-bold text-blue-600">{engagingMinds.subtitle}</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{engagingMinds.title}</h2>
                    </div>
                    <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {engagingMinds.services.map(service => (
                            <div key={service.title} className={`p-8 rounded-2xl flex items-center gap-8 ${service.title === 'Business Collaboration' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                                <img src={service.imageUrl} alt={service.title} className="w-24 h-24"/>
                                <div>
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                    <p className={`mt-2 text-sm ${service.title === 'Business Collaboration' ? 'text-blue-200' : 'text-brand-text-secondary'}`}>{service.description}</p>
                                    <a href={service.link} className={`mt-4 inline-block font-semibold ${service.title === 'Business Collaboration' ? 'text-white hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}>Learn More &rarr;</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Choose Us Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img src={chooseUs.imageUrl} alt="Team member" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
                                <div className="flex -space-x-2">
                                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=a1" alt="member"/>
                                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=a2" alt="member"/>
                                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=a3" alt="member"/>
                                </div>
                                <span className="font-semibold text-sm">{chooseUs.membersCount}</span>
                            </div>
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm font-bold text-blue-600">{chooseUs.subtitle}</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{chooseUs.title}</h2>
                            <p className="mt-6 text-brand-text-secondary">{chooseUs.description}</p>
                            <div className="mt-8 grid grid-cols-2 gap-6">
                                {chooseUs.features.map(feature => {
                                    const Icon = iconMap[feature.icon];
                                    return (
                                        <div key={feature.title} className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                {Icon && <Icon className="w-5 h-5 text-blue-600"/>}
                                            </div>
                                            <span className="font-semibold">{feature.title}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-10 border-t border-gray-200 pt-6 flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                                    <PhoneInTalkIcon className="w-6 h-6 text-white"/>
                                </div>
                                <div>
                                    <p className="text-sm text-brand-text-secondary">{chooseUs.contact.title}</p>
                                    <p className="font-bold text-lg text-brand-text">{chooseUs.contact.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Clients Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h3 className="text-center text-brand-text-secondary font-semibold">{clients.happyClients}</h3>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-4xl mx-auto">
                    {clients.logos.map(logoKey => {
                        const Logo = logoMap[logoKey];
                        return Logo ? <Logo key={logoKey} className="h-8 opacity-70" /> : null;
                    })}
                </div>
            </section>
            
            {/* Solutions Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center max-w-2xl mx-auto">
                        <span className="text-sm font-bold text-blue-600">{solutions.subtitle}</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{solutions.title}</h2>
                        <p className="mt-4 text-brand-text-secondary">{solutions.description}</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.services.map(service => {
                            const Icon = iconMap[service.icon];
                            return (
                                <div key={service.title} className={`p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${service.featured ? 'bg-blue-600 text-white shadow-xl' : 'bg-white shadow-lg hover:shadow-2xl'}`}>
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${service.featured ? 'bg-white/20' : 'bg-blue-100'}`}>
                                        {Icon && <Icon className={`w-6 h-6 ${service.featured ? 'text-white' : 'text-blue-600'}`}/>}
                                    </div>
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                    <p className={`mt-2 text-sm ${service.featured ? 'text-blue-200' : 'text-brand-text-secondary'}`}>{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
