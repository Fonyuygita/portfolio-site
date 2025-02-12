import { Sidebar } from '@/components/Sidebar';
import { MobileHeader } from '@/components/MobileHeader';
import { ProfileHeader } from '@/components/ProfileHeader';
import { PostCard } from '@/components/PostCard';
import { SkillsSidebar } from '@/components/SkillsSidebar';
// import { Post as PostType } from '@/types';
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

async function getPosts() {
  const posts: Post[] = [
    {
      id: 1,
      category: 'project',
      content: "🚀 Just launched my latest project: An AI-powered image recognition system that can identify and classify objects in real-time with 98% accuracy!",
      timestamp: "2h",
      metrics: { likes: 142, reposts: 52, views: "3.2k", comments: 28 },
      tags: ['AI', 'MachineLearning', 'ComputerVision'],
      pinned: true,
      media: {
        type: 'image',
        url: '/projects/ai-vision-demo.jpg',
        previewUrl: '/projects/ai-vision-demo-preview.jpg',
        title: 'AI Vision Demo'
      },
      externalLink: 'https://github.com/yourusername/ai-vision'
    },
    {
      id: 2,
      category: 'blog',
      content: "📝 New Blog Post: 'Mastering Next.js 13: A Deep Dive into Server Components' - Learn how to leverage the power of React Server Components for better performance and SEO.",
      timestamp: "5h",
      metrics: { likes: 89, reposts: 34, views: "5.1k", comments: 15 },
      tags: ['NextJS', 'React', 'WebDev', 'Tutorial'],
      media: {
        type: 'github',
        url: 'https://github.com/yourusername/nextjs-examples',
        title: 'Next.js 13 Examples Repository',
        description: 'A collection of practical examples showing how to implement Server Components in Next.js 13'
      },
      externalLink: 'https://yourblog.dev/mastering-nextjs-13'
    },
    {
      id: 3,
      category: 'achievement',
      content: "🏆 Honored to share that our team's machine learning model won first place at the International AI Competition! Check out the demo video showcasing its capabilities.",
      timestamp: "1d",
      metrics: { likes: 256, reposts: 145, views: "12.7k", comments: 42 },
      tags: ['Achievement', 'AI', 'Competition', 'TeamWork'],
      media: {
        type: 'image',
        url: '/achievements/ai-competition.jpg',
        title: 'AI Competition Winner'
      },
      externalLink: 'https://competition-results.com/2024/ai-challenge'
    }
  ];

  return posts;
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        <Sidebar />
        <MobileHeader />
        <div className="flex-1 border-r border-gray-200 dark:border-gray-800">
          <div className="max-w-2xl mx-auto">
            <ProfileHeader />
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
        <SkillsSidebar />
      </div>
    </div>
  );
}