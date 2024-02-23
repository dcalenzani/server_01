import Head from 'next/head';
import { getData } from '../api/dropplet/latest';
import Image from 'next/image';
import Gauge from '@/components/Gauge';
import { useEffect, useState } from 'react';
import { soilSensor } from '@/interfaces/sensors';
import Hamburguer from '@/components/HamburguerMenu';

export async function getServerSideProps(){
  const soilSensor = await getData();
  // Conversion of DateTime to Unix TimeStamp for handling
  soilSensor.map((x: { input: number; createdAt: number; }) => {
    x.input = Math.floor(x.createdAt / 1000);
  })
  return {
    props : { soilSensor, }
  }
}

const Home = ({soilSensor}:any) => {

  const [gaugeValue, setGaugeValue] = useState(0); // Initial gauge value

  // Update the gauge value when soilSensor changes
  useEffect(() => {
    if (soilSensor !== null) {
      const humidity = soilSensor[0].humidity;
      setGaugeValue(humidity);
    }
  }, [soilSensor]);
  
  const humidity = soilSensor !== null ? soilSensor[0].humidity : null;

  console.log({soilSensor})
  return (
    <>
      <Head>
        <title>Dropplet</title>
        <link rel="icon" href="../../../dropplet.svg" />
        <meta name="description" content="Dropplet" />
      </Head>

     <div>
        <div className="flex flex-col min-h-screen">
          
            <Hamburguer/>

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
            {soilSensor !== null && (
              <a href='#'> Humedad del Suelo: {soilSensor[0].humidity} </a>
              )}
          </div>
        
              </div>
        </div>
      </div>
    </>
  )}
  export default Home;