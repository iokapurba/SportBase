import React, { useState, useEffect } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-sport-navy/90 backdrop-blur-md py-3 shadow-[0_5px_20px_rgba(0,0,0,0.5)]' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button
                    onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
                    className="flex items-center space-x-2 group">
                    <span className="text-3xl font-display text-sport-red uppercase italic pr-1 tracking-tighter transition group-hover:drop-shadow-[0_0_10px_rgba(232,52,26,0.8)]">SPORT</span>
                    <span className="text-3xl font-display text-white transition group-hover:text-sport-gold">BASE</span>
                </button>

                <div className="hidden md:flex space-x-8 font-bold tracking-wide text-sm uppercase">
                    {['home', 'explorer', 'goatArena', 'quiz'].map((navItem) => (
                        <button
                            key={navItem}
                            onClick={() => { setCurrentPage(navItem); window.scrollTo(0, 0); }}
                            className={`transition-colors duration-200 ${currentPage === navItem || (currentPage === 'sportDetail' && navItem === 'explorer') ? 'text-sport-gold' : 'text-gray-300 hover:text-white'}`}
                        >
                            {navItem === 'goatArena' ? 'GOAT Arena' : navItem}
                        </button>
                    ))}
                </div>

                <div className="md:hidden text-sport-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
    );
}