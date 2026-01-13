import React from 'react'

const Logo = ({ className = "h-12", textColor = "text-white" }) => {
    return (
        <div className={`flex flex-col items-center justify-center pointer-events-none select-none ${className}`}>
            <div className={`font-['Mrs_Saint_Delafield'] text-4xl md:text-5xl leading-none ${textColor} drop-shadow-[0_0_10px_rgba(109,40,217,0.3)]`}>
                MyFounders
            </div>
            <div className={`text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] ${textColor} opacity-80 mt-[-5px] translate-x-2`}>
                CLUB
            </div>
        </div>
    )
}

export default Logo
