import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const Banner = () => {
  const [bannerData, setbannerData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/subCategoriesLists")
    .then(res => res.json())
    .then(data => {
      console.log("data ", data);
      setbannerData(data);
      console.log("sub categories ", bannerData);
    })
    .catch(error => {
      console.log(error);
    })
  
    
  }, [])
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="h-full"
    >
      {/* <SwiperSlide
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://i.postimg.cc/m2d8DD1y/pexels-tiana-18128-2900935.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white font-bold text-3xl md:text-5xl flex justify-center items-center h-full ">
          <div className="w-9/12 flex flex-col gap-4 ">
            <h1>Category</h1>
            <p className="text-xl">Item_name</p>
            <button className="btn btn-outline btn-secondary max-w-28" >View Category</button>
          </div>
        </div>
      </SwiperSlide> */}
      {bannerData.map(banner => <SwiperSlide key={banner._id}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${banner?.photo_url ? banner?.photo_url : 'https://i.postimg.cc/m2d8DD1y/pexels-tiana-18128-2900935.jpg'})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white font-bold text-3xl md:text-5xl flex justify-center items-center h-full ">
          <div className="w-9/12 flex flex-col gap-4 ">
            <h1>{banner?.sub_category_name}</h1>
            <Link to={`/subCategories/${banner?.sub_category}`} ><button className="btn btn-outline btn-secondary max-w-28" >View Category</button></Link>
          </div>
        </div>
      </SwiperSlide>)}
      
    </Swiper>
  );
};

export default Banner;
