import React, { useState, useEffect } from 'react'

const Partners = () => {
    const fullText = "Partners Coming Soon..."
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [speed, setSpeed] = useState(150)

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length + 1))
                if (displayText.length === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 2000)
                    setSpeed(100)
                }
            } else {
                setDisplayText(fullText.substring(0, displayText.length - 1))
                if (displayText.length === 0) {
                    setIsDeleting(false)
                    setSpeed(150)
                }
            }
        }

        const timer = setTimeout(handleTyping, speed)
        return () => clearTimeout(timer)
    }, [displayText, isDeleting, speed])

    return (
        <section className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 tracking-tight">Ecosystem Partners</h2>
                    <p className="text-slate-400">Collaborating with leading institutions to provide maximum value to our entrepreneurs.</p>
                </div>

                <div className="flex items-center justify-center min-h-[200px] bg-slate-800/30 rounded-3xl border border-slate-700/50 p-10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 tracking-tighter">
                        {displayText}
                        <span className="inline-block w-2 h-10 md:h-14 bg-primary-light ml-2 animate-pulse align-middle"></span>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 mb-6">Want to partner with us or become a mentor?</p>
                    <a href="https://wa.me/447467492680" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white font-bold transition-colors underline underline-offset-8">
                        Get in touch with our team &rarr;
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Partners
