export interface Skill {
    name: string;
    category: "Frontend" | "Backend" | "Database" | "Tools";
    description: string;
    tags: string[];
    proficiency: number;
}