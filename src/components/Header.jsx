import React from 'react';
import boyImage from '../assets/boy.png';

const Header = () => {
    return (
        <header className="absolute top-0 left-0 w-full p-4 md:px-8 md:py-4 flex justify-between items-center z-50 bg-transparent">
            <div className="container mx-auto flex justify-between items-center max-w-[1000px]">
                {/* Brand / Memoji */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-[60px] h-[60px] bg-neon-purple rounded-full overflow-hidden border-[3px] border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:shadow-[0_0_25px_rgba(0,243,255,0.6),0_0_10px_#bc13fe] group-hover:border-neon-purple cursor-pointer">
                        <img src={boyImage} alt="Memoji" className="w-full h-full object-cover" />
                    </div>
                </a>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}


                    {/* Contact Button */}
                    <a href="#contact" className="inline-flex items-center justify-center px-7 py-3 rounded-[100px] font-semibold text-sm uppercase tracking-wider transition-all duration-300 
                bg-clean-cyan text-white border border-clean-cyan hover:bg-[#006666] hover:text-white
                dark:bg-transparent dark:text-neon-cyan dark:border-neon-cyan dark:shadow-[0_0_10px_rgba(0,243,255,0.3)] dark:hover:bg-neon-cyan dark:hover:text-black dark:hover:shadow-[0_0_20px_#00f3ff] hover:-translate-y-[2px]">
                        Contact me
                    </a>
                </div>
            </div>
        </header>
    );
};
export default Header;
