import React, { useState } from 'react';
import { pricingData } from '../constants';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCircleIcon } from '../components/Icons';

const PricingPage: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in-up">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold">Flexible Pricing for Every Need</h1>
                <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">
                    Transparent pricing plans designed to scale with your business.
                </p>
            </div>

            <div className="flex justify-center items-center mb-12">
                <span className={`px-4 py-2 cursor-pointer font-semibold ${billingCycle === 'monthly' ? 'text-brand-accent' : 'text-brand-text-secondary'}`} onClick={() => setBillingCycle('monthly')}>Monthly</span>
                <div className="relative" onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}>
                    <div className="w-14 h-7 bg-brand-secondary rounded-full cursor-pointer"></div>
                    <div className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform pointer-events-none ${billingCycle === 'yearly' ? 'transform translate-x-7' : ''}`}></div>
                </div>
                <span className={`px-4 py-2 cursor-pointer font-semibold ${billingCycle === 'yearly' ? 'text-brand-accent' : 'text-brand-text-secondary'}`} onClick={() => setBillingCycle('yearly')}>Yearly</span>
                 <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">Save 20%</span>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                {pricingData.plans.map(plan => (
                    <Card key={plan.plan} className={`flex flex-col ${plan.isFeatured ? 'border-brand-accent scale-105' : ''}`}>
                        {plan.isFeatured && (
                           <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-brand-accent text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                        )}
                        <h2 className="text-2xl font-bold text-center">{plan.plan}</h2>
                        <p className="text-center text-brand-text-secondary mt-2">{plan.description}</p>
                        <div className="text-center my-8">
                             <span className="text-4xl font-bold">{billingCycle === 'monthly' ? plan.price : `₹${(parseInt(plan.price.replace(/,/g, '').slice(1)) * 12 * 0.8 / 12).toLocaleString()}`}</span>
                            <span className="text-brand-text-secondary">/month</span>
                        </div>
                        <ul className="space-y-3 flex-grow">
                            {plan.includes.map(item => (
                                <li key={item} className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-brand-accent mr-2 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button onClick={() => {}} className="w-full mt-8" variant={plan.isFeatured ? 'primary' : 'secondary'}>Choose Plan</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;