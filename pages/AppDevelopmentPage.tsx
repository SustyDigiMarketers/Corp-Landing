import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { useInView } from '../hooks/useInView';
import { appStats, appFeatures, appWorkSteps } from '../constants';
import { ArrowRightIcon } from '../components/icons/TechIcons';
import type { AppStat } from '../types';

const CountUpNumber: React.FC<{ end: number, duration?: number, className?: string, suffix?: string }> = ({ end, duration = 2000, className, suffix = '' }) => {
    const [count, setCount] = React.useState(0);
    const { ref, inView } = useInView({ threshold: 0.5 });
    const frameRef = React.useRef<number | null>(null);

    const animateCount = (startTime: number) => {
        const now = performance.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
            frameRef.current = requestAnimationFrame(() => animateCount(startTime));
        }
    };

    React.useEffect(() => {
        if (inView) {
            const startTime = performance.now();
            frameRef.current = requestAnimationFrame(() => animateCount(startTime));
        }
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView, end, duration]);

    return <span ref={ref} className={className}>{count.toLocaleString()}{suffix}</span>;
};


const AppDevelopmentPage: React.FC = () => {
    const { ref: featuresRef, inView: featuresInView } = useInView({ threshold: 0.2 });
    const { ref: howItWorksRef, inView: howItWorksInView } = useInView({ threshold: 0.3 });
    const { ref: dataManagementRef, inView: dataManagementInView } = useInView({ threshold: 0.3 });

    return (
        <>
            {/* Custom Hero Section for App Page */}
            <section className="relative w-screen ml-[calc(50%-50vw)] pt-24 pb-12 overflow-hidden">
                <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-bl-full z-0"></div>
                
                <div className="relative z-10 w-full md:w-4/5 mx-auto px-4 md:px-0 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Pioneering Futuristic Mobile Applications</h1>
                        <p className="mt-4 text-gray-600">
                            We transform visionary ideas into exceptional mobile experiences. From sleek native apps to powerful cross-platform solutions, we build the future of digital interaction.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:opacity-90 transition-opacity shadow-lg transform hover:scale-105">
                                Get a Free Consultation
                            </Link>
                            <Link to="/about#process" className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-md hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105">
                                Explore Our Process
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop" alt="App screenshot on a phone" className="max-w-xs mx-auto animate-float" />
                    </div>
                </div>
                
                {/* Stats Bar */}
                <div className="relative z-10 w-full md:w-4/5 mx-auto px-4 md:px-0 mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {appStats.map((stat, index) => (
                            <div key={index} className="text-gray-700">
                                <p className="text-3xl md:text-4xl font-bold text-purple-600">
                                    <CountUpNumber end={stat.count} suffix={stat.suffix} />
                                </p>
                                <p className="text-sm font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="space-y-24">
                {/* Core Technology & Features Section */}
                <Section>
                    <div ref={featuresRef} className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Technology & Feature Expertise</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                            We leverage cutting-edge technologies to build robust, scalable, and feature-rich applications that deliver tangible business value.
                        </p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        {appFeatures.map((feature, index) => (
                            <div key={index} className={`stagger-in ${featuresInView ? 'is-visible' : ''} p-8 bg-white rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2`} style={{ transitionDelay: `${index * 150}ms`}}>
                                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mx-auto mb-6">
                                    <feature.icon className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Our Development Lifecycle Section */}
                <Section>
                    <div ref={howItWorksRef} className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`flex justify-center transition-all duration-700 ${howItWorksInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                             <img src="https://images.unsplash.com/photo-1587280459925-7a354b152d13?q=80&w=800&auto=format&fit=crop" alt="App workflow on a phone" className="max-w-xs mx-auto animate-float" />
                        </div>
                        <div className={`transition-all duration-700 ${howItWorksInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Agile Development Lifecycle</h2>
                            <div className="mt-8 relative space-y-8">
                                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-transparent"></div>
                                {appWorkSteps.map((step, index) => (
                                    <div key={index} className={`stagger-in ${howItWorksInView ? 'is-visible' : ''} flex items-start gap-6 group`} style={{ transitionDelay: `${index * 200}ms`}}>
                                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white border-2 border-purple-200 rounded-full z-10">
                                            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full">
                                                <step.icon className={`w-6 h-6 transition-transform duration-300 transform group-hover:scale-110 group-hover:-rotate-12 ${howItWorksInView ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${200 + index * 200}ms` }} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800">{step.title}</h4>
                                            <p className="text-gray-600 mt-1">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Data-Driven Insights & Analytics Section */}
                <Section>
                     <div ref={dataManagementRef} className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`lg:order-last flex justify-center transition-all duration-700 ${dataManagementInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop" alt="App data management UI" className="max-w-md mx-auto rounded-xl shadow-2xl" />
                        </div>
                        <div className={`transition-all duration-700 ${dataManagementInView ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Data-Driven Insights & Analytics</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                We integrate powerful analytics to provide a centralized dashboard for tracking user engagement, performance metrics, and key business KPIs, empowering you to make informed decisions.
                            </p>
                            <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-md hover:opacity-90 transition-opacity shadow-lg transform hover:scale-105">
                                Start Your Project <ArrowRightIcon className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default AppDevelopmentPage;