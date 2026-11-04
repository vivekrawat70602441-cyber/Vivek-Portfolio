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
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] transition-colors duration-300 hover:border-purple-400/40"
    >

      <div className="relative h-56 overflow-hidden bg-[#101820] sm:h-64">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="h-full w-full object-contain"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0509114]/80 via-transparent to-[#050914]/20" />

        <div className="absolute left-4 top-4 rounded-full border border-purple-400/20 bg-[#050b14]/80 px-3 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md">
          {project.category}
        </div>

        {project.featured && (
          <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-[#050b14]/80 px-3 py-1 text-sx font-medium text-white backdrop-blur-md">
            Featured
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-300">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
        </div>

        <div className="mt-5 flex flex-wrap content-start gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-purple-400/30 hover:text-purple-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-7">

          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex-1 rounded-lg bg-purple-600 px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-purple-500"
          >
            Live Demo
          </motion.a>

          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-center text-sm font-semibold text-slate-200 transition-colors hover:border-purple-400/40 hover:text-white"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;