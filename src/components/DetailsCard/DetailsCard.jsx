import RecommHotels from "../RecommHotels/RecommHotels";
import RatingStars from "../RatingStars/RatingStars";
import { useNavigate } from "react-router-dom";


function DetailsCard({ details }) {
    const navigate = useNavigate();
    const handlePayNow = () => {

      navigate("/payment", { state: { details } }); 
  };


  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-md my-4 mb-15">
        <figure className="w-2/4 overflow-hidden">
          <img src={details.images.main} alt={details.name} />
        </figure>

        <div className="card-body">
          <h2 className="font-bold text-xl">Hotel review</h2>
          <h2 className="card-title mb-3">{details.name}</h2>

          <div className="flex items-center gap-4 mb-2">

            <span className="bg-sky-700 text-white py-3 px-5 rounded-xl">{details.rating.score} <i className="fa-solid fa-star"></i></span>
          
            <div className="flex flex-col items-center">
              <span>{details.rating.status}</span>
              <span className="text-gray-300">{details.rating.reviewCount} Review</span>
            </div>

            <span>
              <RatingStars value={details.rating.score} />
            </span>
           
          </div>

          <div className="mb-3">
            <h2 className="font-bold text-xl">About</h2>
            <p>{details.description}</p>
          </div>
         
          

          <div className="border rounded-2xl shadow-md p-4 w-64 bg-white text-gray-800 mb-3">
            <h3 className="text-lg font-semibold capitalize">
              {details.pricing[0].roomType} Room
            </h3>

            <div className="mt-2">
              <span className="text-sm text-gray-500 line-through mr-2">
                {details.pricing[0].originalPrice} {details.pricing[0].currency}
              </span>
              <span className="text-xl font-bold text-green-600">
                {details.pricing[0].discountedPrice} {details.pricing[0].currency}
              </span>
              <span className="text-sm text-gray-500 ml-1">
                {details.pricing[0].priceUnit}
              </span>
            </div>

            <div className="mt-3">
              <span className="text-sm bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                {details.pricing[0].discount}
              </span>
            </div>
          </div>

          <div className="mb-3">
            <span><i className="fa-solid fa-location-dot"></i> {details.address.street}, {details.address.city}, {details.address.country}, {details.address.countryIsoCode}</span>
          </div>
        
          <div>
            <i className="fa-solid fa-hotel mr-2"></i>
            <span>
              {details.amenities[0]}, </span>
            <span>
              {details.amenities[1]}, </span>
            <span>
              {details.amenities[2]}, </span>
            <span>
              {details.amenities[3]} </span>

          </div>

          <div className="card-actions justify-end">
            <button className="w-full mt-3 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-blue-500 hover:bg-blue-700 text-white"
            onClick={handlePayNow}>Pay Now</button>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default DetailsCard;
