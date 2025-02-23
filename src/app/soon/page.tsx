import React from 'react';
import { Construction, Coffee, Wrench, Timer } from 'lucide-react';

const page = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6 animate-fade-in">
            <div className="relative mb-8">
                <Construction className="w-16 h-16 text-blue-500 animate-bounce" />
                <Coffee className="w-8 h-8 text-amber-500 absolute -right-4 bottom-0 animate-pulse" />
                <Wrench className="w-8 h-8 text-gray-400 absolute -left-4 bottom-0 animate-spin-slow" />
            </div>

            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Under Construction
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                {"I'm currently crafting something amazing for this page. Please check back soon!"}
            </p>

            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Timer className="w-5 h-5 animate-pulse" />
                <span className="text-sm">Coming Soon</span>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                {[
                    { icon: '🚀', text: 'Exciting Features' },
                    { icon: '✨', text: 'New Experience' },
                    { icon: '🎯', text: 'Targeted Content' },
                    { icon: '🛠️', text: 'Custom Tools' }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 
                     hover:scale-105 transition-transform duration-200
                     border border-gray-200 dark:border-gray-700"
                    >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <div className="text-sm font-medium">{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;