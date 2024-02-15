import ReactMarkdown from 'react-markdown'
import TableOfContents from './TableOfContents'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import matter from 'gray-matter'

interface BlogPageProps {
  markdownContent: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ markdownContent }) => {
  const { data, content } = matter(markdownContent);
  const { title, date } = data;

  return (
    <div className='w-full text-inherit font-mono text-zinc-950 dark:text-white'>
      <div className='m-10 mb-20'>
        <h1 className='text-2xl text-zinc-950 dark:text-gray-200'>{title}</h1>
        <h1 className='text-xl text-zinc-950 dark:text-gray-200'>{date}</h1>
        <div className="py-10 prose dark:prose-dark">
          <ReactMarkdown 
            className=""
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
      <TableOfContents/>
    </div>
  )
}

export default BlogPage