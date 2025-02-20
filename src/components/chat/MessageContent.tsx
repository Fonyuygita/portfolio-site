import { Message } from "@/app/types";
import React from "react"

const MessageContent: React.FC<{
    message: Message;
    displayContent: string;
    currentIndex: number;
}> = ({ message, displayContent, currentIndex }) => {
    const words = message.content.split(' ');

    if (message.type === 'text') {
        return (
            <p className="text-sm sm:text-base">
                {displayContent}
                {message.isBot && currentIndex < words.length && (
                    <span className="ml-1 animate-pulse">▋</span>
                )}
            </p>
        );
    }

    if (message.type === 'gallery' && message.mediaContent?.images) {
        return (
            <div className="grid grid-cols-2 gap-2">
                {message.mediaContent.images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Gallery image ${idx + 1}`}
                        className="rounded-lg w-full object-cover aspect-square"
                    />
                ))}
            </div>
        );
    }

    if (message.type === 'image' && message.mediaContent?.url) {
        return (
            <img
                src={message.mediaContent.url}
                alt={message.mediaContent.title || 'Image'}
                className="rounded-lg w-full"
            />
        );
    }

    return null;
};

export default MessageContent