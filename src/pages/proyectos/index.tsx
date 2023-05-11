import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '@component/components/posts';
import Date from '@component/utils/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <main>
      <h1 className={styles.title}>
        Read about <Link href="/posts/suicidio">Suicidal Tendencies</Link>
      </h1>
      <p className={styles.description}>
        This is a FOSS project, you will find documentation here <code>pages/index.js</code>
      </p>

      <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}` }>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list} >
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}></Date>
              </small>
              </li>
              ))}
            </ul>
          </div>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
          >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
      </main>

      <footer>
      <Link
        href="/"
        rel="noopener noreferrer"
        >
        Powered by{' '}
        <Image src="/rpi.jpeg" alt="RPI" height={80} width={30}/>
      </Link>
      </footer>

      <style jsx>{`
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      footer img {
        margin-left: 0.5rem;
      }
      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: inherit;
      }
      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;      <Layout/>

        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
      `}</style>

      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
      }
      * {
        box-sizing: border-box;
      }
      `}</style>
      </div>
  )}