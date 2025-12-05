import React from 'react';
import { crmProductData } from '../constants';
import { MessageSquareIcon } from '../components/Icons';
import Card from '../components/Card';
import Button from '../components/Button';

const CrmProductPage: React.FC = () => {
    const { hero, businessImpact, trust, connect, assistance } = crmProductData;

    const avatars = [
        "https://i.pravatar.cc/150?u=a",
        "https://i.pravatar.cc/150?u=b",
        "https://i.pravatar.cc/150?u=c",
        "https://i.pravatar.cc/150?u=d",
        "https://i.pravatar.cc/150?u=e",
        "https://i.pravatar.cc/150?u=f",
        "https://i.pravatar.cc/150?u=g",
    ];

    return (
        <div className="animate-fade-in-up overflow-x-hidden">
            {/* Hero Section */}
            <section className="bg-brand-secondary py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {hero.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                                        <feature.icon className="h-6 w-6 text-brand-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-brand-text">{feature.title}</h3>
                                        <p className="text-brand-text-secondary">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-96 flex items-center justify-center">
                            <div className="absolute w-64 h-64 bg-blue-200 rounded-full opacity-50 blur-2xl"></div>
                            <div className="relative w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                                <MessageSquareIcon className="h-20 w-20 text-white" />
                            </div>
                            {hero.socialIcons.map((Icon, index) => {
                                const positions = [
                                    'top-0 left-10', 'top-10 right-0', 'bottom-0 right-10', 'bottom-10 left-0', 'top-20 -left-10'
                                ];
                                return (
                                    <div key={index} className={`absolute ${positions[index % positions.length]} p-3 bg-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer`}>
                                        <Icon className="h-6 w-6 text-gray-700" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Impact Section */}
            <section className="bg-gray-900 text-white py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold">{businessImpact.title}</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-gray-400">{businessImpact.description}</p>
                    <div className="mt-16 relative h-[500px] max-w-4xl mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
                             <div className="absolute w-64 h-64 border-2 border-blue-400/30 rounded-full"></div>
                             <div className="absolute w-80 h-80 border-2 border-blue-400/20 rounded-full"></div>
                             <div className="absolute w-96 h-96 border-2 border-blue-400/10 rounded-full"></div>
                             <div className="absolute w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"><MessageSquareIcon className="h-16 w-16 text-white"/></div>
                        </div>
                        <div className="absolute top-0 left-0 w-1/3 text-left p-4 border-2 border-blue-400/50 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                            <h3 className="font-bold">{businessImpact.points[0].title}</h3><p className="text-sm text-gray-300">{businessImpact.points[0].description}</p>
                        </div>
                         <div className="absolute top-1/4 right-0 w-1/3 text-left p-4 border-2 border-blue-400/50 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                            <h3 className="font-bold">{businessImpact.points[2].title}</h3><p className="text-sm text-gray-300">{businessImpact.points[2].description}</p>
                        </div>
                        <div className="absolute bottom-1/4 left-0 w-1/3 text-left p-4 border-2 border-blue-400/50 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                            <h3 className="font-bold">{businessImpact.points[1].title}</h3><p className="text-sm text-gray-300">{businessImpact.points[1].description}</p>
                        </div>
                        <div className="absolute bottom-0 right-0 w-1/3 text-left p-4 border-2 border-blue-400/50 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                           <h3 className="font-bold">{businessImpact.points[3].title}</h3><p className="text-sm text-gray-300">{businessImpact.points[3].description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold">{trust.title} <span className="text-blue-600">{trust.highlighted}</span></h2>
                    <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">{trust.description}</p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {trust.stats.map((stat, index) => (
                            <Card key={index} className="text-center">
                                <div className="w-16 h-16 bg-brand-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-brand-accent"/>
                                </div>
                                <p className="text-4xl font-bold text-brand-text">{stat.value}</p>
                                <p className="text-brand-text-secondary mt-2">{stat.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             {/* Connect Section */}
            <section className="bg-brand-secondary py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                        <div>
                             <h2 className="text-4xl font-bold">{connect.title}</h2>
                        </div>
                        <div>
                            <p className="text-brand-text-secondary">{connect.description}</p>
                             <div className="mt-4 space-x-4">
                                <Button onClick={() => {}} variant="secondary" className="border-brand-accent text-brand-accent">Learn More</Button>
                                <Button onClick={() => {}}>Get started free</Button>
                             </div>
                        </div>
                    </div>
                    <div className="relative h-80 flex items-center justify-center">
                         <div className="absolute w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-10">
                            <MessageSquareIcon className="h-12 w-12 text-white" />
                        </div>
                        {avatars.map((avatar, index) => {
                             const angle = (index / avatars.length) * 2 * Math.PI;
                             const x = 50 + 40 * Math.cos(angle);
                             const y = 50 + 40 * Math.sin(angle);
                             return (
                                <>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '80%', height: '80%'}}>
                                        <svg viewBox="0 0 100 100" className="w-full h-full">
                                            <line x1="50" y1="50" x2={50 + 40 * Math.cos(angle)} y2={50 + 40 * Math.sin(angle)} stroke="#dbeafe" strokeWidth="0.5" />
                                        </svg>
                                    </div>
                                    <img key={avatar} src={avatar} alt={`avatar ${index}`} className="absolute w-12 h-12 rounded-full border-2 border-white shadow-md"
                                    style={{ top: `${y}%`, left: `${x}%`, transform: 'translate(-50%, -50%)' }} />
                                </>
                             )
                        })}
                    </div>
                </div>
            </section>

            {/* Assistance Section */}
            <section className="py-24 relative overflow-hidden">
                 <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/World-map-2004-cia-factbook-large-1.7m-whitespace-removed.jpg/1280px-World-map-2004-cia-factbook-large-1.7m-whitespace-removed.jpg')"}}></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                    <h2 className="text-4xl font-bold">{assistance.title} <span className="text-blue-600">{assistance.highlighted}</span></h2>
                </div>
            </section>
        </div>
    );
};

export default CrmProductPage;