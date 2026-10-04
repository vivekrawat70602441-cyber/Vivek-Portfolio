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
        <div className="mb-10">
            {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                    <button
                        key={filter}
                        type="button"
                        onClick={() => onFilterChange(filter)}
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isActive
                                ? "bg-purple-600 text-white"
                                : "border border-white/10 bg-white/5 text-slate-400 hover:border-purple-400/30 hover:text-white"
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