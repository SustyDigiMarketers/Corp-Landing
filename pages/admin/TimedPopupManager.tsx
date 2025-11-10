import React, { useState, useEffect } from 'react';
import { PopupSettings } from '../../types';

const TimedPopupManager: React.FC = () => {
    const [settings, setSettings] = useState<PopupSettings>({
        enabled: false,
        delay: 10,
        title: 'Special Offer!',
        content: 'Get 20% off on your first project with us. Contact us now to claim your discount.',
        ctaText: 'Learn More',
        ctaLink: '#',
    });
    const [saveStatus, setSaveStatus] = useState('');

    useEffect(() => {
        try {
            const storedSettings = localStorage.getItem('timedPopupSettings');
            if (storedSettings) {
                setSettings(JSON.parse(storedSettings));
            }
        } catch (error) {
            console.error("Failed to parse settings from localStorage", error);
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setSettings(prev => ({ ...prev, [id]: checked }));
        } else if (type === 'number') {
            setSettings(prev => ({ ...prev, [id]: parseInt(value, 10) || 0 }));
        } else {
            setSettings(prev => ({ ...prev, [id]: value }));
        }
    };

    const handleSave = () => {
        localStorage.setItem('timedPopupSettings', JSON.stringify(settings));
        setSaveStatus('Settings saved successfully!');
        setTimeout(() => setSaveStatus(''), 3000);
    };

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold mb-8">Timed Popup Manager</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Settings Form */}
                <div className="db-card rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-6">Popup Configuration</h2>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <label htmlFor="enabled" className="font-medium text-gray-300">Enable Popup</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" id="enabled" className="sr-only peer" checked={settings.enabled} onChange={handleInputChange} />
                                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="delay" className="block text-sm font-medium text-gray-400 mb-2">Delay (seconds)</label>
                            <input type="number" id="delay" value={settings.delay} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-2">Popup Title</label>
                            <input type="text" id="title" value={settings.title} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-400 mb-2">Popup Content</label>
                            <textarea id="content" value={settings.content} onChange={handleInputChange} rows={4} className="w-full bg-gray-900 border border-gray-700 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                        </div>

                        <div>
                            <label htmlFor="ctaText" className="block text-sm font-medium text-gray-400 mb-2">CTA Button Text</label>
                            <input type="text" id="ctaText" value={settings.ctaText} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>

                        <div>
                            <label htmlFor="ctaLink" className="block text-sm font-medium text-gray-400 mb-2">CTA Button Link</label>
                            <input type="text" id="ctaLink" value={settings.ctaLink} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <button onClick={handleSave} className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors">
                                Save Settings
                            </button>
                            {saveStatus && <p className="text-green-400 text-sm">{saveStatus}</p>}
                        </div>
                    </div>
                </div>

                {/* Live Preview */}
                <div className="db-card rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-6">Live Preview</h2>
                    <div className="relative w-full h-96 bg-gray-900 rounded-md flex items-center justify-center p-4">
                        <div className="relative w-full max-w-sm bg-white rounded-lg shadow-xl p-6 text-center text-gray-800">
                             <h2 className="text-xl font-bold">{settings.title}</h2>
                             <p className="mt-2 text-gray-600 text-sm">{settings.content}</p>
                             {settings.ctaText && settings.ctaLink && (
                                <button className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md">
                                    {settings.ctaText}
                                </button>
                             )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimedPopupManager;
