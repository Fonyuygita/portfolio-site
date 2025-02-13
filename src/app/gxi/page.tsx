"use client"

// import React, { useState, useEffect, useRef } from 'react';
import {
  Bot, Send, Image, Sparkles, User, Github, Twitter,
  Linkedin, Camera, Palette, Code, Music, Coffee,
  LucideIcon
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Types and Interfaces
interface Suggestion {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

interface Message {
  content: string;
  isBot: boolean;
  suggestions?: Suggestion[];
}

interface SuggestionCategory {
  title: string;
  suggestions: Array<{
    icon: LucideIcon;
    label: string;
  }>;
}

interface SuggestionBubbleProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

interface ChatMessageProps {
  message: Message;
  isBot: boolean;
}

interface TypewriterHookResult {
  displayedText: string;
  isTyping: boolean;
}

// Typing Animation Hook
const useTypewriter = (text: string | null, speed: number = 50): TypewriterHookResult => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    if (!text) return;

    setIsTyping(true);
    let index = 0;
    const words = text.split(' ');

    const intervalId = setInterval(() => {
      if (index < words.length) {
        setDisplayedText(prev => `${prev}${prev ? ' ' : ''}${words[index]}`);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return { displayedText, isTyping };
};

// Suggestion Bubble Component
const SuggestionBubble: React.FC<SuggestionBubbleProps> = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 rounded-full
             bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100
             hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all
             transform hover:scale-105 active:scale-95"
  >
    <Icon className="w-4 h-4" />
    <span className="text-sm whitespace-nowrap">{label}</span>
  </button>
);

// Chat Message Component
const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  const { displayedText, isTyping } = useTypewriter(
    isBot ? message.content : null
  );

  return (
    <div className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center
                    ${isBot ? 'bg-blue-500' : 'bg-purple-500'}`}>
        {isBot ? <Bot className="w-5 h-5 text-white" /> :
          <User className="w-5 h-5 text-white" />}
      </div>
      <div className={`flex flex-col gap-2 max-w-[80%]
                     ${isBot ? 'items-start' : 'items-end'}`}>
        <div className={`rounded-2xl px-4 py-2
                      ${isBot ? 'bg-gray-100 dark:bg-gray-800' :
            'bg-blue-500 text-white'}`}>
          <p className="text-sm sm:text-base">
            {isBot ? displayedText : message.content}
            {isTyping && <span className="ml-1 animate-pulse">▋</span>}
          </p>
        </div>
        {message.suggestions && (
          <div className="flex flex-wrap gap-2 mt-2">
            {message.suggestions.map((suggestion, index) => (
              <SuggestionBubble
                key={index}
                icon={suggestion.icon}
                label={suggestion.label}
                onClick={suggestion.onClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main GxI Component
const GxIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const suggestionCategories: SuggestionCategory[] = [
    {
      title: "Quick Actions",
      suggestions: [
        { icon: User, label: "Tell me about yourself" },
        { icon: Github, label: "Show Github projects" },
        { icon: Palette, label: "Design portfolio" },
        { icon: Code, label: "Coding skills" }
      ]
    },
    {
      title: "Personal",
      suggestions: [
        { icon: Coffee, label: "Interests & Hobbies" },
        { icon: Music, label: "Favorite music" },
        { icon: Camera, label: "Photo gallery" },
        { icon: Sparkles, label: "Fun facts" }
      ]
    }
  ];

  const scrollToBottom = (): void => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (): Promise<void> => {
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    const userMessage: Message = { content: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        content: "Thanks for your message! I'm GxI, your personal AI assistant. I can help you explore the portfolio, showcase projects, or just chat about technology and creativity!",
        isBot: true,
        suggestions: [
          { icon: Sparkles, label: "Show recent work", onClick: () => { } },
          { icon: Github, label: "View Github", onClick: () => { } }
        ]
      };
      setMessages(prev => [...prev, botResponse]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-white dark:bg-gray-900">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg">GxI Assistant</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Always here to help</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Welcome Message */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Welcome to GxI!</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">
                {"I'm your personal AI assistant. I can help you explore the portfolio,showcase projects, or just chat about technology!"}
              </p>
            </div>

            {/* Suggestion Categories */}
            <div className="w-full max-w-md space-y-4">
              {suggestionCategories.map((category, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.suggestions.map((suggestion, index) => (
                      <SuggestionBubble
                        key={index}
                        icon={suggestion.icon}
                        label={suggestion.label}
                        onClick={() => {
                          setInput(suggestion.label);
                          handleSend();
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} isBot={message.isBot} />
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">.
            <Image className="w-5 h-5 text-gray-500" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSend()}
            placeholder="Message GxI..."
            className="flex-1 bg-transparent border-none focus:outline-none
                     text-gray-900 dark:text-gray-100 placeholder-gray-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isProcessing}
            className={`p-2 rounded-full transition-colors
                     ${input.trim() && !isProcessing
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'bg-gray-300 dark:bg-gray-700'}`}
          >
            <Send className={`w-5 h-5 ${input.trim() && !isProcessing ? 'text-white' : 'text-gray-500'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GxIChat;