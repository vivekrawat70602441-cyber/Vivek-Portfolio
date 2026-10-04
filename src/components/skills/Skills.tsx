import { motion } from "motion/react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";
import SectionReveal from "../ui/SectionReveal";

const skillContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

function Skills() {
    return (
        <section id="skills" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
            <Container>
                <SectionTitle
                    eyebrow="Skills"
                    title="Technologies I work with."
                    description="The tools and technologies I use to build modern, responsive and scalable web applications."
                />

                <SectionReveal>
                    <motion.div 
                       variants={skillContainerVariants}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.15 }}
                       className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {skills.map((skill) => (
                            <SkillCard key={skill.name} skill={skill} />
                        ))}
                    </motion.div>
                </SectionReveal>
            </Container>
        </section>
    );
}

export default Skills;