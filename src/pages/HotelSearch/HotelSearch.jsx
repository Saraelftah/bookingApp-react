import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../network/interceptor";
import notfound from "../../assets/images/resNotfound.png";
import HotelCard from "../../components/HotelCard/HotelCard";

function HotelSearch() {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axiosInstance.get(
          `/hotels?${searchParams.toString()}`
        );
        setHotels(res?.data || []);
        console.log("Params:", searchParams.toString());
      } catch (err) {
        console.error("Error fetching hotels:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();
  }, [searchParams]);

  return (
    <>
       <div className="container mt-10">
      <h2 className="text-lg mb-5">
        <span className=" text-2xl font-bold border-r-2 border-gray-300 mr-2">Hotels </span>
        Total Results {hotels.length > 0 && `(${hotels.length})`}

      </h2>

      {isloading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : hotels.length > 0 ? (
        <div className="grid grid-cols-2 gap-5">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className=" w-70">
            <img src={notfound} alt="noResults" className="mx-auto w-60" />
          </div>
          <h2 className="text-2xl mt-3 font-bold">No results found.</h2>
        </div>
      )}
    </div>
    </>
 
  );
}

export default HotelSearch;
