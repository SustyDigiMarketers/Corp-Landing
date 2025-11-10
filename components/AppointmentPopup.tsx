import React, { useState, useEffect, useRef } from 'react';
import { services } from '../constants';
import { CloseIcon, SpinnerIcon, ArrowRightIcon, CheckmarkCircleIcon } from './icons/TechIcons';

interface AppointmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentPopup: React.FC<AppointmentPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: services[0].title,
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const popupRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Focus the first input field when the popup opens
      setTimeout(() => nameInputRef.current?.focus(), 300); // Delay to allow for transition
      // Reset form state on open
      setFormStatus('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: services[0].title,
        date: '',
        message: '',
      });
      setErrors({});
    }
  }, [isOpen]);

  // Close popup on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);


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
    if (!formData.date) newErrors.date = 'Please select a date.';
    if (!formData.message.trim()) {
        newErrors.message = 'Please provide some details about your needs.';
    } else if (formData.message.trim().length < 10) {
        newErrors.message = 'Details must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setFormStatus('Sending...');
      setTimeout(() => {
        setIsSubmitting(false);
        setFormStatus('Appointment request sent successfully! We will get back to you shortly.');
        setTimeout(() => onClose(), 3000); // Close popup after success message
      }, 1500);
    }
  };
  
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 popup-container ${isOpen ? 'popup-visible' : 'popup-hidden'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Popup Panel */}
      <div ref={popupRef} className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden popup-panel">
        <div className="p-6 sm:p-8">
            <div className="flex justify-between items-start">
                <div>
                    <h2 id="popup-title" className="text-2xl font-bold text-gray-900">Book an Appointment</h2>
                    <p className="mt-1 text-gray-600">Let's discuss how we can help you grow.</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    aria-label="Close"
                >
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>
            
            {formStatus.includes('successfully') ? (
                <div className="py-12 text-center">
                    <CheckmarkCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-green-700 font-semibold">{formStatus}</p>
                </div>
            ) : (
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input ref={nameInputRef} type="text" id="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required className="block w-full bg-gray-100 border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required className="block w-full bg-gray-100 border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="phone" className="sr-only">Phone (Optional)</label>
                            <input type="tel" id="phone" placeholder="Phone (Optional)" value={formData.phone} onChange={handleInputChange} className="block w-full bg-gray-100 border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        </div>
                        <div>
                            <label htmlFor="date" className="sr-only">Preferred Date</label>
                            <input type="date" id="date" value={formData.date} onChange={handleInputChange} required className="block w-full bg-gray-100 border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-500" />
                            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                        </div>
                    </div>
                     <div>
                      <label htmlFor="service" className="sr-only">Service of Interest</label>
                      <select id="service" value={formData.service} onChange={handleInputChange} className="block w-full bg-gray-100 border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        {services.map(s => <option key={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea id="message" placeholder="Tell us about your project or needs..." value={formData.message} onChange={handleInputChange} rows={3} required className="block w-full bg-gray-100 border-transparent rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                     <div className="pt-2">
                      <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:bg-indigo-400 disabled:cursor-not-allowed">
                        {isSubmitting ? (
                            <>
                                <SpinnerIcon className="w-5 h-5" />
                                <span>Sending Request...</span>
                            </>
                        ) : (
                            <>
                                <span>Request Appointment</span>
                                <ArrowRightIcon className="w-5 h-5" />
                            </>
                        )}
                      </button>
                    </div>
                </form>
             )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentPopup;