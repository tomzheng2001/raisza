import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const LoadingScreen: React.FC = () => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        const updateDimensions = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        if (typeof window !== 'undefined') {
            updateDimensions();
            window.addEventListener('resize', updateDimensions);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', updateDimensions);
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
            {width && height && <Confetti width={width} height={height} />}
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
