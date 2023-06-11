import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import TableOfContents from "../../../components/TableOfContents";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="font-serif text-lg grid grid-cols-8 grid-rows-4 gap-1">
      <div id="Sidebar" className="fixed top-0 h-full right-0 p-4 col-span-2 row-span-full text-center bg-gray-700 max-w-xs flex-rows hidden md:grid">
        <div 
        className="text-left p-1 whitespace-normal">
          <a href="../../"
          className="absolute text-2xl top-2 right-2 text-right mt-3">
            &#8962; Home
          </a>
          <h1 className="text-3xl mb-2 mt-7">
            {post.data.title}
          </h1>
          <h2 className="text-1xl mb-2">
            {post.data.subtitle}
          </h2>
          <h2 className="text-1xl text-slate-400 mb-2">
            {post.data.author}
          </h2>
          <p className="text-slate-400 text-1xl mb-2">
            {post.data.date}
          </p>
        </div>
        <TableOfContents/>
        <ul id="toc-main" className="list-group text-left mt-10 mb-10"></ul>
      </div>
      <a 
        className="opacity-25 md:opacity-100 fixed bottom-3 right-3 text-5xl"
        href="#">
          &#128285;
      </a>
      <div className="p-1 col-span-full row-span-full lg:col-span-full md:col-span-5">
        <article id="toc-container" 
          className="prose prose-slate text-xl dark:prose-invert p-9">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default PostPage;