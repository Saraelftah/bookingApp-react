import { useEffect, useState } from "react";
import { axiosInstance } from "../../network/interceptor";
import Offercard from "../OfferCard/OfferCard";
// import style from "./BestOffers.module.css";

function BestOffers() {
  const [bestOffers, setBestOffers] = useState([]);
  const callApi = async () => {
    try {
      let res = await axiosInstance.get("/best_offer");
      setBestOffers(res?.data || []);
      console.log(res);
      console.log(res?.data);
    } catch (error) {
      console.error("Failde to fetch best offer data ", error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
    <div className="rounded-box shadow-md p-4 mt-30 bg-white">
      <h2 className="text-2xl font-bold mb-3">Best Offers</h2>

      <div  className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center">
        {bestOffers.map((offer) => (
          <Offercard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  
    </>
  );
}

export default BestOffers;