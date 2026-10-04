function Experience() {
    return (
        <div>
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2rem] text-purple-400">
                    Experience
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                    Project-based development
                </h3>
            </div>

            <div className="relative border-l border-white/10 pl-8">
                <div className="absolute -left-1.25 top-1 h-2.5 w-2.5 rounded-full bg-purple-400 shadow-lg shadow-purple-500/30" />

                <p className="text-sm font-medium text-slate-500">
                    Full Stack Development
                </p>

                <h4 className="mt-2 text-lg font-semibold text-white">
                    TechStore Ecommerce
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                    Developed and deployed a full-stack ecommerce application with
                    product management, authentication, cart, wishlist, orders,
                    payments, database integration and an AI-powered chatbot.
                </p>

                <div className="mt-4">
                    {[
                        "Next.js",
                        "TypeScripts",
                        "Tailwind CSS",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                    ].map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-400"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;