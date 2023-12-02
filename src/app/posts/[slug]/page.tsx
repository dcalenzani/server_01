import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/GetPostMetadata";
import DarkModeToggle from "@component/components/DarkToggle";
import Hamburguer from "@component/components/HamburguerMenu";
import TableOfContents from "@component/components/TableOfContents";

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
    <div className="font-sans text-md flex flex-col bg-zinc-300 dark:bg-zinc-950 text-inherit dark:text-slate-50">
        <div className="">
          <DarkModeToggle></DarkModeToggle>
        </div>
      
        <Hamburguer>
          <a href="/posts">All Posts</a>
          <a href="/contact">Contact</a>
          <a href="/home">Contact</a>                    
        </Hamburguer>

        <div id="Navbar" className="fixed flex flex-columns w-screen [&>a]:m-0.5 [&>a]:py-4 [&>a]:h-auto [&>a]:p-auto [&>a]:text-center">

            <a href="/" className="block h-full w-full text-xl justify-center bg-slate-300 filter grayscale text-left hover:drop-shadow-[0_0_0.3rem_#ffffff70] hover:grayscale-2 lg:left-3 dark:bg-slate-900 lg:w-auto lg:pl-3">&#8962; Home</a>
      
            <a href="/posts" className="block h-full w-full text-xl justify-center bg-slate-300 filter grayscale text-left hover:drop-shadow-[0_0_0.3rem_#ffffff70] hover:grayscale-2 lg:left-3 dark:bg-slate-900 lg:w-auto lg:pl-3">All Posts</a> 
        </div>
        
    <div className="flex p-1 my-[7rem]">
      <article id="toc-container" 
        className="prose prose-slate overflow-auto lg:text-xl dark:prose-invert p-9">
        <Markdown className="md:mr-20">{post.content}</Markdown>
      </article>
    </div>
  </div>
  );
};

export default PostPage;