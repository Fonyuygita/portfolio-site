"use client"

import { useEffect, useState } from 'react';
import { Bot, Home, Menu, MessageSquare, Search, User } from 'lucide-react';
// import { ThemeToggle } from './ThemeToggle';
// import { SideNav } from './SideNav';
import { SkillsSidebar } from './SkillsSidebar';
// import ThemeToggler from './ThemeTogggler';
import SideNav from './Sidebar';
import BottomNav from './BottomNav';
import ThemeToggle from './ThemeTogggler';
import MobileDrawer from './MobileDrawer';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Mobile Header */}
            <header
                className={`md:hidden fixed top-0 w-full z-40 transition-all duration-200
                   ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg' :
                        'bg-white dark:bg-gray-900'}
                   border-b border-gray-200 dark:border-gray-800`}
            >
                <div className="flex justify-between items-center p-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="w-10 h-10 flex items-center justify-center
                     rounded-full hover:bg-gray-100 dark:hover:bg-gray-800
                     active:scale-95 transform transition-all"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <h1 className="text-xl font-bold">GiXolio</h1>
                    <ThemeToggle />
                </div>
            </header>

            {/* Mobile Drawer */}
            <MobileDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />

            {/* Desktop Left Sidebar */}
            <aside className="hidden md:block fixed top-0 left-0 h-full w-20 lg:w-64 
                     border-r border-gray-200 dark:border-gray-800 
                     bg-white dark:bg-gray-900">
                <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="font-bold text-xl hidden lg:block">GiXolio</h1>
                        <ThemeToggle />
                    </div>
                    <nav className="space-y-2">
                        {[
                            { icon: <Home className="w-6 h-6" />, label: 'Home', path: '/' },
                            { icon: <Search className="w-6 h-6" />, label: 'Search', path: '/search' },
                            { icon: <Bot className="w-6 h-6" />, label: 'GxI', path: '/gxi' },
                            { icon: <MessageSquare className="w-6 h-6" />, label: 'Messages', path: '/messages' },
                            { icon: <User className="w-6 h-6" />, label: 'Profile', path: '/profile' },
                        ].map((item) => (
                            <a
                                key={item.path}
                                href={item.path}
                                className="flex items-center p-3 rounded-full
                         hover:bg-gray-100 dark:hover:bg-gray-800
                         active:scale-95 transform transition-all"
                            >
                                {item.icon}
                                <span className="ml-4 hidden lg:block">{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="md:ml-20 lg:ml-64 pt-16 md:pt-0 pb-20 md:pb-0">
                <div className="overflow-x-hidden max-w-2xl  mx-auto px-4">
                    {children}
                </div>
            </main>

            {/* Right Sidebar - Skills */}
            <aside className="hidden lg:block fixed top-0 right-0 w-80 h-full 
                     border-l border-gray-200 dark:border-gray-800 
                     bg-white dark:bg-gray-900">
                <div className="p-4 h-full overflow-y-auto">
                    <div className="sticky top-0 bg-white dark:bg-gray-900 py-4">
                        <h3 className="font-bold text-xl mb-4">Skills & Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                'TypeScript', 'React', 'Node.js', 'Python',
                                'TensorFlow', 'NextJS', 'SQL', 'AWS'
                            ].map(skill => (
                                <span
                                    key={skill}
                                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 
                           px-3 py-1 rounded-full text-sm transition-colors duration-200
                           hover:scale-105 transform cursor-pointer"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Bottom Navigation */}
            <BottomNav />
        </div>
    );
}