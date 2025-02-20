

// import { Message, MediaType } from '@/types/chat';

import { Message } from "@/app/types";

interface MessageContentProps {
    message: Message;
    displayContent: string;
    currentIndex: number;
}

const MessageContent: React.FC<MessageContentProps> = ({ message, displayContent, currentIndex }) => {
    const words = message.content.split(' ');

    const renderContent = () => {
        switch (message.type) {
            case 'text':
                return (
                    <p className="text-sm sm:text-base">
                        {displayContent}
                        {message.isBot && currentIndex < words.length && (
                            <span className="ml-1 animate-pulse">▋</span>
                        )}
                        {message.mediaContent?.description && (
                            <pre className="mt-2 whitespace-pre-wrap text-sm text-gray-600 dark:text-gray-300">
                                {message.mediaContent.description}
                            </pre>
                        )}
                    </p>
                );

            case 'gallery':
                return (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-2">
                            {message.mediaContent?.images?.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`Gallery image ${idx + 1}`}
                                    className="rounded-lg w-full object-cover aspect-square"
                                />
                            ))}
                        </div>
                        {message.mediaContent?.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {message.mediaContent.description}
                            </p>
                        )}
                    </div>
                );

            case 'audio':
                return (
                    <div className="space-y-2">
                        <audio
                            controls
                            className="w-full"
                            src={message.mediaContent?.audio?.url}
                        />
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                            <p className="font-medium">{message.mediaContent?.title}</p>
                            <p>{message.mediaContent?.description}</p>
                        </div>
                    </div>
                );

            case 'code':
                return (
                    <div className="space-y-2">
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                            <code>{message.mediaContent?.code?.content}</code>
                        </pre>
                    </div>
                );

            case 'link':
                return (
                    <div className="space-y-2">
                        <a
                            href={message.mediaContent?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 underline"
                        >
                            {message.mediaContent?.title}
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                            {message.mediaContent?.description}
                        </p>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="space-y-2">
            {message.type !== 'text' && (
                <p className="text-sm sm:text-base mb-2">{displayContent}</p>
            )}
            {renderContent()}
        </div>
    );
};

export default MessageContent
// components/chat/GixolioChat.tsx












// import { Message } from "@/app/types";
// import React from "react"

// const MessageContent: React.FC<{
//     message: Message;
//     displayContent: string;
//     currentIndex: number;
// }> = ({ message, displayContent, currentIndex }) => {
//     const words = message.content.split(' ');

//     if (message.type === 'text') {
//         return (
//             <p className="text-sm sm:text-base">
//                 {displayContent}
//                 {message.isBot && currentIndex < words.length && (
//                     <span className="ml-1 animate-pulse">▋</span>
//                 )}
//             </p>
//         );
//     }

//     if (message.type === 'gallery' && message.mediaContent?.images) {
//         return (
//             <div className="grid grid-cols-2 gap-2">
//                 {message.mediaContent.images.map((img, idx) => (
//                     <img
//                         key={idx}
//                         src={img}
//                         alt={`Gallery image ${idx + 1}`}
//                         className="rounded-lg w-full object-cover aspect-square"
//                     />
//                 ))}
//             </div>
//         );
//     }

//     if (message.type === 'image' && message.mediaContent?.url) {
//         return (
//             <img
//                 src={message.mediaContent.url}
//                 alt={message.mediaContent.title || 'Image'}
//                 className="rounded-lg w-full"
//             />
//         );
//     }

//     return null;
// };

// export default MessageContent