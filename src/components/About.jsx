import React from 'react'

const About = () => {
    return (
        <section id="about" className="py-32 bg-slate-900 overflow-hidden relative">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary-light/5 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-3xl rounded-full"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[10px] md:text-xs font-black tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
                            Our Mission
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 md:mb-10 leading-[1.1] tracking-tight">
                            Bridging the Gap for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-purple-400">Zim's Next Visionaries</span>
                        </h2>
                        <div className="space-y-6 md:space-y-8 text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                            <p>
                                MyFounders Club is a elite, virtual incubator designed for the hungry and the bold—those who have the drive but lack traditional accelerator access.
                            </p>
                            <div className="p-6 md:p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl md:rounded-3xl border border-slate-700/50 backdrop-blur-md relative group">
                                <h3 className="text-white font-bold text-lg md:text-xl mb-3 flex items-center gap-2">
                                    <div className="w-2 h-6 bg-primary-light rounded-full"></div>
                                    The Core Model
                                </h3>
                                <p className="text-slate-300 text-sm md:text-base">A 10-week high-octane program delivering expert-led workshops, on-demand global resources, and 1-on-1 mentorship—all for a symbolic entry fee.</p>
                            </div>
                            <p>
                                Our obsession is turning your concept into an <span className="text-white">investment-ready powerhouse</span>. We focus on brutal practical execution and precision business planning.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative">
                        <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-transform duration-700">
                            <div className="h-[350px] md:h-[500px] bg-gradient-to-br from-primary-dark via-slate-900 to-primary-light/20 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] opacity-20 mix-blend-overlay grayscale"></div>
                                <div className="text-center p-8 md:p-12 relative z-20">
                                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 backdrop-blur-xl border border-white/20 rotate-12 group-hover:rotate-0 transition-transform">
                                        <svg className="w-8 h-8 md:w-12 md:h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-3xl md:text-4xl font-black text-white tracking-tighter">10-WEEK <br /> INTENSIVE</p>
                                    <div className="mt-4 md:mt-6 inline-flex items-center gap-2 text-accent font-bold tracking-widest text-[10px] md:text-xs uppercase bg-accent/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                                        Mentorship Live
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-light/20 blur-[80px] rounded-full"></div>
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/10 blur-[80px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
