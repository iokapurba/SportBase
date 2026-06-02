import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import ExplorerView from './views/ExplorerView';
import SportDetailView from './views/SportDetailView';
import GoatArenaView from './views/GoatArenaView';
import QuizView from './views/QuizView';
import { sportsData } from './data/sportsData';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [activeSport, setActiveSport] = useState(null);

    const navigateToSport = (sportId) => {
        const s = sportsData.find(s => s.id === sportId);
        setActiveSport(s);
        setCurrentPage('sportDetail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

            <main className="pt-20 min-h-screen">
                {currentPage === 'home' && <HomeView navigateToSport={navigateToSport} setCurrentPage={setCurrentPage} />}
                {currentPage === 'explorer' && <ExplorerView navigateToSport={navigateToSport} />}
                {currentPage === 'sportDetail' && <SportDetailView sport={activeSport} setCurrentPage={setCurrentPage} />}
                {currentPage === 'goatArena' && <GoatArenaView />}
                {currentPage === 'quiz' && <QuizView />}
            </main>

            <Footer />
        </>
    );
}