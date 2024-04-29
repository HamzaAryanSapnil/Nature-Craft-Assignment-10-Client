import { useEffect, useState } from "react";
import useAuth from "../../Hooks/Use Auth Context/UseAuthContext";
import MyArtAndCraftCard from "../../Components/My art and craft cards/MyArtAndCraftCard";
import { Link } from "react-router-dom";

const MyArtAndCraftList = () => {
  const user = useAuth();
  const [items, setItems] = useState([]);
  const email = user?.user?.email;
  useEffect(() => {
    fetch(`http://localhost:3000/myArtAndCraftList/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []) ;
  console.log(items.length);

  return (
    <div className="container mx-auto grid grid-cols-1  justify-center justify-items-center items-center my-10 gap-10">
      {items.length > 0 ? (
        items.map((item) => (
          <MyArtAndCraftCard key={item?._id} item={item}></MyArtAndCraftCard>
        ))
      ) : (
        <div className="flex flex-col min-h-screen gap-y-3 w-full justify-center items-center" >
          <h1>You didn&apos;t crafted any items.</h1>
          <Link to={"/addCraftItem"} ><button className="btn btn-primary">Please Add Your Own Items</button></Link>
        </div>
      )}
    </div>
  );
};

export default MyArtAndCraftList;
