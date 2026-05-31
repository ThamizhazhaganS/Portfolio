import React from 'react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-clean-bg-alt dark:bg-neon-bg-alt">
            <div className="container mx-auto px-8 max-w-[1000px]">
                <h2 className="text-[2.5rem] font-bold mb-12 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple bg-clip-text text-transparent inline-block">Certifications</h2>
                <div className="flex flex-wrap gap-3">
                    {['Full Stack Developer Internship (Omnex)', 'Java Programming (Great Learning)', 'Hack-n-Droid Participation (VIT)', 'MATLAB for Data Processing and Visualization (MathWorks)', 'AI/ML Internship Program (Altruisty)', 'Gen AI Internship Program (NeubAItics Tech)'].map((cert, idx) => (
                        <span key={idx} className="bg-white/5 px-5 py-2.5 rounded-full border border-clean-cyan dark:border-neon-cyan/50 text-clean-text dark:text-neon-text text-sm transition-all duration-300 hover:border-clean-purple dark:hover:border-neon-purple hover:text-clean-purple dark:hover:text-neon-purple hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(188,19,254,0.3)] cursor-default">
                            {cert}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Certifications;
