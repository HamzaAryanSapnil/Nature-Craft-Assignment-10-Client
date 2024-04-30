import Video from "../../Components/Art and Craft Video section/Video";
import Banner from "../../Components/Banner/Banner";
import CraftItemsDefault from "../../Components/Craft Items Default/CraftItemsDefault";
import SubCategoryCards from "../../Components/Sub Category/SubCategoryCards";

const Home = () => {
  return (
    <div className="">
      {/* banner */}
      <div className="h-72 md:h-[100vh] overflow-hidden">
        <Banner></Banner>
      </div>

      {/* default craft items */}
      <div className="my-10 p-4">
        <header className="my-10 text-center mx-auto container" >
          <h1 className="text-5xl font-black my-10" >Craft Items</h1>
          <p>Welcome to our enchanting world of jute and wooden crafts, where creativity knows no bounds! Dive into our collection and discover meticulously crafted pieces that blend natural elements with artistic flair. From intricately woven jute baskets to elegantly carved wooden sculptures, each creation tells a story of skilled craftsmanship and timeless beauty. Explore our diverse range of handcrafted treasures, perfect for adding a touch of rustic charm to any space or gifting a unique piece of artistry to someone special. Whether you&apos;re drawn to the earthy textures of jute or the rustic elegance of wood, our curated selection offers something to captivate every imagination. Let your creativity flourish as you immerse yourself in the artistry of jute and wood, where tradition meets innovation in every exquisite detail.</p>
        </header>
        <CraftItemsDefault></CraftItemsDefault>
      </div>

      {/* sub category */}
      <div className="lg:h-[600px] container mx-auto mt-20 my-10 mb-10 ">
      <header className="my-10 text-center mx-auto container" >
          <h1 className="text-5xl font-black my-10" >Categories</h1>
          <p>Explore our curated collection of category cards, each a gateway to a world of exquisite crafts. Click on a card to journey into the heart of a specific craft category, where you&apos;ll discover a treasure trove of handmade wonders waiting to delight your senses. From the timeless elegance of jute to the rich warmth of wood, these cards offer a glimpse into the diverse realms of artisanal creativity. Embark on an enchanting voyage through our categories, where every click unveils a new adventure in craftsmanship.</p>
        </header>
        <SubCategoryCards></SubCategoryCards>
      </div>

      <div className="my-10 container mx-auto" >
        <Video></Video>
      </div>
    </div>
  );
};

export default Home;
