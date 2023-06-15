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
    <div className="font-sans text-md grid grid-cols-8 grid-rows-4 gap-1">

      <div id="Sidebar" className="fixed flex-rows top-0 h-full right-0 p-4 col-span-2 row-span-full text-center bg-gray-700 max-w-xs flex-rows hidden md:grid">
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
          <p className="text-left text-lg font-semibold mb-2 mt-10">Table of Contents:</p>
          <TableOfContents/>
          <ul id="toc-main" className="list-group list-disc ml-2 text-left hover:font-black"></ul>
        </div>
      </div>

      <div className="md:opacity-100 opacity-25 drop-shadow-2xl bg-white border-6 rounded-lg border-current fixed bottom-3 right-3 text-4xl p-2 font-serif">
        <a
          href="#">
            &#128285;
        </a>
      </div>

      <div className="mb-3 mt-3 flex flex-col-reverse">
        <a href="../../"
          className="mr-5 p-2 bg-slate-600 hover:bg-slate-400 active:bg-slate-800 drop-shadow-md text-lg text-right font-bold hover:text-[#f3f6f4]">
          Home<span className="text-3xl ml-1 font-mono">&#8962;</span>
        </a>
      </div>

      <div className="p-1 col-span-full row-span-full lg:col-span-full md:col-span-5">
        <article id="toc-container" 
          className="prose prose-slate lg:text-xl dark:prose-invert p-9">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>

    </div>
  );
};

export default PostPage;