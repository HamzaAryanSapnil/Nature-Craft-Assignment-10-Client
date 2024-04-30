import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraftItems = () => {
  const allCrafts = useLoaderData();
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto justify-items-center justify-center items-center p-4 gap-10 " >
      {allCrafts.map((craft) => (
        
        <div className="card w-96 bg-base-100 shadow-xl" key={craft._id}>
          <figure>
            <img
              src={craft?.photoUrl? craft?.photoUrl : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
              alt="Shoes"
              className="w-full h-64"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{craft.item_name}</h2>
            <p>{craft.sub_category}</p>
            <p>{craft.short_des}</p>
            <p>Price: {craft.price}</p>
            <p>Rating: {craft.rating}</p>
            <div className="card-actions justify-end">
              <Link to={`/craftDetails/${craft._id}`} ><button className="btn btn-primary">View Details</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllArtAndCraftItems;
