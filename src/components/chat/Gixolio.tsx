"use client"

import { Message } from '@/app/types';
import { useMediaQuery } from '@/hookes/useMediaQuery';
import { findRelevantResponse } from '@/lib/utils';
// components/chat/GixolioChat.tsx
// import React, { useState, useRef, useEffect } from 'react';
import { Send, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { SuggestionsPanel } from './SuggestionsPanel';
// import { ChatMessage } from './ChatMessage';
// import { SuggestionsPanel } from './SuggestionsPanel';
// import { Message } from '@/types/chat';
// import { findRelevantResponse } from '@/utils/chatUtils';
// import { useMediaQuery } from '@/hooks/useMediaQuery';

export const GixolioChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        // Add welcome message
        setMessages([{
            id: 'welcome',
            content: "👋 Hi! I'm Gixolio's assistant. How can I help you today?",
            isBot: true,
            type: 'text',
            timestamp: new Date()
        }]);
    }, []);

    const handleSend = async (content: string) => {
        if (!content.trim() || isProcessing) return;

        setIsProcessing(true);
        const userMessage: Message = {
            id: Date.now().toString(),
            content,
            isBot: false,
            type: 'text',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Find relevant response
        const response = findRelevantResponse(content);

        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: response?.response.content || "I don't have specific information about that. Would you like to know about something else?",
                isBot: true,
                type: response?.response.type || 'text',
                mediaContent: response?.response.mediaContent,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsProcessing(false);
            chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });

            // If on mobile, hide suggestions after response
            if (isMobile) {
                setShowSuggestions(false);
            }
        }, 1000);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInput(suggestion);
        if (inputRef.current) {
            inputRef.current.focus();
        }
        if (isMobile) {
            setShowSuggestions(false);
        }
    };

    return (
        <div className="relative h-[calc(100vh-4rem)] bg-white dark:bg-gray-900">
            <div className="flex h-full">
                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col relative">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                <img src="/logo.png" alt="Gixolio" className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="font-bold text-lg">Gixolio Assistant</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Always here to help</p>
                            </div>
                        </div>
                        {isMobile && (
                            <button
                                onClick={() => setShowSuggestions(!showSuggestions)}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                {showSuggestions ? <ChevronRight /> : <ChevronLeft />}
                            </button>
                        )}
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                        {messages.map((message) => (
                            <ChatMessage key={message.id} message={message} />
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t dark:border-gray-800 fixed bottom-[4rem]">
                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
                                placeholder="Ask me anything..."
                                disabled={isProcessing}
                                className="flex-1 px-4 py-2 rounded-full border dark:border-gray-700
                         bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2
                         focus:ring-primary disabled:opacity-50"
                            />
                            {input && (
                                <button
                                    onClick={() => setInput('')}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                            <button
                                onClick={() => handleSend(input)}
                                disabled={isProcessing || !input.trim()}
                                className="p-2 rounded-full bg-primary hover:bg-primary/90 
                         disabled:bg-gray-300 dark:disabled:bg-gray-700 
                         text-white transition-colors"
                            >
                                {isProcessing ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent 
                                rounded-full animate-spin" />
                                ) : (
                                    <Send className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Suggestions Panel */}
                <div
                    className={`
            ${isMobile
                            ? 'absolute right-0 top-0 bottom-0 w-3/4 transform transition-transform duration-300 z-10'
                            : 'w-80'
                        }
            ${isMobile && !showSuggestions ? 'translate-x-full' : 'translate-x-0'}
            bg-white dark:bg-gray-900 border-l dark:border-gray-800
          `}
                >
                    <SuggestionsPanel onSuggestionClick={handleSuggestionClick} />
                </div>
            </div>
        </div>
    );
};

