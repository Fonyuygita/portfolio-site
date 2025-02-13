import React, { useState } from 'react';
import { Menu, Home, User, Bot, MessageSquare, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

// Sidebar Navigation Component
const SideNav = ({ isMobile, isOpen, onClose }: { isMobile: boolean; isOpen: boolean; onClose?: any }) => {
    const navItems = [
        { icon: <Home className="w-6 h-6" />, label: 'Home', path: '/' },
        { icon: <User className="w-6 h-6" />, label: 'Profile', path: '/profile' },
        { icon: <Bot className="w-6 h-6" />, label: 'GxI Assistant', path: '/gxi' },
        { icon: <MessageSquare className="w-6 h-6" />, label: 'Messages', path: '/messages' },
    ];

    const sidebarClasses = `
    fixed top-0 left-0 h-full bg-white dark:bg-gray-900 
    ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
    transition-transform duration-300 ease-in-out
    ${isMobile ? 'w-64 z-50' : 'w-20 lg:w-64'}
    border-r border-gray-200 dark:border-gray-800
  `;

    return (
        <nav className={sidebarClasses}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-8">
                    <h1 className={`font-bold text-xl ${!isMobile && 'lg:block hidden'}`}>Portfolio</h1>
                    {isMobile && (
                        <button onClick={onClose} className="lg:hidden">
                            <Menu className="w-6 h-6" />
                        </button>
                    )}
                </div>
                <div className="space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="flex items-center p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {item.icon}
                            <span className={`ml-4 ${!isMobile && 'lg:block hidden'}`}>{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default SideNav