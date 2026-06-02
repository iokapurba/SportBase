import React from 'react';
import { sportsData } from '../data/sportsData';

export default function ExplorerView({ navigateToSport }) {
    return (
        <div className="container mx-auto px-6 py-10 animate-fade-in-up">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-display mb-4">THE <span className="text-sport-gold">EXPLORER</span></h1>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">Dari lapangan, kolam, arena tinju hingga sirkuit aspal. Pilih arena Anda dan ketahui seluk-beluknya secara instan.</p>
                <div className="w-32 h-1 bg-gradient-to-r from-sport-red to-sport-gold mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sportsData.map((sport, index) => (
                    <div key={sport.id}
                        onClick={() => navigateToSport(sport.id)}
                        className={`relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden cursor-pointer group animate-fade-in-up`}
                        style={{ animationDelay: `${index * 0.05}s` }}>
                        <div className="h-48 bg-gray-800 flex items-center justify-center relative overflow-hidden group-hover:bg-sport-navy transition-colors duration-500">
                            <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-sport-red/50 to-transparent mix-blend-overlay group-hover:opacity-40 transition-opacity"></div>
                            <div className="text-[120px] transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl">{sport.emoji}</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-display text-white group-hover:text-sport-gold transition-colors">{sport.name}</h3>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-xs font-bold text-gray-500 tracking-widest uppercase truncate w-3/4">{sport.founder || sport.origin}</span>
                                <span className="text-gray-600 group-hover:text-white transition-colors">➜</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}