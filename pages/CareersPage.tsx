

import React from 'react';
import { careersData } from '../constants';
import Card from '../components/Card';
import Button from '../components/Button';
import { ArrowRightIcon } from '../components/Icons';

const CareersPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold">Join Our Team</h1>
                <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">
                    We're looking for passionate creators, thinkers, and builders to help us shape the future of digital.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-3xl font-bold">Open Positions</h2>
                    {careersData.open_positions.map(job => (
                        <Card key={job.role} className="flex justify-between items-center group">
                            <div>
                                <h3 className="text-xl font-bold group-hover:text-brand-accent">{job.role}</h3>
                                <p className="text-brand-text-secondary mt-1">{job.location} &middot; Est. {job.salary}</p>
                            </div>
                            <Button onClick={() => {}} className="!px-4 !py-2">Apply Now <ArrowRightIcon className="inline h-4 w-4 ml-2" /></Button>
                        </Card>
                    ))}
                </div>
                <div className="lg:col-span-1">
                    <Card>
                        <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
                         <ul className="space-y-3 text-brand-text-secondary">
                             <li className="flex items-start"><strong>Innovative Projects:</strong> Work on cutting-edge technology and creative campaigns.</li>
                             <li className="flex items-start"><strong>Growth Opportunities:</strong> We invest in your professional development.</li>
                             <li className="flex items-start"><strong>Flexible Culture:</strong> We value work-life balance and offer remote options.</li>
                             <li className="flex items-start"><strong>Great Team:</strong> Collaborate with a talented and supportive team.</li>
                         </ul>
                         <div className="aspect-w-16 aspect-h-9 mt-6 rounded-lg overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=338" alt="Company Culture" className="object-cover" />
                         </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
