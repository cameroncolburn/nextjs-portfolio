import Form from 'next/form'

export default function Contact() {
    return (
        <section className="pt-8 pb-8 sm:pt-12 sm:pb-12 bg-gradient-to-bl from-rose-800 via-rose-900 to-rose-700">
            <div className="flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto">
                <div className="p-6 z-10 sm:px-4 sm:py-6 mx-auto">
                    <h2 className="text-neutral-100 font-bold">Contact Me</h2>
                    <p className="mt-4 text-neutral-100">Do you have an opportunity you want to discuss, or perhaps just want to chat? Drop me a line.</p>
                </div>

                <div className="px-4 pb-6 mx-0 sm:mx-auto">
                    <div className="rounded-lg">
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