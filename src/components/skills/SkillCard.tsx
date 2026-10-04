import { motion, type Variants } from "motion/react";
import type { Skill } from "../../types/skill";

interface SkillCardProps {
    skill: Skill;
}

const skillCardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

function SkillCard({ skill }: SkillCardProps) {
    return (
        <motion.div
            variants={skillCardVariants}
            whileHover={{
                y: -4,
                transition: {
                    duration: 0.2,
                },
            }}
            className="group rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors hover:border-purple-400/30 hover:bg-white/5"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-white">
                        {skill.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        {skill.description}
                    </p>
                </div>

                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-purple-400 shadow-lg shadow-purple-500/30" />
            </div>

            <div className="mt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {skill.category}
                </span>
            </div>
        </motion.div>
    );
}

export default SkillCard;