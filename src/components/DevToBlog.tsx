"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  reading_time_minutes: number;
  tag_list: string[];
}

export default function DevToBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?username=fonyuygita&per_page=5"
        );
        const data = await res.json();
        // Filter out if not an array (error handling)
        if (Array.isArray(data)) {
          setPosts(data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-sm text-muted-foreground animate-pulse">Loading writings...</div>;
  }

  if (posts.length === 0) {
    return null; // Don't show section if no posts
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold tracking-tight">Writings</h2>
      <div className="flex flex-col space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
              <span className="text-base font-medium group-hover:underline md:truncate md:max-w-xl">
                {post.title}
              </span>
              <span className="text-xs text-muted-foreground font-mono shrink-0">
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {post.reading_time_minutes} min read
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Link 
        href="https://dev.to/fonyuygita" 
        target="_blank" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
      >
        Read more on Dev.to <ArrowUpRight className="ml-1 h-3 w-3" />
      </Link>
    </div>
  );
}
