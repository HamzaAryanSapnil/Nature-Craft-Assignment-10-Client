import { useEffect, useState } from "react";
import useAuth from "../../Hooks/Use Auth Context/UseAuthContext";
import MyArtAndCraftCard from "../../Components/My art and craft cards/MyArtAndCraftCard";

const MyArtAndCraftList = () => {
    const user = useAuth();
    const [items, setItems] = useState([]);
    const email = user?.user?.email;
    useEffect(() => {
      fetch(`http://localhost:3000/myArtAndCraftList/${email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItems(data);
      })
    
      
    })
    
    return (
        <div className="grid grid-cols-1  justify-center justify-items-center items-center my-10 gap-10" >
           {items.map(item => <MyArtAndCraftCard
           key={item?._id}
           item={item}
           ></MyArtAndCraftCard>)} 
        </div>
    );
};

export default MyArtAndCraftList;