import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import {
    UserGroupIcon,
    BanknotesIcon,
    ChartUpIcon,
    ClockIcon,
    CalendarCheckIcon,
    DocumentReportIcon,
    ArrowRightIcon,
} from '../components/icons/TechIcons';

const HrManagementSystemPage: React.FC = () => {
    const features = [
        {
            icon: UserGroupIcon,
            title: "Recruitment & Onboarding",
            description: "Attract top talent, manage applicants, and streamline the onboarding process to set up new hires for success from day one."
        },
        {
            icon: BanknotesIcon,
            title: "Payroll & Compensation",
            description: "Automate complex payroll calculations, manage benefits, and ensure timely, accurate compensation for all employees."
        },
        {
            icon: ChartUpIcon,
            title: "Performance Management",
            description: "Set clear goals, conduct performance reviews, and provide continuous feedback to foster employee growth and development."
        },
        {
            icon: ClockIcon,
            title: "Time & Attendance",
            description: "Track employee hours, manage leave requests, and ensure compliance with labor regulations effortlessly."
        }
    ];

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] bg-gradient-to-br from-blue-500 to-sky-600 text-white overflow-hidden">
                <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold hero-fade-in-up">Empower Your Workforce, Simplify HR</h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-blue-100 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                            An all-in-one platform to manage the entire employee lifecycle, from recruitment and onboarding to payroll and performance reviews.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-80 flex items-center justify-center hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <img src="https://images.unsplash.com/photo-1629904853716-f0bc64219b1b?q=80&w=800&auto=format&fit=crop" alt="HR Management Dashboard" className="absolute w-full max-w-lg rounded-xl shadow-2xl transform lg:rotate-6 transition-transform duration-500 hover:rotate-3" />
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Key Features Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Complete HR Toolkit</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            Everything you need to build a thriving workplace, all in one intuitive platform.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Centralize HR Operations Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         <div className="lg:order-last">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Centralize Your HR Operations</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Ditch the spreadsheets and disconnected systems. Our HRMS brings all your employee data and processes into one secure, accessible hub. Empower your managers and employees with self-service tools, reducing administrative burdens and freeing up your HR team to focus on strategic initiatives.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CalendarCheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Employee Self-Service Portal</span></li>
                                <li className="flex items-start gap-3"><DocumentReportIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Comprehensive Reporting & Analytics</span></li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:order-first">
                            <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop" alt="HR Mobile App" className="max-w-xs mx-auto rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </Section>

                 {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Transform Your HR Department Today</h3>
                            <p className="text-blue-100 mt-2">See how our HR Management System can boost efficiency and employee satisfaction.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Get a Free Consultation <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default HrManagementSystemPage;