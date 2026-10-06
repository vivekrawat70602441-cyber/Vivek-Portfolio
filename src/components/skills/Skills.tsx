import { useState } from "react";
import { motion } from "motion/react";
import Container from "../ui/Container";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";
import SectionReveal from "../ui/SectionReveal";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;
type SkillCategoryFilter = (typeof categories)[number];

const categoryGlyphs: Record<SkillCategoryFilter, string> = {
    All: "▦",
    Frontend: "▱",
    Backend: "▣",
    Database: "▤",
    Tools: "⌁",
};

const extraTools = [
    { name: "VS Code", mark: "V", color: "text-blue-400" },
    { name: "Postman", mark: "●", color: "text-orange-400" },
    { name: "Vercel", mark: "▲", color: "text-slate-100" },
    { name: "Netlify", mark: "◆", color: "text-teal-300" },
    { name: "npm", mark: "N", color: "text-red-400" },
    { name: "Docker", mark: "◆", color: "text-sky-400" },
    { name: "Linux", mark: "●", color: "text-amber-300" },
];

function Skills() {
    const [activeCategory, setActiveCategory] = useState<SkillCategoryFilter>("All");
    const visibleSkills = activeCategory === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="scroll-mt-24 border-t border-white/10 py-20 sm:py-24">
            <Container className="max-w-7xl">
                <div className="mb-8 flex flex-col gap-6 lg:mb-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-xl">
                        <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                            <span className="h-0.5 w-8 rounded-full bg-linear-to-r from-cyan-400 to-violet-500" />
                            My Skills
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                            Technologies <span className="bg-linear-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">I Work With</span>
                        </h2>
                        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                            I build modern, responsive and user-friendly web applications using the latest technologies and tools.
                        </p>
                    </div>

                    <div aria-label="Filter skills by category" className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                aria-pressed={activeCategory === category}
                                onClick={() => setActiveCategory(category)}
                                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                                    activeCategory === category
                                        ? "border-cyan-400/70 bg-cyan-400/10 text-slate-100 shadow-[0_0_18px_rgba(34,211,238,0.18)]"
                                        : "border-slate-700/80 bg-[#07111e] text-slate-300 hover:border-sky-400/40 hover:text-white"
                                }`}
                            >
                                <span aria-hidden="true" className="text-sm text-sky-400">{categoryGlyphs[category]}</span>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <SectionReveal>
                    <motion.div
                        layout
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {visibleSkills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </motion.div>
                </SectionReveal>

                <div className="mt-5 grid gap-4 rounded-xl border border-sky-400/25 bg-[#061321]/80 p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                        <div className="flex items-center gap-3">
                            <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/10 text-lg text-sky-300">⬡</span>
                            <div>
                                <h3 className="text-xs font-semibold text-slate-100">Other Tools & Technologies</h3>
                                <p className="mt-1 text-[11px] text-slate-400">Tools that help me build, test and deploy better.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {extraTools.map((tool) => (
                                <span key={tool.name} className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-[#07111e] px-2.5 py-1.5 text-[11px] text-slate-300">
                                    <span aria-hidden="true" className={`text-xs font-bold ${tool.color}`}>{tool.mark}</span>
                                    {tool.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 border-t border-sky-400/20 pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
                        <span aria-hidden="true" className="text-xl text-violet-400">↗</span>
                        <div>
                            <h3 className="text-xs font-semibold text-sky-300">Always Learning</h3>
                            <p className="mt-1 max-w-52 text-[11px] leading-4 text-slate-400">Exploring new technologies and improving my skills every day.</p>
                        </div>
                        <span aria-hidden="true" className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/40 text-violet-300">→</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Skills;