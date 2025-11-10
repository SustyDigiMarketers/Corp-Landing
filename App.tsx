import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import TechnologyPage from './pages/TechnologyPage';
import DomainPage from './pages/DomainPage';
import BlogPage from './pages/BlogPage';

// New page imports
import CareerPage from './pages/CareerPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage';
import DigitalBillBoardPage from './pages/DigitalBillBoardPage';
import EnterpriseSoftwarePage from './pages/EnterpriseSoftwarePage';
import UiUxPage from './pages/UiUxPage';
import DigitalDesignsPage from './pages/DigitalDesignsPage';
import HostingPage from './pages/HostingPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import HrManagementSystemPage from './pages/HrManagementSystemPage';
import HospitalManagementSystemPage from './pages/HospitalManagementSystemPage';
import BillingSoftwarePage from './pages/BillingSoftwarePage';
import WorkstationPage from './pages/WorkstationPage';
import PointOfSalesPage from './pages/PointOfSalesPage';
import CrmPage from './pages/CrmPage';
import HotelManagementSystemPage from './pages/HotelManagementSystemPage';
import FinanceManagementPage from './pages/FinanceManagementPage';
import PurchaseManagementPage from './pages/PurchaseManagementPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import GalleryPage from './pages/GalleryPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import PortfolioPage from './pages/PortfolioPage';

// Admin Dashboard Components
import Analytics from './pages/admin/Analytics';
import ImageManager from './pages/admin/ImageManager';
import BlogManager from './pages/admin/BlogManager';
import GalleryManager from './pages/admin/GalleryManager';
import TimedPopupManager from './pages/admin/TimedPopupManager';


const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="services" element={<ServicesPage />} />
          {/* Service sub-pages */}
          <Route path="services/web-development" element={<WebDevelopmentPage />} />
          <Route path="services/app-development" element={<AppDevelopmentPage />} />
          <Route path="services/social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="services/digital-billboard" element={<DigitalBillBoardPage />} />
          <Route path="services/enterprise-software" element={<EnterpriseSoftwarePage />} />
          <Route path="services/ui-ux" element={<UiUxPage />} />
          <Route path="services/digital-designs" element={<DigitalDesignsPage />} />
          <Route path="services/digital-marketing" element={<DigitalMarketingPage />} />
          
          <Route path="products" element={<ProductsPage />} />
          {/* Product sub-pages */}
          <Route path="products/hr-management" element={<HrManagementSystemPage />} />
          <Route path="products/hospital-management" element={<HospitalManagementSystemPage />} />
          <Route path="products/crm" element={<CrmPage />} />
          <Route path="products/hotel-management" element={<HotelManagementSystemPage />} />
          <Route path="products/finance-management" element={<FinanceManagementPage />} />
          <Route path="products/purchase-management" element={<PurchaseManagementPage />} />
          <Route path="products/billing-software" element={<BillingSoftwarePage />} />
          <Route path="products/workstation" element={<WorkstationPage />} />
          <Route path="products/point-of-sales" element={<PointOfSalesPage />} />

          <Route path="technology" element={<TechnologyPage />} />
          <Route path="domain" element={<DomainPage />} />
          <Route path="hosting" element={<HostingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsOfServicePage />} />
          <Route path="cookie-policy" element={<CookiePolicyPage />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="analytics" replace />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="images" element={<ImageManager />} />
          <Route path="blogs" element={<BlogManager />} />
          <Route path="gallery" element={<GalleryManager />} />
          <Route path="popups" element={<TimedPopupManager />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;