// components/ProfileHeader.tsx
import Image from 'next/image';



import React from 'react';
import { Heart, Share2, BarChart2, MessageCircle } from 'lucide-react';

// Profile Header Component
const ProfileHeader = () => {
    return (
        <div className="border-b border-gray-200 dark:border-gray-800">
            <div className="relative">
                <Image
                    src="https://i.ibb.co/V0D1MTsX/gito.jpg"
                    alt="Cover"
                    fill
                    className="object-cover rounded-xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="h-32 sm:h-48 w-full bg-gradient-to-r from-blue-400 to-blue-600 " />


                <div className="absolute -bottom-16 left-4 sm:left-6">
                    <Image
                        src="https://i.ibb.co/WpNSdsZ5/D9-Zv44-VS-400x400.jpg"
                        alt="Profile"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-white dark:border-gray-900"
                        priority
                    />
                    {/* <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-800" /> */}

                </div>
            </div>

            <div className="pt-20 sm:pt-24 px-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">Fonyuy Gita</h1>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{"Co Founder {IWS} |Boy | Learner"}</p>
                    </div>
                    <button className="self-start px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 
                           hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        view Profile
                    </button>
                </div>
                <p className="mt-4 text-sm sm:text-base">
                    Love Ai and working on some cool stuffs, to be released soon😊.  stay tune
                </p>
                <div className="flex gap-4 mt-4 pb-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <span>projects: 6+</span>
                    <span>FavNumber: 256</span>
                </div>
            </div>
        </div>
    );
};
export default ProfileHeader
