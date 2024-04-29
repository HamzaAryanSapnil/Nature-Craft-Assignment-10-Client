import PropTypes from "prop-types";

const MyArtAndCraftCard = ({ item }) => {
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
    name,
    email,
  } = item;
  return (
    <div className="card flex-row bg-base-100 shadow-xl">
      <figure>
        <img
          src={
            photoUrl
              ? photoUrl
              : "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt="Shoes"
          className="h-80"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <p>Customization: {customization_value}</p>
        <p>Stock Status: {stock_status}</p>
      </div>
      <div className="card-actions flex-col justify-center items-center" >
        <div className="card-actions justify-center items-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
        <div className="card-actions justify-center items-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
        <div className="card-actions justify-center items-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

MyArtAndCraftCard.propTypes = {
  item: PropTypes.object,
};

export default MyArtAndCraftCard;
