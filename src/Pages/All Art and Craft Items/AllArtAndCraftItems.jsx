import { useLoaderData } from "react-router-dom";

const AllArtAndCraftItems = () => {
  const allCrafts = useLoaderData();
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto justify-items-center justify-center items-center p-4 gap-10 " >
      {allCrafts.map((craft) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={craft._id}>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllArtAndCraftItems;
