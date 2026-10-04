import { motion } from "motion/react";
import { useState } from "react";
import Container from "../ui/Container";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { projects } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";
import SectionReveal from "../ui/SectionReveal";

const projectContainerVariants = {
   hidden: {},
   visible: {
     transition: {
        staggerChildren: 0.12,
     },
   },
};

function Projects() {
    const [activeFilter, setActiveFilter] = useState<
        "All" | "Full Stack" | "Frontend">("All");

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.category === activeFilter);
    return (
        <section id="projects" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
            <Container>
                <SectionTitle
                    eyebrow="My Work"
                    title="Projects I've built."
                    description="A selection of applications and projects that demonstrate my skills in modern web development."
                />

                <ProjectFilter
                    activeFilter={activeFilter}
                    onFilterChange={setActiveFilter}
                />

                {filteredProjects.length > 0 ? (
                    <SectionReveal>
                        <motion.div 
                          variants={projectContainerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.15 }}
                          className="grid gap-6 lg:grid-cols-2"
                        >
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </motion.div>
                    </SectionReveal>
                ) : (
                    <div className="rounded-2xl border border-white/10 bg-white/3">
                        <p className="text-slate-400">
                            No projects available in this category yet.
                        </p>
                    </div>
                )}
            </Container>
        </section>
    );
}

export default Projects;