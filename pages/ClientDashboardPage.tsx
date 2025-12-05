import React from 'react';
import { clientDashboardData } from '../constants';
import { ClientProject } from '../types';
import Card from '../components/Card';

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
    <div className="w-full bg-brand-primary rounded-full h-2.5">
        <div className="bg-brand-accent h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
    </div>
);

const ProjectCard: React.FC<{ project: ClientProject }> = ({ project }) => (
    <Card>
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                project.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                'bg-yellow-500/20 text-yellow-300'
            }`}>{project.status}</span>
        </div>
        <p className="text-sm text-brand-text-secondary mt-2">Deadline: {project.deadline}</p>
        <div className="mt-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-brand-text">Progress</span>
                <span className="text-sm font-medium text-brand-text">{project.progress}%</span>
            </div>
            <ProgressBar progress={project.progress} />
        </div>
    </Card>
);

const ClientDashboardPage: React.FC = () => {
    return (
        <div className="flex h-screen bg-brand-primary">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-secondary p-6 flex-shrink-0">
                <h2 className="text-2xl font-bold mb-8">Client Portal</h2>
                <nav className="space-y-4">
                    <a href="#" className="block py-2 px-3 bg-brand-accent rounded-md text-white">Projects</a>
                    <a href="#" className="block py-2 px-3 text-brand-text-secondary hover:bg-brand-primary rounded-md">Reports</a>
                    <a href="#" className="block py-2 px-3 text-brand-text-secondary hover:bg-brand-primary rounded-md">Files</a>
                    <a href="#" className="block py-2 px-3 text-brand-text-secondary hover:bg-brand-primary rounded-md">Chat</a>
                </nav>
                 <button className="w-full mt-auto bg-red-600/80 hover:bg-red-600 text-white font-bold py-2 px-4 rounded absolute bottom-6 right-0 left-0 mx-6">
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-8">Welcome Back, Client!</h1>
                
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Projects Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-semibold">Ongoing Projects</h2>
                        {clientDashboardData.projects.map(p => <ProjectCard key={p.name} project={p} />)}
                    </div>
                    
                    {/* Notifications & Files Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card>
                            <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
                            <ul className="space-y-3">
                                {clientDashboardData.notifications.map((note, i) => (
                                    <li key={i} className="text-sm text-brand-text-secondary border-l-2 border-brand-accent pl-3">{note}</li>
                                ))}
                            </ul>
                        </Card>
                        <Card>
                            <h2 className="text-2xl font-semibold mb-4">File Upload</h2>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <p className="text-brand-text-secondary">Drag & drop files here or click to upload</p>
                                <input type="file" className="hidden" />
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ClientDashboardPage;