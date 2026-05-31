import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-24">
            <div className="container mx-auto px-8 max-w-[1000px]">
                <h2 className="text-[2.5rem] font-bold mb-12 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple bg-clip-text text-transparent inline-block">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative flex flex-col p-8 rounded-2xl border border-gray-200 dark:border-neon-cyan/20 bg-white dark:bg-neon-card transition-all duration-300 hover:-translate-y-[5px] hover:border-clean-purple dark:hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] overflow-hidden shadow-sm dark:shadow-none">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-white/5 text-clean-muted dark:text-neon-muted rounded-[50px] text-xs mb-4 border border-gray-200 dark:border-neon-cyan/20 w-fit">Sept 2022 – May 2026</span>
                        <h3 className="text-2xl mb-2 font-bold text-clean-text dark:text-neon-text">B.E in Computer Science</h3>
                        <p className="text-clean-purple dark:text-neon-purple font-semibold mb-4 text-base">Sathyabama Institute of Science and Technology</p>
                        <p className="text-clean-muted dark:text-neon-muted text-sm">Specialization: AI/ML</p>
                    </div>

                    <div className="group relative flex flex-col p-8 rounded-2xl border border-gray-200 dark:border-neon-cyan/20 bg-white dark:bg-neon-card transition-all duration-300 hover:-translate-y-[5px] hover:border-clean-purple dark:hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] overflow-hidden shadow-sm dark:shadow-none">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-white/5 text-clean-muted dark:text-neon-muted rounded-[50px] text-xs mb-4 border border-gray-200 dark:border-neon-cyan/20 w-fit">June 2021 – May 2022</span>
                        <h3 className="text-2xl mb-2 font-bold text-clean-text dark:text-neon-text">Higher Secondary (HSC)</h3>
                        <p className="text-clean-purple dark:text-neon-purple font-semibold mb-4 text-base">Holy Family Convent Matriculation</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Education;
