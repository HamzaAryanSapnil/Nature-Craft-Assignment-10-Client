import { useEffect, useState } from "react";
import DefaultCraftsCard from "./DefaultCraftsCard";


const CraftItemsDefault = () => {
    const [defaultCrafts, setDefaultCrafts] = useState([]);
    useEffect(() => {
    fetch("http://localhost:3000/default_crafts")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setDefaultCrafts(data)
    })
    }, [])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 justify-center items-center container mx-auto p-2" >
            
            {defaultCrafts.map(defaultCraft => <DefaultCraftsCard key={defaultCraft?._id}
            defaultCraft={defaultCraft}
            ></DefaultCraftsCard>)}
        </div>
    );
};

export default CraftItemsDefault;