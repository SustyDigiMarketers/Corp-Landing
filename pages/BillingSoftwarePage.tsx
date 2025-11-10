import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import {
    DocumentReportIcon,
    CalendarCheckIcon,
    CreditCardOnlineIcon,
    ChartBarIcon,
    ArrowRightIcon,
    BoltIcon,
    CheckmarkCircleIcon
} from '../components/icons/TechIcons';

const BillingSoftwarePage: React.FC = () => {
    const features = [
        {
            icon: DocumentReportIcon,
            title: "Automated Invoicing",
            description: "Generate and send professional, customized invoices automatically on schedules you define."
        },
        {
            icon: CalendarCheckIcon,
            title: "Subscription Management",
            description: "Effortlessly manage recurring billing cycles, subscription plans, and prorated charges."
        },
        {
            icon: CreditCardOnlineIcon,
            title: "Online Payment Gateway",
            description: "Accept payments securely from a variety of gateways like Stripe, PayPal, and more."
        },
        {
            icon: ChartBarIcon,
            title: "Financial Reporting",
            description: "Track revenue, payments, and outstanding balances with insightful, real-time dashboards."
        }
    ];

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] bg-white overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-50 rounded-bl-full"></div>
                <div className="relative z-10 w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 hero-fade-in-up">Billing Made Simple, <br />Payments Made Faster</h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                            Automate invoicing, manage subscriptions, and accept payments with our versatile and secure billing software designed for any business model.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Simplify Your Billing
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-96 flex items-center justify-center hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <img src="https://images.unsplash.com/photo-1595039862544-052a12165ab4?q=80&w=1200&auto=format&fit=crop" alt="Billing Software Invoice" className="absolute w-full max-w-sm rounded-xl shadow-2xl transform lg:-rotate-6" />
                        <img src="https://images.unsplash.com/photo-1634733591032-15ac63795551?q=80&w=1200&auto=format&fit=crop" alt="Billing Dashboard on Mobile" className="absolute w-full max-w-[12rem] rounded-xl shadow-2xl transform lg:rotate-6 right-0 bottom-0 border-4 border-white" />
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Key Features Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Flexible Billing for Modern Business</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                           Our platform adapts to your needs, whether you're a SaaS company, a service provider, or an e-commerce store.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-cyan-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-cyan-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Get Paid On Time, Every Time Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         <div className="lg:order-last">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Paid On Time, Every Time</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Reduce manual work and improve your cash flow. Our automated billing system ensures timely invoice delivery and makes it easy for your customers to pay online, minimizing late payments.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Improve cash flow with faster payments</span></li>
                                <li className="flex items-start gap-3"><BoltIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Reduce administrative overhead</span></li>
                                <li className="flex items-start gap-3"><CreditCardOnlineIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Enhance customer satisfaction with easy payments</span></li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:order-first">
                            <img src="https://images.unsplash.com/photo-1579621970795-87f54d504ba2?q=80&w=1200&auto=format&fit=crop" alt="Online Payment UI" className="max-w-md mx-auto rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </Section>

                 {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-cyan-600 to-sky-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Ready to Automate Your Billing?</h3>
                            <p className="text-cyan-100 mt-2">Discover how our software can save you time and streamline your revenue operations.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-full hover:bg-cyan-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Request a Demo <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default BillingSoftwarePage;