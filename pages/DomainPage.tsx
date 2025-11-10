import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { SearchIcon, ShoppingCartIcon, SpinnerIcon, LightbulbIcon, ToolsIcon, UserIcon } from '../components/icons/TechIcons';

interface DomainResult {
  name: string;
  status: 'available' | 'taken' | 'premium';
  price?: string;
}

const popularTLDs = ['.com', '.net', '.org', '.ai', '.io', '.co'];

// Simulate a real-time API call for a single domain
const checkDomainAvailability = async (domain: string): Promise<DomainResult> => {
  // Simulate varying network delay for each domain check
  await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 600));

  const rand = Math.random();
  // Add a predictable way to get a premium domain for testing
  if (domain.includes('premium')) {
      return { name: domain, status: 'premium', price: `$${(Math.floor(Math.random() * 15) + 5) * 100 - 1}.00` };
  }
  if (rand < 0.6) { // 60% chance to be available
    return { name: domain, status: 'available', price: '$12.99' };
  } else if (rand < 0.75) { // 15% chance to be premium
    return { name: domain, status: 'premium', price: `$${(Math.floor(Math.random() * 20) + 5) * 50 - 1}.00` };
  } else { // 25% chance to be taken
    return { name: domain, status: 'taken' };
  }
};


// --- Sub-components for Domain Page ---

const EmptyState: React.FC = () => (
    <div className="text-center text-gray-500 p-8 bg-gray-50/70 rounded-2xl border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700">Start Your Search</h3>
        <p className="mt-2 mb-6 max-w-md mx-auto">Find the perfect domain for your business, portfolio, or next big idea.</p>
        <div className="flex justify-center gap-8 text-indigo-500">
            <div className="flex flex-col items-center">
                <LightbulbIcon className="w-10 h-10" />
                <span className="text-sm mt-2 font-medium text-gray-600">Big Idea</span>
            </div>
            <div className="flex flex-col items-center">
                <ToolsIcon className="w-10 h-10" />
                <span className="text-sm mt-2 font-medium text-gray-600">Business</span>
            </div>
            <div className="flex flex-col items-center">
                <UserIcon className="w-10 h-10" />
                <span className="text-sm mt-2 font-medium text-gray-600">Portfolio</span>
            </div>
        </div>
    </div>
);

const SkeletonLoader: React.FC = () => (
    <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">
                <div className="h-6 w-1/3 rounded skeleton-loader"></div>
                <div className="flex items-center gap-4">
                    <div className="h-6 w-24 rounded skeleton-loader hidden sm:block"></div>
                    <div className="h-10 w-32 rounded-full skeleton-loader"></div>
                </div>
            </div>
        ))}
    </div>
);

const StatusIndicator: React.FC<{ status: DomainResult['status'] }> = ({ status }) => {
    const config = {
        available: { text: 'Available', color: 'bg-green-500', textColor: 'text-green-700' },
        premium: { text: 'Premium', color: 'bg-purple-500', textColor: 'text-purple-700' },
        taken: { text: 'Taken', color: 'bg-red-500', textColor: 'text-red-700' },
    };
    const current = config[status];
    return (
        <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${current.color} ${status === 'available' ? 'animate-pulse-green' : ''}`}></span>
            <span className={`text-sm font-semibold hidden sm:inline ${current.textColor}`}>{current.text}</span>
        </div>
    );
};

const DomainResultCard: React.FC<{ domain: DomainResult; index: number; isPrimary: boolean }> = ({ domain, index, isPrimary }) => (
    <div
        style={{ animationDelay: `${index * 80}ms` }}
        className={`animate-result-card bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${isPrimary ? 'border-2 border-indigo-500' : 'border border-transparent'}`}
    >
        <div className="flex items-center gap-4 font-bold w-full sm:w-auto">
             {isPrimary && <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-white bg-indigo-500 px-2 py-1 rounded-full">Primary</span>}
            <p className="text-xl text-gray-800 break-all">{domain.name}</p>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0 w-full sm:w-auto justify-between">
            <StatusIndicator status={domain.status} />
            {domain.status === 'available' && (
                <>
                    <p className="text-xl font-semibold text-gray-800">{domain.price}<span className="text-sm text-gray-500">/yr</span></p>
                    <button className="flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-green-500 hover:bg-green-600 transition-colors transform hover:scale-105">
                        <ShoppingCartIcon className="w-5 h-5 mr-2" />
                        Add
                    </button>
                </>
            )}
            {domain.status === 'premium' && (
                 <>
                    <p className="text-xl font-semibold text-gray-800">{domain.price}<span className="text-sm text-gray-500">/yr</span></p>
                    <button className="flex items-center px-4 py-2 text-sm font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors transform hover:scale-105">
                        <ShoppingCartIcon className="w-5 h-5 mr-2" />
                        Buy Now
                    </button>
                </>
            )}
            {domain.status === 'taken' && (
                <>
                    <button className="ml-auto px-4 py-2 text-sm font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors">
                        Make Offer
                    </button>
                </>
            )}
        </div>
    </div>
);

const DomainTips: React.FC = () => (
  <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-6 sm:p-8 mb-12">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
        <LightbulbIcon className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">Tips for a Great Domain</h3>
    </div>
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
      <p><span className="font-semibold text-indigo-700">Keep it Short & Simple:</span> Easier for users to remember and type.</p>
      <p><span className="font-semibold text-indigo-700">Be Memorable:</span> A catchy, unique name stands out from the crowd.</p>
      <p><span className="font-semibold text-indigo-700">Use Relevant Keywords:</span> Helps with SEO and communicates your brand's purpose.</p>
      <p><span className="font-semibold text-indigo-700">Avoid Hyphens & Numbers:</span> They can be confusing and are often mistyped.</p>
    </div>
  </div>
);


const DomainPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<DomainResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [primaryDomain, setPrimaryDomain] = useState('');

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedSearch = searchTerm.trim();
        if (!trimmedSearch || isLoading) return;

        setIsLoading(true);
        setHasSearched(true);
        setResults([]); // Clear previous results

        const name = trimmedSearch.includes('.') ? trimmedSearch.split('.')[0] : trimmedSearch;
        const primaryTld = trimmedSearch.includes('.') ? `.${trimmedSearch.split('.')[1]}` : '.com';
        
        const primaryDomainName = `${name}${primaryTld}`;
        setPrimaryDomain(primaryDomainName);

        const domainsToCheck = [
            primaryDomainName,
            ...popularTLDs
                .filter(tld => tld !== primaryTld)
                .map(tld => `${name}${tld}`)
        ];

        // Fire off all API checks concurrently
        const checkPromises = domainsToCheck.map(domain => checkDomainAvailability(domain));

        try {
            const searchResults = await Promise.all(checkPromises);
            setResults(searchResults);
        } catch (error) {
            console.error("Failed to check domains:", error);
            // In a real app, you'd set an error state here to show a message to the user
        } finally {
            setIsLoading(false);
        }
    };

    const handleTldClick = (tld: string) => {
        const currentSearch = searchTerm.trim();
        const parts = currentSearch.split('.');
        
        if (parts.length > 1 && parts[0]) {
            // has a name already, just replace TLD
            setSearchTerm(`${parts[0]}${tld}`);
        } else if (currentSearch && !currentSearch.includes('.')) {
            // has a name but no TLD
            setSearchTerm(`${currentSearch}${tld}`);
        } else {
            // is empty or just a dot
            setSearchTerm(`your-idea${tld}`);
        }
    };
    
    return (
        <>
            <PageHeader
                title="Find Your Perfect Domain"
                subtitle="Your online journey starts with a great domain name. Enter your idea below to get started."
            >
                <div className="w-full max-w-3xl mx-auto mt-8">
                     <form onSubmit={handleSearch} className="relative flex items-center hero-fade-in-up" style={{ animationDelay: '800ms' }}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="e.g., my-awesome-startup.com"
                            className="w-full pl-6 pr-36 sm:pr-40 py-4 text-lg bg-white border-2 border-gray-200 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center px-4 sm:px-6 py-2.5 text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                        >
                            {isLoading ? <SpinnerIcon className="w-5 h-5" /> : <SearchIcon className="w-5 h-5" />}
                            <span className="ml-2 hidden sm:inline">Search</span>
                        </button>
                    </form>
                    <div className="mt-4 flex flex-wrap justify-center items-center gap-2 hero-fade-in-up" style={{ animationDelay: '1000ms' }}>
                        <span className="text-sm text-gray-500">Popular:</span>
                        {popularTLDs.map(tld => (
                            <button
                                key={tld}
                                onClick={() => handleTldClick(tld)}
                                className="px-3 py-1 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                            >
                                {tld}
                            </button>
                        ))}
                    </div>
                </div>
            </PageHeader>
            <div className="space-y-20">
                <Section>
                    <div className="max-w-4xl mx-auto">
                        <DomainTips />
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : hasSearched ? (
                            <div className="space-y-4">
                                {results.map((domain, index) => (
                                    <DomainResultCard
                                        key={domain.name}
                                        domain={domain}
                                        index={index}
                                        isPrimary={domain.name === primaryDomain}
                                    />
                                ))}
                            </div>
                        ) : (
                            <EmptyState />
                        )}
                    </div>
                </Section>
            </div>
        </>
    );
};

export default DomainPage;