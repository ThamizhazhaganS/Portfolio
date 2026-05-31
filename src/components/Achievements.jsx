import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements" className="py-24">
            <div className="container mx-auto px-8 max-w-[1000px]">
                <h2 className="text-[2.5rem] font-bold mb-12 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple bg-clip-text text-transparent inline-block">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <article className="group relative flex flex-col p-8 rounded-2xl border border-gray-200 dark:border-neon-cyan/20 bg-white dark:bg-neon-card transition-all duration-300 hover:-translate-y-[5px] hover:border-clean-purple dark:hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] overflow-hidden shadow-sm dark:shadow-none">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        <div className="w-[50px] h-[50px] bg-gray-100 dark:bg-white/5 rounded-xl mb-6 flex items-center justify-center text-2xl">🏆</div>
                        <h3 className="text-2xl mb-3 font-bold text-clean-text dark:text-neon-text">WomenTechmakers Hackathon</h3>
                        <p className="text-clean-muted dark:text-neon-muted leading-relaxed">Secured <strong className="text-clean-text dark:text-neon-text">2nd Prize</strong> for developing "Food Bridge", an application tackling food waste and distribution.</p>
                    </article>

                    <article className="group relative flex flex-col p-8 rounded-2xl border border-gray-200 dark:border-neon-cyan/20 bg-white dark:bg-neon-card transition-all duration-300 hover:-translate-y-[5px] hover:border-clean-purple dark:hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] overflow-hidden shadow-sm dark:shadow-none">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        <div className="w-[50px] h-[50px] bg-gray-100 dark:bg-white/5 rounded-xl mb-6 flex items-center justify-center text-2xl">🎤</div>
                        <h3 className="text-2xl mb-3 font-bold text-clean-text dark:text-neon-text">HACKERA’25 Organizer</h3>
                        <p className="text-clean-muted dark:text-neon-muted leading-relaxed">Led a National Level Hackathon with <strong className="text-clean-text dark:text-neon-text">500+ participants</strong> and 85 teams from 35+ colleges.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}
export default Achievements;
