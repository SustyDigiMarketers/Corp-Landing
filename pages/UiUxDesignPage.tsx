
import React from 'react';
import { Page } from '../types';
import { uiUxDesignPageData } from '../constants';
import Button from '../components/Button';
import { 
    ClientCentricIcon, 
    DesktopIcon, 
    GlobeIcon, 
    CheckCircleIcon,
    BrushIcon,
    // Fix: Added missing icons used by the data and removed unused ones.
    DesignIcon,
    LaunchIcon,
    ClockIcon,
    RocketIcon,
    HeadsetIcon,
    ShieldCheckIcon,
    StarIcon,
    AwardIcon
} from '../components/Icons';

interface UiUxDesignPageProps {
    navigateTo: (page: Page) => void;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    ClientCentricIcon,
    DesktopIcon,
    GlobeIcon,
    CheckCircleIcon,
    BrushIcon,
    // Fix: Added missing icons to the map.
    DesignIcon,
    LaunchIcon,
    ClockIcon,
    RocketIcon,
    HeadsetIcon,
    ShieldCheckIcon,
    StarIcon,
    AwardIcon
};


const UiUxDesignPage: React.FC<UiUxDesignPageProps> = ({ navigateTo }) => {
    // Fix: Destructure correct properties from the data object. 'process', 'coreServices', and 'showcase' do not exist.
    // Mapped component sections to use 'about', 'features', and 'screenshots' data instead.
    const { hero, principles, about, features, screenshots } = uiUxDesignPageData;

    return (
        <div className="animate-fade-in-up">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-brand-text">
                                {hero.title}
                            </h1>
                            <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-brand-text-secondary">
                                {hero.description}
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button onClick={() => navigateTo(Page.Portfolio)} variant="secondary" className="!px-6">View Our Work</Button>
                                <Button onClick={() => navigateTo(Page.Contact)} className="!px-6">Start a Project</Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {/* Fix: Use 'screenshotUrl' which exists in the hero data object. */}
                            <img src={hero.screenshotUrl} alt="UI/UX Design Showcase" className="rounded-2xl shadow-2xl max-w-md w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{principles.title}</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {principles.items.map(item => {
                            const Icon = iconMap[item.icon];
                            return (
                                <div key={item.title} className="text-center p-6">
                                    {Icon && <Icon className="h-10 w-10 text-brand-accent mx-auto mb-4" />}
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-brand-text-secondary mt-2 text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section - Mapped from `about` data */}
            <section className="py-24 bg-brand-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            {/* Fix: Use properties from the 'about.section' object */}
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{about.section.title}</h2>
                            <p className="mt-4 text-brand-text-secondary">{about.section.description}</p>
                            <ul className="mt-8 space-y-4">
                                {about.section.features.map(step => (
                                    <li key={step} className="flex items-center">
                                        <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="font-medium text-brand-text">{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src={about.section.imageUrl} alt="Design Process" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Section - Mapped from `features` data */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Fix: Use properties from the 'features' object */}
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{features.title}</h2>
                        <p className="mt-4 text-brand-text-secondary">{features.description}</p>
                    </div>
                    <div className="mt-16 grid lg:grid-cols-[1fr_auto_1fr] gap-x-12 gap-y-8 items-center">
                        {/* Left Column */}
                        <div className="space-y-10">
                            {/* Fix: Use 'features.items' instead of 'coreServices.services' */}
                            {features.items.filter(s => s.side === 'left').map(service => {
                                const Icon = iconMap[service.icon];
                                return (
                                    <div key={service.title} className="flex items-start gap-4 text-right flex-row-reverse">
                                        {Icon && <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"><Icon className="h-6 w-6 text-brand-accent" /></div>}
                                        <div>
                                            <h3 className="text-lg font-semibold">{service.title}</h3>
                                            <p className="text-brand-text-secondary text-sm mt-1">{service.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Center Image */}
                        <div className="hidden lg:block">
                            {/* Fix: Use 'features.screenshotUrl' instead of 'coreServices.centerImage' */}
                            <img src={features.screenshotUrl} alt="Core Services" className="rounded-full shadow-2xl w-80 h-80 object-cover"/>
                        </div>
                        {/* Right Column */}
                        <div className="space-y-10">
                            {/* Fix: Use 'features.items' instead of 'coreServices.services' */}
                            {features.items.filter(s => s.side === 'right').map(service => {
                                const Icon = iconMap[service.icon];
                                return (
                                    <div key={service.title} className="flex items-start gap-4">
                                        {Icon && <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"><Icon className="h-6 w-6 text-brand-accent" /></div>}
                                        <div>
                                            <h3 className="text-lg font-semibold">{service.title}</h3>
                                            <p className="text-brand-text-secondary text-sm mt-1">{service.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Showcase Section - Mapped from `screenshots` data */}
            <section className="py-24 bg-brand-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Fix: Use properties from the 'screenshots' object */}
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">{screenshots.title}</h2>
                        <p className="mt-4 text-brand-text-secondary">{screenshots.description}</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Fix: Use 'screenshots.images' instead of 'showcase.images' */}
                        {screenshots.images.map((image, index) => (
                            <div key={index} className="group aspect-w-4 aspect-h-3">
                                <img src={image} alt={`Showcase ${index + 1}`} className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UiUxDesignPage;
