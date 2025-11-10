import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { 
    ChartBarIcon, 
    PhotographIcon, 
    DocumentTextIcon, 
    CollectionIcon, 
    ClockIcon,
    LogoutIcon
} from '../components/icons/TechIcons';

const navItems = [
    { name: 'Analytics', path: '/dashboard/analytics', icon: ChartBarIcon },
    { name: 'Image Manager', path: '/dashboard/images', icon: PhotographIcon },
    { name: 'Blog Manager', path: '/dashboard/blogs', icon: DocumentTextIcon },
    { name: 'Gallery Manager', path: '/dashboard/gallery', icon: CollectionIcon },
    { name: 'Timed Popups', path: '/dashboard/popups', icon: ClockIcon },
];

const DashboardPage: React.FC = () => {
    const navigate = useNavigate();
    const logoSrc = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0ZjQ2ZTU7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2VjNDg5OTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0gMzAgMjAgTCA3MCAyMCBBIDEwIDEwIDAgMCAxIDgwIDMwIEwgODAgNzAgQSAxMCAxMCAwIDAgMSA3MCA4MCBMIDMwIDgwIEEgMTAgMTAgMCAwIDEgMjAgNzAgTCAyMCAzMCBBIDEwIDEwIDAgMCAxIDMwIDIwIiBzdHJva2U9InVybCgjZ3JhZCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNIDQwIDQwIEwgNjAgNjAgTSA2MCA0MCBMIDQwIDYwIiBzdHJva2U9InVybCgjZ3JhZCkiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=";


    const handleLogout = () => {
        sessionStorage.removeItem('isAdminAuthenticated');
        navigate('/');
    };

    return (
        <div className="dashboard-layout">
            <aside className="dashboard-sidebar flex flex-col p-4">
                <div className="flex items-center gap-2 mb-8 px-2">
                    <img src={logoSrc} alt="SustyDigi Logo" className="h-8 w-auto" />
                    <span className="text-white font-bold text-xl">Admin Panel</span>
                </div>
                <nav className="flex-grow">
                    <ul className="space-y-2">
                        {navItems.map(item => (
                            <li key={item.name}>
                                <NavLink to={item.path} className="dashboard-nav-link">
                                    <item.icon className="h-5 w-5 mr-3" />
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <button
                        onClick={handleLogout}
                        className="w-full dashboard-nav-link hover:bg-pink-800/50"
                    >
                        <LogoutIcon className="h-5 w-5 mr-3" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
            <main className="dashboard-content p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardPage;