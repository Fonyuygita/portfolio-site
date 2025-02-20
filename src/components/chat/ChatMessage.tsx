"use client"
import React, { useState, useEffect } from 'react';
import { Bot, User } from 'lucide-react';
// import { Message } from '@/types/chat';
import MessageContent from './MessageContent';
import { Message } from '@/app/types';

const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
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
        } else {
            setDisplayContent(message.content);
        }
    }, [currentIndex, message.isBot, message.type, words]);

    return (
        <div className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}>
            <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
        ${message.isBot ? 'bg-primary' : 'bg-secondary'}`}
            >
                {message.isBot ?
                    <Bot className="w-5 h-5 text-white" /> :
                    <User className="w-5 h-5 text-white" />
                }
            </div>
            <div
                className={`flex flex-col gap-2 max-w-[80%] 
        ${message.isBot ? 'items-start' : 'items-end'}`}
            >
                <div
                    className={`rounded-2xl px-4 py-2 ${message.isBot
                        ? 'bg-gray-100 dark:bg-gray-800'
                        : 'bg-primary text-white'
                        }`}
                >
                    <MessageContent message={message} displayContent={displayContent} currentIndex={currentIndex} />
                </div>
            </div>
        </div>
    );
};
export default ChatMessage;
