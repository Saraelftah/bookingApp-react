import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  const price = hotel.pricing?.[0]?.discountedPrice || "";
  
  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-1/3">
        <img
          src={hotel.images.main}
          alt={hotel.name}
          className=" object-cover h-64"
        />
      </div>

      <div className="py-3 pl-3 w-2/3 flex flex-col justify-between">

        <div className="relative">
         
            <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>

            <span className="bg-blue-500 text-white text-sm py-1 px-3  absolute right-0 top-2 rounded-tl-lg rounded-bl-lg">
              {hotel.rating.score} <i className="fa-solid fa-star"></i>
            </span>
          

          <p className="text-gray-600 mb-1">
            {hotel.address.city}, {hotel.address.country}
          </p>
        </div>


         <div className="flex items-center gap-5">
            <span> <i class="fa-solid fa-location-dot"></i> Parking</span>
            <span> <i class="fa-solid fa-wifi"></i> Wifi</span>
          </div>

        <div className=" flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <p className="text-yellow-400">{hotel.pricing[0].discount}</p>
            <p className="text-lg font-semibold text-red-600">${price}</p>
          </div>

          <div className=" flex gap-3 mr-2">
            <Link
              to={`/details/${hotel.id}`}
              className="bg-gray-100 px-2 py-2 rounded-2xl hover:bg-gray-300 transition duration-300"
            >
              View Details
            </Link>
            <Link
              to="/payment"
              className="bg-blue-500 px-2 py-2 rounded-2xl text-white hover:bg-blue-700 transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
