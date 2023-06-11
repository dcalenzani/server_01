import Head from 'next/head';
import Link from 'next/link';
import { getData } from '../api/dropplet/latest';

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
      <main className={'flex min-h-screen flex-row justify-end'}>
        <div className='flex items-start relative flex-1 px-4.5'>
        {jsonData !== null && (
          <Link href="/"> Humedad del Suelo: {jsonData[0].humidity} </Link>
          )}
        </div>
        <div className='flex flex-col items-end p-24'>
          <Link href="/dropplet/downloads">Downloads</Link>
          <Link href="/posts/Dropplet">About the project</Link>
          <Link href="https://github.com/dcalenzani/Dropplet">Check the repo!</Link>
          <Link href="/" className='text-xl'>&#8962; Home</Link>
        </div>
      </main>
    </>
  )}
  export default Home;