import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import {
    DocumentTextIcon,
    HandshakeIcon,
    CubeTransparentIcon,
    LinkIcon,
    ArrowRightIcon,
    CheckmarkCircleIcon,
    ChartBarIcon
} from '../components/icons/TechIcons';

const PurchaseManagementPage: React.FC = () => {
    const features = [
        {
            icon: DocumentTextIcon,
            title: "Purchase Order Management",
            description: "Create, track, and manage purchase orders with customizable templates and approval workflows."
        },
        {
            icon: HandshakeIcon,
            title: "Supplier & Vendor Hub",
            description: "Maintain a centralized database of your suppliers, track their performance, and manage contracts."
        },
        {
            icon: CubeTransparentIcon,
            title: "Real-Time Inventory Control",
            description: "Monitor stock levels across multiple warehouses, manage SKUs, and prevent costly stockouts."
        },
        {
            icon: LinkIcon,
            title: "Procure-to-Pay Automation",
            description: "Automate the entire procurement lifecycle, from requisition and ordering to invoicing and payment."
        }
    ];

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] bg-gray-50 overflow-hidden">
                <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 hero-fade-in-up">Optimize Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Procurement Cycle</span></h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                            From purchase orders to inventory control, our integrated system streamlines every step of your procurement process for maximum efficiency and cost savings.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Streamline Procurement
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-80 flex items-center justify-center hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <img src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1200&auto=format&fit=crop" alt="Purchase Management Dashboard" className="absolute w-full max-w-lg rounded-xl shadow-2xl" />
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Key Features Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">End-to-End Purchase Management</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                           Gain full visibility and control over your purchasing, from initial request to final payment.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Control Costs, Improve Efficiency Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Control Costs, Improve Efficiency</h2>
                            <p className="mt-4 text-lg text-gray-600">
                               Our system provides the tools to negotiate better prices, reduce maverick spending, and improve your supply chain visibility. Make informed purchasing decisions backed by real-time data and analytics.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Reduce procurement costs</span></li>
                                <li className="flex items-start gap-3"><CubeTransparentIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Optimize inventory levels</span></li>
                                <li className="flex items-start gap-3"><ChartBarIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Improve supplier relationships and performance</span></li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://images.unsplash.com/photo-1559056199-56c836528535?q=80&w=800&auto=format&fit=crop" alt="Inventory Management UI" className="max-w-md mx-auto rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </Section>

                 {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Revolutionize Your Procurement Process</h3>
                            <p className="text-teal-100 mt-2">Learn how our Purchase Management System can drive savings and efficiency for your business.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-teal-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Request a Demo <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default PurchaseManagementPage;