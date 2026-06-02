import React from 'react';
import { sportsData } from '../data/sportsData';

export default function HomeView({ navigateToSport, setCurrentPage }) {
    const featured = sportsData.slice(0, 6);
    const sportOfDay = sportsData.find(s => s.id === 'f1');

    return (
        <div className="animate-fade-in-up">
            {/* HERO SECTION */}
            <section className="relative h-[85vh] flex items-center bg-arena-pattern mt-[-5rem]">
                <div className="absolute inset-0 bg-gradient-to-t from-sport-navy via-sport-navy/80 to-transparent z-10"></div>
                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-3xl">
                        <div className="inline-block px-3 py-1 bg-sport-red/20 border border-sport-red text-sport-red font-bold tracking-widest text-sm rounded-full mb-4 stagger-1 animate-fade-in-up">
                            ENSIKLOPEDIA OLAHRAGA TERBAIK
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] mb-6 stagger-2 animate-fade-in-up drop-shadow-2xl">
                            Every <span className="text-sport-gold">Sport.</span><br />
                            Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-sport-red to-orange-500">Story.</span><br />
                            Every Legend.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-xl stagger-3 animate-fade-in-up border-l-4 border-sport-gold pl-4">
                            Jelajahi keagungan sejarah kompetisi, pahami aturan permainannya, dan ikuti perdebatan siapa yang terhebat (GOAT) di seluruh dunia.
                        </p>
                        <div className="flex space-x-4 stagger-3 animate-fade-in-up">
                            <button
                                onClick={() => setCurrentPage('explorer')}
                                className="bg-sport-gold text-black font-display text-xl px-8 py-3 rounded-md hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,197,24,0.3)]">
                                ENTER EXPLORER
                            </button>
                            <button
                                onClick={() => setCurrentPage('goatArena')}
                                className="bg-transparent border-2 border-sport-red text-white font-display text-xl px-8 py-3 rounded-md hover:bg-sport-red transition-all transform hover:scale-105">
                                GOAT ARENA
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHT: SPORT OF THE DAY */}
            <section className="container mx-auto px-6 py-16 -mt-20 relative z-30">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden group hover:border-sport-gold/50 transition-colors">
                    <div className="absolute -right-20 -top-20 text-[200px] opacity-5 group-hover:opacity-10 transition-opacity rotate-12">{sportOfDay.emoji}</div>

                    <div className="w-full md:w-1/3 text-center bg-black/40 rounded-xl p-8 border border-gray-700 backdrop-blur-sm">
                        <span className="text-sport-gold font-bold tracking-widest text-sm mb-2 block">SPORT OF THE DAY</span>
                        <div className="text-8xl mb-4">{sportOfDay.emoji}</div>
                        <h2 className="text-4xl font-display">{sportOfDay.name}</h2>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h3 className="text-2xl font-display text-gray-200 mb-2">TENTANG {sportOfDay.name.toUpperCase()}</h3>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            {sportOfDay.history.slice(0, 150)}...
                        </p>
                        <button
                            onClick={() => navigateToSport(sportOfDay.id)}
                            className="text-sport-gold font-bold tracking-widest border-b-2 border-sport-gold pb-1 hover:text-white hover:border-white transition-colors">
                            BACA SELENGKAPNYA ➜
                        </button>
                    </div>
                </div>
            </section>

            {/* FEATURED SPORTS */}
            <section className="container mx-auto px-6 py-10">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display tracking-wide">Featured <span className="text-sport-red">Sports</span></h2>
                        <div className="w-20 h-1 bg-sport-gold mt-2"></div>
                    </div>
                    <button
                        onClick={() => setCurrentPage('explorer')}
                        className="hidden md:block font-bold text-gray-400 hover:text-white transition">
                        Lihat Semua ({sportsData.length})
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featured.map(sport => (
                        <div key={sport.id}
                            onClick={() => navigateToSport(sport.id)}
                            className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-sport-gold/60 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 group group-hover:shadow-[0_10px_30px_rgba(245,197,24,0.1)]">
                            <div className="text-6xl mb-4">{sport.emoji}</div>
                            <h3 className="text-2xl font-display mb-2 group-hover:text-sport-gold transition-colors">{sport.name}</h3>
                            <p className="text-sm font-bold text-gray-500 mb-4 tracking-widest uppercase">From: {sport.origin}</p>
                            <p className="text-gray-400 text-sm line-clamp-2">
                                {sport.history}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}