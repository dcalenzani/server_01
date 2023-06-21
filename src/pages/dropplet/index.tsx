import Head from 'next/head';
import { getData } from '../api/dropplet/latest';
import Image from 'next/image';
import NavBar from '@component/components/NavBar';
import Gauge from '@component/components/Gauge';
import { useEffect, useState } from 'react';

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

  const [gaugeValue, setGaugeValue] = useState(0); // Initial gauge value

  // Update the gauge value when jsonData changes
  useEffect(() => {
    if (jsonData !== null) {
      const humidity = jsonData[0].humidity;
      setGaugeValue(humidity);
    }
  }, [jsonData]);
  
  const humidity = jsonData !== null ? jsonData[0].humidity : null;

  console.log({jsonData})
  return (
    <>
      <Head>
        <title>Dropplet</title>
        <link rel="icon" href="../../../dropplet.svg" />
        <meta name="description" content="Dropplet" />
      </Head>

     <div>
        <div className="flex flex-col min-h-screen">
          
            <NavBar/>

            <div id="logo" className="fixed mt-5 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:p-5 lg:h-auto lg:w-auto lg:bg-none">
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
          
          <div className=''>
          {humidity !== null ? (
          <Gauge value={gaugeValue} setGaugeValue={setGaugeValue}/>
          ) : null}
          <div className="flex flex-col items-center justify-between">
            {jsonData !== null && (
              <a href='#'> Humedad del Suelo: {jsonData[0].humidity} </a>
              )}
          </div>
        
              </div>
        </div>
      </div>
    </>
  )}
  export default Home;