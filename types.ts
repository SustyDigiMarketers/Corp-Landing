import React from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  author: string;
  authorImage: string;
  date: string;
}

export interface AppStat {
  count: number;
  suffix: string;
  label: string;
}

export interface HostingFeature {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    isHighlighted?: boolean;
}

export interface HostingProductTab {
    id: string;
    title: string;
    content: string;
    image: string;
    price: string;
}

export interface BillboardService {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export interface BillboardBenefit {
  title: string;
  description: string;
}

export interface PopupSettings {
  enabled: boolean;
  delay: number;
  title: string;
  content: string;
  ctaText: string;
  ctaLink: string;
}
