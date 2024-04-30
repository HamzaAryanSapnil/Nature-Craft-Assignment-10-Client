import { useEffect, useState } from "react";
import useAuth from "../../Hooks/Use Auth Context/UseAuthContext";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const MyArtAndCraftList = () => {
  const user = useAuth();
  const [items, setItems] = useState([]);
  const email = user?.user?.email;
  console.log(email);
  useEffect(() => {
    fetch(`http://localhost:3000/myArtAndCraftList/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/craftDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = items.filter(item => item._id !== id);
          setItems(remaining)
          
        }
      });
  };
  return (
    items.length > 0 ? 
    <div className="container mx-auto grid grid-cols-1  justify-center justify-items-center items-center my-10 gap-10">
      {items.map((item) => (
        <div
          key={item._id}
          className="card flex-col md:flex-row bg-base-100 shadow-xl p-4 w-full "
        >
          <figure>
            <img
              src={
                item.photoUrl
                  ? item.photoUrl
                  : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              }
              alt="Shoes"
              className="h-52 md:h-80"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.item_name}</h2>
            <p>Price: {item.price}</p>
            <p>Rating: {item.rating}</p>
            <p>Customization: {item.customization_value}</p>
            <p>Stock Status: {item.stock_status}</p>
            <p>Sub Category: {item.sub_category}</p>
          </div>
          <div className="card-actions flex-row md:flex-col justify-center items-center">
            <div
              className="card-actions justify-center items-center tooltip"
              data-tip="Delete"
            >
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-primary"
              >
                <MdDeleteOutline />
              </button>
            </div>
            <div
              className="card-actions justify-center items-center tooltip"
              data-tip="Update"
            >
              <Link to={`/craftUpdate/${item?._id}`}>
                <button className="btn btn-primary">
                  <MdOutlineSystemUpdateAlt />
                </button>
              </Link>
            </div>
            {/* <div className="card-actions justify-center items-center tooltip" data-tip="Details">
          <Link to={`/craftDetails/${item._id}`} >
          <button className="btn btn-primary">
          <TbListDetails />
          </button>
          </Link>
        </div> */}
          <Link to={"/addCraftItem"}><button className="btn btn-primary tooltip" data-tip ="Add More Craft" ><IoMdAdd /></button></Link>
          </div>
        </div>
      ))}
    </div>
     :

     <div className="flex items-center justify-center flex-col min-h-screen gap-y-6" >
     <h1> Currently you do not have any items here </h1>
     <Link to={"/addCraftItem"}><button className="btn btn-primary" >Add more Craft</button></Link>
     </div>

  );
};

export default MyArtAndCraftList;
