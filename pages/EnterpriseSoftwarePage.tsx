import React from 'react';
import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { partners, testimonials, enterpriseIndustries, enterpriseFeatures } from '../constants';
import { 
    ArrowRightIcon, 
    QuoteIcon, 
    WooCommerceIcon, 
    StripeIcon, 
    GoDaddyIcon, 
    MicrosoftLogoIcon, 
    GoogleLogoIcon 
} from '../components/icons/TechIcons';

const PartnerIcon: React.FC<{ name: string }> = ({ name }) => {
    const commonClasses = "h-8 w-auto text-gray-500 transition-colors duration-300 hover:text-gray-800";
    switch (name.toLowerCase()) {
        case 'microsoft': return <MicrosoftLogoIcon className={commonClasses} />;
        case 'google': return <GoogleLogoIcon className={commonClasses} />;
        case 'woocommerce': return <WooCommerceIcon className={commonClasses} />;
        case 'stripe': return <StripeIcon className={commonClasses} />;
        case 'godaddy': return <GoDaddyIcon className={commonClasses} />;
        default: return null;
    }
};

const EnterpriseSoftwarePage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Enterprise Software Solutions"
        subtitle="Building robust, scalable, and custom software to power large-scale operations in hospitality, healthcare, retail, and beyond."
      />
      <div className="space-y-24">
        {/* Industries We Serve Section */}
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Custom Solutions for Complex Industries</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              We specialize in developing tailored software for large enterprises with unique operational needs, ensuring seamless integration and enhanced efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseIndustries.map((industry) => (
              <div key={industry.name} className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img src={industry.image} alt={industry.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
                      <industry.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{industry.name}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Core Capabilities Section */}
        <Section className="bg-gray-50/70">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Capabilities</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">From modernizing legacy systems to implementing advanced analytics, we provide end-to-end development services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-indigo-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{feature.title}</h4>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Trusted Partners Section */}
        <Section>
            <div className="text-center">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Technology & Integration Partners</h3>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We leverage industry-leading technologies to ensure our solutions are powerful, secure, and seamlessly integrated.</p>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {partners.map(partner => <PartnerIcon key={partner.name} name={partner.name} />)}
                </div>
            </div>
        </Section>

        {/* Client's Reviews Section */}
        <Section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Enterprise Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-white rounded-lg shadow-lg border border-gray-100 h-full flex flex-col">
                <QuoteIcon className="w-8 h-8 text-gray-300" />
                <p className="mt-4 text-gray-600 flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Project Estimation CTA */}
        <Section>
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold">Ready to Build Your Custom Solution?</h3>
                    <p className="text-indigo-100 mt-2">Let's discuss your requirements. Get a free, no-obligation project estimation from our experts.</p>
                </div>
                <Link to="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                    Get Free Quote <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>
        </Section>
      </div>
    </>
  );
};

export default EnterpriseSoftwarePage;