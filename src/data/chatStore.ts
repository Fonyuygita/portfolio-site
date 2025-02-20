import { DataStoreItem } from "@/app/types";
import {
  Code,
  Camera,
  Briefcase,
  Globe,
  Music,
  Coffee,
  Book,
  Gamepad,
  Heart,
  Github,
} from "lucide-react";
// import { DataStoreItem } from "@/types/chat";

export const chatDataStore: DataStoreItem[] = [
  // Development Category
  {
    id: "tech-stack",
    triggers: ["tech stack", "programming", "coding", "development"],
    response: {
      content:
        "I specialize in modern web development with a focus on React ecosystem. Here's my tech stack visualization:",
      type: "gallery",
      mediaContent: {
        images: [
          "/gallery/a1.png",
          "/gallery/a2.png",
          "/gallery/a3.png",
          "/gallery/a4.png",
        ],
        description:
          "Frontend: React, Next.js, TypeScript\nBackend: Node.js, Python\nDevOps: Docker, AWS\nDatabases: PostgreSQL, MongoDB",
      },
    },
    category: "Development",
    icon: Code,
  },
  {
    id: "github-projects",
    triggers: ["github", "projects", "repositories"],
    response: {
      content: "Here are some of my notable open-source projects:",
      type: "code",
      mediaContent: {
        code: {
          language: "markdown",
          content: `
# Featured Projects

1. **Project Alpha** - React component library
   - 1.2k GitHub stars
   - Used by 500+ projects

2. **Project Beta** - AI-powered code generator
   - Featured in GitHub trending
   - 50+ contributors

3. **Project Gamma** - Developer productivity tools
   - 300+ daily active users
   - Integration with VS Code
          `,
        },
      },
    },
    category: "Development",
    icon: Github,
  },

  // Creative Category
  {
    id: "photography",
    triggers: ["photography", "photos", "camera"],
    response: {
      content:
        "Photography is one of my creative outlets. Here's a selection of my work:",
      type: "gallery",
      mediaContent: {
        images: [
          "/images/urban-photography.jpg",
          "/images/nature-photography.jpg",
          "/images/portrait-photography.jpg",
          "/images/abstract-photography.jpg",
        ],
        description:
          "A mix of urban, nature, portrait, and abstract photography",
      },
    },
    category: "Creative",
    icon: Camera,
  },
  {
    id: "music",
    triggers: ["music", "playlist", "songs"],
    response: {
      content:
        "Music is essential to my creative process. Here's what I'm currently listening to:",
      type: "audio",
      mediaContent: {
        audio: {
          url: "/audio/playlist-preview.mp3",
          duration: "1:30",
        },
        title: "Creative Coding Playlist",
        description:
          "A mix of lo-fi, ambient, and electronic music that keeps me in the flow",
      },
    },
    category: "Creative",
    icon: Music,
  },

  // Professional Category
  {
    id: "experience",
    triggers: ["experience", "work", "career"],
    response: {
      content:
        "I've worked with various technologies and companies throughout my career:",
      type: "link",
      mediaContent: {
        url: "https://linkedin.com/in/yourprofile",
        title: "Professional Experience",
        description: `
• Senior Frontend Developer at TechCorp (2020-Present)
• Full Stack Developer at StartupX (2018-2020)
• Software Engineer at CodeCo (2016-2018)
        `,
      },
    },
    category: "Professional",
    icon: Briefcase,
  },

  // Personal Category
  {
    id: "travel",
    triggers: ["travel", "places", "destinations"],
    response: {
      content:
        "I love exploring new places! Here are some highlights from my travels:",
      type: "gallery",
      mediaContent: {
        images: [
          "/images/travel-asia.jpg",
          "/images/travel-europe.jpg",
          "/images/travel-americas.jpg",
          "/images/travel-africa.jpg",
        ],
        description: "Adventures across 4 continents and counting!",
      },
    },
    category: "Personal",
    icon: Globe,
  },
  {
    id: "hobbies",
    triggers: ["hobbies", "interests", "free time"],
    response: {
      content: "Besides coding and photography, I enjoy:",
      type: "text",
      mediaContent: {
        description: `
🎮 Gaming - Particularly strategy and indie games
📚 Reading - Science fiction and technology books
☕ Coffee brewing - Exploring different beans and methods
🎵 Music production - Creating ambient electronic tracks
        `,
      },
    },
    category: "Personal",
    icon: Heart,
  },
];
