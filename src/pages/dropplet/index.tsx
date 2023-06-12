import Head from 'next/head';
import Link from 'next/link';
import { getData } from '../api/dropplet/latest';
import Image from 'next/image';

export async function getServerSideProps(){
  const jsonData = await getData();
  // Conversion of DateTime to Unix TimeStamp for handling
  jsonData.map((x: { input: number; createdAt: number; }) => {
    x.input = Math.floor(x.createdAt / 1000);
  })
  return {
    props : { jsonData, }
  }
}



const Home = ({jsonData}) => {
  console.log({jsonData})
  return (
    <>
      <Head>
        <title>Dropplet</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Dropplet" />
      </Head>
      <div>
        <div className='flex min-h-screen'>
          <div id="logo" className="fixed mt-5 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
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
          <div className='grid'>
            {jsonData !== null && (
            <h1> Humedad del Suelo: {jsonData[0].humidity} </h1>
            )}
          </div>
          </div>
          <div className='grid grid-cols-4 text-center'>
            <Link href="/dropplet/downloads">Downloads</Link>
            <Link href="/posts/Dropplet">About the project</Link>
            <Link href="https://github.com/dcalenzani/Dropplet">Check the repo!</Link>
            <Link href="/">Home <span className='text-xl'>&#8962;</span></Link>
          </div>
      </div>
    </>
  )}
  export default Home;