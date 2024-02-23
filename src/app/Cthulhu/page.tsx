import getPostMetadata from "@/components/GetCthulhuMetadata";
import PostPreview from "@/components/PostCthulhiansPreview";
import Hamburguer from "@/components/HamburguerMenu";

const backgroundImage = "/IMG/Hoags_object.jpg";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <main className="">
      <div className="flex flex-col w-screen dark:text-slate-50 md:mt-10 items-center justify-center">
        <Hamburguer/>
        
        <div className="relative flex flex-col py-10 h-full w-full justify-center items-center invert dark:invert-0" 
          style={{ 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}>
          <div style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: 'saturate(70%) brightness(0.9)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1
          }} />
          <div className="p-10">
            <h1 className="text-4xl font-bold text-yellow-300">
              Call of Cthulhu
            </h1>
            <p className="text-zinc-100">
              It's roleplaying game of mystery and horror based on the works of H.P. Lovecraft. I've compiled here some of my works for my players and keepers.

              Here you'll find some of my guides, scenarios and other resources for the game. Please note that currently all of the content is in Spanish.
            </p>
          <div className="py-10 relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-zinc-100 overflow-auto mb-[4rem] lg:mb-0 lg:text-left border-slate-300">
            {postPreviews}
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;