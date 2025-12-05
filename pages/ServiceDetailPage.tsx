
import React, { useState } from 'react';
import { Page, ServiceDetails } from '../types';
import Button from '../components/Button';
import { CheckCircleSolidIcon, QuoteIcon, PlusIcon, MinusIcon, PlusSquareIcon } from '../components/Icons';

interface ServiceDetailPageProps {
  serviceData: ServiceDetails;
  navigateTo: (page: Page) => void;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceData, navigateTo }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % serviceData.testimonials.length);
  };
  
  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + serviceData.testimonials.length) % serviceData.testimonials.length);
  };

  return (
    <div className="bg-white text-brand-text animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 py-16 md:py-24">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-accent font-semibold bg-brand-accent/10 px-3 py-1 rounded-md">{serviceData.hero.tag}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">{serviceData.hero.title}</h1>
            <p className="mt-6 text-brand-text-secondary">{serviceData.hero.description}</p>
            <Button onClick={() => navigateTo(Page.Contact)} className="mt-8">Contact Us</Button>
          </div>
          <div className="relative">
             <div className="absolute -left-4 -top-4 w-full h-full border-2 border-gray-100 rounded-lg transform -rotate-2"></div>
             <div className="relative bg-brand-secondary p-8 rounded-lg">
                {serviceData.process.map((step, index) => (
                    <div key={index} className={`flex items-start ${index < serviceData.process.length - 1 ? 'pb-8' : ''}`}>
                        <div className="flex flex-col items-center mr-6">
                            <div className="w-10 h-10 bg-brand-accent text-white rounded-full flex items-center justify-center font-bold text-lg z-10">{`0${index + 1}`}</div>
                            {index < serviceData.process.length - 1 && <div className="w-0.5 h-16 bg-gray-300"></div>}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">{step.title}</h3>
                            <p className="text-sm text-brand-text-secondary mt-1">{step.description}</p>
                        </div>
                    </div>
                ))}
             </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-brand-secondary py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-accent font-semibold bg-brand-accent/10 px-3 py-1 rounded-md">Pricing plan</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">{serviceData.pricing.title}</h2>
             <p className="mt-4 text-brand-text-secondary">{serviceData.pricing.description}</p>
          </div>
           <div className="flex justify-center items-center my-10">
                <span className={`px-4 py-2 cursor-pointer font-semibold ${billingCycle === 'monthly' ? 'text-brand-accent' : 'text-brand-text-secondary'}`} onClick={() => setBillingCycle('monthly')}>Monthly</span>
                <div className="relative" onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}>
                    <div className="w-14 h-7 bg-gray-200 rounded-full cursor-pointer"></div>
                    <div className={`absolute top-1 left-1 bg-brand-accent w-5 h-5 rounded-full transition-transform pointer-events-none ${billingCycle === 'yearly' ? 'transform translate-x-7' : ''}`}></div>
                </div>
                <span className={`px-4 py-2 cursor-pointer font-semibold ${billingCycle === 'yearly' ? 'text-brand-accent' : 'text-brand-text-secondary'}`} onClick={() => setBillingCycle('yearly')}>Yearly</span>
                 <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Save 20%</span>
            </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch mt-12">
            {serviceData.pricing.plans.map(plan => (
              <div key={plan.name} className={`rounded-lg p-8 flex flex-col border ${plan.isFeatured ? 'bg-brand-accent text-white border-brand-accent' : 'bg-white border-gray-200'}`}>
                 {plan.isFeatured && (
                    <div className="text-center mb-4"><span className="text-sm bg-white/20 px-3 py-1 rounded-full">Most Popular</span></div>
                 )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className={`my-4 ${plan.isFeatured ? 'text-indigo-200' : 'text-brand-text-secondary'}`}>{plan.description}</p>
                <div className="my-4">
                  <span className="text-5xl font-bold">${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                  <span className={`${plan.isFeatured ? 'text-indigo-200' : 'text-brand-text-secondary'}`}>/month</span>
                </div>
                <Button onClick={() => navigateTo(Page.Contact)} className="w-full" variant={plan.isFeatured ? 'secondary' : 'primary'}>{plan.isFeatured ? 'Choose Plan' : 'Get Started'}</Button>
                <ul className="space-y-3 mt-8 flex-grow">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleSolidIcon className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${plan.isFeatured ? 'text-white' : 'text-brand-accent'}`} />
                      <span className={`${plan.isFeatured ? 'text-indigo-200' : 'text-brand-text-secondary'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-brand-accent font-semibold bg-brand-accent/10 px-3 py-1 rounded-md">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Success Stories: What Our Users Say</h2>
          </div>
          <div className="mt-12 relative max-w-3xl mx-auto">
            {serviceData.testimonials.map((testimonial, index) => (
                <div key={index} className={`transition-opacity duration-500 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 w-full'}`}>
                    <div className="bg-brand-secondary p-8 rounded-lg text-center relative">
                        <QuoteIcon className="absolute -top-4 -left-4 h-16 w-16 text-brand-accent/10" />
                         <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                         <p className="text-brand-text-secondary italic">"{testimonial.feedback}"</p>
                         <div className="mt-6">
                            <h4 className="font-bold">{testimonial.name}</h4>
                            <p className="text-sm text-brand-text-secondary">{testimonial.role}</p>
                         </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-center mt-6 space-x-2">
                {serviceData.testimonials.map((_, index) => (
                    <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-brand-accent' : 'bg-gray-300'}`}></button>
                ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:sticky top-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 text-brand-accent text-sm font-semibold rounded-md mb-4">
                    <PlusSquareIcon className="h-5 w-5" />
                    <span>FAQs</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
                <p className="mt-4 text-brand-text-secondary">
                    Find answers to common questions about our services and processes.
                </p>
            </div>

            <div className="space-y-4">
                {serviceData.faq.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                        <div className="p-5 flex justify-between items-center">
                            <h3 className="font-semibold text-brand-text pr-4">{item.question}</h3>
                            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-brand-secondary">
                                {openFaq === index ? <MinusIcon className="w-4 h-4 text-brand-accent" /> : <PlusIcon className="w-4 h-4 text-brand-text-secondary" />}
                            </div>
                        </div>
                        <div className={`transition-all duration-500 ease-in-out grid ${openFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                                <p className="px-5 pb-5 text-brand-text-secondary">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

      </div>
    </div>
  );
};

export default ServiceDetailPage;
