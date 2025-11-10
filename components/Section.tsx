import React from 'react';
import { useInView } from '../hooks/useInView';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  // FIX: Removed 'triggerOnce' property as it does not exist in type 'IntersectionObserverInit'.
  // The custom useInView hook is already implemented to only trigger once.
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section 
        id={id}
        ref={ref} 
        className={`py-16 md:py-24 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
