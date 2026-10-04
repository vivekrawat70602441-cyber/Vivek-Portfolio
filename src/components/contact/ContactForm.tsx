import {  useState } from "react";
import type { SubmitEvent } from "react";

function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSubmitted(true);
    };

    return (
        <div className="rounded-2xl border border-white/10 bg-white/3 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-purple-400/50"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-purple-400/50"
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-purple-400/50"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-500"
                >
                    Send Message
                </button>

                {submitted && (
                    <p className="text-center text-sm text-purple-300">
                        Form submitted successfully. we will connect the form to a real
                        email service later.
                    </p>
                )}
            </form>
        </div>
    );
}

export default ContactForm;