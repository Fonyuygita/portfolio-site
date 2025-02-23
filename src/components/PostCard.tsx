

// components/PostCard.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Share2, MessageCircle, ExternalLink, Github, Bookmark, BarChart2 } from 'lucide-react';

import { motion } from 'framer-motion';
export interface PostMetrics {
    likes: number;
    reposts: number;
    views: string;
    comments: number;
}

export interface PostMedia {
    type: 'image' | 'video' | 'github' | 'blog';
    url: string;
    previewUrl?: string;
    title?: string;
    description?: string;
}

export interface Post {
    id: number;
    content: string;
    timestamp: string;
    metrics: PostMetrics;
    category: 'project' | 'blog' | 'tutorial' | 'achievement' | 'update';
    media?: PostMedia;
    tags: string[];
    externalLink?: string;
    pinned?: boolean;
}

export const PostCard = ({ post }: { post: Post }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const getCategoryColor = (category: Post['category']) => {
        const colors = {
            project: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
            blog: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
            tutorial: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
            achievement: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
            update: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
        };
        return colors[category];
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200"
        >
            {post.pinned && (
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                    <BarChart2 className="w-4 h-4" />
                    <span>Pinned Post</span>
                </div>
            )}

            <div className="flex items-start gap-4">
                <div className="flex-grow space-y-3">
                    {/* Category Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${getCategoryColor(post.category)}`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>

                    {/* Content */}
                    <p className="text-lg">{post.content}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Media Content */}
                    {post.media && (
                        <div className="relative mt-3 rounded-xl overflow-hidden">
                            {post.media.type === 'image' && (
                                <Image
                                    src={post.media.previewUrl || post.media.url}
                                    alt={post.media.title || 'Post image'}
                                    width={500}
                                    height={300}
                                    className="rounded-xl object-cover hover:scale-105 transition-transform duration-200"
                                />
                            )}
                            {post.media.type === 'github' && (
                                <Link
                                    href={post.media.url}
                                    target="_blank"
                                    className="block p-4 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <div className="flex items-center gap-2">
                                        <Github className="w-5 h-5" />
                                        <span className="font-medium">{post.media.title}</span>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{post.media.description}</p>
                                </Link>
                            )}
                        </div>
                    )}

                    {/* Metrics and Actions */}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                            >
                                <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                                <span>{post.metrics.likes}</span>
                            </button>

                            <button className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                <span>{post.metrics.comments}</span>
                            </button>

                            <button className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                <Share2 className="w-5 h-5" />
                                <span>{post.metrics.reposts}</span>
                            </button>

                            <button
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                            >
                                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                            </button>
                        </div>

                        {post.externalLink && (
                            <Link
                                href={post.externalLink}
                                target="_blank"
                                className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors"
                            >
                                <span className="text-sm">View More</span>
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        )}
                    </div>

                    {/* Timestamp */}
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {post.timestamp} • {post.metrics.views} views
                    </div>
                </div>
            </div>
        </motion.div>
    );
};



