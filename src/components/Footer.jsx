import React from 'react'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex flex-col items-start gap-3 mb-8 group">
                            <Logo className="h-12 -ml-6 group-hover:scale-105 transition-transform duration-500" />
                            <h2 className="sr-only">MyFounders Club</h2>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                            Empowering the next generation of Zimbabwean entrepreneurs through structured learning and global mentorship. Join our premium virtual incubator today.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: 'Twitter', href: '#' },
                                { name: 'LinkedIn', href: '#' },
                                { name: 'Instagram', href: 'https://www.instagram.com/myfounders_club?igsh=MWVrOTh6Y25jNmV6eA==' }
                            ].map(social => (
                                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-light transition-colors group">
                                    <span className="sr-only">{social.name}</span>
                                    <div className="w-5 h-5 bg-slate-400 group-hover:bg-white transition-colors"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Links</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a href="#about" className="hover:text-primary-light transition-colors font-medium">About Us</a></li>
                            <li><a href="#features" className="hover:text-primary-light transition-colors font-medium">Features</a></li>
                            <li><a href="#curriculum" className="hover:text-primary-light transition-colors font-medium">Curriculum</a></li>
                            <li><a href="#partners" className="hover:text-primary-light transition-colors font-medium">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h3>
                        <p className="text-slate-400 mb-6">Have questions? Reach out to our team directly via WhatsApp.</p>
                        <div className="space-y-4">
                            <a
                                href="https://wa.me/447467492680"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-primary-light hover:text-white transition-colors font-bold group"
                            >
                                <div className="p-2 bg-primary-light/10 rounded-lg group-hover:bg-primary-light group-hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </div>
                                +44 7467 492680
                            </a>
                            <a
                                href="https://wa.me/263789756916"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-primary-light hover:text-white transition-colors font-bold group"
                            >
                                <div className="p-2 bg-primary-light/10 rounded-lg group-hover:bg-primary-light group-hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </div>
                                +263 7 89 756916
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
                    <p>© 2026 MyFounders Club. All rights reserved.</p>
                    <p>
                        Developed By <span className="text-slate-300">Michelle Masiyemvura</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
