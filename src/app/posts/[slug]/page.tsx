import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/GetPostMetadata";
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
    <div className="font-sans text-md flex flex-col">
      <div id="Sidebar" className="fixed flex-col overflow-auto top-0 h-full right-0 p-4 row-span-full text-center bg-gray-700 max-w-xs flex-rows hidden md:flex">
        <div className="text-left p-1 whitespace-normal mb-3">
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

        <div id="TableOfContents">
          <p className="text-left text-lg font-semibold mb-2 mt-1">Table of Contents:</p>
          <TableOfContents/>
          <ul id="toc-main" className="list-group list-disc ml-2 text-left [&>li:hover]:font-black"></ul>
        </div>
      </div>

      <div className="md:opacity-100 opacity-25 drop-shadow-2xl bg-white border-6 rounded-lg border-current fixed bottom-3 right-3 text-4xl p-2 font-serif">
        <a
          href="#">
            &#128285;
        </a>
      </div>

      <div id="PostsButton" className="fixed bottom-3 left-3 text-lg justify-center bg-slate-900 opacity-90 border rounded-lg hover:drop-shadow-[0_0_0.3rem_#ffffff70] filter grayscale hover:grayscale-2">
        <a href="/" className="text-normal m-2 block h-full w-full">&#8962; Home</a>
      </div>
      <div className="fixed top-0 text-xl justify-center w-full bg-slate-900 opacity-90 text-center hover:drop-shadow-[0_0_0.3rem_#ffffff70] filter grayscale hover:grayscale-2 lg:w-auto lg:left-0 lg:text-left">
        <a href="/posts" className="text-normal m-2 block h-full w-full">All Posts</a> 
      </div>

      <div className="flex p-1">
        <article id="toc-container" 
          className="prose prose-slate lg:text-xl dark:prose-invert p-9">
          <Markdown className="md:mr-20">{post.content}</Markdown>
        </article>
      </div>

    </div>
  );
};

export default PostPage;