
import {
    Mail,
    ArrowUp,
    ArrowRight,
    Code2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../ui/Container";

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/vivekrawat70602441-cyber",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/vivek-singh-71ab00349/",
        icon: FaLinkedin,
    },
    {
        name: "Email",
        href: "mailto:vivekrawat70602441@gmail.com",
        icon: Mail,
    },
];

function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-purple-500/20 bg-[#030712]">

            {/* Background Glow Effects */}
            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-purple-700/20 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />

            <Container className="relative py-12 sm:py-16">

                {/* Main Footer Panel */}
                <div className="relative overflow-hidden rounded-md border border-purple-500/25 bg-[#050b19]/80 shadow-[0_0_40px_rgba(124,58,237,0.05)]">

                    {/* Inner Glow */}
                    <div className="pointer-events-none absolute -left-20 top-0 h-52 w-52 rounded-full bg-purple-700/15 blur-[100px]" />
                    <div className="pointer-events-none absolute -right-20 top-0 h-52 w-52 rounded-full bg-purple-600/15 blur-[100px]" />

                    <div className="relative grid grid-cols-1 gap-12 px-7 py-12 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.05fr_0.9fr] lg:items-center lg:gap-8 lg:px-14 lg:py-20">

                        {/* Brand Section */}
                        <div>
                            <a
                                href="#home"
                                className="inline-block text-4xl font-bold tracking-tight text-white"
                            >
                                Vivek<span className="text-purple-400">.</span>
                            </a>

                            <p className="mt-5 max-w-sm text-base leading-8 text-slate-400">
                                Full Stack Developer building modern web experiences.
                            </p>

                            {/* Social Icons */}
                            <div className="mt-7 flex items-center gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            aria-label={social.name}
                                            target={
                                                social.name === "Email" ? undefined : "_blank"
                                            }
                                            rel={
                                                social.name === "Email"
                                                    ? undefined
                                                    : "noopener noreferrer"
                                            }
                                            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/25 bg-white/2 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                                        >
                                            <Icon size={24} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Quick Links
                            </h3>

                            <div className="mt-4 h-1 w-12 rounded-full bg-linear-to-r from-purple-400 to-indigo-500" />

                            <nav className="mt-6 flex flex-col items-start gap-4">
                                {footerLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-base text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-purple-400"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Let's Connect */}
                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Let's Connect
                            </h3>

                            <div className="mt-4 h-1 w-12 rounded-full bg-linear-to-r from-purple-400 to-indigo-500" />

                            <p className="mt-6 text-base leading-8 text-slate-400">
                                Have a project in mind?
                                <br />
                                Let's talk!
                            </p>

                            <a
                                href="#contact"
                                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                            >
                                <Mail size={20} />
                                Get In Touch
                                <ArrowRight
                                    size={19}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                        {/* Code Illustration */}
                        <div className="hidden items-center justify-center lg:flex">
                            <div className="relative flex h-56 w-full items-center justify-center">

                                {/* Orbit */}
                                <div className="absolute h-40 w-80 rotate-[-22deg] rounded-[50%] border border-purple-500/60" />

                                {/* Decorative Dots */}
                                <span className="absolute right-8 top-3 h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]" />

                                <span className="absolute bottom-8 left-5 h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />

                                <span className="absolute bottom-5 right-5 h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />

                                {/* Code Icon */}
                                <Code2
                                    size={82}
                                    strokeWidth={1.8}
                                    className="relative z-10 text-purple-500 drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Footer Bar */}
                <div className="mt-6 border-t border-purple-500/20 pt-6">

                    <div className="grid grid-cols-1 items-center gap-6 text-center md:grid-cols-2 xl:grid-cols-[1.1fr_0.8fr_1.1fr_auto] xl:gap-5 xl:text-left">

                        {/* Copyright */}
                        <p className="text-sm text-slate-400 sm:text-base">
                            © {new Date().getFullYear()} Vivek Singh. All rights reserved.
                        </p>

                        {/* Heartbeat Line */}
                        <div className="hidden items-center justify-center xl:flex">
                            <svg
                                viewBox="0 0 300 35"
                                className="h-9 w-full text-purple-500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M0 18 H120 L132 18 L140 6 L149 30 L159 2 L169 26 L179 18 H300"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Technology Credits */}
                        <p className="text-sm text-slate-400 sm:text-base xl:text-center">
                            Built with React, TypeScript & Tailwind CSS.
                        </p>

                        {/* Back To Top */}
                        <div className="flex justify-center xl:justify-end">
                            <a
                                href="#home"
                                aria-label="Back to top"
                                className="flex h-16 w-16 items-center justify-center rounded-full border border-purple-500/60 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                            >
                                <ArrowUp size={25} />
                            </a>
                        </div>

                    </div>
                </div>

            </Container>
        </footer>
    );
}

export default Footer;
