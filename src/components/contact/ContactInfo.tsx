function ContactInfo() {
    return (
        <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Get In Touch
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Let's build something together.
            </h3>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
                I'm open to discussing frontend development opportunities, freelance
                projects and interesting web development ideas.
            </p>

            <div className="mt-8 space-y-5">
                <a
                    href="mailto:your-email@example.com"
                    className="group flex items-center gap-4"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-purple-400 transition-colors group-hover:border-purple-400/30">
                        @
                    </div>

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                            Email
                        </p>

                        <p className="mt-1 text-sm font-medium text-slate-300 group-hover:text-white">
                            vivekrawat70602441@gmail.com
                        </p>
                    </div>
                </a>

                <a
                    href="https://github.com/vivekrawat70602441-cyber"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-purple-400 transition-colors group-hover:border-purple-400/30">
                        GH
                    </div>

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                            GitHub
                        </p>

                        <p className="mt-1 text-sm font-medium text-slate-300 group-hover:text-white">
                            GitHub Profile
                        </p>
                    </div>
                </a>

                <a
                    href="https://www.linkedin.com/in/vivek-singh-71ab00349/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-purple-400 transition-colors group-hover:border-purple-400/30">
                        in
                    </div>

                    <div>
                        <p className="text-xs font-medium text-slate-300 group-hover:text-white">
                            LinkedIn
                        </p>

                        <p className="mt-1 text-sm font-medium text-slate-300 group-hover:text-white">
                            LinkedIn Profile
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ContactInfo;