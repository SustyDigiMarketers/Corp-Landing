

import React from 'react';
import Section from '../components/Section';
import { projects } from '../constants';
import PageHeader from '../components/PageHeader';
import { ArrowRightIcon } from '../components/icons/TechIcons';

const PortfolioPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="A showcase of our successful partnerships and impactful digital solutions that drive real-world results."
      />
      <div className="space-y-20">
        <Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
               <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img src={project.image} alt={project.clientName} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end project-card-details">
                  <p className="text-sm font-semibold text-indigo-300 project-card-title">{project.industry}</p>
                  <h3 className="text-xl font-bold text-white mt-1 project-card-title">{project.clientName}</h3>
                  <p className="text-gray-200 mt-2 flex-grow project-card-result">{project.result}</p>
                  <button className="mt-4 text-sm font-semibold text-white flex items-center gap-2 project-card-link hover:text-indigo-300 transition-colors">
                    View Case Study <ArrowRightIcon className="w-4 h-4"/>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
              <p className="text-gray-500 text-lg">Detailed case study pages are coming soon!</p>
          </div>
        </Section>
      </div>
    </>
  );
};

export default PortfolioPage;