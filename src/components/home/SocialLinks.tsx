import { motion } from "motion/react";
function SocialLinks() {
    return (
        <div className="mt-8 flex items-center gap-5">
            <motion.a
                href="https://github.com/vivekrawat70602441-cyber"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label="GitHub"
                className="text-slate-400 transition-colors hover:text-white"
            >
                GitHub
            </motion.a>

            <span className="h-1 w-1 rounded-full bg-slate-600" />

            <motion.a
                href="https://www.linkedin.com/in/vivek-singh-71ab00349/"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label="LinkedIn"
                className="text-slate-400 transition-colors hover:text-white"
            >
                LinkedIn
            </motion.a>

            <span className="h-1 w-1 rounded-full bg-slate-600" />

            <motion.a
                href="mailto:vivekrawat70602441@gmail.com"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="text-slate-400 transition-colors hover:text-white"
            >
                Email
            </motion.a>
        </div>
    );
}

export default SocialLinks;