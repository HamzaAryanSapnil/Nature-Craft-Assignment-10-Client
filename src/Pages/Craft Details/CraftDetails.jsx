import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const CraftDetails = () => {
  const { id } = useParams();
  const [craft, setCraft] = useState({});
  const {
    photoUrl,
    item_name,
    sub_category,
    short_des,
    price,
    rating,
    customization_value,
    processing_time,
    stock_status,
  } = craft;
  useEffect(() => {
    fetch(`http://localhost:3000/craftDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCraft(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto ">
  
    <div className="hero min-h-screen bg-base-200 my-14 p-6">
      <div className="grid grid-cols-1  justify-center items-center gap-6 w-full h-full">
        <div className=" w-full h-full">
          <img
            src={photoUrl}
            className="rounded-lg shadow-2xl w-full h-full "
          />
        </div>
        <div className="">
          <h1 className="text-5xl font-bold">{sub_category}</h1>
          <p className="py-6">{item_name}</p>
          <p className="py-6 text-xl ">
            {short_des}
          </p>
          <p className="py-6 text-lg font-bold font-mulish">Price: <span className="text-success" >{price}</span></p>
          <p className="py-6 text-cardDescolor text-lg font-medium">Status: {stock_status}</p>
          <p className="py-6 text-cardDescolor text-lg">Rating: {rating}</p>
          <p className="py-6 text-cardDescolor text-lg">Processing time: {processing_time}</p>
          
          <p className="py-6 text-cardDescolor text-xl text-descolor70">Customizable: {customization_value}</p>
          <Link to={"/property_details"} ><button className="btn btn-success text-white  text-lg  ">More Properties?</button></Link>
        </div>
      </div>
    </div>
  </div>
  );
};

CraftDetails.propTypes = {
  craft: PropTypes.object,
};
export default CraftDetails;
