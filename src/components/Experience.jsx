import React from 'react';

const Experience = () => {
    const experiences = [
        {
            date: "Jun 2024 – Sept 2024",
            role: "Full Stack Developer Intern",
            company: "Omnex Software Solutions",
            details: [
                "Developed \"SkillApp\", a Competency Gap Analysis Software.",
                "Gained expertise in Figma, Flutter, Django, and MySQL.",
                "Contributed to real-time projects and requirement analysis."
            ]
        },
        {
            date: "Jan 2025 – Feb 2025",
            role: "AI/ML Intern",
            company: "Altruisty Internship Program",
            details: [
                "Completed immersive training in Artificial Intelligence & ML.",
                "Built real-world AI projects under industry mentorship.",
                "Collaborated with a dynamic team to push technical boundaries."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 bg-clean-bg-alt dark:bg-neon-bg-alt">
            <div className="container mx-auto px-8 max-w-[1000px]">
                <h2 className="text-[2.5rem] font-bold mb-12 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple bg-clip-text text-transparent inline-block">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group relative flex flex-col p-8 rounded-2xl border border-gray-200 dark:border-neon-cyan/20 bg-white dark:bg-neon-card transition-all duration-300 hover:-translate-y-[5px] hover:border-clean-purple dark:hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] overflow-hidden shadow-sm dark:shadow-none">
                            {/* Hover Top Border */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-white/5 text-clean-muted dark:text-neon-muted rounded-[50px] text-xs mb-4 border border-gray-200 dark:border-neon-cyan/20 w-fit">{exp.date}</span>
                            <h3 className="text-2xl mb-2 font-bold text-clean-text dark:text-neon-text">{exp.role}</h3>
                            <p className="text-clean-purple dark:text-neon-purple font-semibold mb-4 text-base">{exp.company}</p>
                            <ul className="text-clean-muted dark:text-neon-muted space-y-2 text-sm pl-1">
                                {exp.details.map((item, idx) => (
                                    <li key={idx} className="relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-clean-cyan dark:before:text-neon-cyan">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Experience;
