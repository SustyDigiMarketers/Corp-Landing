import React from 'react';

// Placeholder data, in a real app this would come from an API
const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', alt: 'QuantumLeap Corp Project' },
    { src: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop', alt: 'StellarBank Project' },
    { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d14?q=80&w=800&auto=format&fit=crop', alt: 'EvoHealth Project' },
    { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop', alt: 'Branding Design Showcase' },
    { src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop', alt: 'Social Media Design Showcase' },
    { src: 'https://images.unsplash.com/photo-1528716321680-815a4cdb8cbe?q=80&w=800&auto=format&fit=crop', alt: 'Video Production Showcase' },
];

const GalleryManager: React.FC = () => {
    return (
        <div className="text-white">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Gallery Manager</h1>
                <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors">
                    Upload to Gallery
                </button>
            </div>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.map(image => (
                    <div key={image.src} className="db-card rounded-lg overflow-hidden group relative">
                        <div className="aspect-square bg-gray-900 flex items-center justify-center p-2">
                            <img src={image.src} alt={image.alt} className="max-w-full max-h-full object-contain" />
                        </div>
                         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                            <p className="text-xs text-gray-300 break-all truncate">{image.alt}</p>
                            <div className="mt-2 flex gap-2">
                                <button className="text-xs px-2 py-1 bg-red-800 hover:bg-red-700 rounded">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryManager;