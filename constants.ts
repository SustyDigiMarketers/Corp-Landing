import {
    HeadsetIcon, CrownIcon, BusinessToolsIcon, EnterpriseIcon,
    ReactIcon, NodeIcon, TypeScriptIcon, TailwindIcon, AWSIcon, FigmaIcon, NextJSIcon, GraphQLIcon,
    MicrosoftLogoIcon, GoogleLogoIcon, WooCommerceIcon, StripeIcon, GoDaddyIcon,
    UserGroupIcon, ChartBarIcon, CheckmarkCircleIcon,
    FlagIcon, UserIcon, ToolsIcon, LightbulbIcon,
    ChartUpIcon, BookOpenIcon, HeartbeatIcon, HandshakeIcon,
    BoltIcon, RocketIcon, DesktopIcon, ServerStackIcon,
    FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon,
    MarketingIcon, DesignIcon, DevelopmentIcon, ConsultingIcon,
    // FIX: Imported missing icons.
    DatabaseIcon, CalendarIcon, LocationPinIcon, BriefcaseIcon, UsersIcon, BuildingIcon,
    ClockIcon, GlobeDirectionsIcon, DocumentReportIcon, CalendarCheckIcon, CreditCardOnlineIcon, 
    ShoppingCartIcon, LinkIcon, LeafIcon, ShieldCheckIcon, GlobeIcon, UserCircleIcon, DocumentTextIcon, PaletteIcon, CheckBadgeIcon, SparklesIcon, MegaphoneIcon, VideoCameraIcon, DocumentDuplicateIcon,
    BanknotesIcon, CubeTransparentIcon
} from './components/icons/TechIcons';
import type { AppStat, HostingFeature, HostingProductTab, BillboardService, BillboardBenefit } from './types';
import type { BlogPost } from './types';

export const services = [
  {
    title: 'Global Digital Strategy',
    description: 'We craft bespoke digital strategies that resonate with diverse international audiences, ensuring your brand’s message is impactful and culturally relevant across markets.',
  },
  {
    title: 'World-Class Development',
    description: 'Our globally-distributed team builds high-performance websites, scalable SaaS platforms, and robust mobile applications for clients from startups to enterprises.',
  },
  {
    title: 'Cross-Border AI & Automation',
    description: 'Leverage our AI expertise to automate complex workflows, analyze global market data, and deploy intelligent solutions that transcend borders.',
  },
  {
    title: 'International Enterprise Solutions',
    description: 'We deliver scalable and secure enterprise solutions, including CRM/ERP integrations and cloud infrastructure, designed for the complexities of global business operations.',
  },
];

export const trustedCompanyLogos = [
    { name: 'Microsoft', component: MicrosoftLogoIcon },
    { name: 'Google', component: GoogleLogoIcon },
    { name: 'WooCommerce', component: WooCommerceIcon },
    { name: 'Stripe', component: StripeIcon },
    { name: 'GoDaddy', component: GoDaddyIcon },
];

export const projects = [
    {
        clientName: 'QuantumLeap Corp',
        industry: 'SaaS / Technology',
        result: 'Increased user engagement by 40% with a redesigned platform.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
    {
        clientName: 'StellarBank',
        industry: 'FinTech',
        result: 'Developed a secure mobile banking app, leading to a 25% increase in mobile transactions.',
        image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200&auto=format&fit=crop',
    },
    {
        clientName: 'EvoHealth',
        industry: 'Healthcare',
        result: 'Launched a patient portal that reduced administrative workload by 30%.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d14?q=80&w=1200&auto=format&fit=crop',
    },
];

export const team = [
    { name: 'John Doe', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop' },
    { name: 'Jane Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop' },
    { name: 'Peter Jones', role: 'Head of Marketing', image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=800&auto=format&fit=crop' },
    { name: 'Sarah Williams', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
];

export const techStack = [
    { name: 'React', icon: ReactIcon },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'Tailwind CSS', icon: TailwindIcon },
    { name: 'AWS', icon: AWSIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Next.js', icon: NextJSIcon },
    { name: 'GraphQL', icon: GraphQLIcon },
];

export const faqData = [
    {
        question: 'What types of services do you offer?',
        answer: 'We offer a comprehensive suite of digital services, including Digital Marketing (SEO, SMM), Web & App Development, AI & Automation solutions, and Enterprise-level software integrations. We are a one-stop-shop for your digital needs.',
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a custom enterprise application could take several months. We provide a detailed timeline after our initial discovery phase.',
    },
    {
        question: 'What is your process for working with clients?',
        answer: 'Our process is collaborative and transparent. We start with a discovery phase to understand your goals, followed by strategy, design, development, and deployment. We maintain open communication throughout the project to ensure we are aligned with your vision.',
    },
    {
        question: 'Do you offer support after a project is launched?',
        answer: 'Yes, we offer ongoing support and maintenance packages to ensure your digital assets remain secure, up-to-date, and performant. We believe in building long-term partnerships with our clients.',
    },
];

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'The Future of AI in Digital Marketing',
        excerpt: 'Explore how artificial intelligence is revolutionizing marketing strategies, from personalization to predictive analytics.',
        image: 'https://images.unsplash.com/photo-1620712943543-285f5add6905?q=80&w=1200&auto=format&fit=crop',
        category: 'AI & Automation',
        readTime: '7 min read',
        author: 'Jane Smith',
        authorImage: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&auto=format&fit=crop',
        date: 'Oct 10, 2024',
    },
    {
        id: 2,
        title: '10 UI/UX Design Trends to Watch in 2025',
        excerpt: 'Stay ahead of the curve with these upcoming trends in user interface and user experience design that will define digital products.',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop',
        category: 'Design',
        readTime: '5 min read',
        author: 'Sarah Williams',
        authorImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        date: 'Oct 05, 2024',
    },
    {
        id: 3,
        title: 'Building Scalable Web Apps with Node.js',
        excerpt: 'A deep dive into the architecture and best practices for creating high-performance, scalable web applications with Node.js.',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
        category: 'Development',
        readTime: '10 min read',
        author: 'John Doe',
        authorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop',
        date: 'Sep 28, 2024',
    },
];

export const popularTopics = ['Digital Marketing', 'AI & Automation', 'Web Development', 'UI/UX Design', 'SaaS Products'];

export const jobStats = [
    { icon: BriefcaseIcon, count: '22k+', label: 'Live Job' },
    { icon: BuildingIcon, count: '10k+', label: 'Companies' },
    { icon: UsersIcon, count: '35k+', label: 'Candidates' },
    { icon: BriefcaseIcon, count: '7k+', label: 'New Jobs' },
];

export const jobCategories = [
    { name: 'Design', openPositions: 4, icon: DesignIcon },
    { name: 'Sales', openPositions: 2, icon: ChartUpIcon },
    { name: 'Marketing', openPositions: 5, icon: MarketingIcon },
    { name: 'Finance', openPositions: 1, icon: BusinessToolsIcon },
    { name: 'Technology', openPositions: 8, icon: DevelopmentIcon },
    { name: 'Engineering', openPositions: 3, icon: ToolsIcon },
    { name: 'Business', openPositions: 2, icon: HandshakeIcon },
    { name: 'Human Resource', openPositions: 1, icon: UserIcon },
];

export const featuredJobs = [
    {
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI1MCIgZmlsbD0iIzRmNDZlNSI+UzwvdGV4dD48L3N2Zz4=',
      title: 'Digital Marketer',
      company: 'SustyDigi Marketers',
      type: 'Full Time',
      location: 'New York, USA',
      salary: '$40k - $60k/year',
      daysRemaining: 2,
      isFeatured: true,
    },
    {
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI1MCIgZmlsbD0iI2VjNDg5OSI+QzwvdGV4dD48L3N2Zz4=',
      title: 'Senior UI/UX Designer',
      company: 'CreativeMinds Inc.',
      type: 'Full Time',
      location: 'Remote',
      salary: '$80k - $110k/year',
      daysRemaining: 5,
      isFeatured: false,
    },
    {
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI1MCIgZmlsbD0iIzIyYzU1ZSI+VDwvdGV4dD48L3N2Zz4=',
      title: 'Full-Stack Developer (React & Node)',
      company: 'TechSolutions LLC',
      type: 'Contract',
      location: 'San Francisco, CA',
      salary: '$120k - $150k/year',
      daysRemaining: 10,
      isFeatured: false,
    },
];


export const appStats: AppStat[] = [
    { count: 100, suffix: '+', label: 'Apps Launched' },
    { count: 5, suffix: 'M+', label: 'End Users Reached' },
    { count: 4, suffix: '.9', label: 'Avg. Client Rating' },
    { count: 10, suffix: '+', label: 'Industries Served' },
];

export const appFeatures = [
    { icon: DesktopIcon, title: 'Native & Cross-Platform', description: 'Expert development for iOS and Android, plus efficient cross-platform solutions using React Native and Flutter to maximize reach.' },
    { icon: LightbulbIcon, title: 'AI & ML Integration', description: 'Infuse your applications with intelligent features, from personalized recommendations to predictive analytics, creating smarter user experiences.' },
    { icon: ServerStackIcon, title: 'Scalable Cloud Architecture', description: 'We build on secure, scalable cloud backends (AWS, GCP) ensuring your app performs flawlessly as your user base grows.' },
];

export const appWorkSteps = [
    { icon: FlagIcon, title: 'Discovery & Strategy', description: 'We collaborate closely to define your vision, map user journeys, and create a comprehensive technical blueprint for success.' },
    { icon: DesignIcon, title: 'UI/UX Design & Prototyping', description: 'Our designers craft beautiful, intuitive interfaces and interactive prototypes that bring your app\'s user experience to life.' },
    { icon: RocketIcon, title: 'Development & Launch', description: 'With agile sprints and continuous testing, we build, deploy, and support your application for a seamless market entry.' },
];

export const smmStats = [
    { icon: ChartUpIcon, value: '500+', label: 'Campaigns Launched' },
    { icon: UserGroupIcon, value: '300%', label: 'Avg. Follower Growth' },
];

export const smmFeatures = [
    { icon: CalendarIcon, title: 'Strategic Planning & Content Calendars', description: 'Crafting data-driven content strategies and monthly calendars.' },
    { icon: ChartBarIcon, title: 'Performance Analytics & SEO', description: 'In-depth tracking, reporting, and social SEO optimization.' },
    { icon: HandshakeIcon, title: 'Influencer Collaboration', description: 'Connecting your brand with authentic, high-impact influencers.' },
    { icon: UsersIcon, title: 'Community Engagement', description: 'Building and nurturing a loyal and active online community.' },
    { icon: DesignIcon, title: 'Digital Asset Creation', description: 'Producing high-quality visuals, videos, and copy for your posts.' },
    { icon: BoltIcon, title: 'Paid Ad Campaign Management', description: 'Maximizing ROI with targeted social media advertising campaigns.' },
];

export const smmBenefits = [
    'Enhanced Brand Awareness',
    'Targeted Audience Reach',
    'Increased Website Traffic & SEO',
    'Authentic Influencer Partnerships',
    'Data-Driven Strategy & ROI',
    'Cohesive Brand Storytelling',
];

export const partners = [
    { name: 'Microsoft' },
    { name: 'Google' },
    { name: 'WooCommerce' },
    { name: 'Stripe' },
    { name: 'GoDaddy' },
];

export const testimonials = [
    {
      quote: "SustyDigi transformed our legacy systems into a modern, scalable cloud application. Their expertise and dedication were instrumental to our success.",
      name: 'John Smith',
      title: 'CEO, TechSolutions LLC',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    {
      quote: "The team delivered a high-quality mobile app on time and on budget. Their communication and project management were top-notch.",
      name: 'Emily Johnson',
      title: 'Product Manager, Innovate Co.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
    },
    {
      quote: "Working with SustyDigi felt like a true partnership. They understood our vision and provided valuable insights that improved the final product.",
      name: 'Michael Brown',
      title: 'Founder, CreativeMinds Inc.',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop'
    },
];


export const hostingFeatures: HostingFeature[] = [
    { icon: HeadsetIcon, title: '24/7 Expert Support', description: 'Our team is always here to help you, day or night.' },
    { icon: RocketIcon, title: 'Blazing Fast Speed', description: 'Optimized servers for maximum performance and reliability.' },
    { icon: BoltIcon, title: '99.9% Uptime Guarantee', description: 'We ensure your website is always online and accessible.' },
    {
        icon: CheckmarkCircleIcon,
        title: 'WordPress Pro',
        description: 'Get everything you need for a successful site.',
        isHighlighted: true
    },
    { icon: ToolsIcon, title: 'Easy-to-use cPanel', description: 'Manage your hosting account with an intuitive control panel.' },
    { icon: DatabaseIcon, title: 'Free SSL Certificate', description: 'Secure your site and build trust with visitors for free.' },
];

export const hostingProductTabs: HostingProductTab[] = [
    {
        id: 'shared',
        title: 'Shared Hosting',
        content: 'The perfect starting point for your website. Affordable, easy-to-use, and packed with features to get you online quickly.',
        image: 'https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=800&auto=format&fit=crop',
        price: '2.99'
    },
    {
        id: 'vps',
        title: 'VPS Hosting',
        content: 'More power and control for growing websites. Get dedicated resources and root access for ultimate flexibility.',
        image: 'https://images.unsplash.com/photo-1580983218765-15a5870a7b6a?q=80&w=800&auto=format&fit=crop',
        price: '19.99'
    },
    {
        id: 'dedicated',
        title: 'Dedicated Server',
        content: 'The ultimate in performance and security. A full server dedicated to your website for maximum power and reliability.',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
        price: '89.99'
    },
];

export const hostingNews = [
    {
        category: 'Maintenance',
        title: 'Scheduled Server Maintenance on Oct 25th',
    },
    {
        category: 'New Feature',
        title: 'Introducing One-Click Staging for WordPress',
    },
];

export const billboardServices: BillboardService[] = [
    { icon: MegaphoneIcon, title: 'Strategic Campaign Planning', description: 'Targeted ad campaigns for maximum reach.' },
    { icon: LocationPinIcon, title: 'Geofenced Advertising', description: 'Reach customers in specific physical locations.' },
    { icon: ChartBarIcon, title: 'Performance Analytics', description: 'Real-time tracking of views and engagement.' },
    { icon: PaletteIcon, title: 'Dynamic Creative Design', description: 'Eye-catching visuals and motion graphics.' },
    { icon: ClockIcon, title: 'Time-based Scheduling', description: 'Display ads at peak traffic times.' },
    { icon: ShieldCheckIcon, title: 'Brand Safety', description: 'Ensuring your ads appear in premium, safe locations.' },
];

export const billboardBenefits: BillboardBenefit[] = [
    { title: 'Massive Brand Exposure', description: 'Capture the attention of thousands of commuters and pedestrians daily with high-impact digital displays.' },
    { title: 'Targeted Audience Reach', description: 'Utilize demographic and location data to display your ads to the most relevant audience.' },
    { title: 'Dynamic & Flexible Content', description: 'Update your messaging in real-time to promote flash sales, events, or time-sensitive offers.' },
    { title: 'Higher Ad Recall', description: 'Digital billboards are more memorable than static ads, leading to better brand recognition.' },
    { title: 'Cost-Effective Reach', description: 'Achieve a lower cost per impression compared to many other forms of traditional advertising.' },
    { title: 'Measurable ROI', description: 'Track campaign performance with advanced analytics on audience engagement and conversion.' },
];

// Web Development Page Constants
export const webDevStats = [
    { icon: DesktopIcon, value: '150+', label: 'Projects Delivered' },
    { icon: UserGroupIcon, value: '100+', label: 'Happy Clients' },
    { icon: DevelopmentIcon, value: '1M+', label: 'Lines of Code' },
    { icon: CheckBadgeIcon, value: '99%', label: 'Client Satisfaction' },
];

export const webDevProcessSteps = [
    {
        icon: DesignIcon,
        title: '01. Discovery & UI/UX Design',
        description: 'We start with a deep dive into your requirements, followed by wireframing and creating a pixel-perfect, user-centric design that reflects your brand identity.'
    },
    {
        icon: DevelopmentIcon,
        title: '02. Agile Development & Testing',
        description: 'Our team uses agile methodologies to build your website. We conduct rigorous testing throughout the development cycle to ensure a bug-free, high-performance product.'
    },
    {
        icon: RocketIcon,
        title: '03. Deployment & Ongoing Support',
        description: 'We handle the seamless deployment to your server. After launch, we provide ongoing support and maintenance to ensure your website remains secure and up-to-date.'
    }
];

export const webSolutionTypes = [
    {
        icon: EnterpriseIcon,
        title: 'Corporate & Business Websites',
        description: 'Professional, responsive websites to establish a strong online presence for your brand.'
    },
    {
        icon: ShoppingCartIcon,
        title: 'E-commerce Platforms',
        description: 'Robust and scalable online stores with secure payment gateways and intuitive inventory management.'
    },
    {
        icon: ServerStackIcon,
        title: 'Custom Web Applications',
        description: 'Complex, data-driven web applications and SaaS platforms tailored to your specific business needs.'
    },
    {
        icon: DocumentDuplicateIcon,
        title: 'CMS & Blog Development',
        description: 'Easy-to-manage content management systems that empower you to update your website content effortlessly.'
    }
];


// Enterprise Software Page Constants
export const enterpriseIndustries = [
  {
    icon: HeartbeatIcon,
    name: 'Healthcare',
    description: 'Custom Hospital Information Systems (HIS), EMR/EHR solutions, and patient management portals.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: BuildingIcon,
    name: 'Hospitality',
    description: 'Integrated Property Management Systems (PMS), booking engines, and guest experience platforms for hotels.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: ShoppingCartIcon,
    name: 'Retail & Supermarkets',
    description: 'Comprehensive retail management software, POS systems, inventory control, and supply chain solutions.',
    image: 'https://images.unsplash.com/photo-1528698827591-e19a72a59201?q=80&w=1200&auto=format&fit=crop',
  },
];

export const enterpriseFeatures = [
    {
        icon: ServerStackIcon,
        title: 'Scalable Architecture',
        description: 'We build future-proof software on robust cloud infrastructure that grows seamlessly with your enterprise.',
    },
    {
        icon: RocketIcon,
        title: 'Legacy System Modernization',
        description: 'Upgrade your outdated systems to modern, efficient, and secure platforms without disrupting your operations.',
    },
    {
        icon: LinkIcon,
        title: 'Custom API & Integrations',
        description: 'We connect your disparate systems, creating a unified ecosystem through custom API development and third-party integrations.',
    },
    {
        icon: ChartBarIcon,
        title: 'Advanced Data Analytics',
        description: 'Leverage the power of your data with business intelligence dashboards and predictive analytics to make informed decisions.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Security & Compliance',
        description: 'Our solutions are built with enterprise-grade security and adhere to industry-specific compliance standards (e.g., HIPAA).',
    },
    {
        icon: HeadsetIcon,
        title: 'Ongoing Support & Maintenance',
        description: 'We offer dedicated support and maintenance plans to ensure your software runs smoothly and stays up-to-date.',
    }
];


// UI/UX Page Constants
export const uiUxServices = [
    {
        icon: UserCircleIcon,
        title: "User Research & Strategy",
        description: "We dive deep into your audience's needs and behaviors to build a strategic foundation for a product people will love.",
    },
    {
        icon: DocumentTextIcon,
        title: "Wireframing & Prototyping",
        description: "We create interactive blueprints of your application, allowing for rapid iteration and user feedback before a single line of code is written.",
    },
    {
        icon: PaletteIcon,
        title: "Visual & UI Design",
        description: "Our designers craft pixel-perfect, aesthetically pleasing interfaces that are not only beautiful but also intuitive and accessible.",
    },
    {
        icon: CheckBadgeIcon,
        title: "Usability Testing & Iteration",
        description: "We validate design decisions with real users, identifying pain points and refining the experience to ensure maximum usability.",
    },
];

export const uiUxProcess = [
    { step: "01", title: "Discover & Define", description: "In-depth research and stakeholder workshops to align on goals and define user personas and journeys." },
    { step: "02", title: "Ideate & Design", description: "Brainstorming, sketching, and creating low-fidelity wireframes to explore design solutions." },
    { step: "03", title: "Prototype & Test", description: "Building interactive prototypes and conducting user testing to gather actionable feedback." },
    { step: "04", title: "Deliver & Iterate", description: "Finalizing high-fidelity designs, creating design systems, and collaborating with developers for seamless handoff." },
];

// Digital Designs Page Constants
export const digitalDesignServices = [
    {
        icon: SparklesIcon,
        title: "Logo Design & Brand Identity",
        description: "Crafting memorable logos and comprehensive brand guidelines that tell your unique story.",
    },
    {
        icon: MegaphoneIcon,
        title: "Marketing & Ad Creatives",
        description: "Designing eye-catching banners, social media posts, and ad visuals that stop the scroll and drive engagement.",
    },
    {
        icon: VideoCameraIcon,
        title: "Video Editing & Motion Graphics",
        description: "Producing compelling video content, from promotional shorts to animated explainers, that captivates your audience.",
    },
    {
        icon: DocumentDuplicateIcon,
        title: "Print & Digital Collateral",
        description: "Creating professional brochures, business cards, presentations, and digital assets that maintain brand consistency.",
    },
];

export const designShowcase = [
    { category: "Branding", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop" },
    { category: "Social Media", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop" },
    { category: "Video Production", image: "https://images.unsplash.com/photo-1528716321680-815a4cdb8cbe?q=80&w=800&auto=format&fit=crop" },
    { category: "Print Design", image: "https://images.unsplash.com/photo-1534970028765-38ce47ef7d8d?q=80&w=800&auto=format&fit=crop" },
];

// Homepage Global Locations
export const globalLocations = [
    { name: 'USA', coords: { top: '35%', left: '22%' } },
    { name: 'UK', coords: { top: '28%', left: '48%' } },
    { name: 'Europe', coords: { top: '32%', left: '52%' } },
    { name: 'UAE', coords: { top: '45%', left: '60%' } },
    { name: 'India', coords: { top: '48%', left: '68%' } },
    { name: 'Sri Lanka', coords: { top: '58%', left: '69%' } },
    { name: 'Japan', coords: { top: '38%', left: '85%' } },
];

export const enterpriseProducts = [
  {
    icon: UsersIcon,
    name: 'HR Management System',
    description: 'A complete suite to manage payroll, recruitment, employee performance, and attendance.',
    path: '/products/hr-management',
    color: 'indigo',
  },
  {
    icon: HeartbeatIcon,
    name: 'Hospital Management System',
    description: 'Integrated software for patient records, billing, appointments, and pharmacy management.',
    path: '/products/hospital-management',
    color: 'blue',
  },
  {
    icon: BuildingIcon,
    name: 'Hotel Management System',
    description: 'Streamline reservations, front-desk operations, housekeeping, and guest services.',
    path: '/products/hotel-management',
    color: 'purple',
  },
  {
    icon: BanknotesIcon,
    name: 'Finance Management',
    description: 'Manage accounting, create financial reports, and track expenses with our secure platform.',
    path: '/products/finance-management',
    color: 'green',
  },
  {
    icon: DocumentReportIcon,
    name: 'Purchase Management',
    description: 'Optimize your procurement cycle from purchase orders to inventory and supplier management.',
    path: '/products/purchase-management',
    color: 'teal',
  },
  {
    icon: CreditCardOnlineIcon,
    name: 'Billing Software',
    description: 'Automate invoicing, recurring payments, and financial reporting for any business model.',
    path: '/products/billing-software',
    color: 'cyan',
  },
  {
    icon: CubeTransparentIcon,
    name: 'WorkStation (Sustone OS)',
    description: 'A unified hub for project management, team collaboration, and workflow automation.',
    path: '/products/workstation',
    color: 'sky',
  },
  {
    icon: ShoppingCartIcon,
    name: 'Point of Sales (POS)',
    description: 'A powerful and intuitive POS system for retail to manage sales, inventory, and customers.',
    path: '/products/point-of-sales',
    color: 'rose',
  },
];