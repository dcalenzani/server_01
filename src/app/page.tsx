import "@fontsource/open-sans"
import { Metadata } from "next";
import React from "react";
import DarkModeToggle from '@/components/DarkToggle';
import Hamburguer from '@/components/HamburguerMenu';

export const metadata: Metadata = {
  title: "Calen.Dani",
  description: "Pagina personal de Daniel Calenzani - Antropologo Programador"
};

export default function Home() {

  return (
    <>
      <main className="flex bg-zinc-300 dark:bg-zinc-950 h-screen flex-col items-center justify-between text-inherit dark:text-slate-50 p-0">
          
          <p className="absolute px-10 flex top-0 w-full justify-center dark:border bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-md dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit z-10 md:justify-end md:w-auto md:left-2 md:h-auto md:rounded-xl md:p-4 md:top-24">
            Check Repo:&nbsp;
            <code className="font-mono font-bold">https://github.com/dcalenzani/server_01</code>
          </p>

        <Hamburguer/>
        
        <div className='fixed right-1 pt-10 z-20'>
          <DarkModeToggle></DarkModeToggle>
        </div>

        <div className="absolute z-1 h-screen mb-7 place-items-center rounded-full">
          <img
            className="object-none filter grayscale h-full dark:invert-0"
            src="/banner.jpg"
            alt="Picture of crosses above Lord of Muruhuay's temple in Tarma - Peru."
          />
        </div>

        <div className="static z-10 flex my-auto">
          <a
            href="/Cthulhu"
            className="content-center items-end px-5 py-12 md:py-32
            w-screen transition-colors dark:bg-neutral-900/90 bg-gray-100/95 hover:bg-gray-100/70  hover:dark:bg-neutral-900/70"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Cthulhu{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Information about building your investigator.
            </p>
          </a>
        </div>

      </main>
    </>
  )
}
