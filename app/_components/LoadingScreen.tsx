import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const LoadingScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
            <Confetti width={width} height={height} />
            <h1 className="text-3xl md:text-5xl font-bold animate-pulse">
                Happy 9 Month Anniversary Baby!
            </h1>
            <div className="relative mt-8">
                <div className="heart heart1"></div>
                <div className="heart heart2"></div>
                <div className="heart heart3"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
