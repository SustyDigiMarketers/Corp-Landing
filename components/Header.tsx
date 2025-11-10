import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppointmentPopup from './AppointmentPopup';
import { ChevronDownIcon } from './icons/TechIcons';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    children: [
      { name: 'Company', path: '/about' },
      { name: 'Career', path: '/career' },
      { name: 'Blogs', path: '/blog' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Portfolio', path: '/portfolio' },
    ]
  },
  { 
    name: 'Services', 
    children: [
      { name: 'Web development', path: '/services/web-development' },
      { name: 'App Development', path: '/services/app-development' },
      { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
      { name: 'Digital Bill Board', path: '/services/digital-billboard' },
      { name: 'Enterprise Software', path: '/services/enterprise-software' },
      { name: 'UI/UX Design', path: '/services/ui-ux' },
      { name: 'Digital Designs', path: '/services/digital-designs' },
      { name: 'Domain', path: '/domain' },
      { name: 'Hosting', path: '/hosting' },
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
    ]
  },
  { 
    name: 'Products', 
    children: [
       { name: 'HR management system', path: '/products/hr-management' },
       { name: 'Hospital Management System', path: '/products/hospital-management' },
       { name: 'CRM', path: '/products/crm' },
       { name: 'Hotel Management System', path: '/products/hotel-management' },
       { name: 'Finance Management', path: '/products/finance-management' },
       { name: 'Purchase Management', path: '/products/purchase-management' },
       { name: 'Billing Software', path: '/products/billing-software' },
       { name: 'WorkStation', path: '/products/workstation' },
       { name: 'Point of Sales', path: '/products/point-of-sales' },
    ]
  },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      setOpenDropdown(null);
    }
  }, [menuOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const activeLinkClass = 'text-indigo-600 font-semibold';
  const inactiveLinkClass = 'text-gray-500 hover:text-indigo-600 transition-colors duration-300';
  const logoSrc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0ZjQ2ZTU7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2VjNDg5OTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0gMzAgMjAgTCA3MCAyMCBBIDEwIDEwIDAgMCAxIDgwIDMwIEwgODAgNzAgQSAxMCAxMCAwIDAgMSA3MCA4MCBMIDMwIDgwIEEgMTAgMTAgMCAwIDEgMjAgNzAgTCAyMCAzMCBBIDEwIDEwIDAgMCAxIDMwIDIwIiBzdHJva2U9InVybCgjZ3JhZCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNIDQwIDQwIEwgNjAgNjAgTSA2MCA0MCBMIDQwIDYwIiBzdHJva2U9InVybCgjZ3JhZCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=";

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200' : 'bg-transparent'}`}>
        <nav className="w-full md:w-4/5 mx-auto px-4 md:px-0">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3" onClick={() => setMenuOpen(false)}>
                <img src={logoSrc} alt="SustyDigi Logo" className="h-10 w-auto" />
                <div>
                    <div className="text-2xl font-bold gradient-text">
                    SustyDigi{` `}
                    </div>
                    <p className="text-[0.8rem] text-gray-600 tracking-wide">
                    Marketing Pvt. Ltd.
                    </p>
                </div>
              </Link>
            </div>
            
            {/* Desktop Nav & Button */}
            <div className="hidden md:flex items-center">
              <div className="flex items-baseline space-x-2">
                {navLinks.map((link) => (
                  link.children ? (
                    <div key={link.name} className="relative group">
                      <button className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${inactiveLinkClass}`}>
                        <span>{link.name === 'About' ? 'About Us' : link.name}</span>
                        <ChevronDownIcon className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 z-20" style={{ minWidth: '15rem' }}>
                        <div className="bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 p-2">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.name}
                              to={child.path}
                              className={({ isActive }) =>
                                `block w-full text-left px-4 py-2 rounded-md text-sm ${isActive ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'}`
                              }
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={link.name}
                      to={link.path!}
                      className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass} px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {link.name}
                    </NavLink>
                  )
                ))}
              </div>
               <button
                  onClick={() => setIsPopupOpen(true)}
                  className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
                >
                  Appointment
                </button>
            </div>

            {/* Mobile Button & Menu */}
            <div className="md:hidden flex items-center space-x-2">
               <button
                  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Appointment
                </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {menuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full flex justify-between items-center text-left text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                      >
                        <span>{link.name === 'About' ? 'About Us' : link.name}</span>
                        <ChevronDownIcon
                          className={`w-5 h-5 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openDropdown === link.name ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <div className="pl-6 py-2 space-y-1">
                          {link.children.map((child) => (
                            <NavLink
                              key={child.name}
                              to={child.path}
                              onClick={() => setMenuOpen(false)}
                              className={({ isActive }) =>
                                `${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} block px-3 py-2 rounded-md text-base font-medium`
                              }
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={link.path!}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} block px-3 py-2 rounded-md text-base font-medium`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
      <AppointmentPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Header;