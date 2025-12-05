import React from 'react';
import { hmsProductData } from '../constants';
import { 
    SecuredCloudIcon, 
    SinglePlatformIcon, 
    ImplementYourselfIcon, 
    MultiRegionalIcon, 
    QuickNavigationIcon, 
    WorksInWebIcon,
    CheckCircleIcon,
    QuickSetupIcon,
    CompletePurchaseIcon,
    SignupNoCreditIcon,
    AtlassianLogo,
    SalesforceLogo,
    HubspotLogo,
    SlackLogo,
    WebflowLogo,
    IntercomLogo,
    DropboxLogo,
    GoogleLogo,
    FacebookIcon,
} from '../components/Icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    SecuredCloudIcon,
    SinglePlatformIcon,
    ImplementYourselfIcon,
    MultiRegionalIcon,
    QuickNavigationIcon,
    WorksInWebIcon,
    CheckCircleIcon,
    QuickSetupIcon,
    CompletePurchaseIcon,
    SignupNoCreditIcon,
};

const logoMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    AtlassianLogo,
    SalesforceLogo,
    HubspotLogo,
    SlackLogo,
    WebflowLogo,
    IntercomLogo,
    DropboxLogo,
    GoogleLogo,
    FacebookIcon,
};


const HmsProductPage: React.FC = () => {
    const { hero, features, trustBanner, detailedFeatures, analytics, partners, testimonials, cta } = hmsProductData;

    return (
        <div className="animate-fade-in-up bg-white">
            {/* Hero Section */}
            <section className="bg-gray-50 pt-24 pb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-brand-text">{hero.title}</h1>
                        <p className="mt-6 text-lg text-brand-text-secondary">{hero.subtitle}</p>
                        <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-colors">
                            {hero.buttonText}
                        </button>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <img src={hero.mainImage} alt="ERP Dashboard" className="rounded-t-lg shadow-2xl max-w-4xl w-full" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">{features.title}</h2>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {features.items.map(item => {
                            const Icon = iconMap[item.icon];
                            return (
                                <div key={item.title}>
                                    {Icon && <Icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />}
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-brand-text-secondary mt-1">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            {/* Trust Banner */}
            <section className="bg-blue-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <h2 className="text-3xl font-bold text-center md:text-left">{trustBanner.title}</h2>
                        <div className="flex justify-center">
                             <img src={trustBanner.image} alt="Trusted by businesses" className="max-h-24" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Features */}
            <section className="py-24 space-y-20">
                 {detailedFeatures.map((feature, index) => (
                    <div key={feature.title} className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                            <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                                <h2 className="text-3xl font-bold">{feature.title}</h2>
                                <ul className="mt-6 space-y-4">
                                    {feature.items.map(item => {
                                        const Icon = iconMap[item.icon];
                                        return (
                                            <li key={item.title} className="flex items-center">
                                                {Icon && <Icon className="w-6 h-6 text-green-500 mr-3"/>}
                                                <span className="font-semibold">{item.title}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <a href="#" className="mt-6 inline-block font-semibold text-blue-600 hover:underline">Learn more &rarr;</a>
                            </div>
                            <div className={`flex justify-center ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                                <img src={feature.image} alt={feature.title} className="rounded-lg shadow-xl"/>
                            </div>
                        </div>
                    </div>
                 ))}
            </section>

            {/* Analytics Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">{analytics.title}</h2>
                    <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {analytics.items.map(item => {
                            const Icon = iconMap[item.icon];
                            return (
                                <div key={item.title} className="bg-white p-8 rounded-lg shadow-md">
                                    {Icon && <Icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />}
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-24">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">{partners.title}</h2>
                    <div className="mt-12 grid grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 items-center">
                        {partners.logos.map(logoKey => {
                            const Logo = logoMap[logoKey];
                            return Logo ? <Logo key={logoKey} className="h-8 mx-auto opacity-70 grayscale hover:grayscale-0" /> : null;
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">{testimonials.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {testimonials.items.map(item => (
                            <div key={item.name} className="bg-white p-8 rounded-lg shadow-md">
                                <div className="flex items-center space-x-2 mb-4">
                                    {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                                </div>
                                <p className="text-brand-text-secondary italic">"{item.quote}"</p>
                                <div className="flex items-center mt-6">
                                    <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full mr-4"/>
                                    <div>
                                        <p className="font-bold">{item.name}</p>
                                        <p className="text-sm text-brand-text-secondary">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-20">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-600 text-white rounded-2xl p-12 grid md:grid-cols-2 gap-8 items-center overflow-hidden relative">
                         <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                        <div className="relative z-10">
                             <h2 className="text-3xl font-bold">{cta.title}</h2>
                            <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">{cta.buttonText}</button>
                        </div>
                        <div className="relative h-48 md:h-full">
                            <img src={cta.image} alt="CTA illustration" className="absolute -bottom-12 right-0 w-full max-w-xs" />
                        </div>
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default HmsProductPage;
