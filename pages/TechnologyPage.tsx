
import React from 'react';
import Section from '../components/Section';
import { techStack } from '../constants';

const TechnologyPage: React.FC = () => {
    return (
        <div className="space-y-20">
            <Section>
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold gradient-text">Technology & Innovation</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        We use cutting-edge technologies to build robust, scalable, and innovative solutions.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Tech Stack</h2>
                    <p className="mt-4 text-lg text-gray-600">The tools and platforms we trust to deliver excellence.</p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {techStack.map(tech => (
                        <div key={tech.name} className="flex flex-col items-center justify-center p-6 glass-card rounded-2xl transition-all duration-300 hover:-translate-y-2">
                            <tech.icon className="h-16 w-16" />
                            <p className="mt-4 text-lg font-semibold text-gray-800">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Innovation Lab</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Exploring tomorrow's technology today. Our R&D projects are currently under wraps, but stay tuned for exciting announcements!
                    </p>
                </div>
                <div className="mt-12 h-64 flex items-center justify-center glass-card rounded-2xl">
                    <p className="text-gray-500">Innovation Showcase Coming Soon</p>
                </div>
            </Section>
        </div>
    );
};

export default TechnologyPage;