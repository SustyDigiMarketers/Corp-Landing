import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import PageHeader from '../components/PageHeader';
import { blogPosts, popularTopics } from '../constants';
import { useInView } from '../hooks/useInView';
import { SearchIcon, ArrowRightIcon } from '../components/icons/TechIcons';
import type { BlogPost } from '../types';

interface BlogCardProps {
    post: BlogPost;
    isFeatured?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

// Reusable Blog Card Component
const BlogCard: React.FC<BlogCardProps> = ({ post, isFeatured = false, className = '', style }) => {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const cardClasses = isFeatured
        ? 'grid md:grid-cols-2 gap-8 items-center'
        : 'flex flex-col';
    const imageContainerClasses = isFeatured ? 'h-full' : 'aspect-[16/9]';

    return (
        <article
            ref={ref}
            style={style}
            className={`stagger-in ${inView ? 'is-visible' : ''} bg-white rounded-2xl shadow-lg overflow-hidden group blog-card ${className}`}
        >
            <div className={cardClasses}>
                <div className={`${imageContainerClasses} overflow-hidden`}>
                    <Link to="#">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out blog-card-image"
                            loading="lazy"
                        />
                    </Link>
                </div>
                <div className="p-6 flex flex-col">
                    <div className="mb-3 flex items-center justify-between text-sm">
                        <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                            {post.category}
                        </Link>
                        <span className="text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className={`font-bold ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} text-gray-900`}>
                        <Link to="#" className="hover:text-indigo-700 transition-colors duration-300">
                            {post.title}
                        </Link>
                    </h3>
                    <p className="mt-3 text-gray-600 flex-grow">{post.excerpt}</p>
                    <div className="mt-6 flex items-center gap-4">
                        <img src={post.authorImage} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                            <p className="font-semibold text-gray-800">{post.author}</p>
                            <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};


const BlogPage: React.FC = () => {
    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <>
            <PageHeader
                title="SustyDigi Insights"
                subtitle="Your source for the latest trends in digital marketing, AI, and software development. Explore our thoughts, ideas, and success stories."
            />
            <div className="space-y-20">
                <Section>
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-16">
                            {/* Featured Post */}
                            <BlogCard post={featuredPost} isFeatured={true} className="col-span-full" />

                            {/* Recent Posts */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {recentPosts.map((post, index) => (
                                    <BlogCard key={post.id} post={post} className={`stagger-in`} style={{ transitionDelay: `${index * 150}ms` }} />
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-8 sticky top-24 h-fit">
                             <div className="p-6 bg-white rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
                                <div className="relative">
                                    <input type="text" placeholder="Search articles..." className="w-full pl-4 pr-10 py-2 bg-gray-100 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                    <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow-lg">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Topics</h3>
                                <ul className="space-y-2">
                                    {popularTopics.map(topic => (
                                        <li key={topic}>
                                            <Link to="#" className="flex justify-between items-center p-2 rounded-md hover:bg-gray-100 transition-colors">
                                                <span className="text-gray-700">{topic}</span>
                                                <ArrowRightIcon className="w-4 h-4 text-gray-400 -rotate-45" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg text-white">
                                <h3 className="text-lg font-bold">Stay Updated</h3>
                                <p className="mt-2 text-indigo-100 text-sm">Subscribe to our newsletter for the latest insights delivered to your inbox.</p>
                                <div className="mt-4 flex gap-2">
                                    <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-gray-800 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400" />
                                    <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold transition-colors">
                                        Go
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default BlogPage;