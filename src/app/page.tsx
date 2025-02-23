// import { Sidebar } from '@/components/Sidebar';
import { MobileHeader } from '@/components/MobileHeader';
// import { ProfileHeader } from '@/components/ProfileHeader';
import { PostCard } from '@/components/PostCard';
import ProfileHeader from '@/components/ProfileHeader';
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
  const posts = [
    {
      id: 1,
      category: 'project',
      content: "🚀 Cofounded Seed, along with Cheko Yohane and Fien Dora, and our goal is to reshape the world of tech in Cameroon-Bamenda North West Region. With emphasis on Artificial Intelligence",
      timestamp: "2h",
      metrics: { likes: 142, reposts: 52, views: "3.2k", comments: 28 },
      tags: ['E-commerce', 'WebDev', 'NextJS'],
      pinned: true,
      media: {
        type: 'image',
        url: 'https://i.ibb.co/JW30pVNq/image.png',
        previewUrl: 'https://i.ibb.co/JW30pVNq/image.png',
        title: 'Buy_Now'
      },
      externalLink: 'https://innovatewithseed.com/'
    },

    {
      id: 11,
      category: 'project',
      content: "Gitash Project-Master the command line through an interactive and fun learning experience. ",
      timestamp: "2h",
      metrics: { likes: 142, reposts: 52, views: "3.2k", comments: 28 },
      tags: ['E-commerce', 'WebDev', 'NextJS'],
      pinned: true,
      media: {
        type: 'image',
        url: 'https://i.ibb.co/TDb4xD9L/image.png',
        previewUrl: 'https://i.ibb.co/TDb4xD9L/image.png',
        title: 'Buy_Now'
      },
      externalLink: 'https://gitash.vercel.app/'
    },
    {
      id: 2,
      category: 'blog',
      content: "📝 New Blog Post: 'How to Google it like a Pro' - Master the art of efficient programming searches and boost your development productivity.",
      timestamp: "5h",
      metrics: { likes: 89, reposts: 34, views: "5.1k", comments: 15 },
      tags: ['Programming', 'Tips', 'Productivity'],
      media: {
        type: 'image',
        url: 'https://images.pexels.com/photos/5417844/pexels-photo-5417844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Google it like a Pro',
      },
      externalLink: 'https://fonyuyjudefomonyuy.hashnode.dev/how-to-google-it-like-programmer'
    },
    {
      id: 3,
      category: 'project',
      content: "🚗 Explore_Car: Smart Search Functionality - Our advanced search feature enables you to narrow down your options based on specific criteria such as make, model year, price range, fuel efficiency, and more.",
      timestamp: "1d",
      metrics: { likes: 256, reposts: 145, views: "12.7k", comments: 42 },
      tags: ['WebDev', 'Automotive', 'Search'],
      media: {
        type: 'image',
        url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'eXplore_Car'
      },
      externalLink: 'https://explore-car.vercel.app'
    },
    {
      id: 4,
      category: 'blog',
      content: "📚 Just Published: 'Five books every Programmer should read' - Essential reading recommendations to level up your programming career!",
      timestamp: "2d",
      metrics: { likes: 178, reposts: 82, views: "7.3k", comments: 31 },
      tags: ['Books', 'Programming', 'Career'],
      media: {
        type: 'image',
        url: 'https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Programming Books'
      },
      externalLink: 'https://fonyuyjudefomonyuy.hashnode.dev/four-books-i-think-every-programmer-should-read'
    },
    {
      id: 5,
      category: 'project',
      content: "📚 LearnCode: Curated Content for All Skill Levels - Whether you're a beginner or an advanced learner, LearnCode has carefully curated resources to suit your needs.",
      timestamp: "3d",
      metrics: { likes: 203, reposts: 97, views: "9.4k", comments: 35 },
      tags: ['Education', 'Programming', 'Learning'],
      media: {
        type: 'image',
        url: 'https://images.pexels.com/photos/4559555/pexels-photo-4559555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'LearnCode'
      },
      externalLink: 'https://learn-code-phi.vercel.app/'
    },
    {
      id: 6,
      category: 'blog',
      content: "🤖 New Article: 'Did Bun.js just kill NodeJS?' - Exploring the impact of this fast and efficient JavaScript runtime!",
      timestamp: "4d",
      metrics: { likes: 312, reposts: 158, views: "15.2k", comments: 67 },
      tags: ['JavaScript', 'Bun', 'NodeJS', 'Runtime'],
      media: {
        type: 'image',
        url: '/bun.png',
        title: 'Bun.js vs Node.js'
      },
      externalLink: 'https://dev.to/fonyuygita/bunjs-a-fast-and-efficient-javascript-runtime-1gnm'
    },
    {
      id: 7,
      category: 'project',
      content: "👟 PS-shoes: A stunning animated e-commerce website for a shoe company - Bringing style and interactivity to online shoe shopping!",
      timestamp: "5d",
      metrics: { likes: 167, reposts: 73, views: "6.8k", comments: 29 },
      tags: ['E-commerce', 'Animation', 'WebDev'],
      media: {
        type: 'image',
        url: '/padisco.png',
        title: 'PS-shoes'
      },
      externalLink: 'https://padiscoshoes.vercel.app'
    },
    {
      id: 8,
      category: 'blog',
      content: "🔒 Latest Post: 'Introduction to Backend Security in NodeJs' - Essential security practices for Node.js developers!",
      timestamp: "6d",
      metrics: { likes: 234, reposts: 112, views: "8.9k", comments: 45 },
      tags: ['NodeJS', 'Security', 'Backend'],
      media: {
        type: 'image',
        url: '/backend.png',
        title: 'Backend Security'
      },
      externalLink: 'https://dev.to/fonyuygita/introduction-to-backend-security-5dlp'
    },
    {
      id: 9,
      category: 'blog',
      content: "🌟 New Article: 'How to get started as a newbie in Tech' - Tips and strategies for staying consistent and motivated in your coding journey!",
      timestamp: "1w",
      metrics: { likes: 289, reposts: 156, views: "11.3k", comments: 62 },
      tags: ['Career', 'Beginners', 'Motivation'],
      media: {
        type: 'image',
        url: '/newbie.png',
        title: 'Tech Beginners Guide'
      },
      externalLink: 'https://dev.to/fonyuygita/staying-consistent-and-motivated-as-a-newbie-in-coding-and-tech-285n'
    },
    // {
    //   id: 10,
    //   category: 'project',
    //   content: "🎓 NSA: Student Platform - A comprehensive platform for managing student activities and resources!",
    //   timestamp: "1w",
    //   metrics: { likes: 198, reposts: 87, views: "7.6k", comments: 33 },
    //   tags: ['Education', 'WebDev', 'Students'],
    //   media: {
    //     type: 'image',
    //     url: '/nona.png',
    //     title: 'NSA Platform'
    //   },
    //   externalLink: 'https://nonistudents.vercel.app'
    // },
    {
      id: 11,
      category: 'blog',
      content: "🤔 New Blog Post: 'TypeScript Or JavaScript, what to use?' - A comprehensive comparison to help you make the right choice for your project!",
      timestamp: "2w",
      metrics: { likes: 276, reposts: 134, views: "10.8k", comments: 58 },
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      media: {
        type: 'image',
        url: 'https://images.pexels.com/photos/1181257/pexels-photo-1181257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'TS vs JS'
      },
      externalLink: 'https://dev.to/fonyuygita/typescript-or-javascript--2kg0'
    },
    {
      id: 12,
      category: 'blog',
      content: "🤖 Tech Insight: 'ChatGPT evil twins are Here' - Exploring the implications and challenges of AI development!",
      timestamp: "2w",
      metrics: { likes: 342, reposts: 187, views: "14.5k", comments: 76 },
      tags: ['AI', 'ChatGPT', 'Technology'],
      media: {
        type: 'image',
        url: '/gpt.png',
        title: 'ChatGPT Analysis'
      },
      externalLink: 'https://dev.to/fonyuygita/chatgpts-evil-twins-are-here-4hd4'
    },
    {
      id: 13,
      category: 'project',
      content: "🚀 Buy_Now: Seamless Buying Experience - Browse through a wide range of products across diverse categories, including fashion, electronics, home goods, and more.",
      timestamp: "2h",
      metrics: { likes: 142, reposts: 52, views: "3.2k", comments: 28 },
      tags: ['E-commerce', 'WebDev', 'NextJS'],
      pinned: true,
      media: {
        type: 'image',
        url: 'https://images.pexels.com/photos/9811243/pexels-photo-9811243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        previewUrl: 'https://images.pexels.com/photos/9811243/pexels-photo-9811243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Buy_Now'
      },
      externalLink: 'https://buy-now-4e3m.vercel.app/'
    },
  ];

  return posts;
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-full">
        <ProfileHeader />
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {posts.map(post => (
            // @ts-ignore
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}




