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
      <div className="my-10">
        <header className="my-10 text-center" >
          <h1>Craft Items</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quod repellat dicta, illo animi magnam. Voluptas praesentium delectus illo enim quisquam saepe aliquam natus possimus sed nemo consequuntur, iusto architecto.</h1>
        </header>
        <CraftItemsDefault></CraftItemsDefault>
      </div>

      {/* sub category */}
      <div className="h-[400px] container mx-auto my-10">
        <SubCategoryCards></SubCategoryCards>
      </div>
    </div>
  );
};

export default Home;
