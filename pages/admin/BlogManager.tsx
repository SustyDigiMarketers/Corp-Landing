import React from 'react';
import { blogPosts } from '../../constants';
import type { BlogPost } from '../../types';

const BlogManager: React.FC = () => {
    return (
        <div className="text-white">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Blog Manager</h1>
                <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors">
                    Create New Post
                </button>
            </div>

            <div className="db-card rounded-lg overflow-hidden">
                <table className="db-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300">
                        {blogPosts.map((post: BlogPost) => (
                            <tr key={post.id}>
                                <td className="font-semibold">{post.title}</td>
                                <td>{post.category}</td>
                                <td>{post.author}</td>
                                <td>{post.date}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button className="text-xs px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded">Edit</button>
                                        <button className="text-xs px-3 py-1 bg-red-800 hover:bg-red-700 rounded">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BlogManager;
