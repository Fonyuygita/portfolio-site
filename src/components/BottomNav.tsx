import React from "react";
import { Bot, Home, Search, User } from "lucide-react";

const BottomNav = () => {
    const navItems = [
        { icon: <Home className="w-6 h-6" />, label: 'Home', path: '/' },
        { icon: <Search className="w-6 h-6" />, label: 'Search', path: '/search' },
        { icon: <Bot className="w-6 h-6" />, label: 'GxI', path: '/gxi' },
        { icon: <User className="w-6 h-6" />, label: 'Profile', path: '/profile' },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 
                    border-t border-gray-200 dark:border-gray-800 z-50
                    backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => (
                    <a
                        key={item.path}
                        href={item.path}
                        className="flex flex-col items-center justify-center w-full h-full
                     relative group touch-manipulation"
                    >
                        <div className="absolute -top-8 scale-0 group-hover:scale-100 
                          transition-transform duration-200 bg-gray-800 
                          dark:bg-gray-100 text-white dark:text-gray-900 
                          rounded-md px-2 py-1 text-xs">
                            {item.label}
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center
                          rounded-full group-hover:bg-gray-100 
                          dark:group-hover:bg-gray-800 transition-colors
                          active:scale-95 transform">
                            {item.icon}
                        </div>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav