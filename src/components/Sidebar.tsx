// components/Sidebar.tsx
import Link from 'next/link';
import { Home, Code, Brain, Book, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeTogggler';
// import { ThemeToggle } from './ThemeToggler';

export const Sidebar = () => {
    const navItems = [
        { icon: Home, label: 'Home', href: '/' },
        { icon: Code, label: 'Projects', href: '/projects' },
        { icon: Brain, label: 'ML Models', href: '/ml-models' },
        { icon: Book, label: 'Tutorials', href: '/tutorials' },
        { icon: Mail, label: 'Contact', href: '/contact' },
    ];

    return (
        <div className="w-64 border-r border-gray-200 dark:border-gray-800 p-4 hidden md:block">
            <div className="space-y-6">
                <h1 className="text-xl font-bold">Portfolio</h1>

                <nav className="space-y-4">
                    {navItems.map(({ icon: Icon, label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className="flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 p-3 rounded-full w-full"
                        >
                            <Icon className="w-6 h-6" />
                            <span>{label}</span>
                        </Link>
                    ))}
                </nav>

                <Link
                    href="/contact"
                    className="block w-full bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 transition text-center"
                >
                    Hire Me
                </Link>

                <ThemeToggle />
            </div>
        </div>
    );
};
