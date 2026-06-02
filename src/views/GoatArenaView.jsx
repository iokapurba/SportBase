import React from 'react';
import { sportsData } from '../data/sportsData';

export default function GoatArenaView() {
    return (
        <div className="container mx-auto px-6 py-10 animate-fade-in-up">
            <div className="text-center mb-16">
                <h1 className="text-6xl md:text-8xl font-display uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-sport-gold to-orange-700 drop-shadow-lg">
                    GOAT ARENA
                </h1>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                    Debat tiada akhir dari setiap penjuru lapangan. Tidak ada statistik yang bohong, namun sejarah bisa dilihat dari berbagai sudut pandang.
                </p>
            </div>

            <div className="space-y-20">
                {sportsData.map((sport) => (
                    <div key={sport.id} className="relative z-0">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent -z-10"></div>

                        <div className="text-center mb-8">
                            <span className="bg-black text-sport-gold border border-gray-700 px-6 py-2 rounded-full font-bold tracking-widest uppercase text-sm inline-flex items-center gap-2">
                                {sport.emoji} {sport.name} THE GREATEST
                            </span>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10">
                            {sport.goatCandidates.length >= 2 ? (
                                <>
                                    {/* Candidate A (Left) */}
                                    <div className="bg-gradient-to-r from-gray-900 to-black w-full lg:w-5/12 border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                                        <div className="text-right flex-1">
                                            <h3 className="text-3xl font-display mb-1">{sport.goatCandidates[0].name}</h3>
                                            <p className="text-sm font-bold text-gray-500 uppercase">{sport.goatCandidates[0].keyStats.rings}</p>
                                        </div>
                                        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 text-3xl font-display text-gray-500 border-2 border-sport-red">
                                            {sport.goatCandidates[0].name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>

                                    {/* VS Circle */}
                                    <div className="w-16 h-16 bg-sport-navy border-4 border-sport-gold text-sport-gold font-display text-2xl flex items-center justify-center flex-shrink-0 rounded-full glow-gold shadow-[0_0_20px_rgba(245,197,24,0.3)] my-[-20px] lg:my-0 z-10 relative">
                                        VS
                                    </div>

                                    {/* Candidate B (Right) */}
                                    <div className="bg-gradient-to-l from-gray-900 to-black w-full lg:w-5/12 border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col-reverse md:flex-row gap-6 items-center">
                                        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 text-3xl font-display text-gray-500 border-2 border-blue-600">
                                            {sport.goatCandidates[1].name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="text-left flex-1">
                                            <h3 className="text-3xl font-display mb-1">{sport.goatCandidates[1].name}</h3>
                                            <p className="text-sm font-bold text-gray-500 uppercase">{sport.goatCandidates[1].keyStats.rings}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="text-gray-500 italic">Data debat untuk olaharaga ini belum dikonfigurasi.</div>
                            )}
                        </div>

                        {sport.goatCandidates.length > 2 && (
                            <div className="text-center mt-6">
                                <span className="text-gray-600 text-sm font-bold uppercase tracking-wider">Also In Debate:</span>
                                <span className="ml-2 text-gray-400 font-display text-lg px-3 py-1 bg-gray-900 border border-gray-800 rounded">
                                    {sport.goatCandidates[2].name}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}