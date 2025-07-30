import { useEffect, useState } from "react";
// import style from "./RecommHotels.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { axiosInstance } from "../../network/interceptor";
import SlideCard from "../SlideCard/SlideCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 749 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 494, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function RecommHotels() {
  const [recommended, setRecommended] = useState([]);
  const callApi = async () => {
    try {
      let res = await axiosInstance.get("/recommended_hotels");
      setRecommended(res?.data || []);
      // console.log(res);
      // console.log(res?.data);
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
    <div >
       <h2 className="text-2xl font-bold m-3">Recommended Hotels</h2>
      <Carousel
        className="py-3"
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {recommended.map((hotel) => (
          <SlideCard key={hotel.id} hotel={hotel} />
        ))}
      </Carousel>
    </div>
   
    </>
  );
}

export default RecommHotels;
