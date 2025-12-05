import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { LogoIcon } from '../components/Icons';

interface LoginPageProps {
    onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] animate-fade-in-up">
            <Card className="w-full max-w-md">
                 <div className="text-center mb-8">
                    <LogoIcon className="h-16 w-16 mx-auto text-brand-accent mb-4"/>
                    <h1 className="text-3xl font-bold">Client Portal Login</h1>
                    <p className="text-brand-text-secondary mt-2">Access your project dashboard</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary">Email address</label>
                        <div className="mt-1">
                            <input id="email" name="email" type="email" autoComplete="email" required className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password"  className="block text-sm font-medium text-brand-text-secondary">Password</label>
                        <div className="mt-1">
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full p-3 bg-brand-primary border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                         <div className="text-sm">
                            <a href="#" className="font-medium text-brand-accent hover:text-brand-accent-hover">Forgot your password?</a>
                        </div>
                    </div>
                    <Button onClick={onLoginSuccess} className="w-full">Sign In</Button>
                </form>
            </Card>
        </div>
    );
};

export default LoginPage;