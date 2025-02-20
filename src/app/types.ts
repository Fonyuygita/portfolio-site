import { LucideIcon } from "lucide-react";
// import { LucideIcon } from "lucide-react";

// export interface Message {
//   id: string;
//   content: string;
//   isBot: boolean;
//   type: "text" | "image" | "gallery" | "video" | "link";
//   mediaContent?: MediaContent;
//   timestamp: Date;
// }

export interface MediaContent {
  url?: string;
  title?: string;
  description?: string;
  images?: string[];
}

export interface ChatSuggestion {
  icon: LucideIcon;
  label: string;
  category: string;
}

export type MediaType =
  | "text"
  | "image"
  | "gallery"
  | "video"
  | "audio"
  | "link"
  | "code";

export interface MediaContent {
  url?: string;
  title?: string;
  description?: string;
  images?: string[];
  code?: {
    language: string;
    content: string;
  };
  audio?: {
    url: string;
    duration: string;
  };
}

export interface Message {
  id: string;
  content: string;
  isBot: boolean;
  type: MediaType;
  mediaContent?: MediaContent;
  timestamp: Date;
}

export interface DataStoreItem {
  id: string;
  triggers: string[]; // Multiple phrases that can trigger this response
  response: {
    content: string;
    type: MediaType;
    mediaContent?: MediaContent;
  };
  category: string;
  icon: LucideIcon;
}
