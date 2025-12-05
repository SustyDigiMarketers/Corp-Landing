

import type { Testimonial, TeamMember, Service, Product, Project, BlogPost, PricingPlan, JobOpening, ClientProject, ServiceDetails, ProductDetails, CrmProductDetails, HrmsProductDetails, HimsProductDetails, HmsProductDetails, PosProductDetails, PyProductDetails, DigitalMarketingDetails } from './types';
import { WebDevIcon, MarketingIcon, DesignIcon, AutomationIcon, BrushIcon, ShieldCheckIcon, EyeIcon, CheckCircleIcon, CalendarIcon, WandIcon, StackIcon, InstagramIcon, TiktokIcon, PinterestIcon, QIcon, LinkedInCircleIcon, UsersGroupIcon, HeartIcon, StarIcon, TwitterLogo, AsanaIcon, BehanceIcon, CreditCardIcon, CorporateIcon, RegulationIcon, HealthMonitorIcon, IntegratedCareIcon, PreventiveHealthIcon, HolisticHealthIcon, RecoveryCenterIcon, TelemedicineIcon, DataProtectionIcon, OpenSourceIcon, EasyToUseIcon, ShopOnlineIcon, InvoiceIcon, StatsIcon, BitcoinIcon, EthereumIcon, TetherIcon, SystemReportingIcon, CurrencySelectionIcon, GlobalStatisticsIcon, DollarSignIcon, LockIcon, PaypalIcon, VisaIcon, WiseIcon, StripeIcon, PhoneIcon, UserIcon, MailIcon, BuildingIcon, CheckCircleGreenIcon, CrossCircleRedIcon, QuadraLogo, CreaformLogo, OurSoftwareLogo, UdemyLogo, BusinessConceptIcon, WebMobileDevIcon, PlayIcon, ShopifyIcon, CreativeDevIcon, BusinessConsultationIcon, PerfectSolutionsIcon, HiTeckLogo, ConsoultsLogo, StartUpLogo, ConsultancyLogo, BookstackLogo, MoleculeIcon, DesktopIcon, LaunchIcon, ClientCentricIcon, InnovationIcon, BellIcon, ApiReferenceIcon, GrowthIcon, MoneybackIcon, TechnicalSupportIcon, FigmaLogo, RedditLogo, SketchLogo, PhoneInTalkIcon, DevelopmentIcon, ExperienceIcon, StrategyIcon, MattWillLogo, AnubisLogo, AlonzLogo, SouthwellLogo, OldvintagLogo, IndieproLogo, On3xtgnLogo, TakeAwayLogo, JcLogo, UptimeIcon, SecureServerIcon, DedicatedSupportIcon, SettingsIcon, SlackLogo, GoogleLogo, FacebookIcon, HuluLogo, BbcStudiosLogo, UniversalLogo, AdobeLogo, BusinessPlanningIcon, FinancialPlanningIcon, MarketAnalysisIcon, ResearchIcon, BrandingIdentityIcon, GlobeIcon, CloudLockIcon, MoneyBack30Icon, SecuredCloudIcon, SinglePlatformIcon, ImplementYourselfIcon, MultiRegionalIcon, QuickNavigationIcon, WorksInWebIcon, QuickSetupIcon, CompletePurchaseIcon, SignupNoCreditIcon, AtlassianLogo, SalesforceLogo, HubspotLogo, WebflowLogo, IntercomLogo, DropboxLogo } from './components/Icons';
import { Page } from './types';

export const homeData = {
// ... keep existing homeData ...
  hero_heading: "Building the Future of Digital Presence",
  hero_subheading: "From branding to full-stack development — powered by AI and creativity.",
  cta_primary: "Get Started",
  who_we_are: {
    tagline: "A BIT",
    title: "ABOUT US",
    content: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.",
    button_text: "EXPLORE MORE",
    images: {
      main: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&h=800&q=80",
      sub1: "https://images.unsplash.com/photo-1553877616-1528023ee29a?auto=format&fit=crop&w=600&h=400&q=80",
      sub2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&h=400&q=80",
    },
    stats: {
      sales: "30,000+",
      sales_desc: "Sales in July 2021 with 5 star ratings and happy clients.",
      trend_icon: 'GrowthIcon',
      avatars: [
          "https://i.pravatar.cc/150?u=h",
          "https://i.pravatar.cc/150?u=i",
          "https://i.pravatar.cc/150?u=j",
          "https://i.pravatar.cc/150?u=k",
          "https://i.pravatar.cc/150?u=l",
      ]
    }
  },
  why_us: {
    title: "Why Choose Us?",
    points: [
      { title: "AI-Powered Strategy", description: "We leverage cutting-edge AI to derive insights, automate processes, and maximize your ROI.", icon: 'AIIcon' },
      { title: "Client-Centric Approach", description: "Your success is our success. We work as an extension of your team to understand and achieve your goals.", icon: 'ClientCentricIcon' },
      { title: "Results-Driven Execution", description: "We are obsessed with metrics and tangible outcomes, ensuring every campaign delivers measurable value.", icon: 'ResultsIcon' }
    ]
  },
  features: [
    {
      title: "Sync Data from Anywhere",
      description: "Instantly explore and pull data from any system. No more waiting for days and weeks to get your hands on the data you need.",
      link_text: "Sign up now!",
      image_side: 'right',
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      sources: ['Snowflake', 'Analytics', 'Facebook', 'Adwords', 'Airtable', 'Shopify', 'Salesforce'],
    },
    {
      title: "Collaborate across teams",
      description: "Integrate seamlessly into any existing ETL stack. Share metrics layers and data pipelines across teams for one source of truth. Best in class data Security and Governance Features - SOC II compliance, approval layers, role based controls",
      link_text: "Sign up now!",
      image_side: 'left',
      collaboration_points: [
        { text: 'Approve production bot', icon: 'CheckCircleIcon' },
        { text: 'Define Metrics', icon: 'MetricsIcon' },
        { text: 'Track data lineage', icon: 'LineageIcon' },
        { text: 'Share Analysis', icon: 'ShareIcon' },
      ],
      avatars: [
        "https://i.pravatar.cc/150?u=a",
        "https://i.pravatar.cc/150?u=b",
        "https://i.pravatar.cc/150?u=c",
        "https://i.pravatar.cc/150?u=d",
        "https://i.pravatar.cc/150?u=e",
        "https://i.pravatar.cc/150?u=f",
      ]
    },
  ],
  core_values: {
    title: "Our Core Values",
    values: [
      { name: "Innovation", description: "Constantly pushing the boundaries of what's possible.", icon: 'InnovationIcon' },
      { name: "Integrity", description: "Building trust through transparent and ethical practices.", icon: 'IntegrityIcon' },
      { name: "Excellence", description: "Striving for the highest quality in everything we do.", icon: 'ExcellenceIcon' }
    ]
  },
  services_title: "Our Services",
  services_subtitle: "Save Time Managing Social Media For Your Business",
  services: [
    {
      title: "Digital Agency",
      description: "There are many variations passages of Lorem Ipsum majority some by injected or randomised.",
      icon: "DesktopIcon",
      gradient: "bg-gradient-to-br from-blue-400 to-indigo-600",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      date: "26 December 2023"
    },
    {
      title: "Team Accounts",
      description: "There are many variations passages of Lorem Ipsum majority some by injected or randomised.",
      icon: "BellIcon",
      gradient: "bg-gradient-to-br from-pink-400 to-red-500",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      date: "15 January 2024"
    },
    {
      title: "Email Marketing",
      description: "There are many variations passages of Lorem Ipsum majority some by injected or randomised.",
      icon: "MailIcon",
      gradient: "bg-gradient-to-br from-purple-400 to-violet-600",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      date: "20 February 2024"
    },
    {
      title: "API Reference",
      description: "There are many variations passages of Lorem Ipsum majority some by injected or randomised.",
      icon: "ApiReferenceIcon",
      gradient: "bg-gradient-to-br from-yellow-300 to-orange-400",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
      date: "10 March 2024"
    }
  ],
  stats: [
    { label: "Projects Delivered", value: 150, suffix: "+" },
    { label: "Client Satisfaction", value: 99, suffix: "%" },
    { label: "Years of Experience", value: 5, suffix: "+" },
    { label: "Awards Won", value: 12, suffix: "" }
  ],
  products: [
    {
      title: 'SustyCRM',
      description: 'All-in-one customer engagement suite for lead tracking and automation.',
      icon: 'ClientCentricIcon',
      tags: ['CRM', 'SALES'],
      gradient: 'bg-gradient-to-br from-orange-400 to-pink-600',
      wave_color: 'text-orange-500'
    },
    {
      title: 'SustyHRMS',
      description: 'Next-gen Human Resource Management for modern teams.',
      icon: 'UsersGroupIcon',
      tags: ['HR', 'TEAMS'],
      gradient: 'bg-gradient-to-br from-blue-400 to-indigo-600',
      wave_color: 'text-blue-500'
    },
    {
      title: 'SustyHIMS',
      description: 'Transform Your Health Management with integrated care.',
      icon: 'HealthMonitorIcon',
      tags: ['HEALTH', 'CARE'],
      gradient: 'bg-gradient-to-br from-teal-400 to-emerald-600',
      wave_color: 'text-teal-500'
    },
    {
      title: 'SustyPOS',
      description: 'Seamless Point of Sale & Inventory management system.',
      icon: 'CreditCardIcon',
      tags: ['RETAIL', 'POS'],
      gradient: 'bg-gradient-to-br from-purple-500 to-fuchsia-600',
      wave_color: 'text-purple-500'
    },
    {
      title: 'SustyHMS',
      description: 'Comprehensive Cloud ERP Software for growing businesses.',
      icon: 'BuildingIcon',
      tags: ['ERP', 'CLOUD'],
      gradient: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      wave_color: 'text-indigo-500'
    },
    {
      title: 'SustyPY',
      description: 'Secure and fast Payment Gateway for all transactions.',
      icon: 'DollarSignIcon',
      tags: ['PAY', 'FINANCE'],
      gradient: 'bg-gradient-to-br from-rose-400 to-red-600',
      wave_color: 'text-rose-500'
    },
  ],
  testimonials: [
    { name: "Ravi K", role: "CEO, NexaPrints", feedback: "Our leads grew 3x within 2 months! The team at SustyDigi is phenomenal.", avatar: "https://i.pravatar.cc/150?u=ravi" },
    { name: "Nithya S", role: "Founder, StyleHub", feedback: "Their web design made our brand look world-class. Highly recommended.", avatar: "https://i.pravatar.cc/150?u=nithya" },
    { name: "Anand M", role: "CTO, Fintech Solutions", feedback: "The automation tools they built for us saved hundreds of man-hours.", avatar: "https://i.pravatar.cc/150?u=anand" }
  ] as Testimonial[],
};

export const aboutData = {
// ... keep existing aboutData ...
  hero: {
    welcomeText: "Welcome to TeamFlow",
    title: "Work the way that works for you",
    subtitle: "Create, Build, Collaborate and ship products very faster.",
    ctaText: "Get Started",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  partners: {
    title: "See why over 100,000 teams choose TeamFlow.com",
    logos: ["HuluLogo", "BbcStudiosLogo", "UniversalLogo", "AdobeLogo"]
  },
  whatYouCanDo: {
    title: "What you can do?",
    items: [
      {
        icon: "BusinessPlanningIcon",
        title: "Business Planning",
        description: "Our Business Plan is a written document describing a company's core business activities."
      },
      {
        icon: "FinancialPlanningIcon",
        title: "Financial Planning",
        description: "Our expert team sensible decisions about money, to ensure they achieve the life goals."
      },
      {
        icon: "MarketAnalysisIcon",
        title: "Market Analysis",
        description: "A market analysis is a quantitative and qualitative assessment of a market. It looks into the size."
      }
    ]
  },
  features: [
    {
      title: "Manage everything in one workspace",
      description: "Planning, tracking and delivering your team’s best work has never been easier. An integrated workspace that’s simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      ctaText: "Start your work"
    },
    {
      title: "Set up in minutes",
      description: "Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful templates and infographics.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Integrate with your existing tools",
      description: "TeamFlow connects with many of your favorite tools. From Slack to Google Drive, we've got you covered. This makes it easy to keep your workflow in one place.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ],
  support: {
      title: "24/7 Customer Support",
      description: "Our team is here to give you personalized support within the hour available 24/7. In accordance with our commitment to providing superior and professional service.",
      ctaText: "Read More"
  },
  newsletter: {
    supportText: "Support",
    title: "Subscribe Newsletter & get Company News",
    placeholder: "Your email",
    buttonText: "Subscribe"
  },
  globalPresence: {
    title: "Our Global Presence",
    description: "Connecting businesses worldwide. From busy cities to quiet corners, our reach is growing.",
    mapImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png",
    locations: [
        { name: "USA", top: "29%", left: "21%" },
        { name: "UK", top: "22%", left: "49%" },
        { name: "Germany", top: "24%", left: "53%" },
        { name: "Russia", top: "16%", left: "75%" },
        { name: "China", top: "33%", left: "78%" },
        { name: "India", top: "44%", left: "70%" },
        { name: "Japan", top: "31%", left: "88%" },
        { name: "Australia", top: "65%", left: "87%" },
    ]
  },
  mission_vision: {
    mission: "Our mission is to empower businesses with innovative digital solutions that drive growth, efficiency, and market leadership. We are committed to delivering excellence and building long-lasting partnerships.",
    vision: "Our vision is to be a global leader in digital transformation, recognized for our creativity, technological expertise, and client-centric approach, shaping the future of digital presence.",
  },
  what_we_provide: [
    { title: "Creative Solutions", description: "Tailored strategies and designs that capture your brand's essence and engage your audience.", icon: "SolutionsIcon" },
    { title: "Expert Experience", description: "A team of seasoned professionals dedicated to delivering high-quality results and exceptional service.", icon: "ExperienceIcon" },
    { title: "Proven Process", description: "A structured, agile workflow that ensures transparency, efficiency, and successful project outcomes.", icon: "ProcessIcon" }
  ],
  work_process: [
      { step: 1, title: 'Discovery', description: 'Understand your goals and challenges.' },
      { step: 2, title: 'Strategy', description: 'Develop a data-driven plan for success.' },
      { step: 3, title: 'Execution', description: 'Build and deploy with precision.' },
      { step: 4, title: 'Growth', description: 'Analyze, optimize, and scale.' },
  ],
  timeline: [
    { year: '2019', title: 'Company Founded', description: 'SustyDigi was born with a mission to revolutionize digital marketing.' },
    { year: '2021', title: 'First 100 Clients', description: 'Reached a major milestone, serving a diverse range of industries.' },
    { year: '2023', title: 'Expanded to SaaS', description: 'Launched our first suite of proprietary software products.' },
    { year: '2025', title: 'Global Recognition', description: 'Awarded for innovation in AI-powered digital solutions.' },
  ],
  global_presence: [
    "USA", "India", "UK", "Canada", "Australia", "Germany"
  ],
};

// ... keep existing servicesData, productsData, portfolioData, blogData, pricingData, contactData, careersData, clientDashboardData, adminPanelData, serviceDetailsData, digitalMarketingData, productDetailsData, crmProductData, hrmsProductData, himsProductData, hmsProductData, posProductData, pyProductData, webDevelopmentPageData, appDevelopmentData, uiUxDesignPageData, brandingPageData ...
export const servicesData = {
  development: [
    { name: "Web App Development", description: "Custom, scalable, responsive applications for web and mobile.", tools: ["React", "Node.js", "MongoDB"], price_start: "₹30,000", icon: WebDevIcon },
    { name: "E-commerce Solutions", description: "Powerful online stores with seamless payment gateway integrations.", tools: ["Shopify", "WooCommerce", "Magento"], price_start: "₹50,000", icon: WebDevIcon },
  ] as Service[],
  marketing: [
      { name: "Digital Marketing", description: "SEO, PPC, Social Media, and automation-driven growth campaigns.", tools: ["Google Ads", "Meta", "LinkedIn"], price_start: "₹10,000", icon: MarketingIcon },
      { name: "Content Strategy", description: "Engaging content creation and distribution to build your brand authority.", tools: ["Blogging", "Video", "Podcasts"], price_start: "₹15,000", icon: MarketingIcon },
  ] as Service[],
    design: [
      { name: "UI/UX Design", description: "User-centric designs that are both beautiful and functional.", tools: ["Figma", "Adobe XD", "Sketch"], price_start: "₹25,000", icon: DesignIcon },
      { name: "Branding & Identity", description: "Creating memorable brand identities from logos to full style guides.", tools: ["Illustrator", "Photoshop"], price_start: "₹20,000", icon: DesignIcon },
  ] as Service[],
  automation: [
      { name: "Marketing Automation", description: "Automate your marketing and sales funnels for maximum efficiency.", tools: ["HubSpot", "Zapier", "Mailchimp"], price_start: "₹18,000", icon: AutomationIcon },
      { name: "AI Chatbot Integration", description: "24/7 customer support and lead generation with smart AI chatbots.", tools: ["Dialogflow", "Gemini API"], price_start: "₹22,000", icon: AutomationIcon },
  ] as Service[],
};

export const productsData = {
  products: [
    { name: "SustyCRM", tagline: "All-in-one customer engagement suite.", features: ["Lead tracking", "Email automation", "Performance dashboard"], price: "₹999/month" },
    { name: "SustyPay", tagline: "Next-gen payment gateway with smart analytics.", features: ["Multi-mode UPI", "AI fraud detection", "Smart billing"], price: "₹1999/month" },
    { name: "SustyAI", tagline: "AI-powered content generation and optimization tool.", features: ["SEO Content", "Social Media Posts", "Ad Copy Generation"], price: "₹1499/month" }
  ] as Product[],
};

export const portfolioData = {
  projects: [
    { client: "UrbanStyle", service: "UI/UX + Branding", result: "+65% conversion in 3 weeks", images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"] },
    { client: "EduPrime", service: "Web App Development", result: "Reduced bounce rate by 48%", images: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1509062522246-37559cc792f9?auto=format&fit=crop&w=800&q=80"] },
    { client: "HealthPlus", service: "Marketing Automation", result: "+200% lead generation", images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"] },
    { client: "GourmetGo", service: "E-commerce Solution", result: "Increased AOV by 30%", images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"] }
  ] as Project[],
};

export const blogData = {
  posts: [
    { title: "Top 5 UI Trends for 2026", author: "Divya", date: "Nov 1, 2025", excerpt: "From glassmorphism to kinetic typography, here’s what’s redefining design.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" },
    { title: "How AI Changes Digital Marketing Forever", author: "Santhosh", date: "Oct 20, 2025", excerpt: "Data-driven creativity is the future of campaign success.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" },
    { title: "A Developer's Guide to Scalable React Apps", author: "Karthik", date: "Oct 5, 2025", excerpt: "Best practices for building large-scale applications with React and TypeScript.", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80" },
  ] as BlogPost[],
};

export const pricingData = {
  plans: [
    { plan: "Startup", price: "₹9,999", description: "Perfect for new businesses to establish a digital presence.", includes: ["1 Website (up to 5 pages)", "Basic SEO Setup", "Social Media Automation"], isFeatured: false },
    { plan: "Growth", price: "₹24,999", description: "For growing businesses looking to scale their marketing efforts.", includes: ["Full Website/Web App", "Advanced SEO & PPC", "Content Marketing", "Dedicated Support"], isFeatured: true },
    { plan: "Enterprise", price: "₹49,999", description: "Comprehensive solutions for large-scale enterprise needs.", includes: ["Unlimited Projects", "Dedicated Manager", "AI Branding Tools", "Custom Integrations"], isFeatured: false }
  ] as PricingPlan[],
};

export const contactData = {
    address: "No. 45, Tech Park Road, Trichy - 620021",
    email: "contact@sustydigi.com",
    phone: "+91 98765 43210",
    faq: [
      {
        question: "What is SustyDigi?",
        answer: "SustyDigi is an all-in-one digital marketing and software development platform designed to simplify payments, automate invoicing, track expenses in real-time, and ensure secure transactions for businesses of all sizes."
      },
      {
        question: "How does SustyDigi work?",
        answer: "Our process involves an initial discovery call, followed by strategy development, design, implementation, and continuous optimization. We work closely with you at every step to ensure your goals are met."
      },
      {
        question: "Is SustyDigi secure?",
        answer: "Absolutely. We prioritize security in everything we build, from our web applications to our hosting solutions. We use industry-best practices and robust security protocols to protect your digital assets."
      },
      {
        question: "Can SustyDigi integrate with other accounting software?",
        answer: "Yes, our custom software solutions are designed to be flexible and can integrate with a wide range of third-party services and accounting software to streamline your workflow."
      }
    ]
};

export const careersData = {
  open_positions: [
    { role: "Senior React Developer", location: "Remote", salary: "₹60,000/month" },
    { role: "Graphic Designer", location: "Trichy", salary: "₹30,000/month" },
    { role: "Digital Marketing Manager", location: "Trichy / Remote", salary: "₹45,000/month" }
  ] as JobOpening[],
};

export const clientDashboardData = {
    projects: [
        { name: "StyleHub Website Revamp", status: "In Progress", deadline: "Dec 15, 2025", progress: 75 },
        { name: "EduPrime SEO Campaign", status: "Completed", deadline: "Oct 10, 2025", progress: 100 },
        { name: "NexaPrints Marketing Automation", status: "On Hold", deadline: "Jan 20, 2026", progress: 30 },
    ] as ClientProject[],
    notifications: ["Invoice #1204 due for StyleHub project", "New report available for EduPrime Campaign", "Meeting scheduled for tomorrow at 11 AM"],
};

export const adminPanelData = {
    analytics: {
        monthly_visits: 18234,
        leads_generated: 240,
        conversion_rate: "3.8%",
        revenue: 450000
    }
};

const defaultServiceData = {
// ... keep defaultServiceData ...
  hero: {
    tag: "Step-by-Step",
    title: "Your Path to Digital Excellence: Mastering Every Step With Our Custom Process",
    description: "Welcome to the ultimate solution for building powerful, scalable, and beautiful digital products. We guide you from concept to launch, ensuring your digital presence is effective and future-proof.",
  },
  process: [
    { title: "Discovery & Strategy", description: "We begin with a deep dive into your business goals, target audience, and technical requirements to create a comprehensive project blueprint." },
    { title: "Design & Prototyping", description: "Our team designs intuitive and engaging user interfaces, creating wireframes and prototypes to visualize the end product before development begins." },
    { title: "Execution & Testing", description: "We build your solution using modern, agile methodologies, with continuous testing to ensure a high-quality, bug-free launch." },
  ],
  pricing: {
    title: "Flexible and Affordable Pricing Plans",
    description: "Empower Your Success with our transparent pricing.",
    plans: [
      { name: "Basic Plan", monthlyPrice: 99, yearlyPrice: 79, description: "Idea for individuals and small businesses", features: ["Essential Feature 1", "Standard Support", "Basic Analytics"], isFeatured: false },
      { name: "Pro Plan", monthlyPrice: 149, yearlyPrice: 119, description: "Perfect for growing businesses seeking an edge", features: ["All Basic Features", "Advanced Feature 1", "Priority Support", "Advanced Analytics"], isFeatured: true },
      { name: "Enterprise Plan", monthlyPrice: 199, yearlyPrice: 159, description: "New for individual or small businesses", features: ["All Pro Features", "Dedicated Account Manager", "Custom Integrations", "Premium Support"], isFeatured: false },
    ]
  },
  testimonials: [
    { name: "Mark Johnson", role: "SEO Specialist", feedback: "As an SEO expert, I've seen it all. But Quad SEO stood out. The depth of analytics and the precision of the rank tracking features are unparalleled.", avatar: "https://i.pravatar.cc/150?u=mark" },
    { name: "Jane Smith", role: "Small Business Owner", feedback: "Quad exceeded my expectations. The user-friendly interface made it simple to navigate complex SEO tasks.", avatar: "https://i.pravatar.cc/150?u=jane" },
    { name: "Emily White", role: "E-commerce Manager", feedback: "We integrated Quad into our e-commerce strategy, and the results have been phenomenal. The backlink management tools are a game-changer.", avatar: "https://i.pravatar.cc/150?u=emily" }
  ],
  faq: [
    { question: "What sets your service apart?", answer: "Our holistic approach combines cutting-edge technology with deep industry expertise, ensuring you receive a solution that's not only effective but also sustainable for long-term growth." },
    { question: "How secure is my data with SustyDigi?", answer: "Security is our top priority. We implement industry-best practices, including end-to-end encryption and regular security audits, to protect your data at all times." },
    { question: "Can you customize a plan for my specific needs?", answer: "Absolutely. While we offer standard packages, we specialize in creating custom solutions tailored to your unique requirements and budget. Contact us for a personalized quote." },
  ]
};

// Data for all service detail pages
export const serviceDetailsData: { [key in Page]?: ServiceDetails } = {
  [Page.InfluencerMarketing]: {
    ...defaultServiceData,
    pageTitle: "Influencer Marketing",
    hero: { ...defaultServiceData.hero, title: "Amplifying Your Brand's Voice: Mastering Every Step of Influencer Marketing" },
  },
  [Page.Domain]: {
    ...defaultServiceData,
    pageTitle: "Domain Services",
    hero: { ...defaultServiceData.hero, title: "Your Address on the Web: Mastering Every Step of Domain Management" },
  },
  [Page.DigitalAssets]: {
    ...defaultServiceData,
    pageTitle: "Digital Assets",
    hero: { ...defaultServiceData.hero, title: "Creating & Managing Your Digital Footprint: Mastering Every Step of Digital Assets" },
  },
};

export const digitalMarketingData: DigitalMarketingDetails = {
// ... keep digitalMarketingData ...
  pageTitle: "Digital Marketing",
  hero: {
    tag: "BOOST YOUR BUSINESS",
    title: "How To Easily Start Your Online Business",
    description: "Posuere semper ut non, id sed. Orci, sit nisl, id praesent eget. Adipiscing scelerisque diam at.",
    phone: "+1 234-567-890",
  },
  partners: [
    { name: "HiTeck", logo: HiTeckLogo },
    { name: "Consoults", logo: ConsoultsLogo },
    { name: "Start-Up", logo: StartUpLogo },
    { name: "Consultancy", logo: ConsultancyLogo },
    { name: "Bookstack", logo: BookstackLogo },
  ],
  services: {
    tag: "EXPERT SERVICES",
    title: "Expert Consulting Services",
    items: [
      { icon: CreativeDevIcon, title: "Creative Development", description: "Estibulum eu justo et ante varius sodales. Fusce ex tellus, eleifend ut." },
      { icon: BusinessConsultationIcon, title: "Business Consultation", description: "Estibulum eu justo et ante varius sodales. Fusce ex tellus, eleifend ut." },
      { icon: PerfectSolutionsIcon, title: "Perfect Solutions", description: "Estibulum eu justo et ante varius sodales. Fusce ex tellus, eleifend ut." },
    ],
  },
  experience1: {
    tag: "BOOST YOUR BUSINESS",
    title: "Enjoy To Build Your Online Business Experience",
    description: "Egestas dictum lectus diam commodo. Et tristique nunc faucibus et tortor. Amet, morbi facilisis nullam.",
    features: [
      "Track your daily activity.",
      "Multiply global marketing strategy.",
      "Vertical support team.",
      "Customizable Workflow.",
    ],
  },
  experience2: {
    tag: "BUSINESS PROGRESS",
    title: "Enjoy To Build Your Online Business Experience",
    description: "Egestas dictum lectus diam commodo. Et tristique nunc faucibus et tortor. Amet, morbi facilisis nullam.",
    skills: [
      { name: "Development", level: 95 },
      { name: "Engineering", level: 72 },
      { name: "Branding", level: 86 },
    ],
  },
  support: {
    tag: "CREATIVE SERVICE & SUPPORT",
    title: "Get Support To Build Your Online Business",
    steps: [
      { title: "Business Consulting", description: "Egestas dictum lectus diam commodo. Et tristique nunc faucibus et tortor. Amet, morbi facilisis." },
      { title: "UX/UI Strategy", description: "Egestas dictum lectus diam commodo. Et tristique nunc faucibus et tortor. Amet, morbi facilisis." },
      { title: "Growth Marketing", description: "Egestas dictum lectus diam commodo. Et tristique nunc faucibus et tortor. Amet, morbi facilisis." },
    ],
  },
};

const defaultProductData: ProductDetails = {
// ... keep defaultProductData ...
  pageTitle: "Susty Product",
  hero: {
    title: "Brainstorming for Desired Usability",
    description: "Use this section to describe your product. The main goal is to highlight the benefits and encourage users to take action.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  lovePoints: {
    title: "Why People Love Our Product",
    description: "Following reasons show advantages of adding AppCo to your lead pages, demos and checkouts.",
    points: [
      { icon: BrushIcon, title: "Clean Design", description: "Increase sales by showing true dynamics of your website." },
      { icon: ShieldCheckIcon, title: "Secure Data", description: "Build your online store’s trust using Social Proof & Urgency." },
      { icon: EyeIcon, title: "Retina Ready", description: "Realize importance of social proof in customer’s purchase decision." },
    ]
  },
  manageSection: {
    title: "Use Your Device to Manage Everything",
    features: [
      { icon: CheckCircleIcon, description: "Proactively syndicate open-source e-markets after low-risk high-yield synergy." },
      { icon: CheckCircleIcon, description: "Objectively exploit backward-compatible e-commerce through pandemic manufactured products." },
      { icon: CheckCircleIcon, description: "Completely administrate empowered e-tailers after extensive e-business." },
      { icon: CheckCircleIcon, description: "Dramatically incentivize functionalized metrics whereas go forward networks." },
    ],
    images: ["https://images.unsplash.com/photo-1555421689-491a97ff2048?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"],
  },
  shareSection: {
    title: "Share your Photos with Friends Easily",
    description: "Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  },
  cta: {
    title: "Start Managing your Apps Business, more Faster",
    description: "Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
  }
};

export const productDetailsData: { [key in Page]?: ProductDetails } = {
  // SustyHMS is now handled by its own page
};

export const crmProductData: CrmProductDetails = {
// ... keep crmProductData ...
  pageTitle: 'SustyCRM',
  hero: {
    features: [
      { icon: CalendarIcon, title: 'Content Schedule', description: 'Strategize, arrange, and timetable posts for regular publishing.' },
      { icon: WandIcon, title: 'Intelligent Assistant', description: 'Overcome creative obstacles and spark inspiration with fresh ideas.' },
      { icon: StackIcon, title: 'Mass Scheduling', description: 'Handle the social schedule with 300+ posts planned simultaneously.' },
    ],
    socialIcons: [InstagramIcon, TiktokIcon, PinterestIcon, QIcon, LinkedInCircleIcon],
  },
  businessImpact: {
    title: 'Achieving Business Impact Should be Simpler',
    description: 'SustyCRM\'s Integrated social media management platform allows your team to unlock real business value, enhance your market standing, and boost revenue—swiftly.',
    points: [
      { title: 'Recognized as G2', description: 'SustyCRM Social is recognized as G2\'s top rated overall software product for 2024.' },
      { title: 'Shift smoothly', description: 'Enhance your business without overhauling your tech stack. Our global partnerships and social network integrations simplify working within your existing.' },
      { title: 'Experience more quickly', description: 'No more months of onboarding or worrying about how much of your budget went toward learning.' },
      { title: 'Gather insights effortlessly', description: 'Speed up business operations with AI-driven workflows designed to save marketers time, offer better access to actionable insights, and enable your team.' },
    ],
  },
  trust: {
    title: 'Agencies and Brands Worldwide',
    highlighted: 'Trust us',
    description: 'SustyCRM is an essential tool for thousands of social media marketers and is highly recommended for its powerful features.',
    stats: [
      { icon: UsersGroupIcon, value: '20K+', label: 'Clients from various industries' },
      { icon: HeartIcon, value: '5M+', label: 'Posts released every month' },
      { icon: StarIcon, value: '4.8', label: 'Highly rated on user-friendliness' },
    ],
  },
  connect: {
    title: 'What is SustyCRM and How Connect With Others?',
    description: 'SustyCRM is an AI-powered platform offering tools, integrations, and resources for marketing, sales, and customer service.',
  },
  assistance: {
    title: 'You Can Count on us for',
    highlighted: 'Assistance',
  },
};

export const hrmsProductData: HrmsProductDetails = {
// ... keep hrmsProductData ...
  pageTitle: 'SustyHRMS',
  hero: {
    title: 'The next generation of HR Management',
    button1Text: 'Join Us',
    button2Text: 'Why do we need Verified?',
    mainImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    socialIcons: [
      { icon: TwitterLogo, position: 'top-1/4 left-10 animate-bounce' },
      { icon: LinkedInCircleIcon, position: 'bottom-1/4 left-20 animate-bounce delay-200' },
      { icon: AsanaIcon, position: 'top-10 right-20 animate-bounce delay-300' },
      { icon: InstagramIcon, position: 'top-1/3 right-10 animate-bounce delay-100' },
      { icon: BehanceIcon, position: 'bottom-1/4 right-20 animate-bounce delay-400' },
    ],
  },
  expect: {
    title: 'Here is what you can expect',
    description: 'He lost his bottle squiffy bog bleeding hunky-dory wind up morish tomfoolery spend a penny hanky panky, lemon squeezy vagabond.',
    features: [
      { icon: 'CreditCardIcon', title: 'Interchange fees', description: 'Oxford I don’t want no agro naff sloshed. I bite your arm off mush hunky-dory nice one ummm I’m telling lurgy we.!' },
      { icon: 'CorporateIcon', title: 'Our Corporate', description: 'Oxford I don’t want no agro naff sloshed. I bite your arm off mush hunky-dory nice one ummm I’m telling lurgy we.!' },
      { icon: 'RegulationIcon', title: 'European Regulation', description: 'Oxford I don’t want no agro naff sloshed. I bite your arm off mush hunky-dory nice one ummm I’m telling lurgy we.!' },
    ]
  },
  measure: {
    title: 'How we help our clients measure social',
    description: 'He lost his bottle a load of old tosh cup of tea bog-standard matie boy blow off the little rotter morish!',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    subFeatures: [
      { icon: 'UsersGroupIcon', title: 'Customized registration', description: 'Nice one muffy brown bread James Bond lost the plot chinwag vagabond are.!' },
      { icon: 'SettingsIcon', title: 'Fast and simple Setup', description: 'Nice one muffy brown bread James Bond lost the plot chinwag vagabond are.!' },
    ]
  },
  statistics: {
    title: 'Everything is measured. You will get statistics.',
    description: 'Why I say old chap that is, spiffing chancer geeza pear shaped barney, fantastic blow off blimey lemon squeezy. Cup of tea my lady a blinding shot lost the plot spend a penny, only a quid bog-standard in my flat, morish chinwag sloshed. Cheeky chap old charles dropped a clanger.',
    imageUrl: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&w=800',
    buttonText: 'Learn More'
  }
};


export const himsProductData: HimsProductDetails = {
// ... keep himsProductData ...
  pageTitle: 'SustyHIMS',
  hero: {
    tag: "Revitalize!",
    title: "Transform Your Health",
    description: "Explore a variety of tailored services aimed at enhancing your overall health and wellness.",
    stats: [
      { value: '13+', label: 'Years of experience' },
      { value: '3,6M+', label: 'Trusted by patients' },
      { value: '85+', label: 'Professional Doctor' },
    ],
  },
  offer: {
    title: "We offer a wide range of services to meet your needs",
    stat: "25k+",
    statLabel: "Distributed health services",
    subTitle: "Our services are designed to provide the best healthcare services.",
    description: "We are committed to providing the best healthcare services tailored to your needs. With a team of experienced medical professionals and state-of-the-art technology, we ensure that every aspect of your care delivered with the utmost care and exceptional expertise."
  },
  services: {
    title: "Discover the Power of Our Services",
    description: "Explore a variety of tailored services aimed at enhancing your overall health and wellness.",
    list: [
      { icon: HealthMonitorIcon, title: 'Health Monitoring Program', description: 'We offer a continuous health monitoring program that allows you to track your health progress in real-time.' },
      { icon: IntegratedCareIcon, title: 'Integrated Care Plan', description: 'Care plans specifically designed to help you achieve long-term health goals. Our medical team will work with you.' },
      { icon: PreventiveHealthIcon, title: 'Preventive Health Services', description: 'Focused on disease prevention with regular health screenings, vaccinations, and health education to help you.' },
      { icon: HolisticHealthIcon, title: 'Holistic Health Management', description: 'A service that includes a holistic approach, with support from nutritionists, therapists, and health coaches to ensure.' },
      { icon: RecoveryCenterIcon, title: 'Recovery Center', description: 'This service offers rehabilitation programs for recovery from illness or injury, including physiotherapy.' },
      { icon: TelemedicineIcon, title: 'Telemedicine Consultation', description: 'Telemedicine services that allow you to consult with doctors and specialists from anywhere, offering flexibility.' },
    ]
  },
  progress: {
    tag: "Revolutionary!",
    title: "The services are designed to provide progress to your health.",
    description: "Our services are designed to support your overall health progress. We believe that health is a journey, and we are here to accompany you every step of the way to better health. With a holistic approach and ongoing professional support, we help you achieve health goals."
  },
  process: {
    title: "How does the process work to provide service?",
    steps: [
      { step: 'Step 1', title: 'Initial Consultation', description: 'Begin your journey with a detailed consultation with one of our experienced doctors. We go beyond what we have been told.' },
      { step: 'Step 2', title: 'Personal Health Assessment', description: 'During your first visit, a comprehensive health assessment will be conducted to understand your current health status and specific needs.' },
      { step: 'Step 3', title: 'Customized Health Monitoring', description: 'Based on the initial assessment, you’ll be enrolled in a personalized health monitoring program. This includes regular check-ups and digital monitoring.' },
    ]
  },
  faq: {
    title: 'Frequently asked question',
    description: 'Contact us if you need immediate assistance',
    list: [
      { question: "What services do you offer?", answer: "We offer a range of healthcare services including Health Monitoring Programs, Integrated Care Plans, Rehabilitation and Recovery services." },
      { question: "How do I book an appointment?", answer: "You can book an appointment through our website, mobile app, or by calling our support center. We offer flexible scheduling options." },
    ]
  },
};

export const hmsProductData: HmsProductDetails = {
// ... keep hmsProductData ...
  pageTitle: 'SustyHMS (ERP)',
  hero: {
    title: 'Cloud ERP Software for Small and medium business',
    subtitle: 'A simple integrated ERP system that helps you manage all your business processes in a single platform. Make your life simple!',
    buttonText: 'Try Now',
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
  },
  features: {
    title: 'Accessible, Convenient & Manageable',
    items: [
      { icon: 'SecuredCloudIcon', title: 'Secured Cloud', description: 'Source code and data is stored in a secure cloud infrastructure.' },
      { icon: 'SinglePlatformIcon', title: 'Single Platform', description: 'A single platform to manage all your business processes.' },
      { icon: 'ImplementYourselfIcon', title: 'Implement Yourself', description: 'Easy to setup and implement on your own without any help.' },
      { icon: 'MultiRegionalIcon', title: 'Multi Regional', description: 'Supports multiple regions and languages for your business.' },
      { icon: 'QuickNavigationIcon', title: 'Quick Navigation', description: 'Quickly navigate to any module from anywhere in the app.' },
      { icon: 'WorksInWebIcon', title: 'Works in Web', description: 'A web-based application that works on any device.' },
    ]
  },
  trustBanner: {
    title: 'Trusted by 10,030+ Businesses over 160 Countries and 24+ Languages',
    image: 'https://i.imgur.com/kS5nL4K.png',
  },
  detailedFeatures: [
    {
      title: 'Nurture Your Customers Using Advanced CRM',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800',
      items: [
        { icon: 'CheckCircleIcon', title: 'Everybody gets a Dashboard', description: '' },
        { icon: 'CheckCircleIcon', title: 'Complete Lead Management', description: '' },
      ],
    },
    {
      title: 'Integrated Project Management System',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800',
      items: [
        { icon: 'CheckCircleIcon', title: 'Everybody gets a Dashboard', description: '' },
        { icon: 'CheckCircleIcon', title: 'Complete Lead Management', description: '' },
      ],
    },
    {
      title: 'Accounting for all The Non-Accountants',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff0a77?auto=format&fit=crop&w=800',
      items: [
        { icon: 'CheckCircleIcon', title: 'Everybody gets a Dashboard', description: '' },
        { icon: 'CheckCircleIcon', title: 'Complete Lead Management', description: '' },
      ],
    }
  ],
  analytics: {
    title: 'Analytics',
    items: [
      { icon: 'QuickSetupIcon', title: 'Quick setup in five simple steps', description: '' },
      { icon: 'CompletePurchaseIcon', title: 'Complete purchase history', description: '' },
      { icon: 'SignupNoCreditIcon', title: 'Signup, No credit card details required', description: '' },
    ]
  },
  partners: {
    title: 'Great companies that love Saasland ERP',
    logos: ['AtlassianLogo', 'SalesforceLogo', 'HubspotLogo', 'SlackLogo', 'WebflowLogo', 'IntercomLogo', 'DropboxLogo', 'GoogleLogo', 'FacebookIcon']
  },
  testimonials: {
    title: 'What our customers say about Saasland ERP',
    items: [
      {
        quote: 'Loo loo loo, chimney pot cack nice one bobby twit excuse my french bubble and squeak. Barmy starkers say lost the plot cockup bog-standard mush.',
        name: 'Vance Rigney',
        role: 'Chief Technology Officer',
        avatar: 'https://i.pravatar.cc/150?u=vance'
      },
      {
        quote: 'Twit excuse my french bubble and squeak barmy starkers say lost the plot cockup bog-standard mush. Loo loo loo, chimney pot cack nice one bobby.',
        name: 'Hustin Essif',
        role: 'General Manager',
        avatar: 'https://i.pravatar.cc/150?u=hustin'
      }
    ]
  },
  cta: {
    title: 'Experience a smarter way to close deals',
    buttonText: 'Get Started',
    image: 'https://images.unsplash.com/photo-1553877616-1528023ee29a?auto=format&fit=crop&w=600'
  }
};


export const posProductData: PosProductDetails = {
// ... keep posProductData ...
  pageTitle: 'SustyPOS',
  topFeatures: [
    { icon: DataProtectionIcon, title: 'Data Protection', description: 'Your data is safe with our top-tier security measures.' },
    { icon: OpenSourceIcon, title: 'Open Source', description: 'Benefit from a community-driven, transparent platform.' },
    { icon: EasyToUseIcon, title: 'Easy to Use', description: 'An intuitive interface that requires minimal training.' },
  ],
  services: {
    title: 'We provide our services for any type of business',
    description: 'Whether you are a small cafe or a large retail chain, SustyPOS scales to your needs. Manage inventory, sales, and customers with ease.',
    list: [
      { icon: ShopOnlineIcon, title: 'Shop online', description: 'Integrate your online store for seamless omnichannel sales.' },
      { icon: InvoiceIcon, title: 'Send invoice', description: 'Create and send professional invoices in just a few clicks.' },
      { icon: StatsIcon, title: 'Track statistics', description: 'Get real-time insights into your business performance.' },
    ],
  },
  crypto: {
    title: 'Accept Cryptocurrency',
    description: 'Stay ahead of the curve by accepting popular cryptocurrencies as payment. Secure, fast, and low-fee transactions.',
    currencies: [
      { icon: BitcoinIcon, name: 'Bitcoin', amount: '2.543 BTC', color: 'bg-orange-500' },
      { icon: EthereumIcon, name: 'Ethereum', amount: '15.2 ETH', color: 'bg-gray-600' },
      { icon: TetherIcon, name: 'Tether', amount: '4,210 USDT', color: 'bg-green-500' },
    ],
  },
  additions: {
    title: 'Additional useful features for your business',
    description: 'We have packed SustyPOS with features to help you run your business more efficiently.',
    list: [
      { icon: SystemReportingIcon, title: 'System Reporting', description: 'Generate detailed reports on sales, inventory, and more.' },
      { icon: CurrencySelectionIcon, title: 'Currency Selection', description: 'Support for multiple fiat and cryptocurrencies.' },
      { icon: GlobalStatisticsIcon, title: 'Global Statistics', description: 'Benchmark your performance against global trends.' },
      { icon: DollarSignIcon, title: 'Get Paid', description: 'Fast and secure payment processing to your bank account.' },
    ],
  },
  wallet: {
    tag: 'Mobile Wallet',
    title: 'Manage everything in your wallet',
    description: 'The SustyPOS mobile app gives you full control over your business, wherever you are. Track sales, manage inventory, and view reports on the go.',
  },
  income: {
    tag: 'Passive Income',
    title: 'Earn passive income with crypto',
  },
};

export const pyProductData: PyProductDetails = {
// ... keep pyProductData ...
  pageTitle: 'SustyPY',
  hero: {
    title: 'Easy way to manage your',
    highlight: 'Finances',
    description: 'SustyPY helps you manage all your payments in one place. Easy, fast and secure. Join us and get your account today.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80',
  },
  cardsInfo: {
    title: 'We give you full control of your cards.',
    description: 'SustyPY provides a secure and intuitive platform to manage all your debit and credit cards, track spending, and set budgets.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800',
    subsections: [
      { title: 'Best user experience', description: 'A beautifully designed interface that makes financial management a breeze.' },
      { title: 'Easy to use', description: 'Get started in minutes with our simple onboarding process.' },
    ],
  },
  features: {
    title: 'We have many features that you can use.',
    mainImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800',
    categories: [
      {
        title: 'Collaboration',
        description: 'Share accounts and manage finances with your family or business partners.',
        // Fix: Completed the truncated pyProductData object.
        items: [
          { icon: LockIcon, name: 'Secure Sharing' },
          { icon: UsersGroupIcon, name: 'Team Accounts' },
        ],
      },
      {
        title: 'Payments',
        description: 'Integrate with popular payment gateways for seamless transactions.',
        image: 'https://i.imgur.com/3LX4iV5.png',
        items: [
            { icon: PaypalIcon, name: 'PayPal' },
            { icon: StripeIcon, name: 'Stripe' },
            { icon: VisaIcon, name: 'Visa' },
        ]
      },
    ],
  },
  cardsShowcase: {
    title: 'Choose the card that suits you best',
    cards: [
      {
        image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600',
        name: 'SustyPY Standard',
        description: 'Perfect for everyday transactions and budgeting.',
      },
      {
        image: 'https://images.unsplash.com/photo-1556742529-8269d21d4249?auto=format&fit=crop&w=600',
        name: 'SustyPY Premium',
        description: 'Unlock exclusive rewards, travel perks, and higher limits.',
      },
      {
        image: 'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&w=600',
        name: 'SustyPY Business',
        description: 'Streamline your company expenses and financial workflows.',
      },
    ],
  },
};

export const webDevelopmentPageData = {
// ... keep webDevelopmentPageData ...
  hero: {
    subtitle: "Digital Agency Based on USA",
    title: "Creating New Ideas & Building Brand",
    description: "Globally develop unique technologies low-risk high-yield product. Seamlessly cultivate extensible solutions rather.",
    buttonText: "Get Start Now",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
  },
  engagingMinds: {
    subtitle: "Featured Services",
    title: "Engaging Creative Minds",
    services: [
      {
        title: "Team Brainstorming",
        description: "Globally develop the unique technologies Seamlessly cultivate extensible.",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
        link: "#"
      },
      {
        title: "Business Collaboration",
        description: "Globally develop the unique technologies Seamlessly cultivate extensible.",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1584/1584942.png",
        link: "#"
      }
    ]
  },
  chooseUs: {
    subtitle: "About SustyDigi",
    title: "Choose The Best IT Service Company",
    description: "Completely strategize client-centric niche markets for go forward. Phosfluorescently iterate efficient internal or 'organic' sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
    membersCount: "5k+ Members",
    features: [
      { title: "Moneyback Guarantee", icon: "MoneybackIcon" },
      { title: "Technical Support", icon: "TechnicalSupportIcon" },
    ],
    contact: {
      title: "Call For Help",
      phone: "+91 98765 43210"
    }
  },
  clients: {
    happyClients: "Join over +18,000 Happy Clients",
    logos: ["FigmaLogo", "GoogleLogo", "RedditLogo", "SketchLogo"]
  },
  solutions: {
    subtitle: "Featured Services",
    title: "SustyDigi Provide Best IT Solutions",
    description: "Completely strategize client-centric niche markets for go forward pilot. Phosfluorescently iterate efficient internal engines.",
    services: [
      { title: "Website Applications Development", description: "Monotonectally formulate client-focused core competencies.", icon: "DevelopmentIcon", featured: false },
      // Fix: Replaced non-existent 'UserExperienceIcon' with 'ExperienceIcon'.
      { title: "iOS & Android Apps Interface Design", description: "Monotonectally formulate client-focused core competencies.", icon: "ExperienceIcon", featured: true },
      { title: "Content Marketing Strategy", description: "Monotonectally formulate client-focused core competencies.", icon: "StrategyIcon", featured: false },
      { title: "Market Research and Surveying", description: "Monotonectally formulate client-focused core competencies.", icon: "ResearchIcon", featured: false },
      // Fix: Replaced non-existent 'ExperienceMappingIcon' with 'ExperienceIcon'.
      { title: "Experience Mapping and Developed", description: "Monotonectally formulate client-focused core competencies.", icon: "ExperienceIcon", featured: false },
      { title: "Business Branding and Identity", description: "Monotonectally formulate client-focused core competencies.", icon: "BrandingIdentityIcon", featured: false },
    ]
  }
};

export const appDevelopmentData = {
// ... keep appDevelopmentData ...
  hero: {
    title: "Best way to manage your customers.",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    videoBlurb: "This is a completely redesigned dashboard, order management and tracking your customers.",
    phoneImage1: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=300",
    phoneImage2: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=250&auto=format&fit=crop",
  },
  trustedBy: {
    title: "Trusted by 150+ companies",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Tincidunt, nisl.",
    logos: ['PayPal', 'Spotify', 'Shopify', 'Slack', 'Envato']
  },
  features: {
    title: "Features that makes app different!",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    centerImage: "https://images.unsplash.com/photo-1555421689-491a97ff2048?auto=format&fit=crop&w=300",
    featureList: [
      { icon: 'ShieldCheckIcon', title: 'Secure data', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { icon: 'CheckCircleIcon', title: 'Fully functional', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { icon: 'MessageSquareIcon', title: 'Webchat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { icon: 'HeadsetIcon', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    ]
  },
  stats: {
    title: "Some awesome words about app.",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    phoneImage: "https://images.unsplash.com/photo-1589252329302-658b45688e40?w=250&auto=format&fit=crop",
    statList: [
      { icon: 'DownloadIcon', value: '17 M+', label: 'Downloads' },
      { icon: 'UsersGroupIcon', value: '08 M+', label: 'Active User' },
      { icon: 'MessageSquareIcon', value: '2300+', label: 'FeedBack' },
      { icon: 'GlobeIcon', value: '150+', label: 'Countries' },
    ]
  },
  modernUI: {
    title: "Beautiful design with modern UI",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    points: ["Carefully designed", "Seamlessly Syncing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
  }
};

export const uiUxDesignPageData = {
// ... keep uiUxDesignPageData ...
  hero: {
    title: "Make beautiful Landing Page easily than ever",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.",
    videoUrl: "#",
    learnMoreUrl: "#",
    screenshotUrl: "https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?auto=format&fit=crop&w=500",
  },
  principles: {
    title: "Our UI/UX Design Principles",
    items: [
      { icon: 'DesignIcon', title: 'Unique Design', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
      { icon: 'DesktopIcon', title: 'Fully Responsive', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
      { icon: 'LaunchIcon', title: 'Fast Loading Optimized', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
      { icon: 'GlobeIcon', title: 'Cross browser compatible', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
      { icon: 'ClockIcon', title: 'Save Time', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
      { icon: 'BrushIcon', title: 'Unlimited Color', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
    ]
  },
  about: {
    title: "About The App",
    description: "Nam et sagittis diam. Sed tamet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    section: {
      title: "Take a Look Around our App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      features: [
        "Provide premium quality service.",
        "Provide online meeting.",
        "All-facilisis-vitae-odio-morbi-quis-commodo-odio",
      ],
      downloadUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800",
    }
  },
  features: {
    title: "Amazing Features",
    description: "Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque. Orci varius natoque penatibus et magnis dis parturient montes nascetur.",
    screenshotUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2048?auto=format&fit=crop&w=500",
    items: [
      { side: 'left', icon: 'ClientCentricIcon', title: 'User Friendly', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
      { side: 'left', icon: 'RocketIcon', title: 'Super Fast Speed', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
      { side: 'left', icon: 'HeadsetIcon', title: '24/7 Support', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
      { side: 'right', icon: 'ShieldCheckIcon', title: 'Secure', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
      { side: 'right', icon: 'StarIcon', title: 'Awesome Rating', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
      { side: 'right', icon: 'AwardIcon', title: 'Award Winning', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
    ],
  },
  screenshots: {
    title: "Our App Screenshots",
    description: "Nam et sagittis diam. Sed tempor augue sit amet egestas scelerisque. Orci varius natoque penatibus et magnis dis parturient montes nascetur.",
    images: [
      "https://images.unsplash.com/photo-1610924443499-2a91599811c7?w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621761191042-3315e985443a?w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559028006-44d08a5a3a93?w=300&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586799343537-30018357a73f?w=300&auto=format&fit=crop",
    ]
  }
};

export const brandingPageData = {
// ... keep brandingPageData ...
  hero: {
    title: "Great Marketing Makes The Customer Feel Smart.",
    description: "Discover modern digital marketing systems and strategies you can use to jump start your business growth.",
    buttonText: "Get started",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800" // Neutral background, smiling man
  },
  levelUp: {
    title: "Level Up Your Business With Digital Media",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically.",
    buttonText: "Learn More",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500" // Digital media illustration
  },
  services: [
    {
      title: "Web design",
      description: "We're taking the pain out of design and development. We help you make more customers and make more money, with less stuff - such as content marketing, email marketing...",
      linkText: "Read More",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" // People collaborating at desk
    },
    {
      title: "Launch or Grow Your Business.",
      description: "We move smart businesses and entrepreneurs-muss fully embrace modern ways of reaching their customers to provide for them. And you know that your best customers are online... and you need to meet them there.",
      linkText: "Read More",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80" // Robot illustration
    }
  ],
  partners: {
    title: "A few businesses we've worked with",
    logos: [
      { name: "MattWill", component: "MattWillLogo" },
      { name: "Anubis", component: "AnubisLogo" },
      { name: "Alonz", component: "AlonzLogo" },
      { name: "Southwell", component: "SouthwellLogo" },
      { name: "Oldvintag", component: "OldvintagLogo" }
    ]
  },
  cta: {
    title: "Practical info for your small business",
    subtitle: "Sign Up Online for free access to the info.",
    placeholder: "Enter your email"
  }
};

export const hostingPageData = {
// ... keep hostingPageData ...
  hero: {
    tagline: "WE PROVIDE",
    title: "PREMIUM HOSTING",
    description: "Share processes and data security on a need to know basis without the need for reconciliation combine a permissione.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800",
  },
  domainSearch: {
    tlds: [
      { name: ".com", price: "$0.95" },
      { name: ".co", price: "$0.95" },
      { name: ".net", price: "$0.95" },
      { name: ".info", price: "$0.95" },
      { name: ".store", price: "$0.95" },
    ],
  },
  whyChooseUs: {
    tagline: "Best Hosting",
    title: "WHY CHOOSE US",
    features: [
      {
        icon: "UptimeIcon",
        title: "99.9% Uptime Guarantee",
        description: "Share processes and data security on a need to know basis."
      },
      {
        icon: "SecureServerIcon",
        title: "Safe and Secured",
        description: "Our team secured your web site is always safe and secure."
      },
      {
        icon: "DedicatedSupportIcon",
        title: "Our Dedicated Support",
        description: "We finally found a host that truly understood the unique."
      },
    ],
  },
  topBanner: {
    title: "We don't compromise with the best Hosting Solution",
    features: [
      {
        icon: "MoneyBack30Icon",
        title: "Days money back guarantee",
        description: "Share processes on data secure on a need to know basis without the need.",
      },
      {
        icon: "CloudLockIcon",
        title: "Build and protect your brand",
        description: "Share processes on data secure on a need to know basis without the need.",
      },
    ],
  },
  partners: [
    { name: "Indiepro", logo: "IndieproLogo" },
    { name: "On3xtgn", logo: "On3xtgnLogo" },
    { name: "Take Away", logo: "TakeAwayLogo" },
    { name: "J&C", logo: "JcLogo" },
  ],
  powerfulServer: {
    title: "Powerful Server and Platform",
    imageUrl: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800",
    features: [
      {
        icon: "SecureServerIcon",
        title: "Better Security and Faster Server",
        description: "Our best-in-class WordPress solution, with architecture and scalability."
      },
      {
        icon: "GlobeIcon",
        title: "No-Downtime website transfers",
        description: "Our best-in-class WordPress solution, with architecture and scalability."
      },
      {
        icon: "LaunchIcon",
        title: "Deployment within few minutes",
        description: "Our best-in-class WordPress solution, with architecture and scalability."
      }
    ],
  },
};

export const donationPageData = {
    hero: {
        title: "OPEN HEART",
        subtitle: "CHARITY ORGANIZATION",
        statDesc: "LAST YEAR \"OPEN HEART\" SUPPORTED PROGRAMS THAT SERVED OVER",
        statHighlight: "700,000 CHILDREN IN 23 COUNTRIES.",
        donationAmount: "$450,000",
        donationLabel: "DONATION SO FAR",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
    },
    helpSection: {
        title: "GIVE A HELPING HAND TO THOSE WHO NEED IT!",
        description: "Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus a lorem. Maecenas tristique orci ac sem.",
        subDescription: "Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.",
        linkText: "READ MORE",
        images: [
            "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=400",
            "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=400",
            "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=400",
            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=400"
        ]
    },
    categories: [
        { icon: 'HandHoldingHeartIcon', title: 'HELP & SUPPORT', description: 'Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus.' },
        { icon: 'AdoptionIcon', title: 'ADOPTION', description: 'Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus.' },
        { icon: 'EducationIcon', title: 'EDUCATION', description: 'Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus.' },
        { icon: 'VolunteeringIcon', title: 'VOLUNTEERING', description: 'Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus.' }
    ],
    volunteerSection: {
        title: "WE NEED VOLUNTEERS IN SOUTH AFRICA",
        description: "Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.",
        subText: "PRAESENT VESTIBULUM / AENEAN NONUMMY / HENDRERIT MAURIS / CUM SOCIIS NATOQUE / PENATIBUS ET / MAGNIS DIS / PARTURIENT / MONTES NASCETUR RIDICULUS",
        volunteerImage: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=600"
    },
    successStories: [
        { name: "Lisa Nelson", quote: "Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.", color: "text-red-500" },
        { name: "Tamara Smith", quote: "Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.", color: "text-red-500" },
        { name: "Peter Cox", quote: "Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.", color: "text-red-500" },
        { name: "Richard Black", quote: "Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.", color: "text-red-500" }
    ],
    report: {
        text: "VIEW OUR REPORT",
        year: "2024",
        phone: "(800) 123 1234",
        email: "MAIL@DEMOLINK.ORG"
    }
};