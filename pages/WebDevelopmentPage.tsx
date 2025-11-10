import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { useInView } from '../hooks/useInView';
import {
    webDevStats,
    webDevProcessSteps,
    webSolutionTypes,
    techStack
} from '../constants';
import {
    ArrowRightIcon,
    ClockIcon,
    BoltIcon,
    DesignIcon
} from '../components/icons/TechIcons';

const WebDevelopmentPage: React.FC = () => {
    const { ref: techRef, inView: techInView } = useInView({ threshold: 0.2 });

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] pt-24 pb-12 overflow-hidden bg-gray-50">
                <div className="absolute top-0 right-0 -mr-32 -mt-20 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl opacity-50"></div>
                
                <div className="relative z-10 w-full md:w-4/5 mx-auto px-4 md:px-0 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Crafting World-Class Web Experiences</h1>
                        <p className="mt-4 text-gray-600">
                            We build high-performance, scalable, and visually stunning websites and web applications that drive engagement and deliver results.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link to="/contact" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors shadow-lg transform hover:scale-105">
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex justify-center h-80 lg:h-96">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" alt="Web development interface" className="absolute w-full max-w-lg object-contain" />
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="relative z-10 w-full md:w-4/5 mx-auto px-4 md:px-0 mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {webDevStats.map((stat) => (
                            <div key={stat.label} className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-md flex items-center gap-4">
                                <div className="p-3 bg-indigo-100 rounded-md">
                                    <stat.icon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Types of Web Solutions Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Web Solutions We Deliver</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                           From stunning corporate sites to complex web applications, we have the expertise to bring your vision to life.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {webSolutionTypes.map((solution, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full mx-auto mb-6">
                                    <solution.icon className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                                <p className="mt-2 text-gray-600">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Our 3-Step Development Process Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Streamlined 3-Step Process</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                           A transparent and efficient workflow designed for quality and on-time delivery.
                        </p>
                    </div>
                    <div className="mt-16 max-w-5xl mx-auto relative">
                        <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200"></div>
                        <div className="grid md:grid-cols-3 gap-16 relative">
                             {webDevProcessSteps.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative inline-block">
                                        <div className="w-20 h-20 flex items-center justify-center bg-white border-4 border-indigo-500 rounded-full z-10 relative">
                                            <step.icon className="w-10 h-10 text-indigo-600" />
                                        </div>
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold text-gray-800">{step.title}</h3>
                                    <p className="mt-2 text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Technology Stack Section */}
                <Section className="bg-gray-50/70">
                    <div ref={techRef} className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powered by Modern Technologies</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            We use a cutting-edge tech stack to build fast, secure, and scalable web solutions.
                        </p>
                    </div>
                    <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {techStack.map((tech, index) => (
                            <div
                                key={tech.name}
                                className={`stagger-in ${techInView ? 'is-visible' : ''} flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <tech.icon className="h-12 w-12" />
                                <p className="mt-4 text-base font-semibold text-gray-800">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Delivery Commitment Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Committed to Your Timeline</h2>
                             <p className="mt-4 text-lg text-gray-600">
                                We understand that time is critical. Our project management ensures we meet deadlines without compromising on quality. Need it faster? We offer an express delivery option for projects with tight timelines.
                             </p>
                        </div>
                        <div className="space-y-6">
                            <div className="p-6 bg-white rounded-lg shadow-lg flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                    <ClockIcon className="w-7 h-7 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">On-Time Delivery</h4>
                                    <p className="text-sm text-gray-600 mt-1">Our standard process guarantees your project is delivered on the agreed-upon schedule.</p>
                                </div>
                            </div>
                             <div className="p-6 bg-white rounded-lg shadow-lg flex items-start gap-4 border-2 border-pink-500">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                                    <BoltIcon className="w-7 h-7 text-pink-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Express Delivery (Add-on)</h4>
                                    <p className="text-sm text-gray-600 mt-1">Accelerate your project timeline with dedicated resources for a faster launch. Additional costs apply.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                 
                {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Ready to Build Your Digital Presence?</h3>
                            <p className="text-indigo-100 mt-2">Let's discuss your web development needs and how we can create a solution that drives success.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Get a Free Quote <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default WebDevelopmentPage;