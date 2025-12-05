




import React, { useRef, useEffect, useState } from 'react';
import { Page, Testimonial } from '../types';
import { homeData } from '../constants';
import Button from '../components/Button';
import Card from '../components/Card';
import { 
    AIIcon, ClientCentricIcon, ResultsIcon, InnovationIcon, IntegrityIcon, ExcellenceIcon, 
    AppDevIcon, HostingIcon, CybersecurityIcon, DesignIcon, WebDevIcon, MarketingIcon, 
    GrowthIcon, InvestmentIcon, MissionIcon, LaunchIcon, 
    CheckCircleIcon, LineageIcon, MetricsIcon, ShareIcon, ArrowRightIcon,
    DesktopIcon, BellIcon, MailIcon, ApiReferenceIcon,
    UsersGroupIcon, HealthMonitorIcon, CreditCardIcon, BuildingIcon, DollarSignIcon
} from '../components/Icons';


interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    AIIcon, ClientCentricIcon, ResultsIcon, InnovationIcon, IntegrityIcon, ExcellenceIcon,
    AppDevIcon, HostingIcon, CybersecurityIcon, DesignIcon, WebDevIcon, MarketingIcon,
    GrowthIcon, InvestmentIcon, MissionIcon, LaunchIcon,
    CheckCircleIcon, LineageIcon, MetricsIcon, ShareIcon, DesktopIcon, BellIcon, MailIcon, ApiReferenceIcon,
    UsersGroupIcon, HealthMonitorIcon, CreditCardIcon, BuildingIcon, DollarSignIcon
};

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    if (scrollerRef.current) {
      const scrollWidth = scrollerRef.current.scrollWidth / 2;
      const speed = 50; // pixels per second
      const duration = scrollWidth / speed;
      scrollerRef.current.style.animationDuration = `${duration}s`;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setActiveService((prev) => (prev + 1) % homeData.services.length);
    }, 5000); // Increased to 5 seconds for slower rotation
    return () => clearInterval(interval);
  }, []);

  const currentService = homeData.services[activeService];

  return (
    <div className="space-y-24 md:space-y-32 pb-24 animate-fade-in-up">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-700">
          {homeData.hero_heading}
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-brand-text-secondary">
          {homeData.hero_subheading}
        </p>
        <div className="mt-8">
          <Button onClick={() => navigateTo(Page.Contact)}>{homeData.cta_primary}</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left column: Image collage */}
          <div className="relative h-[550px] hidden lg:block">
            {/* Image Grid */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[500px] grid grid-cols-5 gap-4">
                <div className="col-span-3 h-full pt-8">
                    <img src={homeData.who_we_are.images.main} alt="Product lifestyle" className="w-full h-full object-cover rounded-2xl shadow-2xl transform -rotate-3"/>
                </div>
                <div className="col-span-2 h-full space-y-4">
                    <img src={homeData.who_we_are.images.sub1} alt="Product box" className="w-full h-1/2 object-cover rounded-2xl shadow-2xl transform rotate-3"/>
                    <img src={homeData.who_we_are.images.sub2} alt="Product dropper" className="w-full h-1/2 object-cover rounded-2xl shadow-2xl transform -rotate-2"/>
                </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute top-8 right-0 bg-white p-4 rounded-xl shadow-2xl w-60 border border-gray-100 transform rotate-2 z-10">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-brand-text">{homeData.who_we_are.stats.sales}</span>
                    {(() => {
                        const TrendIcon = iconMap[homeData.who_we_are.stats.trend_icon];
                        return TrendIcon ? <TrendIcon className="w-6 h-6 text-green-500"/> : null;
                    })()}
                </div>
                <p className="text-xs text-brand-text-secondary mt-1">{homeData.who_we_are.stats.sales_desc}</p>
            </div>
            <div className="absolute bottom-8 left-0 bg-white p-4 rounded-xl shadow-2xl w-48 border border-gray-100 transform -rotate-3 z-10">
                <p className="text-xs font-semibold">Happy Clients</p>
                <div className="flex -space-x-2 mt-2">
                    {homeData.who_we_are.stats.avatars.map((avatar, i) => (
                         <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={avatar} alt={`client ${i+1}`}/>
                    ))}
                </div>
            </div>
          </div>
          {/* Right column: Text content */}
          <div className="lg:pl-12">
            <span className="text-sm font-bold uppercase text-brand-accent">{homeData.who_we_are.tagline}</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-text">{homeData.who_we_are.title}</h2>
            <p className="mt-4 text-brand-text-secondary">{homeData.who_we_are.content}</p>
            <Button onClick={() => navigateTo(Page.About)} className="mt-8">{homeData.who_we_are.button_text}</Button>
          </div>
        </div>
      </section>

      {/* Features Section 1 */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`${homeData.features[0].image_side === 'right' ? 'md:order-last' : ''}`}>
            <h2 className="text-3xl font-bold">{homeData.features[0].title}</h2>
            <p className="mt-4 text-brand-text-secondary">{homeData.features[0].description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
                {homeData.features[0].sources?.map(source => <span key={source} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">{source}</span>)}
            </div>
            <a href="#" className="mt-6 inline-flex items-center font-semibold text-brand-accent">{homeData.features[0].link_text} <ArrowRightIcon className="w-4 h-4 ml-2"/></a>
          </div>
          <div>
            <img src={homeData.features[0].image} alt="Data Sync" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>
      
      {/* Features Section 2 */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`${homeData.features[1].image_side === 'right' ? 'md:order-last' : ''}`}>
            <h2 className="text-3xl font-bold">{homeData.features[1].title}</h2>
            <p className="mt-4 text-brand-text-secondary">{homeData.features[1].description}</p>
             <div className="mt-6 grid grid-cols-2 gap-4">
                {homeData.features[1].collaboration_points?.map(point => {
                    const Icon = iconMap[point.icon];
                    return (
                        <div key={point.text} className="flex items-center space-x-2">
                            {Icon && <Icon className="w-5 h-5 text-green-500"/>}
                            <span className="text-brand-text-secondary">{point.text}</span>
                        </div>
                    )
                })}
            </div>
            <a href="#" className="mt-6 inline-flex items-center font-semibold text-brand-accent">{homeData.features[1].link_text} <ArrowRightIcon className="w-4 h-4 ml-2"/></a>
          </div>
          <div className="relative h-64">
             {homeData.features[1].avatars?.map((avatar, i) => {
                const positions = [
                    'top-0 left-10', 'top-10 right-0', 'bottom-0 right-10', 'bottom-10 left-0', 'top-1/2 -left-10', 'bottom-1/4 right-1/4'
                ];
                return <img key={i} src={avatar} className={`w-12 h-12 rounded-full absolute shadow-lg border-2 border-white ${positions[i]}`}/>
             })}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-brand-accent text-lg">+10K Users</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">{homeData.services_title}</h2>
          <p className="mt-4 text-brand-text-secondary max-w-xl mx-auto">{homeData.services_subtitle}</p>
          
          <div className="max-w-4xl mx-auto mt-12">
             <div className="bg-white border border-blue-100 rounded-3xl p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center transition-all duration-500">
                {/* Image Side */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                   {currentService.image && (
                       <img 
                           key={currentService.image} 
                           src={currentService.image} 
                           alt={currentService.title} 
                           className="w-full h-64 object-cover rounded-2xl shadow-md transition-opacity duration-500" 
                       />
                   )}
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-2/3 text-left flex flex-col h-full">
                   <p className="text-gray-400 text-sm font-medium mb-2 animate-fade-in-up">{currentService.date}</p>
                   <h3 className="text-3xl font-bold text-brand-text mb-4 animate-fade-in-up">{currentService.title}</h3>
                   <p className="text-brand-text-secondary mb-6 leading-relaxed animate-fade-in-up delay-100">{currentService.description}</p>
                   
                   <div className="mt-auto">
                       <button className="bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-brand-accent/30 transition-all transform hover:-translate-y-1 text-sm uppercase tracking-wider">
                          Read More
                       </button>
                       
                       {/* Indicators */}
                       <div className="flex space-x-2 mt-8">
                          {homeData.services.map((_, idx) => (
                             <button 
                               key={idx}
                               onClick={() => setActiveService(idx)}
                               className={`h-2 rounded-full transition-all duration-300 ${activeService === idx ? 'w-8 bg-brand-accent' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                               aria-label={`Go to slide ${idx + 1}`}
                             />
                          ))}
                       </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {homeData.stats.map(stat => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-brand-accent">{stat.value}{stat.suffix}</p>
              <p className="mt-2 text-brand-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Product</h2>
          <p className="mt-4 text-brand-text-secondary max-w-xl mx-auto">
            Explore our suite of SaaS solutions designed to elevate your business.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {homeData.products.map(product => {
            const Icon = iconMap[product.icon];
            return (
              <div key={product.title} className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 h-[260px] overflow-hidden transform hover:-translate-y-1">
                  {/* Backgrounds */}
                  <div className="absolute inset-0 bg-white z-0"></div>
                  <div className={`absolute inset-0 ${product.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>

                  {/* Content */}
                  <div className="relative z-20 h-full flex flex-col p-6">
                      {/* Icon */}
                      <div className="mb-4">
                          <div className="w-12 h-12 flex items-center justify-center">
                              {Icon && <Icon className={`w-8 h-8 transition-colors duration-300 ${product.wave_color} group-hover:text-white`} />}
                          </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-1 text-gray-800 group-hover:text-white transition-colors duration-300">
                          {product.title}
                      </h3>

                      {/* Description (Hidden by default, Visible on Hover) */}
                      <div className="relative flex-grow">
                          {/* Tags State (Default) */}
                          <div className="absolute top-0 left-0 w-full transition-all duration-300 opacity-100 group-hover:opacity-0 transform group-hover:translate-y-[-10px] delay-0 group-hover:delay-0">
                               <div className="flex flex-wrap gap-2 mt-2">
                                  {product.tags.map(tag => (
                                      <span key={tag} className="text-xs font-bold uppercase tracking-widest text-gray-400">
                                          {tag}
                                      </span>
                                  ))}
                               </div>
                          </div>

                          {/* Description State (Hover) */}
                          <div className="absolute top-0 left-0 w-full transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 delay-100">
                              <p className="text-white/90 text-sm leading-relaxed">
                                  {product.description}
                              </p>
                          </div>
                      </div>

                      {/* Bottom Arrow (Only on Hover) */}
                      <div className="mt-auto h-6 relative">
                          <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 delay-200">
                              <ArrowRightIcon className="w-6 h-6 text-white" />
                          </div>
                      </div>
                  </div>

                  {/* Wave (Only on Default) */}
                  <div className={`absolute bottom-0 left-0 w-full transition-transform duration-500 transform translate-y-0 group-hover:translate-y-full z-10 ${product.wave_color}`}>
                      <svg viewBox="0 0 1440 320" className="w-full h-16 sm:h-20 opacity-80" preserveAspectRatio="none">
                          <path fill="currentColor" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                      </svg>
                  </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        
        <div className="mt-12 relative">
            <div className="flex justify-center items-center overflow-hidden py-10 perspective-1000">
                {/* 3D Carousel Implementation */}
                <div className="relative w-full max-w-5xl h-80 flex items-center justify-center">
                    <div ref={scrollerRef} className="flex w-max animate-scroll-left">
                        {[...homeData.testimonials, ...homeData.testimonials].map((testimonial: Testimonial, index) => (
                            <div key={index} className="w-80 mx-6 flex-shrink-0 transform transition-all duration-500 hover:scale-105">
                                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center h-full">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg -mt-12 mb-4">
                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-gray-600 italic mb-4 line-clamp-3">"{testimonial.feedback}"</p>
                                    <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-blue-500 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Static Testimonials Grid below carousel */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                {homeData.testimonials.map((t, i) => (
                    <div key={i} className="space-y-2">
                        <h3 className="font-bold text-xl">{t.name.split(',')[0]}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {t.feedback}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;