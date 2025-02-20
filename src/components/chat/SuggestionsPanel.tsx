import { chatDataStore } from "@/data/chatStore";
import { ChevronRight } from "lucide-react";

export const SuggestionsPanel: React.FC<{ onSuggestionClick: (suggestion: string) => void }> = ({
    onSuggestionClick
}) => {
    const categories = Array.from(new Set(chatDataStore.map(item => item.category)));

    return (
        <div className="h-full overflow-y-auto p-4">
            <h2 className="font-bold text-lg mb-4">Quick Questions</h2>
            {categories.map(category => (
                <div key={category} className="mb-6">
                    <h3 className="font-medium text-gray-500 mb-2 flex items-center gap-2">
                        {category}
                    </h3>
                    <div className="flex flex-col gap-2">
                        {chatDataStore
                            .filter(item => item.category === category)
                            .map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => onSuggestionClick(item.triggers[0])}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg
                           bg-primary/10 hover:bg-primary/20 
                           dark:bg-primary/5 dark:hover:bg-primary/10 
                           transition-all text-left group"
                                >
                                    <item.icon className="w-4 h-4 flex-shrink-0" />
                                    <span className="text-sm flex-1">{item.triggers[0]}</span>
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};