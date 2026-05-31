import React from 'react';

const hexToRgba = (hex, alpha) => {
    if (!hex) return 'transparent';
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ProjectCard = ({ title, desc, tag, icon, accentColor, image, link }) => {
    // Style for glowing effects
    const style = {
        '--project-accent': accentColor,
        '--project-glow': hexToRgba(accentColor, 0.4)
    };

    const CardContent = () => (
        <>
            {/* Gradient Blob for subtle background color */}
            <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: accentColor }}
            ></div>

            {/* Live Demo Badge if link exists */}
            {link && (
                <div className="absolute top-6 right-6 z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group-hover:border-[var(--project-accent)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </div>
                </div>
            )}

            {/* Icon Container */}
            <div className="mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center border border-white/5 text-[var(--project-accent)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_var(--project-glow)] group-hover:border-[var(--project-accent)]">
                    {image ? (
                        <img src={image} alt={title} className="w-8 h-8 object-contain" />
                    ) : (
                        React.cloneElement(icon, { width: 28, height: 28, strokeWidth: 1.5 })
                    )}
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3 text-left relative z-10">{title}</h3>

            <div className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed text-left relative z-10">
                <div dangerouslySetInnerHTML={{ __html: desc }} />
            </div>

            {/* Bottom Tag */}
            <div className="mt-auto relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--project-accent)]">
                    {tag}
                </span>
            </div>
        </>
    );

    const commonClasses = "group relative flex flex-col p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:-translate-y-1 block text-left h-full";

    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
                style={style}
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <CardContent />
            </a>
        );
    }

    return (
        <article
            className={commonClasses}
            style={style}
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <CardContent />
        </article>
    );
};

const Projects = () => {
    return (
        <section id="works" className="py-24 relative z-10">
            <div className="container mx-auto px-8 max-w-[1200px]">
                {/* Header with Title */}
                <div className="mb-12">
                    <h2 className="text-[2.5rem] font-bold bg-gradient-to-r from-clean-cyan to-clean-purple dark:from-neon-cyan dark:to-neon-purple bg-clip-text text-transparent inline-block">
                        My Works
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <ProjectCard
                        title="Trade Journal"
                        desc="A comprehensive trading log to track performance, analyze strategies, and record psychological states for improved decision making."
                        tag="Trading Tools"
                        accentColor="#FFD700" // Gold
                        link="https://trading-journalapp.vercel.app/"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                        }
                    />

                    <ProjectCard
                        title="Bitcoin Price Forecasting"
                        desc="Implemented LSTM model for 30-day ahead forecasting using normalized OHLC data. Constructed rolling input sequences to capture temporal dependencies. Evaluated performance using RMSE."
                        tag="Deep Learning"
                        accentColor="#ff9900" // Bitcoin Orange
                        image="/bitcoin.png"
                        link="https://btc-price-try-1.vercel.app"
                    />

                    <ProjectCard
                        title="FusionQuantAI"
                        desc="Built a systematic trading framework integrating ML models with momentum and volatility indicators (RSI, MACD, ADX, OBV). Engineered features from historical OHLC data with out-of-sample validation."
                        tag="ML & Algorithmic Trading"
                        accentColor="#7C3AED" // Violet/Purple
                        link="https://tryquant.vercel.app/"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                                <path d="M12 2a10 10 0 0 1 10 10H12V2z"></path>
                                <path d="M2.05 13a10 10 0 0 1 10-10v10H2.05z"></path>
                            </svg>
                        }
                    />

                    <ProjectCard
                        title="EchoFlow AI"
                        desc="An AI-powered SaaS productivity platform built to manage emails, tasks, and schedules. Features smart email management, natural language command parsing, and prioritized planner views."
                        tag="AI SaaS & Productivity"
                        accentColor="#3b82f6" // Electric Blue
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="10" width="3" height="4" rx="1"></rect>
                                <rect x="8" y="7" width="3" height="10" rx="1"></rect>
                                <rect x="13" y="5" width="3" height="14" rx="1"></rect>
                                <rect x="18" y="9" width="3" height="6" rx="1"></rect>
                            </svg>
                        }
                    />

                    <ProjectCard
                        title="StockSight 4D"
                        desc="Developed multi-class regime classification using statistical and momentum-derived OHLC features. Generated calibrated probability distributions over directional states."
                        tag="Financial AI"
                        accentColor="#00ff88" // Green
                        link="https://stocksight-4d-pvtxmrlqzcnigkpqovyy3n.streamlit.app/"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                        }
                    />

                    <ProjectCard
                        title="L.A.R.A. v3.0 PRO"
                        desc="Local Autonomous Response & Action assistant built with Python and FastAPI. Integrates 83+ system capabilities (media, system power, app control) with a custom glassmorphism web dashboard and offline LLM fallback."
                        tag="AI Assistant & OS Automation"
                        accentColor="#8b5cf6" // Vibrant Violet
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="8" x2="12" y2="5" />
                                <line x1="4" y1="8" x2="12" y2="12" />
                                <line x1="4" y1="8" x2="12" y2="19" />
                                <line x1="4" y1="16" x2="12" y2="5" />
                                <line x1="4" y1="16" x2="12" y2="12" />
                                <line x1="4" y1="16" x2="12" y2="19" />
                                <line x1="12" y1="5" x2="20" y2="8" />
                                <line x1="12" y1="5" x2="20" y2="16" />
                                <line x1="12" y1="12" x2="20" y2="8" />
                                <line x1="12" y1="12" x2="20" y2="16" />
                                <line x1="12" y1="19" x2="20" y2="8" />
                                <line x1="12" y1="19" x2="20" y2="16" />
                                <circle cx="4" cy="8" r="2" fill="currentColor" />
                                <circle cx="4" cy="16" r="2" fill="currentColor" />
                                <circle cx="12" cy="5" r="2" fill="currentColor" />
                                <circle cx="12" cy="12" r="2" fill="currentColor" />
                                <circle cx="12" cy="19" r="2" fill="currentColor" />
                                <circle cx="20" cy="8" r="2" fill="currentColor" />
                                <circle cx="20" cy="16" r="2" fill="currentColor" />
                            </svg>
                        }
                    />

                    <ProjectCard
                        title="SkillApp"
                        desc="Competency Gap Analysis Software built with Flutter & Django. Contributed to full-stack design and real-time database management during my internship."
                        tag="Full Stack Dev"
                        accentColor="#bc13fe"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                <line x1="12" y1="18" x2="12.01" y2="18"></line>
                            </svg>
                        }
                    />

                    <ProjectCard
                        title="E-Commerce Analytics"
                        desc="Interactive Tableau Dashboard for the Kaggle Superstore dataset. Visualized sales trends, regional performance, and profit margins to deliver actionable insights."
                        tag="Data Visualization"
                        accentColor="#00f3ff"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10"></line>
                                <line x1="12" y1="20" x2="12" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="14"></line>
                            </svg>
                        }
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
