import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black/80 py-10 border-t border-gray-800 mt-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-display italic tracking-wider opacity-30 mb-2">SPORTBASE</h2>
                <p className="text-gray-500 font-bold tracking-widest text-sm mb-6 uppercase">"Every Sport. Every Story. Every Legend."</p>
                <div className="flex justify-center space-x-6 text-gray-500 mb-6 font-semibold">
                    <a href="#" className="hover:text-sport-gold transition">Tentang Kami</a>
                    <a href="#" className="hover:text-sport-gold transition">Kebijakan Data</a>
                    <a href="#" className="hover:text-sport-gold transition">Hubungi</a>
                </div>
                <p className="text-xs text-gray-700">© 2026 SportBase. All rights reserved.</p>
            </div>
        </footer>
    );
}