

import React, { useState } from 'react';
import { contactData } from '../constants';
import Card from '../components/Card';
import Button from '../components/Button';
import { PlusSquareIcon, ChevronDownIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
                <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">
                    We'd love to hear from you. Let's discuss how we can help your business grow.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <Card>
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                            <input type="tel" placeholder="Your Phone" className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                            <select className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent">
                                <option>Service Interested In</option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>UI/UX Design</option>
                                <option>Other</option>
                            </select>
                            <textarea placeholder="Your Message" rows={4} className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"></textarea>
                            <Button onClick={() => {}} className="w-full">Send Message</Button>
                        </form>
                    </Card>
                </div>
                <div className="space-y-8">
                     <Card>
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <p className="text-brand-text-secondary"><strong>Address:</strong> {contactData.address}</p>
                        <p className="text-brand-text-secondary mt-2"><strong>Email:</strong> {contactData.email}</p>
                        <p className="text-brand-text-secondary mt-2"><strong>Phone:</strong> {contactData.phone}</p>
                    </Card>
                    <div className="h-80 bg-brand-secondary rounded-lg overflow-hidden">
                        {/* Google Map Image */}
                         <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" 
                            alt="Office Location Map" 
                            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                         />
                    </div>
                </div>
            </div>

             {/* FAQ Section */}
            <section className="mt-24 md:mt-32">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Title & Description */}
                    <div className="lg:sticky top-24">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-md mb-4">
                            <PlusSquareIcon className="h-5 w-5" />
                            <span>Frequently asked questions</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Frequently asked <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">questions</span>
                        </h2>
                        <p className="mt-4 text-brand-text-secondary">
                            Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just straightforward pricing for powerful financial management.
                        </p>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="space-y-4">
                        {contactData.faq.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <div className={`p-5 flex justify-between items-center transition-colors ${openFaq === index ? 'bg-brand-accent/5' : ''}`}>
                                    <h3 className="font-semibold text-brand-text">{item.question}</h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-180 bg-brand-accent text-white' : 'bg-gray-100 text-brand-text-secondary'}`}>
                                        <ChevronDownIcon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className={`transition-all duration-500 ease-in-out grid ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                    <div className="overflow-hidden">
                                        <p className="p-5 pt-0 text-brand-text-secondary">
                                            {item.answer}
                                        </p>
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

export default ContactPage;
