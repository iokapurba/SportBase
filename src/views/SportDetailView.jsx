import React, { useState } from 'react';

export default function SportDetailView({ sport, setCurrentPage }) {
    const [activeTab, setActiveTab] = useState('howtoplay');

    if (!sport) return null;

    return (
        <div className="animate-fade-in-up pb-20">
            {/* HEADER HERO */}
            <div className="bg-gradient-to-b from-gray-900 to-sport-navy pt-16 pb-8 border-b border-gray-800">
                <div className="container mx-auto px-6 flex flex-col items-center text-center">
                    <button onClick={() => setCurrentPage('explorer')} className="text-gray-400 hover:text-white self-start font-bold mb-4">
                        ← Kembali ke Explorer
                    </button>

                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-black border-4 border-sport-gold flex items-center justify-center text-[80px] md:text-[100px] mb-6 glow-gold shadow-2xl">
                        {sport.emoji}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display uppercase">{sport.name}</h1>
                    <p className="text-gray-400 font-bold tracking-widest mt-2 uppercase">{sport.origin} | BY {sport.founder}</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-10">

                {/* 🔥 NEW: HOT TOPIC BANNER SECTION */}
                {sport.trendingTopic && (
                    <div className="bg-gradient-to-r from-sport-red to-orange-700 rounded-2xl p-6 md:p-8 mb-12 text-white shadow-[0_10px_30px_rgba(232,52,26,0.25)] relative overflow-hidden flex flex-col md:flex-row items-center gap-6 animate-fade-in-up border border-orange-500/50">
                        {/* Background design elements */}
                        <div className="absolute -right-10 -bottom-10 text-[180px] opacity-10 rotate-12 pointer-events-none">🔥</div>
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none"></div>

                        <div className="text-6xl md:text-5xl backdrop-blur-md bg-black/20 p-4 rounded-2xl shadow-inner border border-white/20 shrink-0 transform -rotate-6">
                            🗞️
                        </div>

                        <div className="flex-1 relative z-10 text-center md:text-left">
                            <span className="inline-block bg-black/50 text-sport-gold font-bold text-xs tracking-widest px-3 py-1 rounded-full mb-3 uppercase shadow-md border border-sport-gold/30">
                                • HOT ISSUE
                            </span>
                            <h4 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{sport.trendingTopic}</h4>
                            <p className="text-sm md:text-base text-gray-100 font-medium max-w-4xl opacity-90 leading-relaxed text-justify md:text-left">
                                {sport.trendingDetail}
                            </p>
                        </div>
                    </div>
                )}

                {/* TAB NAVIGATION */}
                <div className="flex overflow-x-auto space-x-4 md:space-x-8 border-b border-gray-800 mb-10 pb-4 no-scrollbar">
                    {[
                        { id: 'howtoplay', label: 'ATURAN MAIN' },
                        { id: 'history', label: 'SEJARAH' },
                        { id: 'goat', label: 'GOAT DEBATE' },
                        { id: 'facts', label: 'FUN FACTS' },
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap font-display text-xl md:text-2xl tracking-wide transition-colors ${activeTab === tab.id
                                    ? 'text-sport-gold border-b-2 border-sport-gold pb-4 -mb-[18px]'
                                    : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* TAB CONTENT */}
                <div className="min-h-[50vh]">
                    {/* CONTENT: HOW TO PLAY */}
                    {activeTab === 'howtoplay' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in-up">
                            <div className="bg-gray-900/40 p-8 rounded-2xl border border-gray-800 shadow-xl backdrop-blur-sm">
                                <h3 className="text-3xl font-display mb-6 text-sport-red flex items-center gap-3">
                                    <span className="text-4xl text-gray-700 opacity-50">01</span> CARA BERMAIN
                                </h3>
                                <ul className="space-y-4">
                                    {sport.howToPlay.map((step, idx) => (
                                        <li key={idx} className="flex gap-4 items-start text-lg">
                                            <span className="text-sport-gold font-bold mt-1 shadow-sm">✓</span>
                                            <span className="text-gray-300 tracking-wide text-justify">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-bl from-sport-red/10 to-transparent p-8 rounded-2xl border border-sport-red/30 shadow-xl">
                                <h3 className="text-3xl font-display mb-6 text-sport-red flex items-center gap-3">
                                    <span className="text-4xl opacity-30 text-sport-red">02</span> PERATURAN RESMI
                                </h3>
                                <ul className="space-y-5">
                                    {sport.rules.map((rule, idx) => {
                                        const parts = rule.split(':');
                                        return (
                                            <li key={idx} className="bg-black/60 p-5 rounded-lg border-l-4 border-sport-red shadow-md hover:bg-black/80 transition-colors">
                                                {parts.length > 1 ? (
                                                    <>
                                                        <strong className="text-white font-bold block mb-2 tracking-wide">{parts[0]}</strong>
                                                        <span className="text-gray-400 text-justify block">{parts.slice(1).join(':')}</span>
                                                    </>
                                                ) : (
                                                    <span className="text-gray-300 text-justify">{rule}</span>
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* CONTENT: HISTORY */}
                    {activeTab === 'history' && (
                        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800 relative shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-fade-in-up">
                            <div className="text-[200px] absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none transform -rotate-12">📜</div>
                            <h2 className="text-4xl font-display mb-8 text-sport-gold italic tracking-widest uppercase border-l-4 border-sport-gold pl-4">ASAL MULA {sport.name}</h2>
                            <p className="text-xl leading-relaxed text-gray-300 text-justify indent-8 tracking-wide font-medium">
                                {sport.history}
                            </p>
                        </div>
                    )}

                    {/* CONTENT: GOAT */}
                    {activeTab === 'goat' && (
                        <div className="animate-fade-in-up">
                            <div className="text-center mb-12">
                                <h2 className="text-5xl font-display text-white italic drop-shadow-lg"><span className="text-sport-red">WHO IS</span> THE GREATEST?</h2>
                                <p className="text-gray-400 mt-2 tracking-widest uppercase text-sm">Pertempuran puncak dari para legenda {sport.name}</p>
                                <div className="w-24 h-1 bg-gradient-to-r from-sport-red to-sport-gold mx-auto mt-4 rounded-full opacity-50"></div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-4 items-stretch">
                                {sport.goatCandidates.map((candidate, idx) => (
                                    <React.Fragment key={candidate.name}>
                                        <div className="flex-1 bg-gradient-to-bl from-gray-800 to-[#0a0e1a] border border-gray-700 rounded-xl p-6 relative overflow-hidden group hover:border-sport-gold/60 transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(245,197,24,0.15)] hover:-translate-y-1">
                                            <div className="absolute top-0 right-0 p-4 text-4xl opacity-[0.08] font-display italic tracking-widest group-hover:text-sport-gold group-hover:opacity-20 transition-all">LEGEND</div>
                                            <h3 className="text-3xl font-display text-white mb-2 group-hover:text-sport-gold transition-colors">{candidate.name}</h3>
                                            <span className="bg-gray-700/50 text-xs px-3 py-1 rounded font-bold text-gray-300 tracking-wider border border-gray-600 shadow-inner">{candidate.era}</span>

                                            <div className="mt-8 space-y-4">
                                                <div className="flex justify-between border-b border-gray-700/50 pb-2 items-center">
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Rekor / Gelar</span>
                                                    <span className="text-sport-gold font-bold text-right text-sm md:text-base w-1/2">{candidate.keyStats.rings}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-gray-700/50 pb-2 items-center">
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Scoring / Laps</span>
                                                    <span className="text-white font-bold text-right text-sm md:text-base w-1/2">{candidate.keyStats.scoring}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-gray-700/50 pb-2 items-center">
                                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Prestasi Super</span>
                                                    <span className="text-sport-red font-bold text-right text-sm md:text-base w-1/2">{candidate.keyStats.mvps}</span>
                                                </div>
                                            </div>

                                            <div className="mt-6 bg-black/60 p-5 rounded-lg italic text-sm text-gray-300 border-l-2 border-sport-gold leading-relaxed shadow-inner">
                                                "{candidate.argument}"
                                            </div>
                                        </div>
                                        {/* Add VS element EXCEPT after the last card */}
                                        {idx < sport.goatCandidates.length - 1 && (
                                            <div className="flex items-center justify-center">
                                                <div className="w-14 h-14 bg-gradient-to-tr from-sport-red to-red-900 border-2 border-black text-white font-display text-2xl flex items-center justify-center rounded-full z-10 shadow-[0_0_20px_rgba(232,52,26,0.8)] animate-pulse my-[-15px] md:my-0">
                                                    VS
                                                </div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CONTENT: FUN FACTS */}
                    {activeTab === 'facts' && (
                        <div className="max-w-4xl mx-auto animate-fade-in-up">
                            <h2 className="text-4xl font-display mb-8 text-sport-gold text-center tracking-wide drop-shadow-md">TAHUKAH KAMU?</h2>
                            <div className="space-y-5">
                                {sport.funFacts.map((fact, idx) => (
                                    <div key={idx} className="bg-gray-900/60 border border-gray-700 p-6 rounded-xl flex flex-col md:flex-row gap-4 md:gap-6 items-center hover:bg-gray-800 hover:border-sport-gold/40 transition-colors shadow-lg group">
                                        <div className="text-5xl font-display text-gray-700 opacity-40 md:w-16 text-center group-hover:text-sport-gold group-hover:opacity-80 transition-colors">
                                            {(idx + 1).toString().padStart(2, '0')}
                                        </div>
                                        <p className="text-lg text-gray-300 font-medium tracking-wide text-center md:text-left leading-relaxed">{fact}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}