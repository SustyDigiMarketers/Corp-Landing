import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { useInView } from '../hooks/useInView';

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', alt: 'QuantumLeap Corp Project' },
    { src: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop', alt: 'StellarBank Project' },
    { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d14?q=80&w=800&auto=format&fit=crop', alt: 'EvoHealth Project' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop', alt: 'Branding Design Showcase' },
    { src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop', alt: 'Social Media Design Showcase' },
    { src: 'https://images.unsplash.com/photo-1528716321680-815a4cdb8cbe?q=80&w=800&auto=format&fit=crop', alt: 'Video Production Showcase' },
    { src: 'https://images.unsplash.com/photo-1534970028765-38ce47ef7d8d?q=80&w=800&auto=format&fit=crop', alt: 'Print Design Showcase' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', alt: 'Collaborative Workspace' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop', alt: 'Modern Office Meeting Area' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop', alt: 'Focused Work Stations' },
    { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop', alt: 'Mobile Application on Phone' },
    { src: 'https://images.unsplash.com/photo-1611162616801-6990c87443ea?q=80&w=800&auto=format&fit=crop', alt: 'Social Media on Phone' },
];

const GalleryImageCard: React.FC<{ image: { src: string, alt: string }, index: number }> = ({ image, index }) => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <div 
            ref={ref}
            className={`stagger-in ${inView ? 'is-visible' : ''} group relative aspect-square overflow-hidden rounded-2xl shadow-lg`}
            style={{ transitionDelay: `${index * 50}ms` }}
        >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.alt}</p>
            </div>
        </div>
    );
};


const GalleryPage: React.FC = () => {
    return (
        <>
            <PageHeader
                title="Our Gallery"
                subtitle="A visual journey through our projects, designs, and the culture that drives us. Explore the moments that define SustyDigi Marketers."
            />
            <div className="space-y-20">
                <Section>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {galleryImages.map((image, index) => (
                           <GalleryImageCard key={index} image={image} index={index} />
                        ))}
                    </div>
                </Section>
            </div>
        </>
    );
};

export default GalleryPage;