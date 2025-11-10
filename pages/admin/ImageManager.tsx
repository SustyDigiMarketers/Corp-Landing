import React, { useState, useRef, useEffect } from 'react';

const originalImages = [
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0ZjQ2ZTU7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2VjNDg5OTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0gMjAsODAgUSA1MCwyMCA4MCw4MCIgc3Ryb2tlPSJ1cmwoI2dyYWQpIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLXdpZHRoPSIxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPHBhdGggZD0iTSAyMCwyMCBRIDUwLDgwIDgwLDIwIiBzdHJva2U9InVybCgjZ3JhZCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjEyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0icm90YXRlKDEwIDUwIDUwKSIvPgo8L3N2Zz4=',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d14?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620712943543-285f5add6905?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI1MCIgZmlsbD0iIzRmNDZlNSI+UzwvdGV4dD48L3N2Zz4=',
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI1MCIgZmlsbD0iI2VjNDg5OSI+QzwvdGV4dD48L3N2Zz4=',
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI1MCIgZmlsbD0iIzIyYzU1ZSI+VDwvdGV4dD48L3N2Zz4=',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1528698827591-e19a72a59201?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1528716321680-815a4cdb8cbe?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534970028765-38ce47ef7d8d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580974928064-7ab733e5c431?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-942bb68b3131?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533104816931-20fa691d6ef7?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1634733591032-15ac63795551?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1631216223450-4223405f66a2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559056199-56c836528535?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1629904853716-f0bc64219b1b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579621970795-87f54d504ba2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556740738-b6a63e2775df?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595039862544-052a12165ab4?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1634733591032-15ac63795551?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542314831-068cd1dbb563?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1642792963160-53335b1d3126?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1631113062335-e496b052253c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586528116311-01a61287bdd1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop'
];


const LOCAL_STORAGE_KEY = 'imageOverrides';

const ImageManager: React.FC = () => {
    const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({});
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageToReplace, setImageToReplace] = useState<string | null>(null);

    useEffect(() => {
        try {
            const storedOverrides = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (storedOverrides) {
                setImageOverrides(JSON.parse(storedOverrides));
            }
        } catch (error) {
            console.error("Failed to load image overrides from localStorage:", error);
        }
    }, []);

    const handleReplaceClick = (originalSrc: string) => {
        setImageToReplace(originalSrc);
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0] && imageToReplace) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = (loadEvent) => {
                const newImageSrc = loadEvent.target?.result as string;
                
                const newOverrides = { ...imageOverrides, [imageToReplace]: newImageSrc };
                setImageOverrides(newOverrides);
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newOverrides));
                
                setImageToReplace(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const handleResetClick = (originalSrc: string) => {
        const newOverrides = { ...imageOverrides };
        delete newOverrides[originalSrc];
        setImageOverrides(newOverrides);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newOverrides));
    };

    const handleResetAll = () => {
        if (window.confirm("Are you sure you want to reset all replaced images to their defaults?")) {
            setImageOverrides({});
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        }
    };

    const hasOverrides = Object.keys(imageOverrides).length > 0;

    return (
        <div className="text-white">
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
            />
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <h1 className="text-3xl font-bold">Image Manager</h1>
                <div className="flex gap-4">
                    {hasOverrides && (
                        <button 
                            onClick={handleResetAll}
                            className="px-4 py-2 bg-pink-800 text-white font-semibold rounded-md hover:bg-pink-700 transition-colors"
                        >
                            Reset All Overrides
                        </button>
                    )}
                    <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors">
                        Upload New Image
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {originalImages.map(originalSrc => {
                    const displaySrc = imageOverrides[originalSrc] || originalSrc;
                    const isOverridden = !!imageOverrides[originalSrc];
                    
                    const getFileName = (src: string) => {
                        try {
                            if (src.startsWith('data:')) return 'logo.svg';
                            const url = new URL(src);
                            const pathParts = url.pathname.split('/');
                            return pathParts[pathParts.length -1] || 'image';
                        } catch (e) {
                            return 'image'
                        }
                    }

                    return (
                        <div key={originalSrc} className="db-card rounded-lg overflow-hidden group">
                            <div className={`aspect-square bg-gray-900 flex items-center justify-center p-2 ${isOverridden ? 'border-2 border-indigo-500' : ''}`}>
                                <img src={displaySrc} alt={originalSrc} className="max-w-full max-h-full object-contain" />
                            </div>
                            <div className="p-3">
                                <p className="text-xs text-gray-400 break-all truncate" title={getFileName(originalSrc)}>
                                    {getFileName(originalSrc)}
                                </p>
                                <div className="mt-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity h-6">
                                    <button onClick={() => handleReplaceClick(originalSrc)} className="text-xs px-2 py-1 bg-gray-600 hover:bg-gray-500 rounded">Replace</button>
                                    {isOverridden && (
                                        <button onClick={() => handleResetClick(originalSrc)} className="text-xs px-2 py-1 bg-yellow-700 hover:bg-yellow-600 rounded">Reset</button>
                                    )}
                                    <button className="text-xs px-2 py-1 bg-red-800 hover:bg-red-700 rounded ml-auto">Delete</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageManager;