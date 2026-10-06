const personalInfo = [
    {
        label: "Name",
        value: "Vivek Singh",
    },
    {
        label: "Role",
        value: "Full Stack Developer",
    },
    {
        label: "Education",
        value: "BCA",
    },
    {
        label: "Focus",
        value: "Web Development",
    },
];

function PersonalInfo() {
    return (
        <div className="grid lg:translate-x-6 xl:translate-x-10">
            {personalInfo.map((item) => (
                <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/3 p-5"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-purple-400">
                        {item.label}
                    </p>

                    <p className="mt-2 text-base font-medium text-white">
                        {item.value}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default PersonalInfo;