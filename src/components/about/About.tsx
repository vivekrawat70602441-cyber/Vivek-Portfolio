import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SectionReveal from "../ui/SectionReveal";
import AboutCard from "./AboutCard";
import PersonalInfo from "./PersonalInfo";


function About() {
    return (
        <section id="about" className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-20 sm:py-24 lg:py-28">

            <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

            <Container>
                <SectionReveal>
                    <SectionTitle
                        eyebrow="About Me"
                        title="Building the web with purpose."
                        description="Get to know my background, skills and approach to development."
                    />
                    
                    <div className="mt-12 grid items-center gap-12 lg-grid-cols-[0.85fr_1.15fr] lg:gap-16">

                        <div className="relative mx-auto w-full max-w-105">

                            <div className="absolute inset-8 rounded-full bg-purple-600/20 blur-[90px]" />
                            <div className="absolute -inset-3 rotate-[-5deg] rounded-4xl border border-purple-500/50 bg-linear-to-br from-purple-600/20 via-blue-500/10 to-transparent shadow-[0_0_50px_rgba(124,58,237,0.15)]" />
                            <div className="absolute -inset-1 rotate-3 rounded-4xl border border-cyan-400/30" />

                            <div className="relative aspect-4/5 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0b1020]">
                                <img
                                    src="/images/profile/about-profile.jpg"
                                    alt="Portrait of Vivek Singh"
                                    className="h-full w-full object-cover object-top"
                                    loading="lazy"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-[#070b18]/60 via-transparent to-transparent" />

                                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#080d1c]/75 p-4 backdrop-blur-xl">
                                    <p className="text-sm font-medium text-purple-300">
                                        Hello, I'm
                                    </p>
                                    <h3 className="mt-1 text-xl font-bold text-white">
                                        Vivek Singh
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -left-5 top-16 h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_18px_#a855f7]" />
                            <div className="absolute right-5 bottom-24 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />
                        </div>

                        <div className="min-w-0">

                            <AboutCard />
                            <PersonalInfo />
                        </div>
                    </div>
                </SectionReveal>
            </Container>
        </section>
    );
}

export default About;