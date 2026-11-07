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
            className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#050b14]/90 backdrop-blur-xl"
        >
            <nav className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                <a
                    href="#home"
                    onClick={closeMenu}
                    className="text-2xl font-bold tracking-tight text-white"
                >
                    Vivek<span className="text-purple-400">.</span>
                </a>

                <div className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            className="rounded-full px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-purple-500/15 hover:text-purple-300"
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    <motion.a
                        href="/resume/Vivek-Singh-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        className="ml-5 rounded-full border border-purple-500/60 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/15 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                    >
                        ↓ &nbsp; Resume
                    </motion.a>
                </div>

                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/50 bg-purple-500/5 text-white shadow-[0_0_15px_rgba(168,85,247,0.12)] transition-all duration-300 hover:bg-purple-500/15 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] md:hidden"
                >
                    {isMenuOpen ? (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.8}
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
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.8}
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

                <AnimatePresence onExitComplete={handleMenuExitComplete}>
                    {isMenuOpen && (
                        <motion.div
                            id="mobile-navgation"
                            initial={{ opacity: 0, y: -10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.97 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute right-4 top-[calc(100%+12px)] w-[min(320px, calc(100vw-2rem))] origin-top-right overflow-hidden rounded-2xl border border-purple-500/40 bg-[#080d1c]/95 p-4 shadow-[0_10px_50px_rgba(0,0,0,0.5),0_0_25px_rgba(124,58237,0.12)] backdrop-blur-2xl sm:right-6 md:hidden"
                        >
                            <nav className="flex flex-col gap-1">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(event) => handleMobileNavClick(event, link.href)}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.2,
                                            delay: index * 0.04,
                                        }}
                                        className="rounded-xl border-l-[3px] border-transparent px-5 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="my-3 border-t border-white/10" />
                            <a
                                href="/resume/Vivek-Singh-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="flex w-full items-center justify-center gap-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"
                                    />
                                </svg>
                                View Resume
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}
export default Navbar;