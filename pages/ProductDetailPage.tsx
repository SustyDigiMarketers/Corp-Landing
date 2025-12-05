import React from 'react';
import { Page, ProductDetails } from '../types';
import Button from '../components/Button';
import { PlayCircleIcon, GooglePlayIcon, AppStoreIcon, UploadCloudIcon, AtSignIcon, MessageSquareIcon, SettingsIcon } from '../components/Icons';
import Card from '../components/Card';

interface ProductDetailPageProps {
  productData: ProductDetails;
  navigateTo: (page: Page) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productData, navigateTo }) => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="bg-brand-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-text leading-tight">{productData.hero.title}</h1>
              <p className="mt-6 text-lg text-brand-text-secondary">{productData.hero.description}</p>
              <div className="mt-8 flex items-center space-x-4">
                <Button onClick={() => navigateTo(Page.Contact)}>Get Started</Button>
                <button className="flex items-center space-x-2 text-brand-text-secondary font-semibold hover:text-brand-text">
                  <PlayCircleIcon className="h-6 w-6" />
                  <span>Watch Video Overview</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={productData.hero.image} alt="Product screenshot" className="max-h-[500px] object-contain"/>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Love Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{productData.lovePoints.title}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">{productData.lovePoints.description}</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            {productData.lovePoints.points.map(point => {
              const Icon = point.icon;
              return (
                <Card key={point.title}>
                  <Icon className="h-10 w-10 text-brand-accent mb-4" />
                  <h3 className="text-xl font-bold">{point.title}</h3>
                  <p className="mt-2 text-brand-text-secondary">{point.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Manage Everything Section */}
      <section className="py-24 bg-brand-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{productData.manageSection.title}</h2>
              <ul className="space-y-6 mt-8">
                {productData.manageSection.features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <li key={index} className="flex items-start">
                      <Icon className="h-6 w-6 text-brand-accent mr-4 mt-1 flex-shrink-0" />
                      <p className="text-brand-text-secondary">{feature.description}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <img src={productData.manageSection.images[0]} alt="Manage on device" className="max-h-[500px] object-contain rounded-2xl shadow-lg"/>
              <img src={productData.manageSection.images[1]} alt="Manage on device 2" className="max-h-[500px] object-contain rounded-2xl shadow-lg mt-12"/>
            </div>
          </div>
        </div>
      </section>
      
      {/* Share Photos Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
                <img src={productData.shareSection.image} alt="Share with friends" className="max-h-[500px] object-contain rounded-2xl shadow-lg"/>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{productData.shareSection.title}</h2>
              <p className="mt-6 text-brand-text-secondary">{productData.shareSection.description}</p>
              <div className="mt-8 flex space-x-4">
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-brand-text-secondary hover:bg-brand-accent hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:-translate-y-1">
                    <UploadCloudIcon className="h-6 w-6"/>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-brand-text-secondary hover:bg-brand-accent hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:-translate-y-1">
                    <AtSignIcon className="h-6 w-6"/>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-brand-text-secondary hover:bg-brand-accent hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:-translate-y-1">
                    <MessageSquareIcon className="h-6 w-6"/>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-brand-text-secondary hover:bg-brand-accent hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:-translate-y-1">
                    <SettingsIcon className="h-6 w-6"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-secondary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{productData.cta.title}</h2>
              <p className="mt-6 text-brand-text-secondary">{productData.cta.description}</p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center justify-center space-x-3 px-6 py-3 bg-brand-text text-white font-semibold rounded-md hover:bg-gray-800 transition-colors">
                    <GooglePlayIcon className="h-6 w-6"/>
                    <div>
                        <p className="text-xs">GET IT ON</p>
                        <p className="text-lg leading-tight">Google Play</p>
                    </div>
                </button>
                 <button className="flex items-center justify-center space-x-3 px-6 py-3 bg-brand-text text-white font-semibold rounded-md hover:bg-gray-800 transition-colors">
                    <AppStoreIcon className="h-6 w-6"/>
                     <div>
                        <p className="text-xs">Download on the</p>
                        <p className="text-lg leading-tight">App Store</p>
                    </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
               <img src={productData.cta.image} alt="App on phone" className="max-h-[400px] object-contain"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;