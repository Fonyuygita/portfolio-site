// import { Post as PostType } from '../types';
import React from "react";

export interface PostMetrics {
    likes: number;
    reposts: number;
    views: string;
}

export interface PostType {
    id: number;
    content: string;
    timestamp: string;
    metrics: PostMetrics;
}

export const Post = ({ post }: { post: PostType }) => (
    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition">
        <p className="mb-2">{post.content}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{post.timestamp}</span>
            <span>{post.metrics.views} views</span>
            <span>{post.metrics.likes} likes</span>
            <span>{post.metrics.reposts} reposts</span>
        </div>
    </div>
);