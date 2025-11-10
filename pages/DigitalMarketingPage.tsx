import React from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';

const DigitalMarketingPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Digital Marketing"
        subtitle="Driving growth with data-driven strategies across SEO, social media, and automation."
      />
      <div className="space-y-20">
        <Section>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Content Under Construction</h2>
            <p className="mt-4 text-lg text-gray-600">
              We are working hard to bring you detailed information about our comprehensive Digital Marketing services. Please check back soon!
            </p>
          </div>
        </Section>
      </div>
    </>
  );
};

export default DigitalMarketingPage;
