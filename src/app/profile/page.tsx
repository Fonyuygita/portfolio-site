"use client"


import React, { useState, useEffect } from 'react';
import {
    Github, Twitter, Linkedin, Globe, Mail, MapPin,
    Calendar, Link, Box, Award, Star, Book, Coffee, Music,
    Camera, Code, Terminal, Cpu, Heart, Brush, Gamepad,
    Airplay,
    Brain
} from 'lucide-react';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';

interface ProfileData {
    name: string;
    title: string;
    bio: string;
    stats: Array<{
        icon: any;
        label: string;
        value: string;
    }>;
    skills: Array<{
        icon: any;
        name: string;
        level: number;
        color: string;
    }>;
    timeline: Array<{
        year: string;
        title: string;
        description: string;
        tags?: string[];
    }>;
    projects: Array<{
        title: string;
        description: string;
        image: string;
        tags: string[];
        link: string;
    }>;
}

const Profile: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('about');
    const [scrollY, setScrollY] = useState<number>(0);

    // Sample profile data
    const profileData: ProfileData = {
        name: "Fonyuy Gita",
        title: "Full Stack Developer & AI Enthusiast",
        bio: "Passionate about building innovative solutions that bridge technology and creativity. Specialized in AI/ML, web development, and interactive experiences.",
        stats: [
            { icon: Code, label: "Projects", value: "50+" },
            { icon: Star, label: "GitHub Stars", value: "100+" },
            { icon: Award, label: "Awards", value: "12" },
            { icon: Coffee, label: "Coffee/day", value: "∞" }
        ],
        skills: [
            { icon: Terminal, name: "TypeScript", level: 95, color: "#3178C6" },
            { icon: Code, name: "React", level: 90, color: "#61DAFB" },
            { icon: Cpu, name: "AI/ML", level: 85, color: "#FF6B6B" },
            { icon: Brush, name: "UI/UX", level: 88, color: "#FF9F43" },
            { icon: Box, name: "Three.js", level: 75, color: "#4834D4" },
            { icon: Terminal, name: "Python", level: 92, color: "#FFD43B" },
            { icon: Terminal, name: "Machine Learning", level: 70, color: "#FF9F43" },
            { icon: Brain, name: "Neural Networks", level: 60, color: "#FF9F43" },
            { icon: Airplay, name: "Generative Ai and LLM's", level: 60, color: "#3178C6" },


        ],
        timeline: [
            {
                year: "2024",
                title: "Senior Developer and CTO at {IWS}",
                description: "Leading  projects and mentoring junior developers.",
                tags: ["AI", "Leadership", "Development", "Web", "appDevelopment"]
            },
            {
                year: "2024",
                title: "Co-Founder {iws}",
                description: "Co-founded seed alongside Cheko Yohane and Fien Dora .",
                tags: ["Startup", "innovatewithseed"]
            }
        ],
        projects: [
            {
                title: "Gitash",
                description: "Gitash Project-Master the command line through an interactive and fun learning experience.",
                image: "https://i.ibb.co/TDb4xD9L/image.png",
                tags: ["AI", "React", "shadcn-ui", "Nextjs14",],
                link: "https://gitash.vercel.app/"
            },
            {
                title: "LearnCode",
                description: "📚 LearnCode: Curated Content for All Skill Levels - Whether you're a beginner or an advanced learner, LearnCode has carefully curated resources to suit your needs",
                image: "https://images.pexels.com/photos/4559555/pexels-photo-4559555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                tags: ["Nextjs14", "React", "WebGL", "Sanity"],
                link: "https://learn-code-phi.vercel.app/"
            }
        ]
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animated background patterns
    const BackgroundPattern = () => (
        <div className="absolute inset-0 opacity-30">
            <div className="absolute w-full h-full">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full blur-xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 300 + 100}px`,
                            height: `${Math.random() * 300 + 100}px`,
                            background: `rgba(255,255,255,${Math.random() * 0.1})`,
                            transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)`,
                            transition: 'transform 0.5s ease-out'
                        }}
                    />
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
                    <BackgroundPattern />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <div className="relative w-32 h-32 mb-6">
                        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm 
                          transform animate-pulse" />
                        <Image
                            src="https://i.ibb.co/WpNSdsZ5/D9-Zv44-VS-400x400.jpg"
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover border-4 border-white/20 backdrop-blur-sm"
                            width={128}
                            height={128}
                        />
                        <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-green-500 rounded-full
                          border-4 border-white animate-bounce" />
                    </div>

                    <h1 className="text-4xl font-bold mb-2 tracking-tight">{profileData.name}</h1>
                    <p className="text-xl opacity-90 mb-6">{profileData.title}</p>

                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: 'https://github.com/Fonyuygita', label: 'GitHub' },
                            { icon: FaXTwitter, href: 'https://x.com/fonyuyjude1', label: 'Twitter' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/fonyuy-gita', label: 'LinkedIn' },
                            { icon: Globe, href: '#', label: 'https://fonyuygita.vercel.app' },
                            { icon: Mail, href: '#', label: 'Email' }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="group relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
                         flex items-center justify-center
                         hover:bg-white/20 transition-all duration-300
                         transform hover:scale-110"
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6 text-white" />
                                <span className="absolute -bottom-8 text-sm opacity-0 group-hover:opacity-100
                               transition-opacity duration-300">
                                    {social.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50
                    border-b border-gray-200 dark:border-gray-700">
                <nav className="max-w-6xl mx-auto px-4">
                    <ul className="flex justify-center space-x-8">
                        {['About', 'Skills', 'Timeline', 'Projects'].map((section) => (
                            <li key={section}>
                                <button
                                    onClick={() => setActiveSection(section.toLowerCase())}
                                    className={`py-4 px-2 relative ${activeSection === section.toLowerCase()
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400'
                                        }`}
                                >
                                    {section}
                                    {activeSection === section.toLowerCase() && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400" />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {profileData.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center
                                  transform hover:scale-105 transition-all duration-300
                                  shadow-lg hover:shadow-xl">
                            <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                            <div className="font-bold text-2xl mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {profileData.skills.map((skill, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg
                                  transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center`}
                                    style={{ backgroundColor: skill.color + '20' }}>
                                    <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
                                </div>
                                <div>
                                    <h3 className="font-bold">{skill.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</p>
                                </div>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${skill.level}%`,
                                        backgroundColor: skill.color
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Timeline Section */}
                <div className="space-y-8 mb-12">
                    {profileData.timeline.map((event, idx) => (
                        <div key={idx} className="relative pl-8 group">
                            <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                            <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-500 
                            transform -translate-x-1/2 group-hover:scale-150 transition-transform" />
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg
                            transform transition-all duration-300
                            hover:scale-[1.02] hover:shadow-xl">
                                <span className="text-sm text-blue-500 font-medium">{event.year}</span>
                                <h3 className="font-bold text-xl mt-1">{event.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">{event.description}</p>
                                {event.tags && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {event.tags.map((tag, tagIdx) => (
                                            <span key={tagIdx} className="px-3 py-1 rounded-full text-sm
                                                bg-blue-100 dark:bg-blue-900/30 
                                                text-blue-800 dark:text-blue-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {profileData.projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg
                       transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-3 py-1 rounded-full text-sm
                                              bg-gray-100 dark:bg-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;