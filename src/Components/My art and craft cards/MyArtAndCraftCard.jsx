import PropTypes from "prop-types";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyArtAndCraftCard = ({ item }) => {
  const {
    photoUrl,
    item_name,
    price,
    rating,
    customization_value,
    stock_status,
  } = item;

  return (
    <div className="card flex-col md:flex-row bg-base-100 shadow-xl p-4">
      <figure>
        <img
          src={
            photoUrl
              ? photoUrl
              : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt="Shoes"
          className="h-52 md:h-80"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <p>Customization: {customization_value}</p>
        <p>Stock Status: {stock_status}</p>
      </div>
      <div className="card-actions flex-row md:flex-col justify-center items-center">
        <div className="card-actions justify-center items-center tooltip" data-tip= "Delete">
          <button className="btn btn-primary">
            <MdDeleteOutline />
          </button>
        </div>
        <div className="card-actions justify-center items-center tooltip" data-tip="Update">
          <Link>
          <button className="btn btn-primary">
            <MdOutlineSystemUpdateAlt />
          </button>
          </Link>
        </div>
        <div className="card-actions justify-center items-center tooltip" data-tip="Details">
          <Link to={`/craftDetails/${item._id}`} >
          <button className="btn btn-primary">
          <TbListDetails />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

MyArtAndCraftCard.propTypes = {
  item: PropTypes.object,
};

export default MyArtAndCraftCard;
