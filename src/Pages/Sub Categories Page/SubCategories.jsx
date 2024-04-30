import { useLoaderData } from "react-router-dom";


const SubCategories = () => {
    const subCategories = useLoaderData();
    return (
        <div>
            subCategories : {subCategories.length}
        </div>
    );
};

export default SubCategories;