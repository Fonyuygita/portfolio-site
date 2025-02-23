import { Bot, Home, MessageSquare, Search, User, X } from "lucide-react";

const MobileDrawer = ({ isOpen, onClose }: any) => {
    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 
                   transition-opacity duration-300 md:hidden
                   ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-gray-900 
                   z-50 transform transition-transform duration-300 ease-out
                   md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b 
                      border-gray-200 dark:border-gray-800">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800
                     active:scale-95 transform transition-all"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <nav className="p-4 space-y-2">
                    {[
                        { icon: <Home className="w-6 h-6" />, label: 'Home', path: '/' },
                        { icon: <Search className="w-6 h-6" />, label: 'Search', path: '/soon' },
                        { icon: <Bot className="w-6 h-6" />, label: 'GxI', path: '/gxi' },
                        { icon: <MessageSquare className="w-6 h-6" />, label: 'Messages', path: '/soon' },
                        { icon: <User className="w-6 h-6" />, label: 'Profile', path: '/profile' },
                    ].map((item) => (
                        <a
                            key={item.path}
                            href={item.path}
                            className="flex items-center space-x-4 p-4 rounded-2xl
                       hover:bg-gray-100 dark:hover:bg-gray-800
                       active:scale-98 transform transition-all"
                            onClick={onClose}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default MobileDrawer