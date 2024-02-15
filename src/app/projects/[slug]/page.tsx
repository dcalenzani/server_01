import { getListOfPosts, getPostContent } from "@/app/helpers/postHelpers"
import BlogPage from '@/app/components/BlogPage'
import DarkModeToggle from "@/app/components/DarkToggle"


export const generateStaticParams = async () => {
  const posts = getListOfPosts()
  return posts.map(post => ({ slug: post }))}
  
function Post({ params }: { params: any }) {
  const { content, data } = getPostContent(params.slug)

  return (
    <div className="h-screen">
      <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900">
        <BlogPage markdownContent={content} />
        </div>
    </div>
  )
}

export default Post