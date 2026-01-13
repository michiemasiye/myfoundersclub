import React, { useState } from 'react'

const curriculum = [
    {
        week: 'Weeks 1-2',
        title: 'Foundation',
        topics: [
            'Idea Validation & Market Opportunity Assessment',
            'Problem-Solution Fit Framework',
            'Customer Discovery & Interviews',
            'Identifying Your Unique Value Proposition',
        ],
    },
    {
        week: 'Weeks 3-5',
        title: 'Business Planning',
        topics: [
            'Comprehensive Market Analysis & Competitive Landscape',
            'Business Model Canvas Development',
            'Revenue Streams & Pricing Strategy',
            'Financial Projections & Unit Economics',
            'Cost Structure & Break-even Analysis',
        ],
    },
    {
        week: 'Weeks 6-7',
        title: 'Execution',
        topics: [
            'Minimum Viable Product (MVP) Development',
            'Go-to-Market Strategy',
            'Marketing & Sales Funnel Design',
            'Digital Marketing Essentials',
            'Operations & Supply Chain Planning',
        ],
    },
    {
        week: 'Weeks 8-10',
        title: 'Funding & Demo Day',
        topics: [
            'Funding Options: Grants, Angels, VCs, Crowdfunding',
            'Investor Pitch Deck Crafting',
            'Financial Storytelling & Metrics That Matter',
            'Due Diligence Preparation',
            'Live Pitch Event (Demo Day)',
        ],
    },
]

const Curriculum = () => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section id="curriculum" className="py-32 bg-slate-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(109,40,217,0.1),transparent_70%)]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    <div className="lg:w-1/3 w-full lg:sticky lg:top-32">
                        <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
                            The Roadmap
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight">The 10-Week <br className="hidden lg:block" /><span className="text-primary-light">Mastery Path</span></h2>
                        <p className="text-slate-400 mb-10 text-base md:text-lg font-medium leading-relaxed max-w-xl">A high-intensity journey from raw spark to investment-ready venture. Every week generates tangible business assets.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {curriculum.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full text-left p-6 md:p-8 rounded-[1.5rem] border transition-all duration-500 flex items-center gap-4 md:gap-6 group ${activeTab === index
                                        ? 'bg-gradient-to-r from-primary-light to-primary-dark border-primary-light shadow-[0_15px_30px_rgba(109,40,217,0.3)] scale-[1.02] lg:scale-[1.05]'
                                        : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'
                                        }`}
                                >
                                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-lg md:text-xl transition-colors ${activeTab === index ? 'bg-white text-primary-light' : 'bg-slate-700 text-slate-500'}`}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1 block ${activeTab === index ? 'text-white/70' : 'text-slate-500'}`}>
                                            {item.week}
                                        </span>
                                        <span className={`text-base md:text-xl font-bold block ${activeTab === index ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{item.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full">
                        <div className="bg-slate-800/30 border border-slate-700/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 min-h-[450px] md:min-h-[500px] backdrop-blur-xl relative overflow-hidden shadow-2xl">
                            {/* Decorative elements */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-light/10 blur-[100px] rounded-full"></div>
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 blur-[100px] rounded-full"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-4xl font-black mb-10 md:mb-12 text-white flex items-center gap-4 md:gap-6">
                                    <span className="text-slate-500 opacity-20 text-5xl md:text-8xl select-none leading-none">0{activeTab + 1}</span>
                                    {curriculum[activeTab].title}
                                </h3>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
                                    {curriculum[activeTab].topics.map((topic, i) => (
                                        <li key={i} className="flex items-start gap-4 group cursor-default">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(16,185,129,0.5)] flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                            <span className="text-slate-300 text-base md:text-lg group-hover:text-white transition-colors leading-snug">{topic}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="p-6 md:p-8 bg-black/40 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 text-slate-400 text-sm md:text-base font-medium leading-relaxed italic relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-primary-light"></div>
                                    "Each module is backed by live expert-led masterclasses, proprietary toolkits, and private 1-on-1 performance reviews."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Curriculum
