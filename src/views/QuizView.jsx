import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';

export default function QuizView() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleAnswer = (option) => {
        setSelected(option);
        setTimeout(() => {
            if (option === quizQuestions[currentIdx].answer) {
                setScore(score + 1);
            }
            if (currentIdx + 1 < quizQuestions.length) {
                setCurrentIdx(currentIdx + 1);
                setSelected(null);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentIdx(0);
        setScore(0);
        setShowResult(false);
        setSelected(null);
    }

    return (
        <div className="container mx-auto px-6 py-10 min-h-[70vh] flex items-center justify-center animate-fade-in-up">
            <div className="w-full max-w-2xl bg-gray-900/80 border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">

                {showResult ? (
                    <div className="text-center animate-fade-in-up">
                        <h2 className="text-6xl text-[80px] mb-4">🏆</h2>
                        <h2 className="text-5xl font-display mb-2">KUIS SELESAI</h2>
                        <p className="text-2xl text-gray-300 font-medium mb-8">
                            Skor Anda: <span className="text-sport-gold font-bold text-5xl ml-2">{score}</span> / {quizQuestions.length}
                        </p>
                        <p className="text-gray-400 italic mb-8">
                            {score === quizQuestions.length ? "Luar biasa! Pengetahuan Anda setingkat pakar ESPN!" :
                                score >= 3 ? "Bagus sekali! Anda penggemar olahraga sejati." :
                                    "Teruslah eksplorasi SportBase untuk memperdalam pengetahuan olahraga Anda!"}
                        </p>
                        <button
                            onClick={resetQuiz}
                            className="bg-sport-gold text-black font-display text-xl px-8 py-3 rounded-md hover:bg-white transition-all transform hover:scale-105">
                            MAINKAN LAGI
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-between items-center text-gray-400 font-bold tracking-widest text-sm mb-6 border-b border-gray-800 pb-4">
                            <span>PERTANYAAN {currentIdx + 1} DARI {quizQuestions.length}</span>
                            <span className="text-sport-gold">SKOR: {score}</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 text-white min-h-[80px]">
                            {quizQuestions[currentIdx].question}
                        </h2>

                        <div className="space-y-4">
                            {quizQuestions[currentIdx].options.map((option, idx) => {
                                const isSelected = selected === option;
                                const isCorrect = option === quizQuestions[currentIdx].answer;

                                let btnStyle = "bg-gray-800 border-gray-700 hover:border-sport-gold/50 hover:bg-gray-800/80 text-white";
                                if (selected) {
                                    if (isSelected && isCorrect) btnStyle = "bg-green-600 border-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]";
                                    else if (isSelected && !isCorrect) btnStyle = "bg-red-600 border-red-500 text-white";
                                    else if (!isSelected && isCorrect) btnStyle = "bg-green-600/50 border-green-500 text-white";
                                    else btnStyle = "bg-gray-800 border-gray-700 opacity-50";
                                }

                                return (
                                    <button
                                        key={idx}
                                        disabled={selected !== null}
                                        onClick={() => handleAnswer(option)}
                                        className={`w-full text-left p-5 rounded-xl border-2 font-body text-xl font-medium transition-all duration-300 ${btnStyle}`}
                                    >
                                        <span className="inline-block bg-black/30 rounded px-3 py-1 mr-4 font-display opacity-80 text-lg">
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        {option}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}