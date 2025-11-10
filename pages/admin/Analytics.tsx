import React from 'react';
import { ChartBarIcon, UserGroupIcon, CursorClickIcon, TrendingDownIcon } from '../../components/icons/TechIcons';

const Analytics: React.FC = () => {

    const metrics = [
        { title: 'Visitors', value: '1,234', change: '+12.5%', icon: UserGroupIcon, color: 'text-sky-400' },
        { title: 'Page Views', value: '5,678', change: '+8.2%', icon: CursorClickIcon, color: 'text-green-400' },
        { title: 'Bounce Rate', value: '42.3%', change: '-3.1%', icon: TrendingDownIcon, color: 'text-red-400' },
        { title: 'Session Duration', value: '3m 12s', change: '+5.7%', icon: ChartBarIcon, color: 'text-yellow-400' },
    ];

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map(metric => (
                    <div key={metric.title} className="db-card rounded-lg p-6">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-400">{metric.title}</p>
                            <metric.icon className={`h-6 w-6 ${metric.color}`} />
                        </div>
                        <p className="text-3xl font-semibold mt-2">{metric.value}</p>
                        <p className={`text-sm mt-1 ${metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{metric.change}</p>
                    </div>
                ))}
            </div>

            {/* Chart Placeholders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="db-card rounded-lg p-6">
                    <h2 className="font-semibold mb-4 text-gray-300">Visitor Traffic</h2>
                    <div className="h-64 bg-gray-700/50 rounded-md flex items-center justify-center">
                        <p className="text-gray-500">Chart will be displayed here</p>
                    </div>
                </div>
                <div className="db-card rounded-lg p-6">
                    <h2 className="font-semibold mb-4 text-gray-300">Traffic Sources</h2>
                    <div className="h-64 bg-gray-700/50 rounded-md flex items-center justify-center">
                        <p className="text-gray-500">Doughnut chart will be displayed here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;