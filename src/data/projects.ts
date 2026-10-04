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
];