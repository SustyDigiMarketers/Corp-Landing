import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { jobStats, jobCategories, featuredJobs } from '../constants';
import { SearchIcon, LocationPinIcon, ArrowRightIcon, BookmarkIcon } from '../components/icons/TechIcons';

const CareerPage: React.FC = () => {
  return (
    <>
      {/* Hero Section - This part is custom and does not use PageHeader to match the design */}
      <section className="pt-24 pb-12 bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Find a job that suits your interest & skills.</h1>
            <p className="mt-4 text-gray-600">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget egestas magna.
            </p>
            <form className="mt-8 p-4 bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-4 items-center">
              <div className="relative w-full">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Job title, Keyword..." className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="relative w-full">
                <LocationPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Your Location" className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <button type="submit" className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors flex-shrink-0">
                Find Job
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              <span className="font-semibold">Suggestion:</span> Designer, Programming, <span className="text-indigo-600 font-medium">Digital Marketing</span>, Video, Animation.
            </p>
          </div>
          <div className="hidden lg:block text-center">
             <img src="https://images.unsplash.com/photo-1579621970795-87f54d504ba2?q=80&w=800&auto=format&fit=crop" alt="Person working on laptop" className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {jobStats.map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="p-3 bg-indigo-100 rounded-md">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-gray-900">{stat.count}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <div className="space-y-20 bg-gray-50/70 -mx-4 px-4 py-12">
        {/* Popular Category Section */}
        <Section className="!py-0">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular category</h2>
            <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {jobCategories.map((category) => (
              <div key={category.name} className="p-6 bg-white rounded-lg border border-gray-200 text-center transition-all duration-300 hover:shadow-lg hover:border-indigo-500 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-md mx-auto mb-4">
                  <category.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.openPositions} Open position</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Featured Job Section */}
        <Section className="!py-0">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured job</h2>
            <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-2">
              View All <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {featuredJobs.map((job) => (
              <div key={job.title} className={`p-4 bg-white rounded-lg border flex flex-col md:flex-row items-center gap-4 transition-shadow duration-300 hover:shadow-md ${job.isFeatured ? 'border-indigo-500 shadow-md' : 'border-gray-200'}`}>
                <div className="flex-shrink-0">
                  <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 object-contain" />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="font-bold text-gray-900">{job.title}</h3>
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1 text-sm text-gray-500 mt-1">
                    <span>{job.company}</span>
                    <span className="text-gray-300 hidden sm:inline">|</span>
                    <span className="font-medium text-indigo-600">{job.type}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-3 md:grid-cols-1 text-center md:text-left gap-4 text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span>{job.salary}</span>
                  <span>{job.daysRemaining} Days Remaining</span>
                </div>
                <div className="flex-shrink-0 flex items-center gap-4">
                  <button className="p-2 text-gray-400 hover:text-indigo-600">
                    <BookmarkIcon className="w-6 h-6" />
                  </button>
                  <Link to="#" className={`px-4 py-2 rounded-md font-semibold text-sm flex items-center gap-2 transition-colors ${job.isFeatured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'}`}>
                    Apply Now <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default CareerPage;