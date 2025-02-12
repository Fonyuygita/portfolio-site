import React from "react"

export const SkillsSidebar = () => {
    const skills = ['TypeScript', 'React', 'Node.js', 'Python', 'TensorFlow', 'NextJS', 'SQL', 'AWS'];

    return (
        <div className="w-80 p-4 hidden lg:block">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <h3 className="font-bold mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                        <span
                            key={skill}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
