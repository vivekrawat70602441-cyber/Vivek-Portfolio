import  type  { Project }  from "../types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "Techstore",
        description: "A full-stack ecommerce platform with product management, authentication, cart, wishlist, orders, payments and an AI-powered chatbot.",
        image: "/images/projects/techstore.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
        ],
        category: "Full Stack",
        liveUrl: "https://tech-store-ecommerce-nine.vercel.app",
        githubUrl: "https://github.com/vivekrawat70602441-cyber/TechStore-Ecommerce.git",
        featured: true,
    },
    {
        id: 2,
        title: "ChatApp",
        description: "Developed a real-time chat application using Socket.IO with user authentication, a people list, and a conversation interface.",
        image: "/images/projects/chatapp.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "TailwindCSS",
            "MySQL",
            "Prisma ORM",
            "Socket.IO",
        ],
        category: "Full Stack",
        liveUrl: "https://chat-website-w39o.onrender.com/",
        githubUrl: "https://github.com/vivekrawat70602441-cyber/Chat-Website",
        featured: true,
    },
    {
        id: 3,
        title: "Personal Portfolio",
        description: "Designed and developed a responsive personal portfolio to showcase my technical skills, projects, and development journey, featuring smooth animations, interactive sections,and a resume download option.",
        image: "/images/projects/portfolio.png",
        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Motion",
        ],
        category: "Frontend",
        liveUrl: "https://vivek-portfolio-two-virid.vercel.app/",
        githubUrl: "https://github.com/vivekrawat70602441-cyber/Vivek-Portfolio",
        featured: true,
    }
];