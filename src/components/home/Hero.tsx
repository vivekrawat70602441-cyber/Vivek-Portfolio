import { motion, useReducedMotion, type Variants } from "motion/react";
import Container from "../ui/Container";
import SocialLinks from "./SocialLinks";

const heroContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const heroItemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function Hero() {
    const shouldReduceMotion = useReducedMotion();
    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100vh-5rem)] scroll-mt-24 items-center overflow-hidden"
        >
            <Container className="relative py-16 sm:py-20 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <motion.div
                        variants={heroContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p
                            variants={heroItemVariants}
                            className="mb-4 text-xs font-semibold uppercase tracking-[0.2rem] text-purple-400 sm:text-sm"
                        >
                            Hello, I'm
                        </motion.p>

                        <motion.h1
                            variants={heroItemVariants}
                            className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl"
                        >
                            Vivek Singh
                        </motion.h1>

                        <h2 className="mt-4 text-xl font-bold text-slate-300 sm:text-2xl lg:text-3xl">
                            Full Stack Developer
                        </h2>

                        <motion.p
                            variants={heroItemVariants}
                            className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"
                        >
                            I build modern, responsive and user-focused web applications
                            using React, TypeScript and modern frontend technologies.
                            And I have also explore backend and Database.
                        </motion.p>

                        <motion.div
                            variants={heroItemVariants}
                            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scale: 1.03 }
                                }
                                whileTap={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scale: 0.97 }
                                }
                                transition={{ duration: 0.2 }}
                                className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
                            >
                                View Projects
                            </motion.a>

                            <motion.a
                                href="/resume/Vivek-Singh-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scale: 1.03 }
                                }
                                whileTap={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scale: 0.97 }
                                }
                                transition={{ duration: 0.2 }}
                                className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-purple-400/50 hover:bg-purple-400/10"
                            >
                                View Resume
                            </motion.a>
                        </motion.div>

                        <motion.div variants={heroItemVariants}>
                            <SocialLinks />
                        </motion.div>

                    </motion.div>

                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? { opacity: 0 }
                                : { opacity: 0, scale: 0.9, x: 30 }
                        }
                        animate={
                            shouldReduceMotion
                                ? {
                                    opacity: 1,
                                }
                                : {
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                    y: [0, -6, 0],
                                }
                        }
                        transition={
                            shouldReduceMotion
                                ? {
                                    duration: 0.3,
                                }
                                : {
                                    opacity: {
                                        duration: 0.8,
                                        delay: 0.25,
                                        ease: "easeOut",
                                    },
                                    scale: {
                                        duration: 0.8,
                                        delay: 0.25,
                                        ease: "easeOut",
                                    },
                                    x: {
                                        duration: 0.8,
                                        delay: 0.25,
                                        ease: "easeOut",
                                    },
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }
                        }
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-sm sm:max-w-md">
                            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#101820] shadow-2xl shadow-black/30">
                                <img
                                    src="/images/profile/profile.webp"
                                    alt="Vivek Singh"
                                    onError={(event) => {
                                        event.currentTarget.style.display = "none";
                                    }}
                                    fetchPriority="high"
                                    className="relative h-full w-full object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section >
    );
}

export default Hero;