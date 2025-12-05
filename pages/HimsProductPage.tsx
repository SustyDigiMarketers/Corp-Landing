
import React, { useState } from 'react';
import { himsProductData } from '../constants';
import Button from '../components/Button';
import Card from '../components/Card';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChevronUpIcon, ChevronDownIcon } from '../components/Icons';

const HimsProductPage: React.FC = () => {
    const { hero, offer, services, progress, process, faq } = himsProductData;
    const [activeProcess, setActiveProcess] = useState(1);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    
    const nextProcess = () => setActiveProcess(p => (p === process.steps.length - 1 ? 0 : p + 1));
    const prevProcess = () => setActiveProcess(p => (p === 0 ? process.steps.length - 1 : p - 1));

    return (
        <div className="animate-fade-in-up bg-white space-y-24 md:space-y-32 pb-24">
            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-brand-accent font-semibold bg-brand-accent/10 px-3 py-1 rounded-full text-sm">{hero.tag}</span>
                        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-brand-text">{hero.title}</h1>
                        <p className="mt-6 text-lg text-brand-text-secondary">{hero.description}</p>
                        <div className="mt-8 flex items-center space-x-4">
                            <Button onClick={() => {}}>Learn More</Button>
                            <Button onClick={() => {}} variant="secondary">Contact Us</Button>
                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                            {hero.stats.map(stat => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold text-brand-text">{stat.value}</p>
                                    <p className="text-brand-text-secondary text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px]">
                        <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1887&auto=format&fit=crop" alt="Doctor" className="absolute inset-0 w-full h-full object-cover rounded-2xl"/>
                        <Card className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 flex items-center space-x-3 backdrop-blur-sm bg-white/70">
                            <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-white">BS</div>
                            <div>
                                <p className="font-bold">Best Services</p>
                                <p className="text-sm text-brand-text-secondary">Dr.Leslie Alexander</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            
            {/* Offer Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative h-[500px]">
                        <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1887&auto=format&fit=crop" alt="Healthcare professional with clipboard" className="absolute inset-0 w-full h-full object-cover rounded-2xl"/>
                         <Card className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 backdrop-blur-sm bg-white/70">
                            <p className="font-semibold">Health Trend Chart</p>
                            <div className="flex items-end space-x-2 mt-2 h-24">
                                <div className="flex-1 bg-brand-accent/30 rounded-t-md" style={{height: '60%'}}></div>
                                <div className="flex-1 bg-brand-accent/30 rounded-t-md" style={{height: '75%'}}></div>
                                <div className="flex-1 bg-brand-accent rounded-t-md relative" style={{height: '85%'}}>
                                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-brand-accent">85%</span>
                                </div>
                                <div className="flex-1 bg-brand-accent/30 rounded-t-md" style={{height: '70%'}}></div>
                            </div>
                        </Card>
                    </div>
                     <div>
                        <h2 className="text-3xl font-bold">{offer.title}</h2>
                        <p className="text-4xl font-bold text-brand-accent my-4">{offer.stat} <span className="text-lg text-brand-text-secondary font-normal">{offer.statLabel}</span></p>
                        <h3 className="text-2xl font-bold mt-8">{offer.subTitle}</h3>
                        <p className="mt-4 text-brand-text-secondary">{offer.description}</p>
                         <div className="mt-8 flex items-center space-x-4">
                            <Button onClick={() => {}}>Book Now</Button>
                            <Button onClick={() => {}} variant="secondary">Learn More</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold">{services.title}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">{services.description}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
                    {services.list.map((service, index) => (
                        <Card key={service.title} className={`${index === 0 ? 'bg-brand-accent text-white' : 'bg-white'}`}>
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${index === 0 ? 'bg-white/20' : 'bg-brand-accent/10'}`}>
                                <service.icon className={`h-6 w-6 ${index === 0 ? 'text-white' : 'text-brand-accent'}`} />
                            </div>
                            <h3 className={`text-xl font-bold ${index === 0 ? 'text-white' : 'text-brand-text'}`}>{service.title}</h3>
                            <p className={`mt-2 ${index === 0 ? 'text-indigo-100' : 'text-brand-text-secondary'}`}>{service.description}</p>
                        </Card>
                    ))}
                </div>
            </section>
            
             {/* Progress Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        <span className="text-brand-accent font-semibold bg-brand-accent/10 px-3 py-1 rounded-full text-sm">{progress.tag}</span>
                        <h2 className="text-4xl font-bold mt-4">{progress.title}</h2>
                        <p className="mt-4 text-brand-text-secondary">{progress.description}</p>
                         <div className="mt-8 flex items-center space-x-4">
                            <Button onClick={() => {}}>Book Now</Button>
                            <Button onClick={() => {}} variant="secondary">Learn More</Button>
                        </div>
                    </div>
                    <div className="relative h-[500px]">
                        <img src="https://images.unsplash.com/photo-1582750422221-0d5b04a22f36?q=80&w=1887&auto=format&fit=crop" alt="Doctor smiling" className="absolute inset-0 w-full h-full object-cover rounded-2xl"/>
                        <Card className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 backdrop-blur-sm bg-white/70">
                            <p className="font-semibold text-sm">Checkup progress</p>
                            <div className="flex items-center space-x-2 mt-2">
                                <div className="w-8 h-8 rounded-md bg-brand-accent text-white flex items-center justify-center">...</div>
                                <p className="font-bold text-brand-text">22 Agustus, 2024</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold">{process.title}</h2>
                    <div className="flex space-x-4">
                        <button onClick={prevProcess}><ArrowLeftCircleIcon className="h-10 w-10 text-brand-text-secondary hover:text-brand-accent"/></button>
                        <button onClick={nextProcess}><ArrowRightCircleIcon className="h-10 w-10 text-brand-text-secondary hover:text-brand-accent"/></button>
                    </div>
                </div>
                 <div className="grid md:grid-cols-3 gap-8">
                    {process.steps.map((step, index) => (
                        <div key={index} className={`p-8 rounded-2xl transition-all duration-300 ${activeProcess === index ? 'bg-brand-accent text-white' : 'bg-brand-secondary'}`}>
                            <p className={`font-semibold ${activeProcess === index ? 'text-indigo-200' : 'text-brand-text-secondary'}`}>{step.step}</p>
                            <h3 className={`text-2xl font-bold mt-2 ${activeProcess === index ? 'text-white' : 'text-brand-text'}`}>{step.title}</h3>
                            <p className={`mt-4 ${activeProcess === index ? 'text-indigo-200' : 'text-brand-text-secondary'}`}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <span className="text-brand-accent font-semibold bg-brand-accent/10 px-3 py-1 rounded-full text-sm">Revolutionary!</span>
                        <h2 className="text-4xl font-bold mt-4">{faq.title}</h2>
                        <p className="mt-4 text-brand-text-secondary">{faq.description}</p>
                    </div>
                    <div className="space-y-4">
                       {faq.list.map((item, index) => (
                           <div key={index} className="border-b border-gray-200 pb-4">
                               <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-start text-left">
                                   <span className="font-bold text-lg text-brand-text">{`0${index+1}. ${item.question}`}</span>
                                   {openFaq === index ? <ChevronUpIcon className="h-6 w-6 text-brand-accent"/> : <ChevronDownIcon className="h-6 w-6 text-brand-text-secondary"/>}
                                </button>
                               <div className={`transition-all duration-300 ease-in-out grid ${openFaq === index ? 'grid-rows-[1fr] pt-2' : 'grid-rows-[0fr]'}`}>
                                   <div className="overflow-hidden">
                                       <p className="text-brand-text-secondary">{item.answer}</p>
                                   </div>
                               </div>
                           </div>
                       ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HimsProductPage;
