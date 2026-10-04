import Container from "../ui/Container";

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#skills" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

function Footer() {
    return (
        <footer className="border-t border-white/10">
            <Container className="py-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                    <div>
                        <a
                            href="#home"
                            className="text-xl font-bold tracking-tight text-white"
                        >
                            Vivek<span className="text-purple-400">.</span>
                        </a>

                        <p className="mt-2 text-sm text-slate-500">
                            Full Stack Developer building modern web experiences.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-x-6 gap-y-3">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Vivek Singh. All rights reserved.</p>
                    <p>Built with React, TypeScript & Tailwind CSS.</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;