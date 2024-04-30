import { useLoaderData } from "react-router-dom";
import SubCategory from "./SubCategory";


const SubCategories = () => {
    const subCategories = useLoaderData();
    return (
        <div className="container mx-auto" >

            {subCategories.length > 0
             ?
              subCategories.map(subCategory => <SubCategory 
              key={subCategory._id}
              subCategory={subCategory}
              ></SubCategory>
              )
               :
               <div className="flex justify-center items-center w-full min-h-screen text-3xl font-black" >
                Currently no data available in this Sub Category
                </div>
                }

        </div>
    );
};

export default SubCategories;