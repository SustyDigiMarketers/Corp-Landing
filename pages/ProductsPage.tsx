import React from 'react';
import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import { useInView } from '../hooks/useInView';
import { 
    UserGroupIcon, 
    MarketingIcon, 
    ChartBarIcon, 
    ShieldCheckIcon, 
    HeadsetIcon, 
    ServerStackIcon, 
    ArrowRightIcon 
} from '../components/icons/TechIcons';
import { Link } from 'react-router-dom';
import { enterpriseProducts } from '../constants';

const StaggeredFeature: React.FC<{ feature: { icon: React.FC<{className?:string}>, title: string, description: string }, index: number, inView: boolean }> = ({ feature, index, inView }) => (
    <li 
        className={`stagger-in ${inView ? 'is-visible' : ''} p-4 rounded-lg flex items-start gap-4 feature-item`}
        style={{ transitionDelay: `${200 + index * 150}ms` }}>
        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center feature-icon-bg">
            <feature.icon className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
            <h4 className="font-bold text-gray-800">{feature.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
        </div>
    </li>
);

const sustyCRMFeatures = [
    { icon: UserGroupIcon, title: 'Unified Lead Management', description: 'Capture, track, and nurture leads from all channels in one centralized dashboard.' },
    { icon: MarketingIcon, title: 'Marketing Automation', description: 'Create sophisticated email campaigns and workflows to engage customers at scale.' },
    { icon: ChartBarIcon, title: 'Insightful Analytics', description: 'Gain deep insights into your sales pipeline and customer behavior with powerful reporting tools.' },
];

const platformPillars = [
    { icon: ShieldCheckIcon, title: 'Top-Tier Security', description: 'Your data is protected with enterprise-grade security protocols and encryption.' },
    { icon: ServerStackIcon, title: 'Scalable Infrastructure', description: 'Our platforms are built to grow with you, handling increased demand with ease.' },
    { icon: HeadsetIcon, title: '24/7 Premium Support', description: 'Our dedicated support team is always available to help you succeed.' },
];

const ProductsPage: React.FC = () => {
    const { ref: sustyCRMRef, inView: sustyCRMInView } = useInView({ threshold: 0.3 });

    const iconColors: { [key: string]: string } = {
        indigo: 'bg-indigo-100 text-indigo-600',
        blue: 'bg-blue-100 text-blue-600',
        purple: 'bg-purple-100 text-purple-600',
        green: 'bg-green-100 text-green-600',
        teal: 'bg-teal-100 text-teal-600',
        cyan: 'bg-cyan-100 text-cyan-600',
        sky: 'bg-sky-100 text-sky-600',
        rose: 'bg-rose-100 text-rose-600',
    };

    return (
        <div className="space-y-24">
            <PageHeader
                title="Our Product Ecosystem"
                subtitle="A suite of powerful, integrated SaaS platforms designed to streamline operations, enhance productivity, and accelerate growth for modern enterprises."
            />

            {/* Featured Product: SustyCRM */}
            <Section>
                <div ref={sustyCRMRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <div className="flex flex-col justify-center">
                        <div className={`stagger-in ${sustyCRMInView ? 'is-visible' : ''}`}>
                            <p className="text-sm font-semibold text-indigo-600 tracking-wider uppercase">Featured Product</p>
                            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">SustyCRM</h2>
                        </div>
                        <p className={`mt-6 text-lg text-gray-600 leading-relaxed stagger-in ${sustyCRMInView ? 'is-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
                            SustyCRM is the ultimate platform to streamline customer relationships and automate marketing. From lead management to client communication, our intuitive interface empowers you to build lasting connections and drive business growth.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {sustyCRMFeatures.map((feature, index) => (
                                <StaggeredFeature key={index} feature={feature} index={index} inView={sustyCRMInView} />
                            ))}
                        </ul>
                         <div className={`mt-8 stagger-in ${sustyCRMInView ? 'is-visible' : ''}`} style={{ transitionDelay: '600ms' }}>
                            <Link to="/products/crm" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors shadow-lg transform hover:scale-105">
                                Explore SustyCRM <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-[450px] flex items-center justify-center">
                        <div className={`absolute w-full h-full bg-indigo-50 rounded-full blur-3xl transition-opacity duration-1000 ${sustyCRMInView ? 'opacity-80' : 'opacity-0'}`}></div>
                        <div className={`relative w-full max-w-lg p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 transition-all duration-700 ease-out ${sustyCRMInView ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 -rotate-3'}`} style={{ transitionDelay: '200ms' }}>
                            <div className="aspect-video bg-gray-100 rounded-lg shadow-inner overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1556740738-b6a63e2775df?q=80&w=1200&auto=format&fit=crop" alt="SustyCRM UI" className="w-full h-full object-cover" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Our Enterprise Product Ecosystem Section */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Enterprise Product Ecosystem</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Explore our comprehensive suite of software solutions, each designed to tackle specific enterprise challenges and work seamlessly together.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {enterpriseProducts.map((product, index) => {
                        const { ref, inView } = useInView({ threshold: 0.1 });
                        return (
                            <div ref={ref} key={product.name} className={`stagger-in ${inView ? 'is-visible' : ''} bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col group ecosystem-card`} style={{ transitionDelay: `${index * 100}ms`}}>
                                <div className="p-8">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${iconColors[product.color]}`}>
                                        <product.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                    <p className="mt-2 text-gray-600 flex-grow">{product.description}</p>
                                </div>
                                <div className="mt-auto p-8 pt-0">
                                     <Link to={product.path} className="font-semibold text-indigo-600 hover:text-indigo-800 inline-flex items-center group/link">
                                        Learn More
                                        <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>

            {/* Platform Pillars Section */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Platform Pillars</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Every product we build is founded on these core principles to ensure quality, reliability, and trust.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {platformPillars.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center commitment-card">
                            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 commitment-icon-bg">
                                <item.icon className="w-10 h-10 text-indigo-600 commitment-icon"/>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default ProductsPage;