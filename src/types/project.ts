export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: "Full Stack" | "Frontend";
    liveUrl: string;
    githubUrl: string;
    featured?: boolean;
}