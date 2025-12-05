import React from 'react';
import { donationPageData } from '../constants';
import { 
    HeartIcon, 
    HandHoldingHeartIcon, 
    AdoptionIcon, 
    EducationIcon, 
    VolunteeringIcon, 
    ArrowRightIcon,
    ChevronDownIcon
} from '../components/Icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    HandHoldingHeartIcon,
    AdoptionIcon,
    EducationIcon,
    VolunteeringIcon
};

const DonationPage: React.FC = () => {
    const { hero, helpSection, categories, volunteerSection, successStories, report } = donationPageData;

    return (
        <div className="bg-white font-sans animate-fade-in-up">
            {/* Header/Hero Section */}
            <section className="relative bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
                    <div className="text-center mb-12">
                        <HeartIcon className="h-12 w-12 text-[#D32F2F] mx-auto mb-4" />
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 tracking-wide">{hero.title}</h1>
                        <p className="text-sm font-bold tracking-[0.2em] text-gray-500 mt-2">{hero.subtitle}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img src={hero.image} alt="Charity Children" className="w-full h-auto rounded-none shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
                            {/* Stats Overlay Text */}
                            <div className="absolute top-8 left-8 max-w-xs text-white drop-shadow-md">
                                <p className="font-bold text-lg leading-tight mb-1">{hero.statDesc}</p>
                                <p className="font-bold text-2xl text-[#D32F2F] leading-tight bg-white/90 px-2 inline-block">{hero.statHighlight}</p>
                            </div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="inline-block bg-[#D32F2F] text-white p-1">
                                <div className="border border-white p-6 flex flex-col items-center">
                                    <h3 className="text-2xl font-bold uppercase mb-2">Donate Now!</h3>
                                    <div className="w-full h-px bg-white/50 my-4"></div>
                                    <p className="text-xs uppercase opacity-80">{hero.donationLabel}</p>
                                    <p className="text-4xl font-bold mt-1">{hero.donationAmount}</p>
                                    <button className="mt-6 bg-white text-[#D32F2F] hover:bg-gray-100 p-2 rounded-full transition-colors">
                                        <ChevronDownIcon className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Give a Helping Hand Section */}
            <section className="py-24 border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {helpSection.images.map((img, idx) => (
                                <img key={idx} src={img} alt={`Charity ${idx}`} className="w-full h-40 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            ))}
                        </div>
                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 leading-tight mb-6">
                                {helpSection.title}
                            </h2>
                            <p className="text-gray-500 mb-6 leading-relaxed text-sm font-serif italic">
                                {helpSection.description}
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {helpSection.subDescription}
                            </p>
                            <a href="#" className="text-xs font-bold text-gray-800 uppercase tracking-widest hover:text-[#D32F2F] flex items-center group">
                                {helpSection.linkText} <ArrowRightIcon className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {categories.map((cat, idx) => {
                            const Icon = iconMap[cat.icon];
                            return (
                                <div key={idx} className="flex flex-col items-start group">
                                    <div className="mb-4 text-[#D32F2F] group-hover:scale-110 transition-transform duration-300">
                                        {Icon && <Icon className="h-12 w-12 stroke-1" />}
                                    </div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#D32F2F] mb-3 pb-2 border-b border-gray-200 w-full group-hover:border-[#D32F2F] transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed font-serif italic">
                                        {cat.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section className="flex flex-col lg:flex-row">
                {/* Left: Donation Box Image */}
                <div className="lg:w-1/2 bg-gray-100 relative min-h-[400px] flex items-center justify-center overflow-hidden">
                    <img src={volunteerSection.volunteerImage} alt="Volunteer" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
                    <div className="relative z-10 bg-white p-8 max-w-xs shadow-lg text-center transform -rotate-2">
                        <h3 className="text-2xl font-bold font-serif text-gray-800 uppercase border-b-2 border-gray-200 pb-4 mb-4">Donation<br/>Box</h3>
                        <p className="text-xs text-gray-500">SUPPORT US</p>
                    </div>
                </div>
                {/* Right: Red Banner */}
                <div className="lg:w-1/2 bg-[#D32F2F] text-white p-12 lg:p-20 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{volunteerSection.title}</h2>
                    <p className="text-white/80 mb-6 font-serif italic text-sm">{volunteerSection.description}</p>
                    <p className="text-xs tracking-widest uppercase opacity-70 mb-10 leading-loose border-t border-white/20 pt-6">
                        {volunteerSection.subText}
                    </p>
                    
                    <div className="flex items-center">
                        <span className="text-lg font-bold tracking-widest uppercase mr-4 transform -rotate-90 origin-center translate-y-12 block h-0 w-20">Join Us!</span>
                        <div className="border-l border-white/30 pl-8 ml-8">
                             {/* Styling element */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-serif font-bold uppercase tracking-widest text-gray-800 mb-12">Success Stories:</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {successStories.map((story, idx) => (
                            <div key={idx} className="relative pl-6 border-l-2 border-gray-200 hover:border-[#D32F2F] transition-colors duration-300">
                                <span className="absolute top-0 left-0 -ml-1.5 mt-0 text-[#D32F2F] text-4xl font-serif leading-none">“</span>
                                <p className="text-xs text-gray-500 font-serif italic mb-4 leading-relaxed">
                                    {story.quote} <span className="text-[#D32F2F] text-lg leading-none align-bottom">”</span>
                                </p>
                                <p className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider">{story.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-8">
                        <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-gray-800"><ArrowRightIcon className="h-4 w-4 rotate-180" /></button>
                            <button className="text-gray-400 hover:text-gray-800"><ArrowRightIcon className="h-4 w-4" /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Report Footer Section */}
            <section className="bg-[#EAE8E3] py-16 text-gray-600 font-serif">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <HeartIcon className="h-10 w-10 text-gray-400 mb-2" />
                        <h3 className="text-xl font-bold uppercase tracking-widest text-gray-500">Open<br/>Heart</h3>
                        <p className="text-[10px] uppercase mt-1">Privacy Policy</p>
                    </div>
                    <div className="text-xs leading-loose">
                        <p className="uppercase">750, Austin, 94 Caty Street, Utah 84956</p>
                        <p className="uppercase text-[#D32F2F] font-bold mt-2 text-lg">{report.phone}</p>
                        <p className="uppercase mt-2 tracking-widest border-t border-gray-300 pt-2 inline-block text-[10px]">Newsletter:</p>
                        <div className="mt-1 flex max-w-xs mx-auto md:mx-0">
                            <input type="email" placeholder="Enter your email here" className="bg-white px-3 py-1 text-xs w-full outline-none" />
                            <button className="bg-gray-400 px-2 text-white hover:bg-[#D32F2F] transition-colors">OK</button>
                        </div>
                    </div>
                    <div className="text-right md:text-right flex flex-col items-center md:items-end">
                        <h2 className="text-3xl text-[#D32F2F] font-bold uppercase">{report.text}</h2>
                        <h2 className="text-3xl text-[#D32F2F] font-normal uppercase">{report.year} &gt;</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonationPage;