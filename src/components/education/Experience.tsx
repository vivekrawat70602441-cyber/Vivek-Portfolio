function Experience() {
    const projects = [
        {
            category: "Full Stack Development",
            name: "TechStore Ecommerce",
            description: "Developed and deployed a full-stack ecommerce web application featuring product management, user authentication, cart, wishlist, order tracking, payment integration, admin dashboard, and an AI-powered chatbot.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Raorpay", "Gemini AI"],
        },
        {
            category: "Real-Time Full Stack Development",
            name: "Real-Time Chat Application",
            description: "Built a real-time chat application with user authentication with user authentication, instant messaging, online presence, typing indicators, and message delivery and seen status using Socket.IO.",
            technologies: ["Next.js", "TypeScript", "MySQL", "Prisma", "Socket.IO", "Tailwind CSS"],
        },
        {
            category: "Frontend Development",
            name: "Personal Portfolio",
            description: "Designed and developed a responsive personal portfolio to showcase my projects, technical skills, and development journey, with animated interactions and a resume download feature.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
        },
    ];

    return (
       <div>
         <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2rem] text-purple-400">
                Experience
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
                Project-based development
            </h3>
         </div>

         <div className="relative border-l border-white/10 pl-8 space-y-10">
            {projects.map((project) => (
                <div key={project.name} className="relative">
                    <div className="absolute left-[-2.05rem] top-1 h-2.5 w-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-500/30" />

                       <p className="text-sm font-medium text-slate-500">
                          {project.category}
                       </p>

                       <h4 className="mt-2 text-lg font-semibold text-white">
                          {project.name}
                       </h4>

                       <p className="mt-3 text-sm leading-6 text-slate-400">
                          {project.description}
                       </p>

                       <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                             <span
                                key={technology}
                                className="rounded-mg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400"
                             >
                                {technology}
                             </span>
                          ))}
                       </div>
                </div>
            ))}
         </div>
       </div>
    );
}

export default Experience;