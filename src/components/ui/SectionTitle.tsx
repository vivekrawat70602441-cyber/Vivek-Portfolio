interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    description?: string;
}

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
    return (
        <div className="mb-12 max-w-2xl">
            {eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2rem] text-purple-400">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;   