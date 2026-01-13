import React from 'react'

const features = [
    {
        title: 'Investment-Ready Plans',
        description: 'We prioritize creating a robust, investor-ready business plan as your core deliverable.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Global Mentors',
        description: 'Tap into global accelerator networks and seasoned entrepreneurs with international best practices.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        title: 'Integrated Booking',
        description: 'Seamless 1-on-1 scheduling via Calendly ensures you get support exactly when you need it.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Idea Protection',
        description: 'Your IP is safe—all mentor interactions are covered by mutual non-disclosure agreements.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
]

const Features = () => {
    return (
        <section id="features" className="py-32 bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-primary-light uppercase bg-primary-light/10 rounded-full border border-primary-light/20">
                        The Advantage
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">MyFounders Club?</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">Specific advantages that set our program apart from generic entrepreneurship courses.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-10 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-primary-light/50 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary-light/10 transition-colors"></div>

                            <div className="w-14 h-14 bg-gradient-to-br from-primary-light to-primary-dark rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary-light/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
