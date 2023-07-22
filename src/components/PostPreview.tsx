import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link className= "group rounded-lg border border-neutral-900 my-2 mx-1 px-5 py-4 transition-colors  hover:border-neutral-700 hover:bg-neutral-800/30" href={`/posts/${props.slug}`}>
      <h2 className="">{props.title}</h2>
      <p className="text-sm text-red-500 dark:text-yellow-300">{props.date}</p>
      <p className="">{props.subtitle}</p>
    </Link>
    
  );
};

export default PostPreview;