import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SectionReveal from "../ui/SectionReveal";
import AboutCard from "./AboutCard";
import PersonalInfo from "./PersonalInfo";


function About() {
    return (
        <section id="about" className="scroll-mt-24 border-t border-white/10 py-20 sm:py-24 lg:py-28">
            <Container>
                <SectionTitle
                    eyebrow="About Me"
                    title="Building the web with purpose."
                    description="A litte about my background, approach and what I enjoy building."
                />

                <SectionReveal>
                    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                        <AboutCard />
                        <PersonalInfo />
                    </div>
                </SectionReveal>
            </Container>
        </section>
    );
}

export default About;