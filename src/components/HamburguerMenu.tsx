"use client"
import React from 'react';
import { useState } from 'react';
import DarkModeToggle from './DarkToggle';



const Hamburguer: React.FC = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen((prevValue) => !prevValue);
    };
        
    return (
    
    <><div className="fixed z-50 bottom-0 left-108 flex h-28 w-full items-center justify-center pt-8 bg-gradient-to-t from-white via-white  overflow-hidden dark:from-black dark:via-black">
            <a
                className="flex place-items-center gap-2 p-8 pointer-events-auto"
                href="/"
                rel="noopener noreferrer"
            >
                By{' '}
                <img
                    src="logo.svg"
                    alt="Personal D.C logo"
                    className="dark:invert"
                    width={100}
                    height={24} />
            </a>

            <a href="#" onClick={toggleMenu} className="text-3xl z-50 cursor-pointer mx-2 md:hidden block">
                <p>&#9776;</p>
            </a>

        </div>
        <div className={`fixed flex flex-col top-0 right-0 text-xl text-left h-auto w-screen bg-zinc-300 dark:bg-black mb-20 z-20 md:my-0 md:flex md:flex-row-reverse md:items-center md:pr-28 [&>a]:py-6 [&>a]:pl-8 [&>a:hover]:bg-zinc-400 [&>a]:w-screen ${isMenuOpen ? 'block' : 'hidden'}`}>
            <a href='/' className=''>Home</a>
            <a href='https://github.com/dcalenzani/'>Repo</a>
            <a href='/contact'>Contact</a>
            <a href='/projects'>Projects</a>
            <a href='projects/About'>About</a>
        </div>

        <div className='absolute z-100 left-8 lg:top-8'>
          <DarkModeToggle></DarkModeToggle>
        </div>
        </>  
    );
};
export default Hamburguer;
