import React from 'react';
import { pyProductData } from '../constants';
import { AppStoreIcon, GooglePlayIcon, PlayIcon } from '../components/Icons';
import Button from '../components/Button';

const PyProductPage: React.FC = () => {
    const { hero, cardsInfo, features, cardsShowcase } = pyProductData;

    return (
        <div className="animate-fade-in-up bg-white">
            {/* Hero Section */}
            <section className="bg-brand-secondary/50 pt-24 pb-12 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-brand-text leading-tight">
                                {hero.title} <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">{hero.highlight}</span>
                            </h1>
                            <p className="mt-6 text-lg text-brand-text-secondary">{hero.description}</p>
                            <div className="mt-8 flex items-center space-x-4">
                                <Button onClick={() => {}}>Get Started</Button>
                            </div>
                            <div className="mt-8 flex items-center space-x-6">
                                <button className="flex items-center space-x-2 text-brand-text-secondary font-semibold hover:text-brand-text">
                                    <AppStoreIcon className="h-6 w-6"/>
                                    <span>App Store</span>
                                </button>
                                <button className="flex items-center space-x-2 text-brand-text-secondary font-semibold hover:text-brand-text">
                                    <GooglePlayIcon className="h-6 w-6"/>
                                    <span>Google Play</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative -mr-32 hidden lg:block">
                            <img src={hero.image} alt="SustyPY App Interface" className="w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards Info Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <img src={cardsInfo.image} alt="App statistics" className="max-w-sm w-full"/>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-brand-text">{cardsInfo.title}</h2>
                            <p className="mt-4 text-brand-text-secondary">{cardsInfo.description}</p>
                            <Button onClick={() => {}} className="mt-6 !bg-pink-500 hover:!bg-pink-600">Read More</Button>
                        </div>
                    </div>
                    <div className="mt-20 grid md:grid-cols-2 gap-12">
                        {cardsInfo.subsections.map(sub => (
                             <div key={sub.title}>
                                <h3 className="text-2xl font-bold text-brand-text">{sub.title}</h3>
                                <p className="mt-2 text-brand-text-secondary">{sub.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-brand-secondary/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-brand-text">{features.title}</h2>
                    <div className="mt-16 grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center relative">
                        {/* Left Category */}
                        <div className="text-right">
                            <h3 className="text-2xl font-bold">{features.categories[0].title}</h3>
                            <p className="mt-2 text-brand-text-secondary">{features.categories[0].description}</p>
                            <div className="mt-4 flex justify-end space-x-4">
                                {features.categories[0].items?.map(item => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.name} className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-sm">
                                            <Icon className="h-6 w-6"/>
                                            <span className="text-sm font-semibold">{item.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Center Image */}
                        <div className="flex justify-center my-8 lg:my-0">
                            <img src={features.mainImage} alt="Features on phone" className="max-h-[600px]"/>
                        </div>
                         {/* Right Category */}
                        <div>
                            <h3 className="text-2xl font-bold">{features.categories[1].title}</h3>
                            <p className="mt-2 text-brand-text-secondary">{features.categories[1].description}</p>
                            {features.categories[1].image && (
                                <img src={features.categories[1].image} alt={features.categories[1].title} className="mt-4 w-32 h-auto"/>
                            )}
                        </div>
                    </div>
                </div>
            </section>

             {/* Cards Showcase Section */}
            <section className="py-24">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl font-bold text-brand-text">{cardsShowcase.title}</h2>
                        <button className="flex items-center space-x-2 font-semibold text-brand-text">
                            <PlayIcon className="h-8 w-8 text-pink-500"/>
                            <span>Play feature</span>
                        </button>
                    </div>
                     <div className="grid md:grid-cols-3 gap-8">
                        {cardsShowcase.cards.map(card => (
                            <div key={card.name}>
                                <img src={card.image} alt={card.name} className="w-full rounded-2xl shadow-xl"/>
                                <h3 className="mt-6 font-bold text-xl">{card.name}</h3>
                                <p className="mt-1 text-brand-text-secondary">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PyProductPage;