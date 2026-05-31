import React from 'react';

const Contact = () => {
    // Basic form handling not strictly required for "looks like", but good practice.
    // Preserving static nature for now.
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-8 max-w-[1000px]">
                <h2 className="text-[2.5rem] font-bold mb-12 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple bg-clip-text text-transparent inline-block">Let's Connect</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="contact-info">
                        <p className="text-xl text-clean-muted dark:text-neon-muted mb-8 font-light leading-relaxed">
                            I'm currently looking for new opportunities in AI/ML and Full Stack Development.
                            Fill out the form or shoot me an email!
                        </p>
                        {/* Social Links (Big) could go here if design requires, keeping clean for now as per original */}
                    </div>

                    <form action="https://api.web3forms.com/submit" method="POST" className="bg-white dark:bg-neon-card p-8 rounded-2xl border border-gray-200 dark:border-neon-cyan/20 shadow-lg dark:shadow-none">
                        <input type="hidden" name="access_key" value="8e2f0990-8482-46bf-91a6-d15476061464" />
                        <input type="hidden" name="from_name" value="Portfolio Contact Form" />
                        <input type="hidden" name="subject" value="New Contact Message from Portfolio" />
                        <input type="hidden" name="redirect" value={window.location.href} />
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-clean-muted dark:text-neon-muted text-sm">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required
                                className="w-full p-4 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-neon-cyan/20 rounded-lg text-clean-text dark:text-neon-text focus:outline-none focus:border-clean-cyan dark:focus:border-neon-cyan focus:bg-white dark:focus:bg-[#00f3ff05] focus:shadow-[0_0_10px_rgba(0,243,255,0.1)] transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-clean-muted dark:text-neon-muted text-sm">Email</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" required
                                className="w-full p-4 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-neon-cyan/20 rounded-lg text-clean-text dark:text-neon-text focus:outline-none focus:border-clean-cyan dark:focus:border-neon-cyan focus:bg-white dark:focus:bg-[#00f3ff05] focus:shadow-[0_0_10px_rgba(0,243,255,0.1)] transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-clean-muted dark:text-neon-muted text-sm">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your message here..." required
                                className="w-full p-4 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-neon-cyan/20 rounded-lg text-clean-text dark:text-neon-text focus:outline-none focus:border-clean-cyan dark:focus:border-neon-cyan focus:bg-white dark:focus:bg-[#00f3ff05] focus:shadow-[0_0_10px_rgba(0,243,255,0.1)] transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-600 resize-y"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full py-3.5 rounded-[100px] font-semibold text-sm uppercase tracking-wider transition-all duration-300 bg-clean-cyan text-white border border-clean-cyan hover:bg-[#006666] dark:bg-transparent dark:text-neon-cyan dark:border-neon-cyan dark:shadow-[0_0_10px_rgba(0,243,255,0.3)] dark:hover:bg-neon-cyan dark:hover:text-black dark:hover:shadow-[0_0_20px_#00f3ff] hover:-translate-y-[2px]">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;
