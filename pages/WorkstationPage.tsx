import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import {
    BriefcaseIcon,
    UsersIcon,
    BoltIcon,
    BookOpenIcon,
    ArrowRightIcon,
    CheckmarkCircleIcon,
    SustoneOSLogoIcon
} from '../components/icons/TechIcons';

const WorkstationPage: React.FC = () => {
    const features = [
        {
            icon: BriefcaseIcon,
            title: "Project & Task Management",
            description: "Organize projects, create task boards, assign responsibilities, and track progress from start to finish."
        },
        {
            icon: UsersIcon,
            title: "Team Collaboration Tools",
            description: "Communicate seamlessly with integrated team chat, shared file storage, and collaborative documents."
        },
        {
            icon: BoltIcon,
            title: "Customizable Workflows",
            description: "Automate repetitive tasks, create custom approval processes, and build efficient workflows that match your needs."
        },
        {
            icon: BookOpenIcon,
            title: "Integrated Knowledge Base",
            description: "Centralize your company's knowledge, documentation, and important information in one accessible wiki."
        }
    ];

    return (
        <>
            {/* Custom Hero Section */}
            <section className="relative w-screen ml-[calc(50%-50vw)] bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10 w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 bg-gray-800/50 border border-gray-700 px-3 py-1 rounded-full mb-4 hero-fade-in-up">
                            <SustoneOSLogoIcon className="w-6 h-6 text-indigo-400" />
                            <span className="font-semibold text-indigo-300">Sustone OS</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold hero-fade-in-up">Your Team's Central Hub for Productivity</h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-300 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                            Unify project management, team collaboration, and workflow automation in one powerful WorkStation designed for the modern enterprise.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Boost Your Productivity
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-96 flex items-center justify-center hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                        <img src="https://images.unsplash.com/photo-1586528116311-01a61287bdd1?q=80&w=1200&auto=format&fit=crop" alt="Workstation Dashboard" className="absolute w-full max-w-lg rounded-xl shadow-2xl" />
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Key Features Section */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">One Platform, Infinite Possibilities</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                           WorkStation brings all your essential tools together to create a seamless and productive environment.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                                <div className="w-16 h-16 flex items-center justify-center bg-sky-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-sky-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Work Smarter, Not Harder Section */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         <div className="lg:order-last">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Work Smarter, Not Harder</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Break down communication silos and enhance team synergy. WorkStation provides a single source of truth for projects and company knowledge, ensuring everyone is aligned and moving in the same direction.
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start gap-3"><CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Eliminate context switching between apps</span></li>
                                <li className="flex items-start gap-3"><CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Automate routine tasks and approvals</span></li>
                                <li className="flex items-start gap-3"><CheckmarkCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Centralize communication and files</span></li>
                            </ul>
                        </div>
                        <div className="flex justify-center lg:order-first">
                            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop" alt="Team Collaboration UI" className="max-w-md mx-auto rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </Section>

                 {/* Final CTA */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold">Bring Your Team Together</h3>
                            <p className="text-sky-100 mt-2">Discover how WorkStation can streamline your projects and boost collaboration.</p>
                        </div>
                        <Link to="/contact" className="px-6 py-3 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                            Get Started for Free <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default WorkstationPage;