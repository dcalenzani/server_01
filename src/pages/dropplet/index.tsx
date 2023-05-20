import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import { latest } from '../api/dropplet/latest';
import { soilSensor } from '@component/interfaces/Esp';


const Home = ({latest}) => {
  return (
    <>
      <Head>
        <title>Dropplet</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Dropplet" />
      </Head>
      <main className={'flex min-h-screen flex-row justify-end'}>
        <div className='flex items-start relative flex-1 px-4.5'>
        {latest !== null && (
          <Link href="/"> Humedad del Suelo: {latest} </Link>
          )}
        </div>
        <div className='flex flex-col items-end p-24'>
          <Link href="/dropplet/downloads">Downloads</Link>
          <Link href="/dropplet/about">About the project</Link>
          <Link href="/dropplet/about">Check the repo!</Link>
          <Link href="/">Portfolio</Link>
        </div>
      </main>
    </>
  )}
  export default Home;