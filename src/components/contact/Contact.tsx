import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SectionReveal from "../ui/SectionReveal";

function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
            <Container>
                <SectionTitle
                    eyebrow="Contact"
                    title="Let's connect."
                    description="Have a project, opportunity or idea? Feel free to reach out."
                />

                <SectionReveal>
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </SectionReveal>
            </Container>
        </section>
    );
}

export default Contact;