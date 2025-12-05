import React from 'react';
import { Page } from '../types';
import { LogoIcon, InstagramIcon, FacebookIcon, WhatsAppIcon, LinkedInIcon } from './Icons';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const FooterLink: React.FC<{ page: Page; label: string; navigateTo: (page: Page) => void; }> = ({ page, label, navigateTo }) => (
    <li>
        <button onClick={() => navigateTo(page)} className="text-brand-text-secondary hover:text-brand-text transition-colors duration-300 text-sm">
            {label}
        </button>
    </li>
);

const SocialLink: React.FC<{ href: string; label: string; icon: React.ComponentType<{ className?: string }> }> = ({ href, label, icon: Icon }) => (
  <a
    href={href}
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-brand-text-secondary shadow-sm border border-gray-200 transition-all duration-300 hover:bg-brand-accent hover:text-white hover:border-brand-accent hover:-translate-y-1"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const servicesLinks = [
    { page: Page.WebDevelopment, label: 'Web Development' },
    { page: Page.AppDevelopment, label: 'App Development' },
    { page: Page.UiUxDesign, label: 'UI/UX Design' },
    { page: Page.Hosting, label: 'Hosting' },
    { page: Page.Domain, label: 'Domain' },
  ];
  
  const marketingLinks = [
    { page: Page.DigitalMarketing, label: 'Digital Marketing' },
    { page: Page.InfluencerMarketing, label: 'Influencer Marketing' },
    { page: Page.Branding, label: 'Branding' },
    { page: Page.DigitalAssets, label: 'Digital Assets' },
  ];

  const productsLinks = [
    { page: Page.SustyHIMS, label: 'SustyHIMS' },
    { page: Page.SustyHRMS, label: 'SustyHRMS' },
    { page: Page.SustyCRM, label: 'SustyCRM' },
    { page: Page.SustyPOS, label: 'SustyPOS' },
    { page: Page.SustyHMS, label: 'SustyHMS' },
    { page: Page.SustyPY, label: 'SustyPY' },
  ];

  return (
    <footer className="bg-brand-secondary border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <LogoIcon className="h-8 w-auto text-brand-accent" />
              <span className="font-bold text-xl text-brand-text">SustyDigi</span>
            </div>
            <p className="text-brand-text-secondary text-sm">
              Empowering digital presence with AI-driven marketing and next-gen design.
            </p>
            <div className="mt-6">
                <h3 className="text-brand-text font-semibold mb-3">Contact</h3>
                <ul className="space-y-2 text-brand-text-secondary text-sm">
                    <li>No. 45, Tech Park Road, Trichy</li>
                    <li>contact@sustydigi.com</li>
                    <li>+91 98765 43210</li>
                </ul>
            </div>
            <div className="flex space-x-3 mt-6">
                <SocialLink href="#" label="Instagram" icon={InstagramIcon} />
                <SocialLink href="#" label="Facebook" icon={FacebookIcon} />
                <SocialLink href="#" label="WhatsApp" icon={WhatsAppIcon} />
                <SocialLink href="#" label="LinkedIn" icon={LinkedInIcon} />
            </div>
          </div>
          
          <div>
            <h3 className="text-brand-text font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <FooterLink page={Page.Home} label="Home" navigateTo={navigateTo} />
                <FooterLink page={Page.About} label="About" navigateTo={navigateTo} />
                <FooterLink page={Page.Services} label="Services" navigateTo={navigateTo} />
                <FooterLink page={Page.Products} label="Products" navigateTo={navigateTo} />
                <FooterLink page={Page.Donation} label="Donation" navigateTo={navigateTo} />
                <FooterLink page={Page.Portfolio} label="Portfolio" navigateTo={navigateTo} />
                <FooterLink page={Page.Blog} label="Blog" navigateTo={navigateTo} />
                <FooterLink page={Page.Careers} label="Careers" navigateTo={navigateTo} />
                <FooterLink page={Page.Contact} label="Contact" navigateTo={navigateTo} />
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-text font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
                {servicesLinks.map(link => (
                    <FooterLink key={link.page} page={link.page} label={link.label} navigateTo={navigateTo} />
                ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-brand-text font-semibold mb-4">Marketing</h3>
            <ul className="space-y-2">
                {marketingLinks.map(link => (
                    <FooterLink key={link.page} page={link.page} label={link.label} navigateTo={navigateTo} />
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-brand-text font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
                {productsLinks.map(link => (
                    <FooterLink key={link.page} page={link.page} label={link.label} navigateTo={navigateTo} />
                ))}
            </ul>
          </div>
          
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-brand-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} SustyDigi Marketers Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;