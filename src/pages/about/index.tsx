import { about } from './posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ about }) {
  return (
    <>
      <Head>
        <title>{about.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{about.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={about.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: about.contentHtml }} />
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}