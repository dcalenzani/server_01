import { getListOfPosts, getPostContent } from '@/app/helpers/postCthulhians'
import BlogPage from '@/components/BlogPage'
import TableOfContents from '@/components/TableOfContents'

export const generateStaticParams = async () => {
  const posts = getListOfPosts()
  return posts.map(post => ({ slug: post }))}
  
function Post({ params }: { params: any }) {
  const { content, data } = getPostContent(params.slug)

  return (
    <div className="">
      <div className="h-screen w-screen bg-zinc-100 dark:bg-zinc-900">
        <BlogPage markdownContent={content} />
        <TableOfContents/>
      </div>
    </div>
  )
}

export default Post