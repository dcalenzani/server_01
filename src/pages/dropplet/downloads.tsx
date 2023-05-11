import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { getSortedPostsData } from '@component/components/posts';
import { Line } from 'react-chartjs-2';
import { Inter } from 'next/font/google';
import { LineChart } from '@component/components/LineChart';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function droppletHome({  }) {
  return (
    <>
      <Head>
        <title>Dropplet</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Dropplet" />
      </Head>
      <main className={'flex min-h-screen flex-row justify-end'}>
        <div className='flex items-start relative flex-1 px-4.5'>
          <LineChart></LineChart>
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