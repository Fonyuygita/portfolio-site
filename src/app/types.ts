import { LucideIcon } from "lucide-react";

export interface Message {
  id: string;
  content: string;
  isBot: boolean;
  type: "text" | "image" | "gallery" | "video" | "link";
  mediaContent?: MediaContent;
  timestamp: Date;
}

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
