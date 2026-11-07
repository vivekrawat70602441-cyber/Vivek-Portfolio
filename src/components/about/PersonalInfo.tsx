import { UserRound, BriefcaseBusiness, GraduationCap, Code2 } from "lucide-react";
import { motion } from "motion/react";

const personalInfo = [
    {
        label: "Name",
        value: "Vivek Singh",
        icon: UserRound,
    },
    {
        label: "Role",
        value: "Full Stack Developer",
        icon: BriefcaseBusiness,
    },
    {
        label: "Education",
        value: "BCA",
        icon: GraduationCap,
    },
    {
        label: "Focus",
        value: "Web Development",
        icon: Code2,
    },
];

function PersonalInfo() {
    return (
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {personalInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group relative rounded-2xl p-px"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-600 via-purple-500/50 to-cyan-500 opacity-70 transition duration-300 group-hover:opacity-100" />

                        <div className="relative flex min-h-22 items-center gap-4 rounded-2xl bg-[#080d1c] px-5 py-4 transition duration-300 group-hover:bg-[#0d1428]">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition duration-300 group-hover:bg-purple-500/20 group-hover:text-cyan-300">
                                <Icon size={23} strokeWidth={2} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-sm font-semibold text-purple-400">
                                    {item.label}
                                </p>
                                <p className="mt-1 wrap-break-word text-sm font-medium text-white sm:text-base">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default PersonalInfo;