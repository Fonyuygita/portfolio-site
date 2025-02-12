// components/ProfileHeader.tsx
import Image from 'next/image';

export const ProfileHeader = () => (
    <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="relative">
            <div className="w-full h-48 relative">
                <Image
                    src="https://i.ibb.co/V0D1MTsX/gito.jpg"
                    alt="Cover"
                    fill
                    className="object-cover rounded-xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            </div>
            <div className="absolute -bottom-16 left-4 w-32 h-32">
                <Image
                    src="https://i.ibb.co/TB7xMDXC/D9-Zv44-VS-400x400.jpg"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-white dark:border-gray-900"
                    priority
                />
            </div>
        </div>
        <div className="mt-20">
            <h2 className="text-xl font-bold">Your Name</h2>
            <p className="text-gray-600 dark:text-gray-400">
                Full Stack Developer | ML Expert | Technical Tutor | Boy| Barca Fan
            </p>
            <p className="mt-2">
                Building the future with code. Passionate about teaching and creating scalable solutions.
            </p>
            <div className="flex space-x-4 mt-4 text-gray-600 dark:text-gray-400">
                <span>🌍 Remote</span>
                <span>🔗 github.com/yourusername</span>
                <span>📍 Available for hire</span>
            </div>
        </div>
    </div>
);

