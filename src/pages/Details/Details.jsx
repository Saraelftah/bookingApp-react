import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard/DetailsCard.jsx";
import RecommHotels from "../../components/RecommHotels/RecommHotels.jsx";
import { axiosInstance } from "../../network/interceptor.js";

function Details() {

  const { id } = useParams();
  const [details, setDetails] = useState(null);


  useEffect(() => {
      const callApi = async () => {
    try {
      let res = await axiosInstance.get(`/hotels/${id}`);
      setDetails(res.data);
      console.log(res.data)
    } catch (error) {
      console.error("failed to fetch details ", error);
    }
  };

   callApi();
  
  }, [id]);

  return (
    <>
      <div></div>
      {details ? <DetailsCard details={details} /> : <div>Loading...</div>}

      <RecommHotels />
    </>
   
  );
}

export default Details;
