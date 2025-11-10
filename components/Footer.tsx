import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from './icons/TechIcons';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, href: '#' },
    { name: 'Twitter', icon: TwitterIcon, href: '#' },
    { name: 'Instagram', icon: InstagramIcon, href: '#' },
    { name: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  ];
  
  const logoSrc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0ZjQ2ZTU7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2VjNDg5OTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0gMzAgMjAgTCA3MCAyMCBBIDEwIDEwIDAgMCAxIDgwIDMwIEwgODAgNzAgQSAxMCAxMCAwIDAgMSA3MCA4MCBMIDMwIDgwIEEgMTAgMTAgMCAwIDEgMjAgNzAgTCAyMCAzMCBBIDEwIDEwIDAgMCAxIDMwIDIwIiBzdHJva2U9InVybCgjZ3JhZCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNIDQwIDQwIEwgNjAgNjAgTSA2MCA0MCBMIDQwIDYwIiBzdHJva2U9InVybCgjZ3JhZCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=";

  return (
    <footer className="bg-gray-100/70 border-t border-gray-200">
      <div className="w-full md:w-4/5 mx-auto py-12 px-4 md:px-0">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center space-x-3 mb-4">
              <img src={logoSrc} alt="SustyDigi Logo" className="h-12 w-auto" />
              <div>
                <div className="text-3xl font-bold gradient-text">
                  SustyDigi{` `}
                </div>
                <p className="text-[0.9rem] text-gray-600 tracking-wide">
                  Marketing Pvt. Ltd.
                </p>
              </div>
            </Link>
            <p className="text-gray-600 text-base max-w-sm">
              Transforming Ideas into Digital Reality. We help businesses grow with cutting-edge digital marketing and software solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:scale-110 transform">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-3">
                <li><Link to="/services/web-development" className="text-base text-gray-600 hover:text-indigo-600">Web Development</Link></li>
                <li><Link to="/services/app-development" className="text-base text-gray-600 hover:text-indigo-600">App Development</Link></li>
                <li><Link to="/services/digital-marketing" className="text-base text-gray-600 hover:text-indigo-600">Digital Marketing</Link></li>
                <li><Link to="/services/social-media-marketing" className="text-base text-gray-600 hover:text-indigo-600">Social Media Marketing</Link></li>
                <li><Link to="/services/enterprise-software" className="text-base text-gray-600 hover:text-indigo-600">Enterprise Software</Link></li>
                <li><Link to="/services/ui-ux" className="text-base text-gray-600 hover:text-indigo-600">UI/UX Design</Link></li>
                <li><Link to="/services/digital-designs" className="text-base text-gray-600 hover:text-indigo-600">Digital Designs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Products</h3>
              <ul className="mt-4 space-y-3">
                <li><Link to="/products/hr-management" className="text-base text-gray-600 hover:text-indigo-600">HR Management</Link></li>
                <li><Link to="/products/hospital-management" className="text-base text-gray-600 hover:text-indigo-600">Hospital Management</Link></li>
                <li><Link to="/products/crm" className="text-base text-gray-600 hover:text-indigo-600">CRM</Link></li>
                <li><Link to="/products/hotel-management" className="text-base text-gray-600 hover:text-indigo-600">Hotel Management</Link></li>
                <li><Link to="/products/finance-management" className="text-base text-gray-600 hover:text-indigo-600">Finance Management</Link></li>
                <li><Link to="/products/purchase-management" className="text-base text-gray-600 hover:text-indigo-600">Purchase Management</Link></li>
                <li><Link to="/products/billing-software" className="text-base text-gray-600 hover:text-indigo-600">Billing Software</Link></li>
                <li><Link to="/products/workstation" className="text-base text-gray-600 hover:text-indigo-600">WorkStation</Link></li>
                <li><Link to="/products/point-of-sales" className="text-base text-gray-600 hover:text-indigo-600">Point of Sales</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                <li><Link to="/" className="text-base text-gray-600 hover:text-indigo-600">Home</Link></li>
                <li><Link to="/about" className="text-base text-gray-600 hover:text-indigo-600">About</Link></li>
                <li><Link to="/contact" className="text-base text-gray-600 hover:text-indigo-600">Contact</Link></li>
                <li><Link to="/services" className="text-base text-gray-600 hover:text-indigo-600">Services</Link></li>
                <li><Link to="/career" className="text-base text-gray-600 hover:text-indigo-600">Career</Link></li>
                <li><Link to="/blog" className="text-base text-gray-600 hover:text-indigo-600">Blogs</Link></li>
                <li><Link to="/products" className="text-base text-gray-600 hover:text-indigo-600">Products</Link></li>
                <li><Link to="/gallery" className="text-base text-gray-600 hover:text-indigo-600">Gallery</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} SustyDigi Marketers Pvt. Ltd. All rights reserved.
                <span className="mx-1 sm:mx-2">|</span>
                <Link to="/privacy" className="hover:text-indigo-600">Privacy Policy</Link>
                <span className="mx-1 sm:mx-2">|</span>
                <Link to="/terms" className="hover:text-indigo-600">Terms of service</Link>
                <span className="mx-1 sm:mx-2">|</span>
                <Link to="/cookie-policy" className="hover:text-indigo-600">Cookie Policy</Link>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;