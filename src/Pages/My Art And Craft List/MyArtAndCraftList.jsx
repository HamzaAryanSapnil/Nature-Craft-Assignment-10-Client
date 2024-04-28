import { useEffect, useState } from "react";
import useAuth from "../../Hooks/Use Auth Context/UseAuthContext";

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
    
      
    }, )
    
    return (
        <div>
            My Art And Craft List: {items.length}
        </div>
    );
};

export default MyArtAndCraftList;