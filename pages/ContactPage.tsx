import React, { useState } from 'react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { EmailIcon, PhoneIcon, CoursesIcon, StudentPortalIcon, ChevronDownIcon, ArrowRightIcon, SpinnerIcon } from '../components/icons/TechIcons';
import { faqData } from '../constants';
import PageHeader from '../components/PageHeader';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'General Inquiry',
    message: '',
  });
  const [honeypot, setHoneypot] = useState(''); // For spam prevention
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) { // Honeypot check
      console.warn('Bot submission detected.');
      return;
    }
    if (validateForm()) {
      setIsSubmitting(true);
      setFormStatus('Sending...');
      // Mock form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', department: 'General Inquiry', message: '' });
        setErrors({});
        setTimeout(() => setFormStatus(''), 3000);
      }, 1500);
    }
  };

  const infoCards = [
    {
      icon: CoursesIcon,
      title: 'Our Services',
      description: 'Explore our wide range of digital solutions.',
      buttonText: 'Browse',
      link: '/services',
      color: 'indigo'
    },
    {
      icon: StudentPortalIcon,
      title: 'Our Products',
      description: 'Discover our innovative SaaS platforms.',
      buttonText: 'Discover',
      link: '/products',
      color: 'pink'
    },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch to discuss your project or ask any questions you may have."
      />
      <div className="space-y-20 overflow-hidden">
        {/* Contact Us Section */}
        <Section className="relative !pt-0">
          <div className="absolute top-0 -left-24 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-0 -right-24 w-72 h-72 bg-pink-100 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side: Info */}
            <div className="space-y-8">
                <p className="text-lg text-gray-600">
                    Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                </p>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                            <EmailIcon className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">EMAIL</h3>
                            <a href="mailto:info@sustydigi.com" className="text-gray-600 hover:text-indigo-600">info@sustydigi.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                            <PhoneIcon className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">PHONE</h3>
                            <a href="tel:+12451353512" className="text-gray-600 hover:text-indigo-600">(245) 135-3512</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
                {/* Honeypot field for spam prevention */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="hp">Leave this field empty</label>
                  <input type="text" id="hp" name="hp" tabIndex={-1} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" id="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full bg-gray-100 border-transparent rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required className="mt-1 block w-full bg-gray-100 border-transparent rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="department" className="sr-only">Department of Inquiry</label>
                  <select id="department" value={formData.department} onChange={handleInputChange} className="mt-1 block w-full bg-gray-100 border-transparent rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Support</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" placeholder="Message" value={formData.message} onChange={handleInputChange} rows={4} required className="mt-1 block w-full bg-gray-100 border-transparent rounded-md py-3 px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <div className="pt-2">
                  <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:bg-indigo-400 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                        <>
                            <SpinnerIcon className="w-5 h-5" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>SUBMIT</span>
                            <ArrowRightIcon className="w-5 h-5 -rotate-45" />
                        </>
                    )}
                  </button>
                </div>
                {formStatus && !isSubmitting && <p className="mt-2 text-center text-green-600">{formStatus}</p>}
              </form>
            </div>
          </div>
        </Section>
        
        {/* Info Cards Section */}
        <Section>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {infoCards.map((card, index) => (
                  <div key={index} className="bg-white shadow-lg p-8 rounded-2xl text-center flex flex-col items-center">
                      <div className={`text-${card.color}-500 mb-4`}><card.icon className="w-12 h-12" /></div>
                      <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                      <p className="text-gray-600 my-4 flex-grow">{card.description}</p>
                      <Link to={card.link} className={`font-semibold text-sm uppercase tracking-wider text-${card.color}-600 hover:text-${card.color}-800 transition-colors`}>
                          {card.buttonText}
                      </Link>
                  </div>
              ))}
          </div>
        </Section>

        {/* FAQ Section */}
        <Section>
          <div className="text-center">
              <div className="inline-block relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-pink-400 to-indigo-400"></div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">General Questions</h2>
              </div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
              <div className="space-y-4">
                  {faqData.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0">
                          <button 
                              onClick={() => setOpenFaq(openFaq === index ? null : index)}
                              className="w-full flex justify-between items-center text-left py-4 px-2"
                          >
                              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                              <ChevronDownIcon className={`w-6 h-6 text-indigo-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                              <p className="p-2 pb-6 text-gray-600">
                                  {faq.answer}
                              </p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </Section>

        {/* Final CTA */}
        <Section className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-indigo-50 rounded-full filter blur-3xl opacity-60 z-[-1]"></div>
           <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Let's Build The Future!</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              <Link to="/contact" className="mt-8 inline-block px-10 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
              </Link>
          </div>
        </Section>
      </div>
    </>
  );
};

export default ContactPage;
