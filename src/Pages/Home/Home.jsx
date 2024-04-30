import Banner from "../../Components/Banner/Banner";
import SubCategoryCards from "../../Components/Sub Category/SubCategoryCards";

const Home = () => {
  return (
    <div className="" >
      {/* banner */}
      <div className="h-72 md:h-[100vh] overflow-hidden">
        <Banner></Banner>
      </div>


      {/* sub category */}
      <div className="h-[400px] container mx-auto my-10" >
        <SubCategoryCards></SubCategoryCards>
      </div>
    </div>
  );
};

export default Home;
