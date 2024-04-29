import { useLoaderData } from "react-router-dom";
import UpdateForm from "../../Components/Update Form/UpdateForm";

const UpdateCraft = () => {
  const craft = useLoaderData();

  return (
    <div>
      <UpdateForm craft={craft} ></UpdateForm>
    </div>
  );
};

export default UpdateCraft;
