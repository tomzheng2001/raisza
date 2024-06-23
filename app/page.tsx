/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import SocialMediaIcons from './_components/SocialMediaIcons';
import Navbar from './_components/Navbar';
import { useEffect, useState } from 'react';
import LoadingScreen from './_components/LoadingScreen';
import Sword from './_components/Sword';
import SlidingWords from './_components/SlidingWords';
import ProfileImage from './_components/ProfileImage';

export default function Home() {
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

    return (
        <>
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
                            <div className="flex flex-col h-full w-full justify-around items-left">
                                <div />
                                <div className="text-left p-4 space-y-4">
                                    <h1 className="text-3xl md:text-6xl font-sans font-bold text-gray-800">
                                        Raisza Lucho
                                    </h1>
                                    <SlidingWords />
                                </div>
                                <SocialMediaIcons />
                                <a className="ml-4" href="/resume.pdf" download>
                                    <button className="resume-button px-6 py-3 font-semibold text-white bg-darkest-blue rounded-md overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                                        <span className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                                        <span className="relative z-200">
                                            Download Resume
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* <div className="flex flex-col items-center max-h-full max-w-2 mx-4 md:ml-8 mb-8">
                            <Sword />
                        </div> */}
                        <ProfileImage />
                    </div>
                </main>

                {/* About Section */}
                <section
                    id="about"
                    className="h-screen w-screen flex justify-center items-center bg-blue-100"
                >
                    <div className="text-center p-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                            About
                        </h2>
                    </div>
                </section>

                {/* Gallery Section */}
                <section
                    id="gallery"
                    className="h-screen w-screen flex justify-center items-center bg-green-100"
                >
                    <div className="text-center p-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                            Gallery
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 mt-4">
                            A collection of images and moments from Raisza's
                            life and career.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section
                    id="contact"
                    className="h-screen w-screen flex justify-center items-center bg-red-100"
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
        </>
    );
}
