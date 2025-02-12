// types.ts
export interface PostMetrics {
  likes: number;
  reposts: number;
  views: string;
}

export interface Post {
  id: number;
  content: string;
  timestamp: string;
  metrics: PostMetrics;
}
