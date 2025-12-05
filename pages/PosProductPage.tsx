
import React, { useState } from 'react';
import { posProductData } from '../constants';
import Card from '../components/Card';
import { LongArrowRightIcon } from '../components/Icons';

const PosProductPage: React.FC = () => {
    const { topFeatures, services, crypto, additions, wallet, income } = posProductData;
    const [selectedService, setSelectedService] = useState(1);

    return (
        <div className="animate-fade-in-up bg-brand-secondary">
            {/* Light Section */}
            <div className="py-24 space-y-24">
                {/* Top Features */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {topFeatures.map((feature, index) => (
                            <Card key={index} className="text-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <feature.icon className="h-8 w-8 text-brand-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-text">{feature.title}</h3>
                                <p className="mt-2 text-brand-text-secondary">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Services */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            {services.list.map((service, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedService(index)}
                                    className={`p-6 rounded-lg cursor-pointer border-2 transition-all duration-300 ${selectedService === index ? 'bg-white border-brand-accent shadow-xl' : 'bg-brand-secondary border-transparent hover:bg-white'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${selectedService === index ? 'bg-brand-accent text-white' : 'bg-white text-brand-accent'}`}>
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-text">{service.title}</h4>
                                            <p className="text-sm text-brand-text-secondary">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span className="font-semibold text-brand-accent">Multifunctional Platform</span>
                            <h2 className="text-3xl font-bold mt-2">{services.title}</h2>
                            <p className="mt-4 text-brand-text-secondary">{services.description}</p>
                            <button className="mt-6 flex items-center justify-center bg-brand-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-accent-hover transition-colors">
                                Learn more <LongArrowRightIcon className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Cryptocurrency */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold">{crypto.title}</h2>
                            <p className="mt-4 text-brand-text-secondary">{crypto.description}</p>
                            <button className="mt-6 flex items-center justify-center bg-brand-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-brand-accent-hover transition-colors">
                                Learn more <LongArrowRightIcon className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                        <div className="relative h-64">
                            {crypto.currencies.map((c, i) => (
                                <div key={c.name} className={`absolute p-4 rounded-lg shadow-lg text-white ${c.color} ${i === 0 ? 'top-0 left-10' : i === 1 ? 'top-1/2 -translate-y-1/2 right-0' : 'bottom-0 left-20'}`}>
                                    <div className="flex items-center gap-2">
                                        <c.icon className="w-6 h-6" />
                                        <span className="font-semibold">{c.name}</span>
                                    </div>
                                    <p className="text-lg font-bold mt-2">{c.amount}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Additions */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">{additions.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">{additions.description}</p>
                    <div className="grid md:grid-cols-4 gap-8 mt-12">
                        {additions.list.map((item, index) => (
                            <Card key={index} className="bg-white text-center">
                                <div className="w-16 h-16 bg-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="h-8 w-8 text-brand-accent" />
                                </div>
                                <h3 className="font-semibold text-brand-text">{item.title}</h3>
                                <p className="text-xs text-brand-text-secondary mt-2">{item.description}</p>
                                <button className="mt-4 text-sm font-semibold text-brand-accent hover:underline">Read more</button>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            {/* Dark Section */}
            <div className="bg-indigo-900 text-white py-24 space-y-24 overflow-hidden">
                {/* Wallet */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800" alt="Wallet App" className="max-h-[500px] object-contain rounded-2xl shadow-lg"/>
                        </div>
                        <div>
                            <span className="font-semibold text-indigo-300">{wallet.tag}</span>
                            <h2 className="text-4xl font-bold mt-2">{wallet.title}</h2>
                            <p className="mt-4 text-indigo-200">{wallet.description}</p>
                            <button className="mt-6 flex items-center justify-center bg-white text-indigo-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
                                Learn more <LongArrowRightIcon className="w-5 h-5 ml-2" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Income */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <span className="font-semibold text-indigo-300">{income.tag}</span>
                    <h2 className="text-4xl font-bold mt-2">{income.title}</h2>
                    <div className="relative h-96 mt-12">
                         <svg className="absolute inset-0 w-full h-full text-indigo-700/50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 160 Q 150 80, 300 160 T 600 160 T 900 160 T 1200 160 T 1500 160 V 320 H 0 Z" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <div className="absolute top-1/4 left-1/4 p-2 bg-white/20 backdrop-blur-sm rounded-md text-xs">Bitcoin 3.5%</div>
                        <div className="absolute top-1/2 left-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-md text-xs">+0.24%</div>
                        <div className="absolute top-1/3 right-1/4 p-2 bg-white/20 backdrop-blur-sm rounded-md text-xs">Ethereum 9.2%</div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PosProductPage;
