import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

const ProfileImage = () => {
    return (
        <div className="relative group w-1/3 h-full">
            <Image
                src="/girl-photo.jpg"
                width={200}
                height={200}
                alt="Fencer's Photo"
                className="w-full h-full object-cover rounded-full mb-4 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-8 border-black transition-transform duration-500 ease-in-out group-hover:scale-110"></div>
            <div className="absolute inset-0 overflow-hidden flex flex-col justify-center items-center rounded-full bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <a
                    href="#about"
                    className="flex w-full h-full mb-1 justify-center items-center text-white text-xl font-sans font-bold rounded-t-full shadow-md transform -translate-y-full group-hover:animate-slideInTop hover:bg-opacity-50 hover:bg-darkest-blue group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                >
                    More About Me
                </a>
                <a
                    href="#contact"
                    className="flex w-full h-full mt-1 justify-center items-center text-white text-xl font-sans font-bold rounded-b-full shadow-md transform translate-y-full group-hover:animate-slideInBottom hover:bg-opacity-50 hover:bg-darkest-blue group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default ProfileImage;
