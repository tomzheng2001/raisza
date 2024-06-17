/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import Mask from './_components/Mask';
import SocialMediaIcons from './_components/SocialMediaIcons';
import Navbar from './_components/Navbar';
import { useEffect, useState } from 'react';
import LoadingScreen from './_components/LoadingScreen';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div id="hero" className="min-h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Main Section */}
            <main
                id="home"
                className="bg-lightest-blue flex flex-col h-screen w-screen justify-center items-center py-24"
            >
                <div className="flex flex-col md:flex-row h-full w-full justify-around items-center px-4 md:px-8 py-24">
                    <div className="flex flex-col h-full justify-around max-w-md mx-4 md:ml-8">
                        <div className="flex flex-col h-full w-full justify-around items-center">
                            <div />
                            <div className="text-left p-4 space-y-4">
                                <h1 className="text-3xl md:text-6xl font-sans font-bold text-gray-800">
                                    Raisza Lucho
                                </h1>
                                <p className="text-lg md:text-2xl text-gray-600 mt-4 font-thin">
                                    anthropologist, uc berkeley graduate, ex pro
                                    fencer, and avid reader
                                </p>
                            </div>
                            <SocialMediaIcons />
                        </div>
                    </div>
                    <div className="flex flex-col items-center max-h-full max-w-2 mx-4 md:ml-8 mb-8">
                        <Mask />
                    </div>
                    <div className="flex flex-col items-center h-full max-w-md mx-4 md:ml-8 md:mr-8">
                        <Image
                            src="/girl-photo.jpg"
                            width={200}
                            height={200}
                            alt="Fencer's Photo"
                            className="w-full h-full rounded-full border-8 border-black mb-4 shadow-lg"
                        />
                    </div>
                </div>
            </main>

            {/* About Section */}
            <section
                id="about"
                className="h-screen flex justify-center items-center bg-blue-100"
            >
                <div className="text-center p-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        About Me
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-4">
                        Detailed description about Raisza Lucho's background,
                        career, and interests.
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section
                id="gallery"
                className="h-screen flex justify-center items-center bg-green-100"
            >
                <div className="text-center p-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Gallery
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-4">
                        A collection of images and moments from Raisza's life
                        and career.
                    </p>
                </div>
            </section>

            {/* Achievements Section */}
            <section
                id="achievements"
                className="h-screen flex justify-center items-center bg-yellow-100"
            >
                <div className="text-center p-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Achievements
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-4">
                        Highlighting the significant achievements and milestones
                        of Raisza Lucho.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="h-screen flex justify-center items-center bg-red-100"
            >
                <div className="text-center p-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Contact
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mt-4">
                        Ways to get in touch with Raisza Lucho.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-lightest-blue bg-opacity-80 text-center py-4 shadow-md">
                <p>Built & Designed by Tom Zheng @ 2024</p>
            </footer>
        </div>
    );
}
