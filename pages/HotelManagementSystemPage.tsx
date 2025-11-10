import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import {
    CalendarCheckIcon,
    BuildingIcon,
    ToolsIcon,
    UsersIcon,
    ArrowRightIcon,
    CheckmarkCircleIcon,
    KeyIcon,
    // FIX: Import ChartUpIcon to resolve reference error.
    ChartUpIcon,
    ChartBarIcon
} from '../components/icons/TechIcons';

const HotelManagementSystemPage: React.FC = () => {
    const features = [
        {
            icon: CalendarCheckIcon,
            title: "Reservation & Booking",
            description: "Manage online bookings, room inventory, and channel integrations effortlessly from one central calendar."
        },
        {
            icon: BuildingIcon,
            title: "Front Desk Management",
            description: "Simplify check-in/check-out processes, manage guest folios, and handle all front-office tasks with ease."
        },
        {
            icon: ToolsIcon,
            title: "Housekeeping Control",
            description: "Coordinate staff, assign tasks, and monitor room status in real-time to ensure rooms are always guest-ready."
        },
        {
            icon: KeyIcon,
            title: "Guest Services",
            description: "Manage guest requests, amenities, and billing to provide a personalized and seamless experience."
        }
    ];

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] bg-gradient-to-br from-purple-600 to-pink-500 text-white overflow-hidden">
                <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative z-10 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold hero-fade-in-up">Excellence in Every Stay</h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-purple-100 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                            A comprehensive, all-in-one solution to manage reservations, streamline front-desk operations, and enhance guest experiences.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-96 flex items-center justify-center hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbb563?q=80&w=1200&auto=format&fit=crop" alt="Hotel Management Dashboard" className="absolute w-full max-w-md rounded-xl shadow-2xl transform lg:rotate-3 transition-transform duration-500 hover:rotate-0" />
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Key Features Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Streamline Your Hotel Operations</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            Our Hotel Management System is built to optimize every aspect of your property's daily functions.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Seamless Operations, Happier Guests Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         <div className="lg:order-last">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Seamless Operations, Happier Guests</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                By automating routine tasks and providing staff with powerful tools, our system allows your team to focus on delivering exceptional hospitality. A well-run hotel leads to unforgettable guest experiences and glowing reviews.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Increased operational efficiency</span></li>
                                <li className="flex items-start gap-3"><UsersIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Enhanced guest satisfaction and loyalty</span></li>
                                <li className="flex items-start gap-3"><ChartUpIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Maximized revenue and occupancy rates</span></li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:order-first">
                            <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop" alt="Hotel Booking on Mobile" className="max-w-xs mx-auto rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </Section>

                 {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Elevate Your Guest Experience</h3>
                            <p className="text-purple-100 mt-2">See how our all-in-one hotel management solution can transform your property.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Schedule a Consultation <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default HotelManagementSystemPage;