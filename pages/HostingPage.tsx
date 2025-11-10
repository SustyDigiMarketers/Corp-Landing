import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { hostingFeatures, hostingProductTabs, hostingNews } from '../constants';
import type { HostingFeature, HostingProductTab } from '../types';

const HostingFeatureCard: React.FC<{ feature: HostingFeature }> = ({ feature }) => (
    <div className={`p-6 rounded-lg ${feature.isHighlighted ? 'bg-orange-500 text-white col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2' : 'bg-white shadow-md'}`}>
        <feature.icon className={`w-8 h-8 mb-4 ${feature.isHighlighted ? 'text-white' : 'text-orange-500'}`} />
        <h3 className="font-bold text-lg">{feature.title}</h3>
        <p className={`mt-2 text-sm ${feature.isHighlighted ? 'text-orange-100' : 'text-gray-600'}`}>
            {feature.description}
        </p>
        {feature.isHighlighted && (
             <div className="mt-4">
                <button className="px-4 py-2 text-sm font-semibold bg-white text-orange-500 rounded-md hover:bg-orange-50">Read More</button>
             </div>
        )}
    </div>
);

const ProductTab: React.FC<{ tab: HostingProductTab, isActive: boolean, onClick: () => void }> = ({ tab, isActive, onClick }) => (
    <button onClick={onClick} className={`w-full text-left p-4 rounded-md font-medium transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100'}`}>
        {tab.title}
    </button>
);

const HostingPage: React.FC = () => {
    const [activeTabId, setActiveTabId] = useState(hostingProductTabs[0].id);
    const activeTabContent = hostingProductTabs.find(tab => tab.id === activeTabId);

    return (
        <>
            <PageHeader
                title="Hosting Solutions"
                subtitle="Reliable, secure, and high-performance hosting for your websites and applications. We exceed expectations, 24/7/365."
            >
                <Link to="/contact" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg">
                    Get Started Now
                </Link>
            </PageHeader>
            <div className="space-y-20">
                {/* Why Choose Us Section */}
                <Section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose SustyHost?</h2>
                        <p className="mt-4 text-lg text-gray-600">Lot of great Hosting Services in town.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hostingFeatures.map((feature, index) => (
                           <HostingFeatureCard key={index} feature={feature} />
                        ))}
                    </div>
                </Section>
                
                {/* Product Overview Section */}
                <Section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Product Overview</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 space-y-2">
                            {hostingProductTabs.map(tab => (
                                <ProductTab key={tab.id} tab={tab} isActive={tab.id === activeTabId} onClick={() => setActiveTabId(tab.id)} />
                            ))}
                        </div>
                        <div className="lg:col-span-2">
                           {activeTabContent && (
                                <div className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-lg animate-fade-in">
                                    <div className="text-center">
                                        <img src={activeTabContent.image} alt={activeTabContent.title} className="max-w-[150px] mx-auto mb-4" />
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <p className="text-gray-600">Is this right for me?</p>
                                            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet onsect ad un lit non pre Mam pulvinar an un...</p>
                                            <div className="mt-4 flex justify-center gap-4 text-sm">
                                                <button className="px-4 py-2 font-semibold bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Read More</button>
                                                <button className="text-indigo-600 font-semibold">Contact Us</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">{activeTabContent.content}</p>
                                        <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg text-center">
                                            <p className="text-sm text-gray-500">Starting from</p>
                                            <p className="text-4xl font-bold text-gray-800">
                                                ${activeTabContent.price}<span className="text-lg font-normal text-gray-500">/Mo</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                           )}
                        </div>
                    </div>
                </Section>

                {/* Important News Section */}
                <Section>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Important News</h2>
                        <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-800">See All News</Link>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {hostingNews.map((news, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                                <span className="text-sm font-semibold text-white bg-blue-500 px-3 py-1 rounded-full">{news.category}</span>
                                <h3 className="mt-4 text-xl font-bold text-gray-800">{news.title}</h3>
                                <Link to="#" className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-800">Read More</Link>
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        </>
    );
};

export default HostingPage;