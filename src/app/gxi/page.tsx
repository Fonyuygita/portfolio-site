"use client"

import React, { useState, useEffect, useRef } from 'react';
import {
  Bot, Send, Image as ImageIcon, Sparkles, User, Github, Twitter,
  Linkedin, Camera, Palette, Code, Music, Coffee, Youtube,
  Film, Gamepad, Book, Plane, Heart, Search, Briefcase,
  Globe, Star, Cpu, Newspaper, RadioTower, Laptop,
  LucideIcon, Headphones
} from 'lucide-react';

// Types & Interfaces
interface DataStoreItem {
  id: string;
  question: string;
  answer: string;
  type: 'text' | 'image' | 'gallery' | 'video' | 'link';
  content?: {
    url?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
}

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  type: 'text' | 'image' | 'gallery' | 'video' | 'link';
  suggestions?: Suggestion[];
  mediaContent?: any;
  timestamp: Date;
}

interface Suggestion {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

interface Category {
  title: string;
  icon: LucideIcon;
  suggestions: Array<{
    icon: LucideIcon;
    label: string;
  }>;
}

// Rich Data Store with your personal information
const personalDataStore: DataStoreItem[] = [
  // Development & Tech
  {
    id: 'tech-stack',
    question: 'What technologies do you work with?',
    answer: "I specialize in modern web technologies and full-stack development.",
    type: 'gallery',
    content: {
      title: 'Tech Stack Visualization',
      description: 'My primary technologies and tools',
      images: [
        '/api/placeholder/400/300', // Frontend stack
        '/api/placeholder/400/300', // Backend stack
        '/api/placeholder/400/300', // DevOps tools
        '/api/placeholder/400/300'  // Database systems
      ]
    }
  },

  // Music & Entertainment
  {
    id: 'music-coding',
    question: 'What music do you listen to while coding?',
    answer: "I've curated specific playlists for different coding activities.",
    type: 'link',
    content: {
      title: 'Coding Soundtracks',
      description: 'Deep Focus, Lo-fi Beats, Ambient Electronic, and Classical playlists for different programming moods',
      url: 'https://open.spotify.com/playlist/example'
    }
  },
  {
    id: 'youtube-tech',
    question: 'Favorite YouTube channels?',
    answer: "I follow these tech and educational channels regularly:",
    type: 'gallery',
    content: {
      images: [
        '/api/placeholder/400/300', // Tech channels
        '/api/placeholder/400/300', // Educational content
        '/api/placeholder/400/300', // Coding tutorials
        '/api/placeholder/400/300'  // Tech news
      ]
    }
  },

  // Photography
  {
    id: 'photography-portfolio',
    question: 'Show me your photography work',
    answer: "Here's my photography portfolio featuring street, travel, and nature shots:",
    type: 'gallery',
    content: {
      images: [
        '/api/placeholder/400/300', // Urban scenes
        '/api/placeholder/400/300', // Landscapes
        '/api/placeholder/400/300', // Portraits
        '/api/placeholder/400/300'  // Abstract
      ]
    }
  },

  // Gaming
  {
    id: 'gaming-favorites',
    question: 'What games do you play?',
    answer: "I enjoy both competitive and story-driven games. Here are my favorites:",
    type: 'video',
    content: {
      title: 'Gaming Highlights',
      description: 'Featuring strategy games, RPGs, and indie gems',
      url: '/api/placeholder/video-gaming'
    }
  },

  // Travel
  {
    id: 'travel-experiences',
    question: 'Tell me about your travels',
    answer: "I've documented my travels through photography and blogs.",
    type: 'gallery',
    content: {
      images: [
        '/api/placeholder/400/300', // Europe trips
        '/api/placeholder/400/300', // Asian adventures
        '/api/placeholder/400/300', // Local explorations
        '/api/placeholder/400/300'  // Nature expeditions
      ]
    }
  }
];

// Loading Skeleton Components
const ImageSkeleton = () => (
  <div className="animate-pulse space-y-2">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-48"></div>
    <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-3/4"></div>
    <div className="bg-gray-200 dark:bg-gray-700 rounded h-4 w-1/2"></div>
  </div>
);

const GallerySkeleton = () => (
  <div className="grid grid-cols-2 gap-4">
    {[1, 2, 3, 4].map(i => (
      <div key={i} className="space-y-2">
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-32"></div>
        <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-3 w-2/3"></div>
      </div>
    ))}
  </div>
);

// Enhanced Chat Message Component with Word-by-Word Animation
const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const [isLoading, setIsLoading] = useState(message.type !== 'text');
  const [displayContent, setDisplayContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = message.content.split(' ');

  useEffect(() => {
    if (message.type === 'text' && message.isBot) {
      if (currentIndex < words.length) {
        const timer = setTimeout(() => {
          setDisplayContent(words.slice(0, currentIndex + 1).join(' '));
          setCurrentIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      }
    }
  }, [currentIndex, message.isBot, message.type, words]);

  useEffect(() => {
    if (message.type !== 'text') {
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [message.type]);

  const renderContent = () => {
    switch (message.type) {
      case 'image':
        return isLoading ? (
          <ImageSkeleton />
        ) : (
          <div className="space-y-2">
            <img
              src={message.mediaContent.url}
              alt={message.mediaContent.title}
              className="rounded-lg w-full"
            />
            <h4 className="font-medium">{message.mediaContent.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {message.mediaContent.description}
            </p>
          </div>
        );

      case 'gallery':
        return isLoading ? (
          <GallerySkeleton />
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {message.mediaContent.images.map((img: string, idx: number) => (
                <div key={idx} className="space-y-1">
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
            {message.mediaContent.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {message.mediaContent.description}
              </p>
            )}
          </div>
        );

      case 'text':
        return (
          <p className="text-sm sm:text-base">
            {message.isBot ? displayContent : message.content}
            {message.isBot && currentIndex < words.length && (
              <span className="ml-1 animate-pulse">▋</span>
            )}
          </p>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center
                    ${message.isBot ? 'bg-blue-500' : 'bg-purple-500'}`}>
        {message.isBot ?
          <Bot className="w-5 h-5 text-white" /> :
          <User className="w-5 h-5 text-white" />}
      </div>
      <div className={`flex flex-col gap-2 max-w-[80%]
                     ${message.isBot ? 'items-start' : 'items-end'}`}>
        <div className={`rounded-2xl px-4 py-2
                      ${message.isBot ? 'bg-gray-100 dark:bg-gray-800' :
            'bg-blue-500 text-white'}`}>
          {renderContent()}
        </div>
        {message.suggestions && (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={suggestion.onClick}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full
                         bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100
                         hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all
                         transform hover:scale-105 active:scale-95"
              >
                <suggestion.icon className="w-4 h-4" />
                <span className="text-sm whitespace-nowrap">{suggestion.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main Chat Component
// Modified component with persistent suggestions and improved Q&A
const EnhancedPortfolioChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Function to find both direct and related content
  const findRelatedContent = (input: string): DataStoreItem[] => {
    const relatedItems = personalDataStore.filter(item =>
      item.question.toLowerCase().includes(input.toLowerCase()) ||
      item.answer.toLowerCase().includes(input.toLowerCase())
    );
    return relatedItems;
  };

  const handleSend = async () => {
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isBot: false,
      type: 'text',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const relatedResponses = findRelatedContent(input);

    setTimeout(() => {
      // Add primary response
      const primaryResponse = relatedResponses[0];
      if (primaryResponse) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: primaryResponse.answer,
          isBot: true,
          type: primaryResponse.type,
          mediaContent: primaryResponse.content,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);

        // Add related content if available
        relatedResponses.slice(1).forEach((related, index) => {
          const relatedMessage: Message = {
            id: (Date.now() + 2 + index).toString(),
            content: `Related: ${related.question}\n${related.answer}`,
            isBot: true,
            type: related.type,
            mediaContent: related.content,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, relatedMessage]);
        });
      } else {
        const fallbackMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I don't have specific information about that. Would you like to know about something else?",
          isBot: true,
          type: 'text',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, fallbackMessage]);
      }
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white dark:bg-gray-900">
      {/* Main Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Chat Header */}
        <div className="flex items-center gap-3 p-4 border-b dark:border-gray-800">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Portfolio Assistant</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ask me anything!</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t dark:border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              disabled={isProcessing}
              className="flex-1 px-4 py-2 rounded-full border dark:border-gray-700
                       bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2
                       focus:ring-blue-500 dark:focus:ring-blue-400
                       disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSend}
              disabled={isProcessing || !input.trim()}
              className={`p-2 rounded-full ${isProcessing || !input.trim()
                ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
                } text-white transition-colors`}
            >
              {isProcessing ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Persistent Suggestions Sidebar */}
      {/* <div className="w-80 border-l dark:border-gray-800 p-4 overflow-y-auto">
        <h2 className="font-bold text-lg mb-4">Suggested Topics</h2>
        {categories.map((category, idx) => (
          <div key={idx} className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <category.icon className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium text-gray-500">{category.title}</h3>
            </div>
            <div className="flex flex-col gap-2">
              {category.suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(suggestion.label);
                    handleSend();
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                           bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100
                           hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all
                           text-left"
                >
                  <suggestion.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{suggestion.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default EnhancedPortfolioChat;