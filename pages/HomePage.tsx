import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services, trustedCompanyLogos, globalLocations } from '../constants';
import Section from '../components/Section';
import { useInView } from '../hooks/useInView';
import { HeadsetIcon, CrownIcon, BusinessToolsIcon, EnterpriseIcon, StarIcon, HandshakeIcon, ToolsIcon, UserIcon, ChartUpIcon, LightbulbIcon, AffiliateIcon, TrackingIcon, AnalyzeIcon, DetectIcon, ScaleIcon, ArrowRightIcon } from '../components/icons/TechIcons';

const dynamicWords = ["Digital Reality", "SaaS Solutions", "AI-Powered Growth"];

// Component for animating numbers
const CountUpNumber: React.FC<{ end: number, duration?: number, className?: string }> = ({ end, duration = 2000, className }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.5 });
    const frameRef = useRef<number | null>(null);

    const animateCount = (startTime: number) => {
        const now = performance.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
            frameRef.current = requestAnimationFrame(() => animateCount(startTime));
        }
    };

    useEffect(() => {
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

    return <span ref={ref} className={className}>{count}</span>;
};

// Component for staggered service card animation
const AnimatedServiceCard: React.FC<{ service: typeof services[0], icon: React.FC<{className?: string}>, index: number }> = ({ service, icon: Icon, index }) => {
    const { ref, inView } = useInView({ threshold: 0.2 });
    return (
        <div 
            ref={ref}
            className={`stagger-in ${inView ? 'is-visible' : ''} h-full`} 
            style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-left flex flex-col h-full service-card">
                <div className="mb-6">
                    <Icon className="w-10 h-10 text-indigo-500 service-icon" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow">{service.description}</p>
            </div>
        </div>
    )
};

// Component for staggered feature card animation
const AnimatedFeatureCard: React.FC<{ feature: any, index: number, className?: string }> = ({ feature, index, className }) => {
    const { ref, inView } = useInView({ threshold: 0.2 });
    return (
        <div 
            ref={ref}
            className={`stagger-in ${inView ? 'is-visible' : ''} rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${className}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className='p-8'>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
            <div className={`mt-8 h-24 relative flex items-center justify-center overflow-hidden rounded-b-2xl`}>
              <div className={`absolute w-48 h-48 rounded-full ${feature.iconBgColor} opacity-20 blur-2xl`}></div>
              <div className={`relative w-16 h-16 rounded-full flex items-center justify-center ${feature.iconBgColor}`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
            </div>
        </div>
    )
};

const HomePage: React.FC = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayedWord, setDisplayedWord] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        const handleTyping = () => {
            const currentWord = dynamicWords[wordIndex];
            
            if (isDeleting) {
                setDisplayedWord(currentWord.substring(0, displayedWord.length - 1));
            } else {
                setDisplayedWord(currentWord.substring(0, displayedWord.length + 1));
            }

            if (!isDeleting && displayedWord === currentWord) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && displayedWord === '') {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
            }
        };

        const typingSpeed = isDeleting ? 100 : 150;
        const timeoutId = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [displayedWord, isDeleting, wordIndex]);
    
    const homePageServices = [
      { ...services[0], icon: HeadsetIcon },
      { ...services[1], icon: CrownIcon },
      { ...services[2], icon: BusinessToolsIcon },
      { ...services[3], icon: EnterpriseIcon },
    ];
    
    const whyChooseUsFeatures = [
        {
          icon: HandshakeIcon,
          title: 'Global Partnership',
          description: 'We build strong, collaborative partnerships with clients worldwide, ensuring our solutions are aligned with local market needs and global business objectives.',
          gradient: 'from-indigo-500/10 to-purple-500/10',
          activeClasses: 'bg-indigo-500 text-white',
          inactiveClasses: 'bg-white text-indigo-500',
        },
        {
          icon: StarIcon,
          title: 'For Startups to Enterprises',
          description: 'We cater to a diverse clientele, from agile startups needing rapid deployment to large enterprises requiring scalable, robust systems.',
          gradient: 'from-indigo-500/10 to-purple-500/10',
          activeClasses: 'bg-indigo-600 text-white',
          inactiveClasses: 'bg-white text-indigo-600',
        },
        {
          icon: UserIcon,
          title: 'Client-Centric Process',
          description: 'Our process is centered on your success. We begin with a deep discovery phase to understand your unique challenges and goals, ensuring a tailored solution.',
          gradient: 'from-purple-500/10 to-pink-500/10',
          activeClasses: 'bg-purple-500 text-white',
          inactiveClasses: 'bg-white text-purple-500',
        },
        {
          icon: LightbulbIcon,
          title: 'Agile & Innovative',
          description: 'We employ an agile methodology, allowing for flexibility and continuous innovation throughout the project lifecycle to keep you ahead of the curve.',
          gradient: 'from-pink-400/10 to-fuchsia-400/10',
          activeClasses: 'bg-pink-500 text-white',
          inactiveClasses: 'bg-white text-pink-500',
        },
        {
          icon: ChartUpIcon,
          title: 'Data-Driven Results',
          description: 'Every strategy and solution is backed by data, designed to deliver measurable growth and a strong return on your investment, no matter where you are.',
          gradient: 'from-violet-400/10 to-purple-400/10',
          activeClasses: 'bg-violet-500 text-white',
          inactiveClasses: 'bg-white text-violet-500',
        },
        {
          icon: ToolsIcon,
          title: 'Seamless Delivery',
          description: 'Our global team ensures a smooth, transparent, and efficient delivery process, from the initial concept to the final launch and beyond.',
          gradient: 'from-fuchsia-500/10 to-pink-500/10',
          activeClasses: 'bg-fuchsia-500 text-white',
          inactiveClasses: 'bg-white text-fuchsia-500',
        },
    ];
    const [activeFeatureIndex, setActiveFeatureIndex] = useState(1);

    const decorativeDots = [
      { color: 'bg-orange-400', size: 'w-2.5 h-2.5', angle: 45 },
      { color: 'bg-cyan-400', size: 'w-2 h-2', angle: 150 },
      { color: 'bg-yellow-300', size: 'w-2 h-2', angle: 220 },
      { color: 'bg-indigo-400', size: 'w-2.5 h-2.5', angle: 330 },
    ];

    const featureServices = [
      {
        icon: AffiliateIcon,
        title: 'Effortless affiliate management',
        description: 'Manage all of your advertisers, affiliates, offers, automated billing & invoicing in one place.',
        iconBgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
      },
      {
        icon: TrackingIcon,
        title: 'Reliable tracking',
        description: 'Track and analyze impressions, clicks and conversions in real time.',
        iconBgColor: 'bg-purple-100',
        iconColor: 'text-purple-600',
      },
      {
        icon: AnalyzeIcon,
        title: 'Analyze & predict',
        description: 'Get deep insights of your network performance.',
        iconBgColor: 'bg-violet-100',
        iconColor: 'text-violet-600',
      },
      {
        icon: DetectIcon,
        title: 'Detect',
        description: 'Comes with the best-in-industry fraud detection system.',
        iconBgColor: 'bg-green-100',
        iconColor: 'text-green-600',
      },
      {
        icon: ScaleIcon,
        title: 'Scale',
        description: 'With OffersHub Cloud, just pay for what you use.',
        iconBgColor: 'bg-red-100',
        iconColor: 'text-red-600',
      }
  ];
    
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative text-center min-h-screen flex flex-col items-center justify-center overflow-hidden w-screen ml-[calc(50%-50vw)]">
        <div aria-hidden="true" className="absolute inset-0 z-0 hero-fade-in">
          <div className="absolute bg-purple-200 rounded-full w-96 h-96 -top-20 -left-20 filter blur-3xl opacity-40 animate-bubble1" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bg-pink-200 rounded-full w-80 h-80 -bottom-20 -right-10 filter blur-3xl opacity-40 animate-bubble2" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bg-indigo-200 rounded-lg w-72 h-72 top-1/3 left-1/2 filter blur-3xl opacity-40 animate-bubble3" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight min-h-[160px] md:min-h-[150px] lg:min-h-[180px] hero-fade-in-up" style={{ animationDelay: '100ms' }}>
                Global Digital Solutions,
                <br />
                <span className="gradient-text">{displayedWord}</span>
                <span className="animate-pulse text-pink-400 inline-block">|</span>
            </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 hero-fade-in-up" style={{ animationDelay: '300ms' }}>
            We provide world-class digital services to clients across the globe, helping businesses from innovative startups to global enterprises achieve their goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 hero-fade-in-up" style={{ animationDelay: '500ms' }}>
            <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
              Get a Free Consultation
            </Link>
            <Link to="/services" className="px-8 py-3 text-base font-medium rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hero-fade-in-up" style={{ animationDelay: '700ms' }}>
            <div className="w-8 h-14 border-2 border-gray-600 rounded-full flex justify-center items-start p-1 animate-bounce-slow">
                <div className="w-1 h-3 bg-gray-600 rounded-full"></div>
            </div>
        </div>
      </section>

      {/* Services Snapshot Section */}
      <Section id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
          <p className="mt-4 text-lg text-gray-600">We blend creativity and technology to deliver outstanding results, no matter where you are.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {homePageServices.map((service, index) => (
             <AnimatedServiceCard key={index} service={service} icon={service.icon} index={index} />
          ))}
        </div>
      </Section>

      {/* Global Reach Section */}
      <Section id="global-reach">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Global Reach</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Serving clients across the globe from our strategic locations. We are proud to partner with businesses in the US, UK, UAE, India, Sri Lanka, Japan, and Europe.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
          <img src="https://images.unsplash.com/photo-1593623135967-33a05c8793b1?q=80&w=2000" alt="World map showing global reach" className="w-full h-auto opacity-70" />
          {globalLocations.map((loc, index) => {
              const { ref, inView } = useInView({ threshold: 0.5 });
              return (
                  <div 
                      key={loc.name} 
                      ref={ref}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 map-dot group"
                      style={{ top: loc.coords.top, left: loc.coords.left }}
                  >
                      <div 
                          className={`w-3 h-3 bg-indigo-600 rounded-full transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
                          style={{ animation: inView ? `pulse-dot 2s infinite` : 'none', animationDelay: `${index * 150}ms` }}
                      ></div>
                      <span className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-gray-800 text-white text-xs rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 -translate-y-2 map-dot-label`}>
                          {loc.name}
                      </span>
                  </div>
              )
          })}
        </div>
      </Section>
      
      {/* How We Work & Who We Serve Section */}
      <Section id="how-we-work" className="relative overflow-hidden pattern-bg">
        <div className="relative z-10 text-center mb-12">
            <div className="inline-block relative">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We Work & Who We Serve</h2>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-indigo-500 to-pink-500"></div>
            </div>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Our proven process is tailored to fit the needs of a diverse range of clients, from fast-moving startups to established global enterprises.
            </p>
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center mt-16">
            {/* Interactive Diagram */}
            <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                {/* Solid circle line */}
                <div className="absolute w-full max-w-md h-full max-h-md rounded-full border border-gray-200"></div>
                
                {/* Decorative dots */}
                {decorativeDots.map((dot, index) => {
                    const angle = (dot.angle * Math.PI) / 180;
                    const radius = 45; // 45% of parent dimensions
                    const x = 50 + radius * Math.cos(angle);
                    const y = 50 + radius * Math.sin(angle);
                    return (
                        <div
                            key={index}
                            className={`absolute ${dot.size} ${dot.color} rounded-full`}
                            style={{ top: `${y}%`, left: `${x}%`, transform: 'translate(-50%, -50%)' }}
                        ></div>
                    );
                })}

                {/* Central Text Circle */}
                <div key={activeFeatureIndex} className={`relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full flex flex-col items-center justify-center p-8 text-center transition-all duration-500 bg-gradient-to-br ${whyChooseUsFeatures[activeFeatureIndex].gradient} animate-fade-in`}>
                    <h3 className="text-2xl font-bold text-gray-900">{whyChooseUsFeatures[activeFeatureIndex].title}</h3>
                    <p className="mt-2 text-gray-600">{whyChooseUsFeatures[activeFeatureIndex].description}</p>
                </div>
                {/* Icons */}
                {whyChooseUsFeatures.map((feature, index) => {
                    const angle = (index / whyChooseUsFeatures.length) * 2 * Math.PI - Math.PI / 2;
                    const radius = 45; // 45% of parent dimensions
                    const x = 50 + radius * Math.cos(angle);
                    const y = 50 + radius * Math.sin(angle);
                    const isActive = index === activeFeatureIndex;
                    return (
                        <button 
                            key={feature.title} 
                            onClick={() => setActiveFeatureIndex(index)}
                            className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg z-10`}
                            style={{ top: `${y}%`, left: `${x}%`, transform: 'translate(-50%, -50%)' }}
                        >
                             <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? feature.activeClasses : feature.inactiveClasses}`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                        </button>
                    );
                })}
            </div>
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 text-center">
                <div className="p-4">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        <CountUpNumber end={100} />+
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-gray-500 tracking-wider uppercase">Global Clients</p>
                </div>
                <div className="p-4">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        <CountUpNumber end={7} />
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-gray-500 tracking-wider uppercase">Countries Served</p>
                </div>
                <div className="p-4">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        <CountUpNumber end={15} />+
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-gray-500 tracking-wider uppercase">Industries Served</p>
                </div>
                <div className="p-4">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        <CountUpNumber end={110} />+
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-gray-500 tracking-wider uppercase">Successful Projects</p>
                </div>
            </div>
        </div>
    </Section>
    
    {/* New Features Section */}
    <Section id="features" className="bg-gradient-to-b from-indigo-50/30 to-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Powerful Features, Simply Managed</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Everything you need to scale your business, all in one place.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {featureServices.map((feature, index) => (
          <AnimatedFeatureCard 
            key={index} 
            feature={feature} 
            index={index} 
            className={`${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}
          />
        ))}
      </div>
    </Section>
      
      {/* Client Logos Section */}
      <Section id="clients">
        <div className="bg-gray-50/50 backdrop-blur-sm rounded-2xl py-12 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Trusted by Global Innovators</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Join over 1,000 companies trusting our software for seamless collaboration and boosted productivity. Experience it today!
            </p>
            <div className="mt-10 w-full inline-flex flex-nowrap overflow-hidden fade-edges scroller">
                 <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll">
                    {trustedCompanyLogos.map((company, index) => (
                        <li key={`${company.name}-${index}`}>
                            <company.component className="h-8 md:h-10 w-auto" />
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll" aria-hidden="true">
                    {trustedCompanyLogos.map((company, index) => (
                        <li key={`${company.name}-${index}-clone`}>
                            <company.component className="h-8 md:h-10 w-auto" />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <Link to="/contact" className="inline-block px-8 py-3 text-base font-medium rounded-full text-gray-800 bg-white shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    See more Customers
                </Link>
            </div>
        </div>
      </Section>

      {/* Final CTA Banner */}
       <Section>
         <div className="relative text-center bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl py-16 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
            <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Ready to build the future?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100">Let's discuss how our innovative solutions can elevate your business.</p>
                <Link to="/contact" className="mt-8 inline-block px-10 py-4 border border-transparent text-lg font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                    Let's Talk
                </Link>
            </div>
         </div>
       </Section>
    </div>
  );
};

export default HomePage;