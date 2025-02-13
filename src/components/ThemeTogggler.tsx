
'use client';

// types.ts
export interface PostMetrics {
    likes: number;
    reposts: number;
    views: string;
}

// i.ibb.co


export interface Post {
    id: number;
    content: string;
    timestamp: string;
    metrics: PostMetrics;
}
// components/ThemeToggle.tsx


import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const ThemeToggle = ({ className = '' }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center
                active:scale-95 transform transition-all duration-200
                hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <Sun className={`w-6 h-6 text-yellow-500 absolute transition-all duration-300 
          ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-0'}`} />
                <Moon className={`w-6 h-6 text-blue-500 absolute transition-all duration-300 
          ${theme === 'dark' ? 'rotate-90 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'}`} />
            </div>
        </button>
    );
};

export default ThemeToggle