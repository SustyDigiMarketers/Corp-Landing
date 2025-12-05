

import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import ClientDashboardPage from './pages/ClientDashboardPage';
import AdminPanelPage from './pages/AdminPanelPage';
import CareersPage from './pages/CareersPage';
import NotFoundPage from './pages/NotFoundPage';
import PlaceholderPage from './pages/PlaceholderPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CrmProductPage from './pages/CrmProductPage';
import HrmsProductPage from './pages/HrmsProductPage';
import HimsProductPage from './pages/HimsProductPage';
import HmsProductPage from './pages/HmsProductPage';
import PosProductPage from './pages/PosProductPage';
import PyProductPage from './pages/PyProductPage';
import { serviceDetailsData, productDetailsData } from './constants';
import { WebDevelopmentPage } from './pages/WebDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import UiUxDesignPage from './pages/UiUxDesignPage';
import BrandingPage from './pages/BrandingPage';
import HostingPage from './pages/HostingPage';
import DonationPage from './pages/DonationPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigateTo(Page.ClientDashboard);
  };
  
  const renderPage = () => {
    if (isLoggedIn) {
      switch (currentPage) {
        case Page.ClientDashboard:
          return <ClientDashboardPage />;
        // Add other logged-in pages here if needed
        default:
          return <ClientDashboardPage />;
      }
    }
    
    // Public pages
    switch (currentPage) {
      case Page.Home:
        return <HomePage navigateTo={navigateTo} />;
      case Page.About:
        return <AboutUsPage />;
      case Page.Services:
        return <ServicesPage />;
      case Page.Products:
        return <ProductsPage />;
      case Page.Portfolio:
        return <PortfolioPage />;
      case Page.Blog:
        return <BlogPage />;
      case Page.Pricing:
        return <PricingPage />;
      case Page.Contact:
        return <ContactPage />;
      case Page.Login:
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case Page.ClientDashboard:
        // This case is for direct navigation before login state is set
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case Page.AdminPanel:
        return <AdminPanelPage />;
      case Page.Careers:
        return <CareersPage />;
      case Page.Donation:
        return <DonationPage />;

      // Service Detail Pages
      case Page.DigitalMarketing:
        return <DigitalMarketingPage />;
      case Page.WebDevelopment:
        return <WebDevelopmentPage />;
      case Page.AppDevelopment:
        return <AppDevelopmentPage />;
      case Page.UiUxDesign:
        return <UiUxDesignPage navigateTo={navigateTo} />;
      case Page.Branding:
        return <BrandingPage navigateTo={navigateTo} />;
      case Page.Hosting:
        return <HostingPage />;
      case Page.InfluencerMarketing:
      case Page.Domain:
      case Page.DigitalAssets:
        const serviceData = serviceDetailsData[currentPage];
        if (serviceData) {
          return <ServiceDetailPage serviceData={serviceData} navigateTo={navigateTo} />;
        }
        return <NotFoundPage navigateToHome={() => navigateTo(Page.Home)} />;

      // Product Detail Pages
      case Page.SustyCRM:
        return <CrmProductPage />;
      case Page.SustyHRMS:
        return <HrmsProductPage />;
      case Page.SustyHIMS:
        return <HimsProductPage />;
      case Page.SustyHMS:
        return <HmsProductPage />;
      case Page.SustyPOS:
        return <PosProductPage />;
      case Page.SustyPY:
        return <PyProductPage />;
        
      default:
        // Check if it's a generic product page
        const productData = productDetailsData[currentPage as keyof typeof productDetailsData];
        if (productData) {
          return <ProductDetailPage productData={productData} navigateTo={navigateTo} />;
        }
        return <NotFoundPage navigateToHome={() => navigateTo(Page.Home)} />;
    }
  };

  const showHeaderFooter = ![Page.ClientDashboard, Page.AdminPanel, Page.Login].includes(currentPage) && !isLoggedIn;

  return (
    <div className="min-h-screen flex flex-col bg-brand-primary font-sans">
      {showHeaderFooter && <Header navigateTo={navigateTo} currentPage={currentPage} />}
      <main className={`flex-grow ${showHeaderFooter ? 'pt-20' : ''}`}>
        {renderPage()}
      </main>
      {showHeaderFooter && <Footer navigateTo={navigateTo} />}
    </div>
  );
};

export default App;