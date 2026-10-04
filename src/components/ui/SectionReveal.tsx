import { motion } from "motion/react";

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

function SectionReveal({
    children, className = "", delay = 0
}: SectionRevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.7,
                delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default SectionReveal;