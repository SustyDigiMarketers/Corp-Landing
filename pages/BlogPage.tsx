import React from 'react';
import { blogData } from '../constants';
import Card from '../components/Card';

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Insights</h1>
        <p className="mt-4 max-w-2xl mx-auto text-brand-text-secondary">
          Stay ahead of the curve with our latest articles on digital trends, marketing, and technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="lg:col-span-2 space-y-8">
          {blogData.posts.map(post => (
            <Card key={post.title} className="flex flex-col md:flex-row gap-6 group">
              <img src={post.image} alt={post.title} className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg"/>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">{post.title}</h2>
                <p className="text-sm text-brand-text-secondary my-2">By {post.author} on {post.date}</p>
                <p className="text-brand-text-secondary flex-grow">{post.excerpt}</p>
                <a href="#" className="mt-4 font-semibold text-brand-accent">Read More →</a>
              </div>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <Card>
            <h3 className="text-xl font-bold mb-4">Search</h3>
            <input type="text" placeholder="Search articles..." className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-brand-text-secondary">
              <li className="cursor-pointer hover:text-brand-text">UI/UX Design</li>
              <li className="cursor-pointer hover:text-brand-text">Digital Marketing</li>
              <li className="cursor-pointer hover:text-brand-text">Web Development</li>
              <li className="cursor-pointer hover:text-brand-text">AI & Automation</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;