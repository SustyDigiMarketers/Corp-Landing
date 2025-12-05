

import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { LogoIcon, MenuIcon, CloseIcon, ChevronDownIcon } from './Icons';

interface HeaderProps {
  navigateTo: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ navigateTo, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const navLinks = [
    { page: Page.Home, label: 'Home' },
    { page: Page.About, label: 'About' },
    {
      page: Page.Services,
      label: 'Services',
      subLinks: [
        { page: Page.WebDevelopment, label: 'Web Development' },
        { page: Page.AppDevelopment, label: 'App Development' },
        { page: Page.UiUxDesign, label: 'UI/UX Design' },
        { page: Page.DigitalMarketing, label: 'Digital Marketing' },
        { page: Page.InfluencerMarketing, label: 'Influencer Marketing' },
        { page: Page.Branding, label: 'Branding' },
        { page: Page.Hosting, label: 'Hosting' },
        { page: Page.Domain, label: 'Domain' },
        { page: Page.DigitalAssets, label: 'Digital Assets' },
      ],
    },
    {
      page: Page.Products,
      label: 'Products',
      subLinks: [
        { page: Page.SustyHIMS, label: 'SustyHIMS' },
        { page: Page.SustyHRMS, label: 'SustyHRMS' },
        { page: Page.SustyCRM, label: 'SustyCRM' },
        { page: Page.SustyPOS, label: 'SustyPOS' },
        { page: Page.SustyHMS, label: 'SustyHMS' },
        { page: Page.SustyPY, label: 'SustyPY' },
      ],
    },
    { page: Page.Donation, label: 'Donation' },
    { page: Page.Contact, label: 'Contact' },
  ];

  const isLinkActive = (link: { page: Page; subLinks?: { page: Page }[] }): boolean => {
    if (link.subLinks?.some(sub => sub.page === currentPage)) {
        return true;
    }
    return link.page === currentPage;
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-brand-primary/80 backdrop-blur-lg border-b border-brand-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => navigateTo(Page.Home)} className="flex items-center space-x-2">
              <LogoIcon className="h-8 w-auto text-brand-accent" />
              <span className="font-bold text-xl text-brand-text">SustyDigi</span>
            </button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => {
              const isActive = isLinkActive(link);
              return link.subLinks ? (
                <div
                  key={link.label}
                  className="relative"
                >
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`flex items-center space-x-1 hover:text-brand-text transition-colors duration-300 ${isActive ? 'text-brand-text font-semibold' : 'text-brand-text-secondary'}`}
                  >
                    <span>{link.label}</span>
                    <ChevronDownIcon className={`h-4 w-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {isActive && <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-brand-accent to-blue-500 rounded-full" />}
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-brand-primary rounded-md shadow-lg py-1 z-50 border border-brand-secondary">
                      {link.subLinks.map(subLink => (
                        <button
                          key={subLink.page}
                          onClick={() => {
                            navigateTo(subLink.page);
                            setOpenDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-brand-text-secondary hover:bg-brand-secondary hover:text-brand-text transition-colors"
                        >
                          {subLink.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative" key={link.page}>
                    <button
                        onClick={() => {
                            navigateTo(link.page);
                            setOpenDropdown(null);
                        }}
                        className={`hover:text-brand-text transition-colors duration-300 ${isActive ? 'text-brand-text font-semibold' : 'text-brand-text-secondary'}`}
                    >
                        {link.label}
                    </button>
                    {isActive && <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-brand-accent to-blue-500 rounded-full" />}
                </div>
              )
            })}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => navigateTo(Page.Login)}
              className="px-6 py-2 bg-brand-accent text-white font-semibold rounded-md hover:bg-brand-accent-hover transition-all duration-300 transform hover:scale-105"
            >
              Client Login
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-secondary">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {navLinks.map(link => {
              const isActive = isLinkActive(link);
              return link.subLinks ? (
                <div key={link.label}>
                  <button
                    onClick={() => setOpenMobileSubMenu(openMobileSubMenu === link.label ? null : link.label)}
                    className={`w-full flex justify-between items-center py-2 font-medium transition-colors ${isActive ? 'text-brand-accent' : 'text-brand-text-secondary hover:text-brand-text'}`}
                  >
                    <span>{link.label}</span>
                    <ChevronDownIcon className={`h-5 w-5 transition-transform ${openMobileSubMenu === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileSubMenu === link.label && (
                    <div className="pl-4 pb-2 flex flex-col items-start space-y-2">
                      {link.subLinks.map(subLink => {
                        const isSubActive = subLink.page === currentPage;
                        return (
                          <button
                            key={subLink.page}
                            onClick={() => {
                              navigateTo(subLink.page);
                              setIsMenuOpen(false);
                            }}
                            className={`transition-colors ${isSubActive ? 'text-brand-accent font-semibold' : 'text-brand-text-secondary hover:text-brand-text'}`}
                          >
                            {subLink.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.page}
                  onClick={() => { navigateTo(link.page); setIsMenuOpen(false); }}
                  className={`py-2 text-left font-medium transition-colors ${isActive ? 'text-brand-accent' : 'text-brand-text-secondary hover:text-brand-text'}`}
                >
                  {link.label}
                </button>
              )
            })}
            <button
              onClick={() => { navigateTo(Page.Login); setIsMenuOpen(false); }}
              className="mt-4 w-full text-center px-6 py-2 bg-brand-accent text-white font-semibold rounded-md hover:bg-brand-accent-hover transition-all duration-300"
            >
              Client Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;