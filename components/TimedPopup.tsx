import React from 'react';
import { CloseIcon } from './icons/TechIcons';
import type { PopupSettings } from '../types';

interface TimedPopupProps {
  isOpen: boolean;
  onClose: () => void;
  settings: PopupSettings;
}

const TimedPopup: React.FC<TimedPopupProps> = ({ isOpen, onClose, settings }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center p-4 popup-container ${isOpen ? 'popup-visible' : 'popup-hidden'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="timed-popup-title"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden popup-panel p-8 text-center">
        <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            aria-label="Close"
        >
            <CloseIcon className="w-6 h-6" />
        </button>

        <h2 id="timed-popup-title" className="text-2xl font-bold text-gray-900">{settings.title}</h2>
        <p className="mt-4 text-gray-600">{settings.content}</p>

        {settings.ctaText && settings.ctaLink && (
            <a 
                href={settings.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-full px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
                {settings.ctaText}
            </a>
        )}
      </div>
    </div>
  );
};

export default TimedPopup;