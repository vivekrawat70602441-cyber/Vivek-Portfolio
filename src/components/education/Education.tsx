import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Experience from "./Experience";
import { education } from "../../data/education";
import SectionReveal from "../ui/SectionReveal";

function Education() {
    return (
        <section
            id="education"
            className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28"
        >
            <Container>
                <SectionTitle
                    eyebrow="Education & Experience"
                    title="My journey so far."
                    description="My academic background and hands-on development experience."
                />

                <SectionReveal>
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <div className="mb-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.2rem] text-purple-400">
                                    Education
                                </p>

                                <h3 className="mt-3 text-2xl font-bold text-white">
                                    Academic Background
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {education.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative border-l border-white/10 pl-8"
                                    >
                                        <div className="absolute -left-1.25 top-1 h-2.5 w-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-500/30" />
                                        <p className="text-sm font-medium text-purple-400">
                                            {item.duration}
                                        </p>

                                        <h4 className="mt-2 text-lg font-semibold text-white">
                                            {item.degree}
                                        </h4>

                                        <p className="mt-1 text-sm font-medium text-slate-300">
                                            {item.institution}
                                        </p>

                                        <p className="mt-3 text-sm leading-6 text-slate-400">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Experience />
                    </div>
                </SectionReveal>
            </Container>
        </section>
    );
}

export default Education;