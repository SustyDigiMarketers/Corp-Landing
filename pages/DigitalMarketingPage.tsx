import React from 'react';
import { digitalMarketingData } from '../constants';
import Button from '../components/Button';
import { PhoneCallIcon, CheckCircleIcon } from '../components/Icons';

const DigitalMarketingPage: React.FC = () => {
    const { hero, partners, services, experience1, experience2, support } = digitalMarketingData;

    return (
        <div className="animate-fade-in-up bg-white">
            {/* Hero Section */}
            <section className="relative bg-brand-secondary overflow-hidden pt-24 pb-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="text-sm font-bold text-brand-accent">{hero.tag}</span>
                            <h1 className="text-4xl md:text-6xl font-bold mt-2 text-brand-text">{hero.title}</h1>
                            <p className="mt-6 text-brand-text-secondary">{hero.description}</p>
                            <div className="mt-8 flex items-center space-x-4">
                                <Button onClick={() => {}}>Discover More</Button>
                                <button className="flex items-center space-x-2 font-semibold">
                                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white">
                                        <PhoneCallIcon className="w-6 h-6" />
                                    </div>
                                    <span>For consultation</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative h-[500px] -mb-12">
                            <img src="https://i.imgur.com/3LX4iV5.png" alt="Business woman" className="absolute bottom-0 left-0 h-full w-auto object-contain z-10" />
                            <img src="https://i.imgur.com/6X2kXw5.png" alt="Business man" className="absolute bottom-0 right-0 h-4/5 w-auto object-contain" />
                            <div className="absolute top-10 left-5 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg text-sm">Response Rate</div>
                             <div className="absolute top-1/2 right-5 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg text-sm">15K+ Global Service Provider</div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Partners Section */}
            <section className="py-8">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 -mt-16 relative z-20">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                           {partners.map(p => <p.logo key={p.name} className="h-8 opacity-70" />)}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Consulting Services */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm font-bold text-brand-accent">{services.tag}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{services.title}</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
                        {services.items.map(item => (
                            <div key={item.title} className="bg-brand-secondary p-8 rounded-lg hover:shadow-xl transition-shadow">
                                <item.icon className="w-12 h-12 text-brand-accent mb-4"/>
                                <h3 className="text-xl font-bold text-brand-text">{item.title}</h3>
                                <p className="mt-2 text-brand-text-secondary">{item.description}</p>
                                <a href="#" className="mt-4 inline-block font-semibold text-brand-text hover:text-brand-accent">Learn More</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience 1 Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" alt="Business meeting" className="rounded-2xl" />
                             <div className="absolute -bottom-8 -right-8 bg-red-500 text-white p-4 rounded-lg shadow-lg w-48">
                                <p className="text-sm">2400</p>
                                <div className="h-2 bg-white/30 rounded-full mt-2"><div className="h-2 bg-white w-3/4 rounded-full"></div></div>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm font-bold text-brand-accent">{experience1.tag}</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{experience1.title}</h2>
                            <p className="mt-6 text-brand-text-secondary">{experience1.description}</p>
                            <ul className="mt-6 space-y-3">
                                {experience1.features.map(f => (
                                    <li key={f} className="flex items-center">
                                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3"/>
                                        <span className="text-brand-text-secondary">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience 2 Section */}
            <section className="py-24 bg-brand-secondary">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div>
                            <span className="text-sm font-bold text-brand-accent">{experience2.tag}</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{experience2.title}</h2>
                            <p className="mt-6 text-brand-text-secondary">{experience2.description}</p>
                        </div>
                        <div className="space-y-6">
                            {experience2.skills.map(skill => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-semibold">{skill.name}</span>
                                        <span className="text-sm font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-white rounded-full h-2.5">
                                        <div className="bg-brand-accent h-2.5 rounded-full" style={{width: `${skill.level}%`}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm font-bold text-brand-accent">{support.tag}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{support.title}</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12 text-left relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
                        {support.steps.map((step, index) => (
                            <div key={index} className="relative bg-white px-4">
                                <div className="text-8xl font-bold text-gray-100">0{index+1}</div>
                                <div className="-mt-12">
                                    <h3 className="text-xl font-bold text-brand-text">{step.title}</h3>
                                    <p className="mt-2 text-brand-text-secondary">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingPage;
