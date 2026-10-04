import { motion, type Variants } from "motion/react";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

const projectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={projectCardVariants}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.2,
        },
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/3  transition-colors hover:border-purple-400/30"
    >

      <div className="relative aspect-8/5 overflow-hidden bg-[#101820]">
        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
          <span className="text-xs font-semibold uppercase tracking-[0.2rem] text-purple-300">{project.category} / Project</span>
          <div>
            <p className="text-2xl font-bold text-white sm:text-4xl">{project.title}</p>
            <p className="mt-2 text-sm text-slate-400">Product experience · {project.technologies.slice(0, 2).join(" · ")}</p>
          </div>
        </div>
        <img
          src={project.image}
          alt={project.title}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="relative h-full w-full object-contain"
        />

        <div className="absolute left-4 top-4 rounded-full border border-purple-400/20 bg-[#050b14]/80 px-3 py-1 text-xs font-semibold text-purple-300 backdrop-blur-sm">
          {project.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>

          {project.featured && (
            <span className="shrink-0 text-xs font-medium text-purple-400">
              Featured
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">

          <motion.a
            href={project.liveUrl}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
          >
            Live Demo
          </motion.a>

          <motion.a
            href={project.githubUrl}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-purple-400/30 hover:text-white"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;