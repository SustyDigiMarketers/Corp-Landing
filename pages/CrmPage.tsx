import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import {
    UserCircleIcon,
    ChartBarIcon,
    MegaphoneIcon,
    AnalyzeIcon,
    ArrowRightIcon,
    CheckmarkCircleIcon,
    LinkIcon
} from '../components/icons/TechIcons';

const CrmPage: React.FC = () => {
    const features = [
        {
            icon: UserCircleIcon,
            title: "360° Customer View",
            description: "Get a complete, unified view of every customer interaction, from emails and calls to purchase history and support tickets."
        },
        {
            icon: ChartBarIcon,
            title: "Sales Pipeline Automation",
            description: "Visualize your sales process, automate follow-ups, and move deals forward with intelligent, customizable workflows."
        },
        {
            icon: MegaphoneIcon,
            title: "Marketing Campaign Management",
            description: "Launch, manage, and track targeted marketing campaigns across multiple channels to nurture leads and drive conversions."
        },
        {
            icon: AnalyzeIcon,
            title: "Powerful Analytics",
            description: "Make data-driven decisions with real-time dashboards and insightful reports on sales performance and customer behavior."
        }
    ];

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] bg-gray-50 overflow-hidden">
                <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 hero-fade-in-up">Build Relationships, <br /><span className="gradient-text">Drive Growth</span></h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                            SustyCRM is the ultimate platform to manage customer interactions, streamline sales pipelines, and automate marketing efforts.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Explore Features
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-80 flex items-center justify-center hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <img src="https://images.unsplash.com/photo-1556740738-b6a63e2775df?q=80&w=1200&auto=format&fit=crop" alt="CRM Dashboard" className="absolute w-full max-w-lg rounded-xl shadow-2xl transform lg:-rotate-3 transition-transform duration-500 hover:rotate-0" />
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Key Features Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your All-in-One Growth Platform</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            SustyCRM provides the tools you need to attract, engage, and delight your customers at every stage of their journey.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Unify Sales and Marketing Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unify Your Sales and Marketing Teams</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Break down data silos and create a seamless customer experience. SustyCRM provides a single source of truth, enabling your teams to collaborate effectively and align their efforts on what matters most: the customer.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Shared customer data and insights</span></li>
                                <li className="flex items-start gap-3"><LinkIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Seamless lead handoff from marketing to sales</span></li>
                                <li className="flex items-start gap-3"><ChartBarIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>End-to-end campaign and ROI tracking</span></li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="CRM Analytics on Tablet" className="max-w-md mx-auto rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </Section>

                 {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Ready to Supercharge Your Growth?</h3>
                            <p className="text-indigo-100 mt-2">Discover how SustyCRM can become the backbone of your customer-facing operations.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Request a Demo <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default CrmPage;