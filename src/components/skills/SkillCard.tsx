import { motion } from "motion/react";
import {
    SiExpress,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "@icons-pack/react-simple-icons";
import type { Skill } from "../../types/skill";

interface SkillCardProps {
    skill: Skill;
}

const skillIcons: Record<string, { Icon: typeof SiReact; color: string }> = {
    React: { Icon: SiReact, color: "#61DAFB" },
    TypeScript: { Icon: SiTypescript, color: "#3178C6" },
    "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
    "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
    JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
    "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
    "Express.js": { Icon: SiExpress, color: "#FFFFFF" },
    MongoDB: { Icon: SiMongodb, color: "#47A248" },
    "Git & GitHub": { Icon: SiGithub, color: "#FFFFFF" },
};

const skillAccents: Record<string, { border: string; tile: string; bar: string; arrow: string }> = {
    React: { border: "hover:border-cyan-400/40", tile: "border-cyan-400/50 bg-cyan-400/10", bar: "from-cyan-400 to-sky-400", arrow: "text-cyan-300" },
    TypeScript: { border: "hover:border-blue-400/40", tile: "border-blue-400/50 bg-blue-400/10", bar: "from-blue-500 to-sky-400", arrow: "text-blue-300" },
    "Tailwind CSS": { border: "hover:border-cyan-400/40", tile: "border-cyan-400/50 bg-cyan-400/10", bar: "from-cyan-500 to-cyan-300", arrow: "text-cyan-300" },
    "Next.js": { border: "hover:border-cyan-400/40", tile: "border-cyan-400/50 bg-cyan-400/10", bar: "from-cyan-400 to-sky-400", arrow: "text-cyan-300" },
    JavaScript: { border: "hover:border-amber-300/40", tile: "border-amber-300/50 bg-amber-300/10", bar: "from-amber-400 to-yellow-300", arrow: "text-amber-300" },
    "Node.js": { border: "hover:border-emerald-400/40", tile: "border-emerald-400/50 bg-emerald-400/10", bar: "from-emerald-400 to-green-400", arrow: "text-emerald-300" },
    "Express.js": { border: "hover:border-sky-400/40", tile: "border-sky-400/50 bg-sky-400/10", bar: "from-sky-400 to-blue-500", arrow: "text-sky-300" },
    MongoDB: { border: "hover:border-green-400/40", tile: "border-green-400/50 bg-green-400/10", bar: "from-green-500 to-emerald-400", arrow: "text-green-300" },
    "Git & GitHub": { border: "hover:border-purple-400/40", tile: "border-purple-400/50 bg-purple-400/10", bar: "from-purple-500 to-violet-400", arrow: "text-purple-300" },
};

function SkillCard({ skill }: SkillCardProps) {
    const skillIcon = skillIcons[skill.name];
    const accent = skillAccents[skill.name] ?? skillAccents.React;

    return (
        <motion.div
            whileHover={{
                y: -4,
                transition: {
                    duration: 0.2,
                },
            }}
            className={`group relative cursor-pointer overflow-hidden rounded-xl border border-sky-400/15 bg-[#061321]/80 p-4 transition-colors hover:bg-[#091a2c] sm:p-5 ${accent.border}`}
        >
            <div className="flex items-start gap-4">
                {skillIcon && (
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${accent.tile}`}>
                        <skillIcon.Icon
                            aria-hidden="true"
                            size={32}
                            color={skillIcon.color}
                        />
                    </span>
                )}
                <div className="min-w-0 flex-1 pr-7">
                    <h3 className="text-base font-semibold text-slate-100">
                        {skill.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-[1.45] text-slate-400 sm:text-[13px]">
                        {skill.description}
                    </p>
                </div>

                <span aria-hidden="true" className={`absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/5 text-lg leading-none ${accent.arrow}`}>
                    →
                </span>
            </div>

            <div className="mt-3 flex min-h-5 flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-sky-950/80 px-2.5 py-1 text-[10px] leading-none text-sky-200/90">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-3 flex items-center gap-2">
                <div
                    role="progressbar"
                    aria-label={`${skill.name} proficiency`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={skill.proficiency}
                    className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800/90"
                >
                    <div
                        className={`h-full rounded-full bg-linear-to-r ${accent.bar}`}
                        style={{ width: `${skill.proficiency}%` }}
                    />
                </div>
                <span className="w-7 text-right text-[11px] text-slate-400">{skill.proficiency}%</span>
            </div>
        </motion.div>
    );
}

export default SkillCard;