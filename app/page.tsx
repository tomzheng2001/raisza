/* eslint-disable react/no-unescaped-entities */
'use client';
import { useEffect, useState, lazy, Suspense } from 'react';
import Image from 'next/image';
import SocialMediaIcons from './_components/SocialMediaIcons';
import Navbar from './_components/Navbar';
import LoadingScreen from './_components/LoadingScreen';
import Sword from './_components/Sword';
import SlidingWords from './_components/SlidingWords';
import ProfileImage from './_components/ProfileImage';

const Gallery = lazy(() => import('./_components/Gallery'));

const images = [
    // Front
    {
        position: [0, 0, 1.5],
        rotation: [0, 0, 0],
        url: 'img1.jpg',
        msg: 'Catalina Island-California-USA',
    },
    // Back
    {
        position: [-0.8, 0, -0.6],
        rotation: [0, 0, 0],
        url: 'img2.jpg',
        msg: 'Berkeley-California-USA',
    },
    {
        position: [0.8, 0, -0.6],
        rotation: [0, 0, 0],
        url: 'img3.jpg',
        msg: 'Berkeley-California-USA',
    },
    // Left
    {
        position: [-1.75, 0, 0.25],
        rotation: [0, Math.PI / 2.5, 0],
        url: 'img4.jpg',
        msg: 'Lima-Peru',
    },
    {
        position: [-2.15, 0, 1.5],
        rotation: [0, Math.PI / 2.5, 0],
        url: 'img5.jpg',
        msg: 'Atlanta-Georgia-USA',
    },
    {
        position: [-2, 0, 2.75],
        rotation: [0, Math.PI / 2.5, 0],
        url: 'img6.jpg',
        msg: 'Huacachina-Peru',
    },
    // Right
    {
        position: [1.75, 0, 0.25],
        rotation: [0, -Math.PI / 2.5, 0],
        url: 'img7.jpg',
        msg: 'Berkeley-California-USA',
    },
    {
        position: [2.15, 0, 1.5],
        rotation: [0, -Math.PI / 2.5, 0],
        url: 'img8.jpg',
        msg: 'Huacachina-Peru',
    },
    {
        position: [2, 0, 2.75],
        rotation: [0, -Math.PI / 2.5, 0],
        url: 'img9.jpg',
        msg: 'Fairfield-California-USA',
    },
];

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
            <div id="hero" className={`min-h-screen flex flex-col`}>
                {/* Navbar */}
                <Navbar />
                {/* Main Section */}
                <main
                    id="home"
                    className="bg-lightest-blue h-screen w-screen justify-center items-center py-24 px-36"
                >
                    <div className="flex flex-col md:flex-row h-full w-full justify-around items-center px-4 md:px-8 py-24">
                        <div className="flex flex-col h-full justify-around max-w-md mx-4 md:ml-8">
                            <div className="flex flex-col h-full w-full justify-around items-left">
                                <div className="text-left p-4 space-y-4">
                                    <h1 className="text-4xl md:text-6xl font-sans font-bold text-gray-800">
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
                                <div />
                            </div>
                        </div>
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
                    <Suspense fallback={<LoadingScreen />}>
                        <Gallery images={images} />
                    </Suspense>
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
