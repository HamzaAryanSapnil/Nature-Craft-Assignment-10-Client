import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'

const CraftDetails = () => {
    const {id} = useParams()
    const [craft, setCraft] = useState({});
    const {photoUrl,
        item_name,
        sub_category,
        short_des,
        price,
        rating,
        customization_value,
        processing_time,
        stock_status,
        name,
        email,} = craft;
    useEffect(() => {
      fetch(`http://localhost:3000/craftDetails/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCraft(data)
      })
      .catch(error => console.error(error))
    
      
    }, [])
    
    return (
        <div>
            this is craft details of id: {id}
        </div>
    );
};


CraftDetails.propTypes = {
    craft: PropTypes.object,
}
export default CraftDetails;