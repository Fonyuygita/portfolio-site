"use client"
import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
// import { ChatMessage } from './ChatMessage';
import { SuggestionsPanel } from './SuggestionsPanel';
import { Message } from '@/app/types';
import ChatMessage from './ChatMessage';
// import { Message } from '@/types/chat';

export const GixolioChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

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

        // Simulate bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: `Thanks for asking about ${content}. Here's what I can tell you...`,
                isBot: true,
                type: 'text',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsProcessing(false);
            chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    };

    return (
        <div className="flex h-[calc(100vh-4rem)] bg-white dark:bg-gray-900">
            <div className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
                    <div ref={chatEndRef} />
                </div>

                <div className="p-4 border-t dark:border-gray-800">
                    <div className="flex gap-2">
                        <input
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
            <SuggestionsPanel onSuggestionClick={(suggestion) => handleSend(suggestion)} />
        </div>
    );
};