'use client';
import React, { useEffect, useState } from 'react';

const words = [
    'anthropologist',
    'golden bear',
    'ex-pro fencer',
    'peruvian',
    'avid reader',
];

const SlidingWords = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-10 mt-6 overflow-hidden">
            {words.map((word, index) => (
                <span
                    key={index}
                    className={`absolute text-lg md:text-2xl text-gray-600 font-thin top-0 transition-transform duration-500 ease-in-out ${
                        index === currentIndex
                            ? 'animate-slideIn animate-shake opacity-100'
                            : 'animate-slideOut opacity-0'
                    }`}
                >
                    {word}
                </span>
            ))}
        </div>
    );
};

export default SlidingWords;
