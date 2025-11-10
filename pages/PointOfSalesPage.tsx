import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import {
    CreditCardOnlineIcon,
    CubeTransparentIcon,
    UserCircleIcon,
    ChartBarIcon,
    ArrowRightIcon,
    CheckmarkCircleIcon,
    BoltIcon
} from '../components/icons/TechIcons';

const PointOfSalesPage: React.FC = () => {
    const features = [
        {
            icon: CreditCardOnlineIcon,
            title: "Fast & Easy Checkout",
            description: "Process sales quickly and efficiently with our intuitive, touch-friendly interface and integrated payment processing."
        },
        {
            icon: CubeTransparentIcon,
            title: "Real-time Inventory",
            description: "Automatically track stock levels across all your locations, receive low-stock alerts, and manage suppliers."
        },
        {
            icon: UserCircleIcon,
            title: "Customer Management",
            description: "Build detailed customer profiles, track purchase history, and run targeted loyalty programs to boost retention."
        },
        {
            icon: ChartBarIcon,
            title: "Sales Analytics & Reporting",
            description: "Get valuable, real-time insights into your sales performance, top-selling products, and staff productivity."
        }
    ];

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] bg-white overflow-hidden">
                <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 hero-fade-in-up">The Modern POS for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Retail and Beyond</span></h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                            A fast, intuitive, and powerful Point of Sale system to manage your sales, inventory, and customers effortlessly, both in-store and online.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-rose-600 hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Modernize Your Checkout
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-96 flex items-center justify-center hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200&auto=format&fit=crop" alt="Point of Sale Interface" className="absolute w-full max-w-md rounded-xl shadow-2xl" />
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Key Features Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything You Need to Run Your Store</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                           Our POS is more than just a cash register; it's the command center for your entire retail operation.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-rose-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-rose-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Run Your Business From Anywhere Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         <div className="lg:order-last">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Run Your Business From Anywhere</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Our cloud-based POS system gives you the freedom to manage your store from any device, anywhere in the world. Access real-time sales data, update inventory, and manage staff whether you're at the counter or on the go.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Cloud-based and accessible anywhere</span></li>
                                <li className="flex items-start gap-3"><BoltIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Works on iPad, Mac, or PC</span></li>
                                <li className="flex items-start gap-3"><CreditCardOnlineIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Integrates with popular e-commerce platforms</span></li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:order-first">
                            <img src="https://images.unsplash.com/photo-1580974928064-7ab733e5c431?q=80&w=800&auto=format&fit=crop" alt="POS hardware setup" className="max-w-md mx-auto" />
                        </div>
                    </div>
                </Section>

                 {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Transform Your Retail Experience</h3>
                            <p className="text-rose-100 mt-2">See how our POS system can help you sell more and manage less.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-rose-600 font-semibold rounded-full hover:bg-rose-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Get a Quote <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default PointOfSalesPage;