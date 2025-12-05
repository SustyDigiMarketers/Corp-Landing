// Fix: Added import for React to resolve "Cannot find namespace 'React'" error.
import React from 'react';

export enum Page {
  Home = 'Home',
  About = 'About',
  Services = 'Services',
  Products = 'Products',
  Portfolio = 'Portfolio',
  Blog = 'Blog',
  Pricing = 'Pricing',
  Contact = 'Contact',
  Login = 'Login',
  ClientDashboard = 'ClientDashboard',
  AdminPanel = 'AdminPanel',
  Careers = 'Careers',
  Donation = 'Donation',
  NotFound = 'NotFound',

  // Services
  WebDevelopment = 'WebDevelopment',
  AppDevelopment = 'AppDevelopment',
  UiUxDesign = 'UiUxDesign',
  DigitalMarketing = 'DigitalMarketing',
  InfluencerMarketing = 'InfluencerMarketing',
  Branding = 'Branding',
  Hosting = 'Hosting',
  Domain = 'Domain',
  DigitalAssets = 'DigitalAssets',

  // Products
  SustyHIMS = 'SustyHIMS',
  SustyHRMS = 'SustyHRMS',
  SustyCRM = 'SustyCRM',
  SustyPOS = 'SustyPOS',
  SustyHMS = 'SustyHMS',
  SustyPY = 'SustyPY',
}

export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export interface Service {
  name: string;
  description: string;
  tools: string[];
  price_start: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Product {
  name: string;
  tagline: string;
  features: string[];
  price: string;
}

export interface Project {
  client: string;
  service: string;
  result: string;
  images: string[];
}

export interface BlogPost {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface PricingPlan {
  plan: string;
  price: string;
  description: string;
  includes: string[];
  isFeatured?: boolean;
}

export interface JobOpening {
    role: string;
    location: string;
    salary: string;
}

export interface ClientProject {
  name: string;
  status: 'In Progress' | 'Completed' | 'On Hold';
  deadline: string;
  progress: number;
}

export interface ServicePricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface ServiceDetails {
  pageTitle: string;
  hero: {
    tag: string;
    title: string;
    description: string;
  };
  process: {
    title: string;
    description: string;
  }[];
  pricing: {
    title: string;
    description: string;
    plans: ServicePricingPlan[];
  };
  testimonials: Testimonial[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface DigitalMarketingDetails {
  pageTitle: string;
  hero: {
    tag: string;
    title: string;
    description: string;
    phone: string;
  };
  partners: {
    name: string;
    logo: React.ComponentType<{ className?: string }>;
  }[];
  services: {
    tag: string;
    title: string;
    items: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
    }[];
  };
  experience1: {
    tag: string;
    title: string;
    description: string;
    features: string[];
  };
  experience2: {
    tag: string;
    title: string;
    description: string;
    skills: {
      name: string;
      level: number;
    }[];
  };
  support: {
    tag: string;
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
}

export interface ProductDetails {
  pageTitle: string;
  hero: {
    title: string;
    description: string;
    image: string;
  };
  lovePoints: {
    title: string;
    description: string;
    points: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
    }[];
  };
  manageSection: {
    title: string;
    features: {
      icon: React.ComponentType<{ className?: string }>;
      description: string;
    }[];
    images: string[];
  };
  shareSection: {
    title: string;
    description: string;
    image: string;
  };
  cta: {
    title: string;
    description: string;
    image: string;
  };
}

export interface CrmProductDetails {
  pageTitle: string;
  hero: {
    features: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
    }[];
    socialIcons: React.ComponentType<{ className?: string }>[];
  };
  businessImpact: {
    title: string;
    description: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  trust: {
    title: string;
    highlighted: string;
    description: string;
    stats: {
      icon: React.ComponentType<{ className?: string }>;
      value: string;
      label: string;
    }[];
  };
  connect: {
    title: string;
    description: string;
  };
  assistance: {
    title: string;
    highlighted: string;
  };
}

export interface HrmsProductDetails {
  pageTitle: string;
  hero: {
    title: string;
    socialIcons: { icon: React.ComponentType<{ className?: string }>, position: string }[];
    button1Text: string;
    button2Text: string;
    mainImage: string;
  };
  expect: {
    title: string;
    description: string;
    features: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  measure: {
    title: string;
    description: string;
    imageUrl: string;
    subFeatures: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  statistics: {
    title: string;
    description: string;
    imageUrl: string;
    buttonText: string;
  };
}


export interface HimsProductDetails {
  pageTitle: string;
  hero: {
    tag: string;
    title: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  offer: {
    title: string;
    stat: string;
    statLabel: string;
    subTitle: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
    list: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
    }[];
  };
  progress: {
    tag: string;
    title: string;
    description: string;
  };
  process: {
    title: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  faq: {
    title: string;
    description: string;
    list: {
      question: string;
      answer: string;
    }[];
  };
}

export interface HmsProductDetails {
  pageTitle: string;
  hero: {
    title: string;
    subtitle: string;
    buttonText: string;
    mainImage: string;
  };
  features: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  trustBanner: {
    title: string;
    image: string;
  };
  detailedFeatures: {
    title: string;
    image: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  }[];
  analytics: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  partners: {
    title: string;
    logos: string[];
  };
  testimonials: {
    title: string;
    items: {
      quote: string;
      name: string;
      role: string;
      avatar: string;
    }[];
  };
  cta: {
    title: string;
    buttonText: string;
    image: string;
  };
}

export interface PosProductDetails {
  pageTitle: string;
  topFeatures: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }[];
  services: {
    title: string;
    description: string;
    list: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
    }[];
  };
  crypto: {
    title: string;
    description: string;
    currencies: {
      icon: React.ComponentType<{ className?: string }>;
      name: string;
      amount: string;
      color: string;
    }[];
  };
  additions: {
    title: string;
    description: string;
    list: {
      icon: React.ComponentType<{ className?: string }>;
      title: string;
      description: string;
    }[];
  };
  wallet: {
    tag: string;
    title: string;
    description: string;
  };
  income: {
    tag: string;
    title: string;
  };
}

export interface PyProductDetails {
  pageTitle: string;
  hero: {
    title: string;
    highlight: string;
    description: string;
    image: string;
  };
  cardsInfo: {
    title: string;
    description: string;
    image: string;
    subsections: {
      title: string;
      description: string;
    }[];
  };
  features: {
    title: string;
    mainImage: string;
    categories: {
      title: string;
      description: string;
      image?: string;
      items?: {
        icon: React.ComponentType<{ className?: string }>;
        name: string;
      }[];
    }[];
  };
  cardsShowcase: {
    title: string;
    cards: {
      image: string;
      name: string;
      description: string;
    }[];
  };
}