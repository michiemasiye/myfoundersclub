import React, { useState, useEffect } from 'react'
import Logo from './Logo'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Features', href: '#features' },
        { name: 'Curriculum', href: '#curriculum' },
        { name: 'Partners', href: '#partners' },
    ]

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-900/90 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
                        <Logo className="h-10 transform group-hover:scale-105 transition-transform" />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold tracking-widest text-slate-300 hover:text-white transition-all uppercase relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="https://wa.me/447467492680"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-gradient-to-r from-primary-light to-primary-dark hover:shadow-[0_0_20px_rgba(109,40,217,0.4)] text-white rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                        >
                            Join Club
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden relative z-[70] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 bg-slate-950 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            className={`text-3xl font-black uppercase tracking-[0.2em] text-white hover:text-primary-light transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/447467492680"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className={`mt-6 px-12 py-5 bg-white text-primary-dark rounded-full text-xl font-black uppercase tracking-widest transition-all shadow-2xl ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
