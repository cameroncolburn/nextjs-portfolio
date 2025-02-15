import Form from 'next/form'

export default function Contact() {
    return (
        <section className="pt-12 pb-12 bg-gradient-to-bl from-rose-800 via-rose-900 to-rose-700">
            <div className="flex justify-between items-start max-w-5xl mx-auto">
                <div className="p-6 z-10">
                    <h2 className="text-3xl font-bold text-neutral-100 relative w-fit">Contact Me</h2>
                    <p className="mt-4 text-neutral-100 font-medium">Do you have an opportunity you want to discuss, or perhaps just want to chat? Drop me a line.</p>
                </div>

                <div>
                    <div className="rounded-lg p-2">
                        <Form action="#" className="space-y-4">
                            <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full p-3 rounded-lg bg-white border-2 border-color5 text-sm focus:border-sky-300 focus:ring-1 focus:ring-sky-300 outline-none"
                            />
                            <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className="w-full p-3 rounded-lg bg-white border-2 border-color5 text-sm focus:border-sky-300 focus:ring-1 focus:ring-sky-300 outline-none"
                            />
                            <textarea
                            placeholder="Message"
                            name="message"
                            rows={4}
                            className="w-full p-3 rounded-lg bg-white border-2 border-color5 text-sm focus:border-sky-300 focus:ring-1 focus:ring-sky-300 outline-none resize-none"
                            ></textarea>
                            <button
                            type="button"
                            className="text-sm bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                            Send
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
        
    );
}