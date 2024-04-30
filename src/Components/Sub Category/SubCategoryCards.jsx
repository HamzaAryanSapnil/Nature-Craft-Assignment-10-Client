import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const SubCategoryCards = () => {
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/subCategoriesLists")
    .then(res => res.json())
    .then(data => {
      console.log("data ", data);
      setSubCategories(data);
      console.log("sub categories ", subCategories);
    })
  
    
  }, [])
  
  return (
    <Swiper
      slidesPerView={3}
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
        subCategories.map(subCategory => <SwiperSlide key={subCategory._id} >
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={subCategory?.photo_url ? subCategory?.photo_url: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                alt="Shoes"
                className="h-72 w-full"
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
        </SwiperSlide>)
      }
    </Swiper>
  );
};

export default SubCategoryCards;
