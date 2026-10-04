import { useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [pendingSection, setPendingSection] = useState<string | null>(null);

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const handleMobileNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        if (window.location.hash !== href) {
            window.history.pushState(null, "", href);
        }
        setPendingSection(href.slice(1));
        closeMenu();
    };

    const handleMenuExitComplete = () => {
        if (pendingSection) {
            document.getElementById(pendingSection)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setPendingSection(null);
        }
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 border-b border-white/10 bg-[#050b14]/90 backdrop-blur-md"
        >
            <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <a
                    href="#home"
                    onClick={closeMenu}
                    className="text-xl font-bold tracking-tight text-white"
                >
                    Vivek<span className="text-purple-400">.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-purple-400"
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    <motion.a
                        href="/resume/Vivek-Singh-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-lg border border-purple-400/40 px-4 py-2 text-sm font-semibold text-purple-300 transition-colors hover:border-purple-400 hover:bg-purple-400/10"
                    >
                        Resume
                    </motion.a>
                </div>

                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="rounded-lg border border-white/10 p-2 text-slate-200 transition-colors hover:border-purple-400/40 hover:text-purple-400 md:hidden"
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            <AnimatePresence onExitComplete={handleMenuExitComplete}>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="border-t border-white/10 bg-[#050b14] md:hidden"
                    >
                        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(event) => handleMobileNavClick(event, link.href)}
                                    className="border-b border-white/5 py-4 text-sm font-medium text-slate-300 transition-colors hover:text-purple-400"
                                >
                                    {link.name}
                                </a>
                            ))}

                            <a
                                href="/resume/Vivek-Singh-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="mt-4 rounded-lg border border-purple-400/40 px-4 py-3 text-center text-sm font-semibold text-purple-300 transition-colors hover:border-purple-400 hover:bg-purple-400/10"
                            >
                                View Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
export default Navbar;