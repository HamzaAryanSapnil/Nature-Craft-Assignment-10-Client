import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const DefaultCraftsCard = ({defaultCraft}) => {
    const {photoUrl, item_name} = defaultCraft;
    console.log(defaultCraft, photoUrl);
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl p-4">
      <figure>
        <img
          src={defaultCraft?.photoUrl ? defaultCraft?.photoUrl :"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
          alt="Shoes"
          className="h-72"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>{defaultCraft?.short_des}</p>
        <div className="card-actions justify-end">
          <Link to={`/craftDetails/${defaultCraft?._id}`} ><button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

DefaultCraftsCard.propTypes = {
    defaultCraft: PropTypes.object,
}
export default DefaultCraftsCard;
