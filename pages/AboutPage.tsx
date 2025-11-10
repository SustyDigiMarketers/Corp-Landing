
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { team } from '../constants';
import { FlagIcon, BarChartProcessIcon, BoxIcon, DesktopIcon, RocketIcon, ChartIcon, LightbulbIcon, HandshakeIcon, BookOpenIcon, HeartbeatIcon, LeafIcon, ShieldCheckIcon, GlobeIcon } from '../components/icons/TechIcons';
import { useInView } from '../hooks/useInView';
import PageHeader from '../components/PageHeader';

const corePrinciples = [
    {
      number: '01',
      icon: DesktopIcon,
      title: 'Our Mission',
      description: 'To architect and deploy intelligent, scalable digital ecosystems that empower our clients to dominate their markets and achieve sustainable, long-term growth.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      number: '02',
      icon: RocketIcon,
      title: 'Our Vision',
      description: 'To be the globally recognized leader in integrated digital solutions, pioneering the seamless fusion of AI-driven marketing, enterprise-grade software, and user-centric design.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      icon: ChartIcon,
      title: 'Our Values',
      description: 'Partnership-driven innovation, data-backed excellence, and an unwavering commitment to crafting future-proof solutions are the cornerstones of every project we undertake.',
      color: 'from-pink-500 to-pink-600',
    },
];

const cultureItems = [
    { icon: LightbulbIcon, title: 'Innovation at Heart', description: 'We thrive on curiosity and continuously explore emerging technologies like AI to pioneer groundbreaking SaaS platforms and marketing strategies.' },
    { icon: HandshakeIcon, title: 'Radical Collaboration', description: 'Our global team of experts in development, UI/UX, and marketing works in synergy, ensuring every project benefits from a holistic, multi-disciplinary perspective.' },
    { icon: BookOpenIcon, title: 'Continuous Learning', description: 'The digital landscape evolves at lightspeed. We are committed to mastering new technologies from our tech stack to deliver cutting-edge solutions.' },
    { icon: HeartbeatIcon, title: 'Client-Centric Success', description: 'We prioritize building lasting partnerships, embedding ourselves in our clients\' success and fostering a supportive environment for strategic thinking to flourish.' },
];

const processSteps = [
    { icon: FlagIcon, title: 'Discovery & Strategy', description: 'We begin with a deep dive into your market position to architect a bespoke strategy, whether for a new SaaS product, enterprise software, or a global marketing campaign.', color: 'text-indigo-600', align: 'md:self-start' },
    { icon: BarChartProcessIcon, title: 'Design & Development', description: 'Our world-class UI/UX designers and full-stack developers collaborate to build your vision, crafting high-performance, scalable platforms from custom CRMs to engaging websites.', color: 'text-purple-600', align: 'md:self-end' },
    { icon: BoxIcon, title: 'Launch & Growth', description: 'Deployment is just the beginning. We provide ongoing support, data-driven optimization, and scalable hosting to ensure your digital assets evolve and deliver tangible ROI.', color: 'text-pink-600', align: 'md:self-start' },
];

const directorColors = [
    { bg: 'bg-indigo-700', from: 'from-indigo-800', via: 'via-indigo-800/80' },
    { bg: 'bg-purple-700', from: 'from-purple-800', via: 'via-purple-800/80' },
    { bg: 'bg-pink-700', from: 'from-pink-800', via: 'via-pink-800/80' },
    { bg: 'bg-fuchsia-700', from: 'from-fuchsia-800', via: 'via-fuchsia-800/80' },
];

const timelineEvents = [
    {
        year: '2023',
        title: 'Company Foundation',
        description: 'SustyDigi was founded to integrate AI into bespoke software and marketing solutions for global businesses.',
    },
    {
        year: 'Q1 2024',
        title: 'First Enterprise Project',
        description: 'Launched our first major enterprise project: a custom Hospital Management System, streamlining operations for a leading healthcare provider.',
    },
    {
        year: 'Q2 2024',
        title: 'Service Expansion',
        description: 'Expanded our service offerings to include specialized Social Media Marketing and Digital Billboard campaigns, amplifying client reach.',
    },
    {
        year: 'Q3 2024',
        title: 'Flagship Product Launch',
        description: 'Successfully launched our flagship SaaS product, SustyCRM, providing an all-in-one client relationship tool for modern enterprises.',
    },
     {
        year: 'Q4 2024',
        title: 'Global Footprint',
        description: 'Opened our first international strategic location in the UAE to better serve our growing global client base and tap into new markets.',
    },
];

const commitmentItems = [
    { icon: LeafIcon, title: 'Sustainable Tech', description: 'We build efficient, scalable cloud architectures, creating high-performance digital solutions that minimize resource consumption.' },
    { icon: ShieldCheckIcon, title: 'Ethical AI', description: 'Our commitment to ethical AI means developing transparent and secure automation and analytics tools that respect user privacy.' },
    { icon: GlobeIcon, title: 'Open Innovation', description: 'We actively leverage open-source technologies like React and Node.js, fostering collaboration to build a more robust digital future.' },
];


interface ProcessStepProps {
    step: {
        icon: React.FC<React.SVGProps<SVGSVGElement>>;
        title: string;
        description: string;
        color: string;
        align: string;
    };
    index: number;
}
const ProcessStep: React.FC<ProcessStepProps> = ({ step, index }) => {
    const { ref, inView } = useInView({ threshold: 0.3 });

    return (
        <div 
            ref={ref}
            className={`w-full md:w-1/3 max-w-sm flex flex-col items-center text-center ${step.align} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${200 + index * 200}ms` }}
        >
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
                <div className="relative w-24 h-24 flex items-center justify-center mb-4 mx-auto">
                    <svg viewBox="0 0 100 86.6" className="absolute w-full h-full drop-shadow-lg filter">
                        <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="white"/>
                    </svg>
                    <step.icon className={`w-10 h-10 ${step.color} z-10`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
        </div>
    );
};

interface TimelineItemProps {
    data: {
        year: string;
        title: string;
        description: string;
    };
    index: number;
}
const TimelineItem: React.FC<TimelineItemProps> = ({ data, index }) => {
    const { ref, inView } = useInView({ threshold: 0.4 });
    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative w-full md:w-1/2 mb-8 md:mb-12 flex items-center ${isLeft ? 'md:self-start' : 'md:self-end'}`}
        >
            <div className={`w-full transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <p className="text-sm font-semibold text-indigo-600 mb-1">{data.year}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{data.title}</h3>
                    <p className="text-gray-600">{data.description}</p>
                </div>
            </div>
            <div className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-4 border-indigo-500 z-10 
                md:${isLeft ? 'right-[-10px]' : 'left-[-10px]'}
                left-[-10px] md:left-auto
                transition-transform duration-500 ${inView ? 'scale-100' : 'scale-0'}`}
            ></div>
        </div>
    );
};


const AboutPage: React.FC = () => {
  const { ref: processRef, inView: processInView } = useInView({ threshold: 0.3 });
  const { ref: workspaceRef, inView: workspaceInView } = useInView({ threshold: 0.2 });
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        if (!timelineContainerRef.current) return;
        const rect = timelineContainerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        setTimelineProgress(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <>
      <PageHeader
        title="Architects of Digital Growth"
        subtitle="We are a global collective of strategists, designers, and engineers dedicated to crafting bespoke digital ecosystems. From intelligent SaaS products to data-driven marketing, we build the solutions that propel businesses forward."
      />
      <div className="space-y-20">
        <Section>
          <div className="text-center mb-16 md:mb-24">
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                  OUR CORE <span className="font-light text-gray-500">PRINCIPLES</span>
              </h2>
          </div>
          <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-1/4 w-1/2 h-px bg-gray-200 -translate-y-1/2 z-[-1]"></div>
              <div className="grid lg:grid-cols-3 gap-y-24 lg:gap-x-8">
                  {corePrinciples.map((item, index) => (
                      <div key={index} className="relative flex justify-center">
                          <div className="relative w-72 h-72">
                              {/* Outer grey circle */}
                              <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>

                              {/* Connection dots */}
                               <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white"></div>
                               <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 border-2 border-white"></div>
                              
                              {/* Main colored circle */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60">
                                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color} flex flex-col justify-center items-center p-4 text-center shadow-xl`}>
                                      <item.icon className="h-8 w-8 text-white mb-2" />
                                      <h3 className="font-bold text-white text-lg uppercase">{item.title}</h3>
                                      <p className="text-white/90 text-sm mt-1">{item.description}</p>
                                  </div>
                              </div>

                              {/* Number bubble */}
                              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                      <span className="font-bold text-2xl text-gray-700">{item.number}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </Section>
        
        {/* Our Culture Section */}
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Culture: The SustyDigi DNA</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                    Our unique selling proposition isn't just what we build; it's how we build it. Our culture is the driving force behind our innovation and collective success.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cultureItems.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8"/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
                ))}
            </div>
        </Section>

        {/* Our Journey & Process Section */}
        <Section id="process">
          <div ref={processRef}>
              <div className="text-center mb-16 md:mb-24">
                <p className="text-sm font-semibold text-indigo-600 tracking-widest uppercase">Our Unique Workflow</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Our Integrated Process</h2>
              </div>

              <div className="relative">
                {/* Faded Background Numbers */}
                <div aria-hidden="true" className="hidden lg:block absolute inset-0">
                  <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 text-[16rem] font-black text-gray-100/80 z-0">1</div>
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[16rem] font-black text-gray-100/80 z-0">2</div>
                  <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 text-[16rem] font-black text-gray-100/80 z-0">3</div>
                </div>
                
                {/* Wavy line SVG for desktop */}
                <div className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 z-0">
                   <svg width="100%" height="100%" viewBox="0 0 1200 200" preserveAspectRatio="none">
                       <path d="M0 100 C 200 0, 400 200, 600 100 C 800 0, 1000 200, 1200 100" stroke="#a5b4fc" strokeWidth="3" fill="none" className={processInView ? 'line-drawing' : ''} />
                   </svg>
                </div>

                {/* Steps */}
                <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 z-10">
                  {processSteps.map((step, index) => (
                      <ProcessStep key={index} step={step} index={index} />
                  ))}
                </div>
              </div>
          </div>
        </Section>

        <Section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Board Of Directors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => {
                  const color = directorColors[index % directorColors.length];
                  return (
                    <div key={member.name} className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg director-card">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 director-card-overlay"></div>
                        <div className={`absolute top-0 left-0 h-full w-[4.5rem] ${color.bg} rounded-tr-[50px] transition-all duration-500 group-hover:w-full group-hover:rounded-tr-none`}>
                          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-90 text-white/30 text-4xl font-extrabold uppercase tracking-[.2em] whitespace-nowrap transition-opacity duration-300 group-hover:opacity-0">
                              Directors
                          </span>
                        </div>
                        <div className="info-container">
                            <h3 className="text-white text-2xl font-bold">{member.name}</h3>
                            <p className="text-white/90 text-sm">{member.role}</p>
                        </div>
                    </div>
                  )
              })}
          </div>
          <div className="mt-12 max-w-4xl mx-auto text-center text-gray-600">
              <p>
                  Our leadership team unites decades of experience in technology, marketing, and business strategy. They are the visionaries guiding our company, inspiring our teams, and driving our commitment to delivering exceptional results while pioneering the future of digital innovation.
              </p>
          </div>
        </Section>
        
        {/* Our Workspace Section */}
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Workspace</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                    A modern, collaborative environment where creativity and innovation flourish.
                </p>
            </div>
            <div ref={workspaceRef} className="grid grid-cols-6 grid-rows-2 gap-4 h-96">
                <div className={`col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ease-out ${workspaceInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Collaborative workspace" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                </div>
                <div className={`col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ease-out ${workspaceInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" alt="Modern office meeting area" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                </div>
                <div className={`col-span-3 row-span-1 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ease-out ${workspaceInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Focused work stations" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                </div>
            </div>
        </Section>

        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Growth Timeline</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              A journey of our key milestones and achievements.
            </p>
          </div>

          <div ref={timelineContainerRef} className="relative max-w-5xl mx-auto pl-8 md:pl-0">
            {/* Vertical line */}
            <div className="absolute top-0 h-full w-0.5 bg-gray-200 left-4 md:left-1/2 md:-translate-x-1/2">
                <div className="w-full bg-indigo-500" style={{ height: `${timelineProgress * 100}%` }}></div>
            </div>
            
            <div className="flex flex-col items-center">
              {timelineEvents.map((event, index) => (
                <TimelineItem key={index} data={event} index={index} />
              ))}
            </div>
          </div>
        </Section>

        {/* Commitment to the Future Section */}
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Commitment to the Future</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                    Our market value and uniqueness stem from our dedication to building a better, more sustainable, and equitable digital world.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {commitmentItems.map((item, index) => (
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

        {/* Join Our Team CTA */}
        <Section>
            <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl py-16 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full"></div>
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Join Our Team</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-purple-100">
                        Passionate about shaping the future of digital technology? We are always seeking exceptional talent to join our pioneering journey.
                    </p>
                    <Link to="/career" className="mt-8 inline-block px-10 py-4 border border-transparent text-lg font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105">
                        Explore Careers
                    </Link>
                </div>
            </div>
        </Section>
      </div>
    </>
  );
};

export default AboutPage;