import React from 'react'

const CTA = () => {
    return (
        <section className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <div className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-primary-dark to-slate-900 p-12 md:p-24 text-center shadow-[0_30px_60px_-12px_rgba(109,40,217,0.3)] border border-white/5">
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(109,40,217,0.2),transparent_50%)]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,rgba(16,185,129,0.1),transparent_50%)]"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="inline-block px-6 py-2 mb-8 text-xs font-black tracking-[0.4em] text-white uppercase bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
                            Limited Slots for Cohort 1
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-white leading-tight">Ready to Build Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-purple-300 to-accent">Legacy?</span></h2>
                        <p className="text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed font-medium">
                            Join the next elite cohort of Zimbabwean entrepreneurs. <br className="hidden md:block" />
                            Secure your spot for just <span className="text-white font-bold">$50 via EcoCash.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeZk59ZmQvm_-7eQ4bHxZyzNr-UIWSD-LCeAxHCZW96-IUKgg/viewform?usp=publish-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-12 py-6 bg-white text-primary-dark font-black rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-white/20 z-10"
                            >
                                Apply Now
                                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20 group-hover:hidden"></div>
                            </a>
                            <a
                                href="https://wa.me/263789756916"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-6 bg-transparent border-2 border-white/20 text-white font-black rounded-full text-xl hover:bg-white/5 transition-all"
                            >
                                Chat with Mentor
                            </a>
                        </div>

                        <p className="mt-12 text-sm text-slate-500 font-bold uppercase tracking-widest">
                            *Secure payment handled via EcoCash after application.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
