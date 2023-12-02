import DarkModeToggle from "@component/components/DarkToggle";
import getPostMetadata from "../../components/GetPostMetadata";
import PostPreview from "../../components/PostPreview";
import Image from 'next/image'
import Head from "next/head";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div 
    style={{ backgroundImage: 'url("Huascaran.jpeg")', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    className="text-inherit text-slate-50 flex h-screen w-screen items-center justify-between p-24">

      <div className='absolute z-100 left-8 lg:top-8'>
          <DarkModeToggle></DarkModeToggle>
      </div>
      
      <div id="HomePseudoButton" className="z-50 fixed pl-2 left-0 top-0 flex w-full justify-center border-t text-slate-50 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:text-left lg:w-[10rem] lg:m-[12rem] lg:rounded-xl lg:bg-transparent lg:p-4 lg:dark:hover:bg-zinc-800/30">
        <a href="/">
          &#8962; Home
        </a> 
      </div>

      <div className="z-50 fixed mt-5 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:absolute lg:h-auto lg:w-auto lg:m-[12rem] lg:bg-none">
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

      <div className="relative z-10 grid justify-center text-center mb-[4rem] lg:mb-0 lg:grid-cols-4 lg:text-left border-slate-300">
          {postPreviews}
      </div>
    </div>
  );
};

export default HomePage;
