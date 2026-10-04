export interface EducationItem {
   id: number;
   degree: string;
   institution: string;
   duration: string;
   description: string;
}

export const education: EducationItem[] = [
    {
        id: 1,
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Graphic Era Hill University",
        duration: "2023 - 2026",
        description: "Studied computer applications with a focus on programming, web development, databases, and software development fundamentals.",
    },
];