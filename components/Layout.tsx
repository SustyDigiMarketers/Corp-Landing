import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatAssistant from './ChatAssistant';
import LoginPage from '../pages/LoginPage';
import TimedPopup from './TimedPopup';
import type { PopupSettings } from '../types';

const Layout: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [keySequence, setKeySequence] = useState('');
  const triggerWord = 'setting';

  const [popupSettings, setPopupSettings] = useState<PopupSettings | null>(null);
  const [showTimedPopup, setShowTimedPopup] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if input field is focused
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      const newSequence = (keySequence + e.key.toLowerCase()).slice(-triggerWord.length);
      setKeySequence(newSequence);

      if (newSequence === triggerWord) {
        setShowLogin(true);
        setKeySequence(''); // Reset after triggering
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keySequence]);

  useEffect(() => {
    try {
      const storedSettings = localStorage.getItem('timedPopupSettings');
      if (storedSettings) {
        const settings: PopupSettings = JSON.parse(storedSettings);
        setPopupSettings(settings);
        
        if (settings.enabled) {
          const timer = setTimeout(() => {
            setShowTimedPopup(true);
          }, settings.delay * 1000);
          
          return () => clearTimeout(timer);
        }
      }
    } catch (error) {
      console.error("Failed to parse popup settings from localStorage", error);
    }
  }, []);


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full md:w-4/5 mx-auto px-4 md:px-0">
        <Outlet />
      </main>
      <Footer />
      <ChatAssistant />
      <LoginPage isOpen={showLogin} onClose={() => setShowLogin(false)} />
      {popupSettings && popupSettings.enabled && (
        <TimedPopup 
          isOpen={showTimedPopup}
          onClose={() => setShowTimedPopup(false)}
          settings={popupSettings}
        />
      )}
    </div>
  );
};

export default Layout;