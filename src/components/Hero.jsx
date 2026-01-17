import React from 'react'
import Logo from './Logo'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white pt-20">
            {/* Background patterns/effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(109,40,217,0.15),transparent_70%)]"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-light/10 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="mb-10 inline-block animate-fade-in group">
                    <Logo className="md:scale-[2.5] scale-[2] mx-auto filter group-hover:brightness-110 transition-all duration-500" />
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight px-4 md:px-0">
                    BUILD THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-purple-400 to-accent">NEXT BIG THING.</span>
                </h1>

                <p className="text-lg md:text-2xl text-slate-400 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-6 md:px-0">
                    The premium virtual incubator for Zimbabwe's boldest founders.
                    <span className="text-white"> $50 Entry fee.</span> 10 weeks to investment-ready.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeZk59ZmQvm_-7eQ4bHxZyzNr-UIWSD-LCeAxHCZW96-IUKgg/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-primary-light hover:bg-primary rounded-full font-bold text-base md:text-lg transition-all shadow-[0_0_30px_rgba(109,40,217,0.4)] transform hover:-translate-y-1 hover:scale-105"
                    >
                        Apply Now - $50 Entry
                        <div className="absolute inset-0 rounded-full border-2 border-primary-light/50 animate-ping group-hover:hidden"></div>
                    </a>
                    <a
                        href="#about"
                        className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800 rounded-full font-bold text-base md:text-lg transition-all transform hover:-translate-y-1"
                    >
                        Learn More
                    </a>
                </div>

                <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-8 text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div> 10 Week Program</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-light rounded-full"></div> Global Mentors</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Investment Ready</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}

export default Hero
