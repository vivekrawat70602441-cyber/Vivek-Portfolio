interface ProjectFilterProps {
    activeFilter: "All" | "Full Stack" | "Frontend";
    onFilterChange: (
        filter: "All" | "Full Stack" | "Frontend"
    ) => void;
}

const filters: Array<"All" | "Full Stack" | "Frontend"> = [
    "All", "Full Stack", "Frontend"
];

function ProjectFilter({
    activeFilter,
    onFilterChange,
}: ProjectFilterProps) {
    return (
        <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => onFilterChange(filter)}
                        className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                                ? "border border-purple-500 bg-purple-600 text-white shadow-purple-600/20"
                                : "border border-white/10 bg-white/5 text-slate-400 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
                            }`}
                    >
                        {filter}
                    </button>
                )
            })}
        </div>
    );
}

export default ProjectFilter;