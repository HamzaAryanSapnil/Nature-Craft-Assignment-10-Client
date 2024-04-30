import  { useEffect,  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const SubCategoryCards = () => {
  const [subCategories, setSubCategories] = useState([]);
  console.log(subCategories);
  useEffect(() => {
    fetch("http://localhost:3000/subCategoriesLists")
    .then(res => res.json())
    .then(data => {
      console.log("data ", data);
      setSubCategories(data);
      console.log("sub categories ", subCategories);
    })
    .catch(error => {
      console.log(error);
    })
  
    
  }, [])
  
  return (
    <Swiper
      slidesPerView={4}
      // centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-full w-full"
    >
      {/* <SwiperSlide>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </SwiperSlide> */}
      {
        subCategories?.map(subCategory => <SwiperSlide key={subCategory._id} >
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={subCategory?.photo_url ? subCategory?.photo_url: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                alt="Shoes"
                className="h-72 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{subCategory?.sub_category_name}</h2>
              <p></p>
              <div className="card-actions justify-start">
               <Link to={`/subCategories/${subCategory?.sub_category}`} > <button className="btn btn-primary">View Crafts</button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>)
      }
    </Swiper>
  );
};

export default SubCategoryCards;
