import { useEffect, useState } from "react";
import HotelCard from "../../components/HotelCard/HotelCard";
import Loader from "../../components/Loader/Loader";
import { axiosInstance } from "../../network/interceptor";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllHotels = async () => {
      try {
        const res = await axiosInstance.get("/hotels");
        setHotels(res.data || []);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllHotels();
  }, []);

  return (
    <div className="container mt-10">
      <h2 className="text-2xl font-semibold mb-5 underline">
        All Hotels {hotels.length > 0 && `(${hotels.length})`}
      </h2>

      {isloading ? (
        <Loader />
      ) : hotels.length > 0 ? (
        <div className="flex flex-col gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <div className="text-center text-xl">No hotels available.</div>
      )}
    </div>
  );
}

export default Hotels;
