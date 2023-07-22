import Image from 'next/image'
import Link from 'next/link';
import "@fontsource/open-sans"
import { Metadata } from "next";
import React from "react";
import DarkModeToggle from '@component/components/DarkToggle';

export const metadata: Metadata = {
  title: "Calen.Dani",
  description: "Pagina personal que los proyectos FOSS"
};

export default function Home() {
  return (
    <>
      <main className="flex bg-zinc-300 dark:bg-zinc-950 min-h-screen flex-col items-center justify-between text-inherit dark:text-slate-50 p-24">

        <div className='absolute left-8 lg:top-8 z-50'>
          <DarkModeToggle></DarkModeToggle>
        </div>

        <div className="z-10 my-2 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed pl-2 left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-400 dark:bg-zinc-800 dark:bg-opacity-75 bg-opacity-75 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-accent1">
            Check Repo:&nbsp;
            <code className="font-mono font-bold">https://github.com/dcalenzani/server_01</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="flex place-items-center gap-2 p-8 pointer-events-auto lg:p-0"
              href="https://github.com/dcalenzani/"
              rel="noopener noreferrer"
              >
              By{' '}
              <Image
                src="/logo.svg"
                alt="Personal D.C logo"
                className="dark:invert"
                width={100}
                height={24}
                priority />
            </a>
          </div>
        </div>

        <div className="relative flex pt-1 pb-3 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial">
          <Image
            className="relative drop-shadow-[0_0_0.3rem_#00000090] dark:drop-shadow-[0_0_0.3rem_#ffffff70] filter grayscale dark:grayscale-2"
            src="/banner.jpg"
            alt="Picture of crosses above Lord of Muruhuay's temple in Tarma - Peru."
            width={720}
            height={148}
            priority />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

          <Link
            href="/posts"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Proyectos{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Stuff I've done (in blog format)
            </p>
          </Link>

          <Link
            href="/posts/About"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Professional mission and downloadable CV
            </p>
          </Link>

          <Link
            href="/contact"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contact{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Leave your comments and find my socials.
            </p>
          </Link>
          
          <Link
            href="/503"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Dropplet{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              App and API for your plants and our growth.
            </p>
          </Link>
        </div>

      </main>
    </>
  )
}
