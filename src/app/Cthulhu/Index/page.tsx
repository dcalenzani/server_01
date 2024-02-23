import getPostMetadata from "@/components/GetCthulhuMetadata";
import PostPreview from "@/components/PostCthulhiansPreview";
import Hamburguer from "@/components/HamburguerMenu";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="">
      <div className="flex flex-col bg-zinc-300 dark:bg-zinc-950 h-screen w-screen dark:text-slate-50 p-10 md:mt-10 items-center justify-center">
        <Hamburguer/>
        
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center overflow-auto mb-[4rem] lg:mb-0 lg:text-left border-slate-300">
          {postPreviews}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
