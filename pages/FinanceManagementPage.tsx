import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import {
    BookOpenIcon,
    CreditCardOnlineIcon,
    BanknotesIcon,
    DocumentReportIcon,
    ArrowRightIcon,
    ShieldCheckIcon,
    ScaleIcon
} from '../components/icons/TechIcons';

const FinanceManagementPage: React.FC = () => {
    const features = [
        {
            icon: BookOpenIcon,
            title: "General Ledger & Accounting",
            description: "Maintain accurate financial records with a robust, double-entry accounting core that powers all financial operations."
        },
        {
            icon: CreditCardOnlineIcon,
            title: "Automated Invoicing & Billing",
            description: "Streamline your accounts receivable, automate recurring invoices, and get paid faster with integrated payment gateways."
        },
        {
            icon: BanknotesIcon,
            title: "Expense Management",
            description: "Capture, track, and approve employee expenses with customizable workflows and powerful spending controls."
        },
        {
            icon: DocumentReportIcon,
            title: "Real-time Financial Reporting",
            description: "Generate detailed P&L statements, balance sheets, and cash flow reports for clear financial insights."
        }
    ];

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 opacity-30"></div>
                <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative z-10 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold hero-fade-in-up">Financial Clarity for Your Enterprise</h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-300 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                            A secure, all-in-one platform for accounting, financial reporting, and expense management designed to give you complete control over your company's finances.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Get a Financial Overview
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-80 flex items-center justify-center hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop" alt="Finance Management Dashboard" className="absolute w-full max-w-lg rounded-xl shadow-2xl transform lg:rotate-3 transition-transform duration-500 hover:rotate-0" />
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Key Features Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Complete Financial Command Center</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                           Manage every aspect of your company's finances with our powerful, integrated suite of tools.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Make Smarter Financial Decisions Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         <div className="lg:order-last">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Make Smarter, Data-Driven Decisions</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Gain unparalleled visibility and control over your company's financial health. Our platform transforms complex financial data into actionable insights, helping you forecast accurately, optimize spending, and drive profitability.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><ShieldCheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Enterprise-grade security and compliance</span></li>
                                <li className="flex items-start gap-3"><ScaleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Scalable architecture that grows with your business</span></li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:order-first">
                            <img src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=1200&auto=format&fit=crop" alt="Financial Reports" className="max-w-md mx-auto rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </Section>

                 {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Take Control of Your Finances</h3>
                            <p className="text-green-100 mt-2">See how our platform can provide the financial clarity your enterprise needs to succeed.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-green-600 font-semibold rounded-full hover:bg-green-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Request a Demo <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default FinanceManagementPage;