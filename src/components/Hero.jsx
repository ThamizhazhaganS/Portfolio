import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const phrases = ['AI/ML Engineer', 'Quant Researcher', 'Data Scientist', 'Financial Modeler'];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="min-h-[90vh] flex items-center pt-[100px] relative">
            <div className="container mx-auto px-8 max-w-[1000px]">
                <div className="max-w-[800px] z-10 relative">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 text-sm text-clean-text dark:text-neon-text mb-8 bg-white/5 dark:bg-white/3 px-4 py-2 rounded-[50px] border border-clean-cyan dark:border-neon-cyan shadow-[0_0_10px_rgba(0,128,128,0.1)] dark:shadow-[0_0_10px_rgba(0,243,255,0.1)]">
                        <div className="w-2 h-2 bg-clean-cyan dark:bg-neon-cyan rounded-full shadow-[0_0_5px_#008080] dark:shadow-[0_0_5px_#00f3ff] animate-pulse-neon"></div>
                        <span>Open to AI/ML & Data Science opportunities</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-[4rem] font-bold mb-6 text-clean-text dark:text-neon-text leading-[1.1] tracking-tight dark:text-shadow-glow">
                        Hello I’m <span className="text-clean-cyan dark:text-neon-cyan relative inline-block">Thamizhazhagan S</span>
                    </h1>

                    {/* Subtitle with Typing */}
                    <h2 className="text-2xl md:text-[2rem] mb-6 text-clean-muted dark:text-neon-muted font-medium">
                        I am a <span className="text-clean-purple dark:text-neon-purple font-bold">{text}</span>
                        <span className="inline-block w-[3px] h-[1em] bg-clean-text dark:bg-neon-text animate-blink ml-[2px] align-middle"></span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-clean-muted dark:text-neon-muted font-light leading-relaxed mb-8 max-w-[90%]">
                        I specialize in predictive modeling, quantitative analysis, and data-driven insights.
                        With a strong foundation in <span className="text-clean-cyan dark:text-neon-cyan">Python, Django, and Flutter</span>, I build
                        practical, intelligent solutions.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a href="#contact" className="inline-flex items-center justify-center px-7 py-3 rounded-[100px] font-semibold text-sm uppercase tracking-wider transition-all duration-300 bg-clean-cyan text-white border border-clean-cyan hover:bg-[#006666] hover:text-white dark:bg-transparent dark:text-neon-cyan dark:border-neon-cyan dark:shadow-[0_0_10px_rgba(0,243,255,0.3)] dark:hover:bg-neon-cyan dark:hover:text-black dark:hover:shadow-[0_0_20px_#00f3ff] hover:-translate-y-[2px]">Contact Me</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 mb-8">
                        {[
                            { href: "https://github.com/ThamizhazhaganS", label: "GitHub", icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path> },
                            { href: "https://www.linkedin.com/in/thamizhazhagan-s-a2251a285/", label: "LinkedIn", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></> },
                            { href: "mailto:thamizhazhagan1002@gmail.com", label: "Email", icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></> }
                        ].map((social, idx) => (
                            <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="w-[45px] h-[45px] flex items-center justify-center rounded-full border border-gray-400 dark:border-neon-cyan/20 text-clean-muted dark:text-neon-muted transition-all duration-300 hover:text-clean-cyan dark:hover:text-neon-cyan hover:border-clean-cyan dark:hover:border-neon-cyan hover:-translate-y-[3px] hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] bg-white/5" aria-label={social.label}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {social.icon}
                                </svg>
                            </a>
                        ))}
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-3 mt-8">
                        {['Python & AI/ML', 'Quant & Finance Modeling', 'Django & Flask', 'Flutter', 'Tableau', 'MySQL'].map(skill => (
                            <span key={skill} className="bg-white/5 px-5 py-2.5 rounded-full border border-gray-400 dark:border-neon-cyan/20 text-clean-text dark:text-neon-text text-sm transition-all duration-300 hover:border-clean-purple dark:hover:border-neon-purple hover:text-clean-purple dark:hover:text-neon-purple hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(188,19,254,0.3)] cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
