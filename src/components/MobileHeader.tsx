// components/MobileHeader.tsx
import { Menu } from 'lucide-react';
// import { ThemeToggle } from './ThemeTogggler';
import Image from 'next/image';


export const MobileHeader = () => (
    <div className="md:hidden fixed top-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 z-10 p-4">
        <div className="flex justify-between items-center">
            {/* <Menu className="w-6 h-6" /> */}
            <h1 className="text-xl font-bold">Portfolio</h1>
            {/* <ThemeToggle /> */}
        </div>
    </div>
);

