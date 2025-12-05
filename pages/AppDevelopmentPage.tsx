
import React from 'react';
import { appDevelopmentData } from '../constants';
import { 
    ShieldCheckIcon, 
    CheckCircleIcon, 
    MessageSquareIcon, 
    HeadsetIcon, 
    DownloadIcon, 
    UsersGroupIcon, 
    GlobeIcon, 
    PaypalIcon,
    ShopifyIcon,
    PlayIcon,
    SpotifyLogo, 
    SlackLogo, 
    EnvatoLogo
} from '../components/Icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    ShieldCheckIcon,
    CheckCircleIcon,
    MessageSquareIcon,
    HeadsetIcon,
    DownloadIcon,
    UsersGroupIcon,
    GlobeIcon
};

const logoMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'PayPal': PaypalIcon,
    'Spotify': SpotifyLogo,
    'Shopify': ShopifyIcon,
    'Slack': SlackLogo,
    'Envato': EnvatoLogo
};

const AppDevelopmentPage: React.FC = () => {
  const { hero, trustedBy, features, stats, modernUI } = appDevelopmentData;

  return (
    <div className="bg-white text-brand-text animate-fade-in-up overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">{hero.title}</h1>
              <p className="mt-6 text-brand-text-secondary">{hero.subtitle}</p>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4 bg-white p-4 rounded-lg shadow-sm border">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <PlayIcon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium">{hero.videoBlurb}</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <img src={hero.phoneImage1} alt="App on phone" className="max-h-[500px] object-contain rounded-3xl shadow-2xl mt-12 transform -rotate-6" />
              <img src={hero.phoneImage2} alt="App on another phone" className="max-h-[500px] object-contain rounded-3xl shadow-2xl transform rotate-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">{trustedBy.title}</h2>
          <p className="mt-2 text-brand-text-secondary">{trustedBy.subtitle}</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            {trustedBy.logos.map(logoKey => {
              const Logo = logoMap[logoKey];
              return Logo ? <Logo key={logoKey} className="h-8 opacity-70" /> : null;
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">{features.title}</h2>
            <p className="mt-4 text-brand-text-secondary">{features.subtitle}</p>
          </div>
          <div className="mt-12 grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            {/* Left Features */}
            <div className="space-y-8 text-right">
              {features.featureList.slice(0, 2).map(feature => {
                const Icon = iconMap[feature.icon];
                return (
                  <div key={feature.title} className="flex flex-row-reverse items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-brand-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Image */}
            <div className="flex justify-center my-8 lg:my-0">
              <img src={features.centerImage} alt="Features on phone" className="max-h-[500px] rounded-3xl shadow-2xl"/>
            </div>

            {/* Right Features */}
            <div className="space-y-8 text-left">
              {features.featureList.slice(2, 4).map(feature => {
                const Icon = iconMap[feature.icon];
                return (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-brand-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <img src={stats.phoneImage} alt="App stats" className="max-h-[500px] rounded-3xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{stats.title}</h2>
              <p className="mt-4 text-brand-text-secondary">{stats.subtitle}</p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                {stats.statList.map(stat => {
                  const Icon = iconMap[stat.icon];
                  return (
                    <div key={stat.label} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                        {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-brand-text-secondary">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modern UI Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{modernUI.title}</h2>
              <p className="mt-4 text-brand-text-secondary">{modernUI.subtitle}</p>
              <ul className="mt-6 space-y-3">
                  {modernUI.points.map(point => (
                      <li key={point} className="flex items-center">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3"/>
                          <span className="text-brand-text-secondary">{point}</span>
                      </li>
                  ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img src={modernUI.image} alt="Modern UI" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentPage;
