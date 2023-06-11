import Link from "next/link";
import { PostMetadata } from "./postMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className= "border border-[#EEEF20] p-4 rounded-md shadow-sm bg-transparent" >
      <p className="text-sm text-[#EEEF20]">{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-[#FFFF3F] hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-[#EEEF20]">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;