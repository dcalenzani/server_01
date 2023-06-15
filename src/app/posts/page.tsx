import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/postPreview";
import Image from 'next/image'

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <div id="HomePseudoButton" className="static mb-6 text-xl lg:">
        <a href="/">&#8962; Home</a> 
      </div>

      <div className="fixed mt-5 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
            className="flex place-items-center gap-2 p-8 pointer-events-auto lg:p-0"
            href="https://github.com/dcalenzani/"
            rel="noopener noreferrer"
            >
            By{' '}
            <Image
              src="/logo.svg"
              alt="Personal D.C logo"
              className="dark:invert"
              width={100}
              height={24}
              priority />
        </a>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          {postPreviews}
      </div>
    </div>
  );
};

export default HomePage;