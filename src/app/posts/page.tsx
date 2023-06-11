import { Container } from "@nextui-org/react";
import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/postPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <div id="header" className="text-center mb-4">
        <p>
          Im the Header
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">{postPreviews}
      </div>
      <div id="HomePseudoButton" className="m-2 text-right">
        <a href="/">&#8962; Home</a> 
      </div>
    </div>
  );
};

export default HomePage;