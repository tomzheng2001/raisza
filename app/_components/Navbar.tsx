'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-darkest-blue fixed w-full flex justify-between items-center px-8 py-4 shadow-md z-20">
            <div className="flex items-center">
                <Image width={50} height={50} src="/rlogo.png" alt="logo" />
            </div>
            <div className="flex items-center space-x-6">
                <div className="hidden md:flex space-x-6">
                    <a
                        href="#home"
                        className="nav-link font-sans font-semibold"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="nav-link font-sans font-semibold"
                    >
                        About
                    </a>
                    <a
                        href="#gallery"
                        className="nav-link font-sans font-semibold"
                    >
                        Gallery
                    </a>
                    <a
                        href="#contact"
                        className="nav-link font-sans font-semibold"
                    >
                        Contact
                    </a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-blue-600 w-full absolute top-16 left-0 z-20 py-4 space-y-4">
                    <a href="#home" className="nav-link" onClick={toggleMenu}>
                        Home
                    </a>
                    <a href="#about" className="nav-link" onClick={toggleMenu}>
                        About
                    </a>
                    <a
                        href="#gallery"
                        className="nav-link"
                        onClick={toggleMenu}
                    >
                        Gallery
                    </a>
                    <a
                        href="#achievements"
                        className="nav-link"
                        onClick={toggleMenu}
                    >
                        Achievements
                    </a>
                    <a
                        href="#contact"
                        className="nav-link"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
``;
