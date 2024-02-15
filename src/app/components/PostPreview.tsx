import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <a className="group rounded-lg border border-neutral-900 space-y-2 my-2 mx-1 px-5 py-2 transition-colors h-[200px] hover:border-neutral-700 hover:bg-neutral-800/30" href={`/projects/${props.slug}`}>
      <h2 className="font-bold">{props.title}</h2>
      <p className="text-sm text-red-500 dark:text-yellow-300">{props.date}</p>
      <p className="italic">{props.excerpt}</p>
    </a>
  );
};

export default PostPreview;