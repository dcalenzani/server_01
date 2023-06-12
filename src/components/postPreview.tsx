import Link from "next/link";
import { PostMetadata } from "./postMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link className= "group rounded-lg border border-purple-200 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:underline mb-4" href={`/posts/${props.slug}`}>
      <h2 className=" text-white">{props.title}</h2>
      <p className="text-sm text-[#EEEF20]">{props.date}</p>
      <p className="text-white">{props.subtitle}</p>
    </Link>
    
  );
};

export default PostPreview;