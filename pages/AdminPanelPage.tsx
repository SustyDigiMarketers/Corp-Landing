import React from 'react';
import { adminPanelData, clientDashboardData } from '../constants';
import Card from '../components/Card';

const StatCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <Card>
        <p className="text-sm text-brand-text-secondary">{label}</p>
        <p className="text-3xl font-bold">{value}</p>
    </Card>
);

const AdminPanelPage: React.FC = () => {
    return (
        <div className="flex h-screen bg-brand-primary">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-secondary p-6 flex-shrink-0">
                <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
                <nav className="space-y-4">
                    <a href="#" className="block py-2 px-3 bg-brand-accent rounded-md text-white">Dashboard</a>
                    <a href="#" className="block py-2 px-3 text-brand-text-secondary hover:bg-brand-primary rounded-md">Projects</a>
                    <a href="#" className="block py-2 px-3 text-brand-text-secondary hover:bg-brand-primary rounded-md">Services</a>
                    <a href="#" className="block py-2 px-3 text-brand-text-secondary hover:bg-brand-primary rounded-md">Products</a>
                    <a href="#" className="block py-2 px-3 text-brand-text-secondary hover:bg-brand-primary rounded-md">Blog</a>
                    <a href="#" className="block py-2 px-3 text-brand-text-secondary hover:bg-brand-primary rounded-md">Users</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

                {/* Analytics */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard label="Monthly Visits" value={adminPanelData.analytics.monthly_visits.toLocaleString()} />
                        <StatCard label="Leads Generated" value={adminPanelData.analytics.leads_generated} />
                        <StatCard label="Conversion Rate" value={`${adminPanelData.analytics.conversion_rate}`} />
                        <StatCard label="Monthly Revenue" value={`₹${adminPanelData.analytics.revenue.toLocaleString()}`} />
                    </div>
                </section>
                
                {/* Project Management Table */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Project Management</h2>
                    <Card>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-gray-200">
                                    <tr>
                                        <th className="p-3">Project Name</th>
                                        <th className="p-3">Client</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Deadline</th>
                                        <th className="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientDashboardData.projects.map(p => (
                                        <tr key={p.name} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                                            <td className="p-3">{p.name}</td>
                                            <td className="p-3 text-brand-text-secondary">{p.name.split(' ')[0]}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                                    p.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300' :
                                                    p.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                                                    'bg-yellow-500/20 text-yellow-300'
                                                }`}>{p.status}</span>
                                            </td>
                                            <td className="p-3 text-brand-text-secondary">{p.deadline}</td>
                                            <td className="p-3">
                                                <button className="text-brand-accent hover:underline">Edit</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </section>
            </main>
        </div>
    );
};

export default AdminPanelPage;