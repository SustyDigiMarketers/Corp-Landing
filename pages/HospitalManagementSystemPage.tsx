import React from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { 
    BanknotesIcon, 
    BuildingIcon, 
    ShieldCheckIcon,
    UserGroupIcon,
    BoltIcon,
    ArrowRightIcon,
    DocumentTextIcon,
    HeartbeatIcon
} from '../components/icons/TechIcons';

const HospitalManagementSystemPage: React.FC = () => {

  const features = [
    {
      icon: DocumentTextIcon,
      title: "Patient Records (EMR)",
      description: "Securely manage electronic medical records, patient history, and treatment plans in a centralized system."
    },
    {
      icon: BanknotesIcon,
      title: "Automated Billing",
      description: "Streamline your financial operations with automated invoicing, payment processing, and insurance claim management."
    },
    {
      icon: BuildingIcon,
      title: "Department Management",
      description: "Manage multiple departments, staff schedules, and resources from a single, unified dashboard for maximum efficiency."
    },
    {
      icon: ShieldCheckIcon,
      title: "Compliance & Security",
      description: "Ensure patient data is secure and your hospital meets all regulatory standards with our HIPAA-compliant platform."
    }
  ];

  return (
    <>
      {/* Custom Hero Section */}
      <section className="relative w-screen ml-[calc(50%-50vw)] bg-gradient-to-br from-indigo-500 to-purple-600 text-white overflow-hidden">
        <div className="w-full md:w-4/5 mx-auto px-4 md:px-0 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold hero-fade-in-up">The Next Generation of Hospital Management</h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-indigo-100 hero-fade-in-up" style={{ animationDelay: '200ms' }}>
                A unified platform to streamline operations, enhance patient care, and ensure regulatory compliance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 hero-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Link to="/contact" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Request a Demo
                </Link>
                <Link to="/about" className="px-8 py-3 text-base font-medium rounded-md text-white bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                    Learn More
                </Link>
            </div>

            <div className="relative mt-16 hero-fade-in-up" style={{ animationDelay: '600ms' }}>
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" alt="Hospital Management Dashboard" className="max-w-4xl mx-auto rounded-xl shadow-2xl" />
            </div>
        </div>
      </section>

      <div className="space-y-24">
        {/* Key Features Section */}
        <Section>
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Hospital Management</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    A fully integrated system to manage all aspects of your healthcare facility.
                </p>
            </div>
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full mx-auto mb-6">
                            <feature.icon className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
        
        {/* Enhance Patient Care Section */}
        <Section>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="lg:order-last">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Enhance Patient Care & Outcomes</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Our system empowers healthcare professionals with instant access to patient information, reducing administrative tasks and allowing more time for direct patient care. Improve communication between departments and provide a seamless patient journey.
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-start gap-3"><UserGroupIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Improved patient satisfaction</span></li>
                        <li className="flex items-start gap-3"><BoltIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Increased operational efficiency</span></li>
                        <li className="flex items-start gap-3"><HeartbeatIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" /><span>Better clinical decision-making</span></li>
                    </ul>
                </div>
                <div className="flex justify-center lg:order-first">
                    <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop" alt="Doctor using tablet" className="max-w-md mx-auto rounded-2xl shadow-2xl" />
                </div>
            </div>
        </Section>

          {/* Final CTA */}
        <Section>
            <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold">Modernize Your Hospital Today</h3>
                    <p className="text-indigo-100 mt-2">See how our Hospital Management System can improve efficiency and patient care.</p>
                </div>
                <Link to="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors flex-shrink-0 flex items-center gap-2 transform hover:scale-105">
                    Get a Free Consultation <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>
        </Section>
    </div>
    </>
  );
};

// FIX: Added default export to resolve import error.
export default HospitalManagementSystemPage;
