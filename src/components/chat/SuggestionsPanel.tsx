// "use client"
// import { ChatSuggestion } from '@/types/chat';
import { ChatSuggestion } from '@/app/types';
import { Code, Camera, Briefcase, Globe } from 'lucide-react';

const suggestions: ChatSuggestion[] = [
    {
        icon: Code,
        label: "What's your tech stack?",
        category: "Development"
    },
    {
        icon: Camera,
        label: "Show me your photography",
        category: "Creative"
    },
    {
        icon: Briefcase,
        label: "Tell me about your work experience",
        category: "Professional"
    },
    {
        icon: Globe,
        label: "What are your favorite travel destinations?",
        category: "Personal"
    }
];

interface SuggestionsPanelProps {
    onSuggestionClick: (suggestion: string) => void;
}

export const SuggestionsPanel: React.FC<SuggestionsPanelProps> = ({ onSuggestionClick }) => {
    const categories = Array.from(new Set(suggestions.map(s => s.category)));

    return (
        <div className="w-80 border-l dark:border-gray-800 p-4 overflow-y-auto">
            <h2 className="font-bold text-lg mb-4">Chat Suggestions</h2>
            {categories.map(category => (
                <div key={category} className="mb-6">
                    <h3 className="font-medium text-gray-500 mb-2">{category}</h3>
                    <div className="flex flex-col gap-2">
                        {suggestions
                            .filter(s => s.category === category)
                            .map((suggestion, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onSuggestionClick(suggestion.label)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg
                           bg-primary/10 hover:bg-primary/20 
                           dark:bg-primary/5 dark:hover:bg-primary/10 
                           transition-all text-left"
                                >
                                    <suggestion.icon className="w-4 h-4 flex-shrink-0" />
                                    <span className="text-sm">{suggestion.label}</span>
                                </button>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
