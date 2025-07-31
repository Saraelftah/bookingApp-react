import { useSelector } from "react-redux";
import booknow from "../../assets/images/book-now.png";
import nobook from "../../assets/images/nobook.png";
import Profile from "../../components/Profile/Profile";

function MyBookings() {
  const bookings = useSelector((state) => state.bookings.bookings);

  return (
    <>
      <div className="mt-10 container">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8">
          <div className=" lg:w-4/6">
            <h2 className="text-3xl font-bold mb-5">My Bookings</h2>
            {bookings.length === 0 ? (
              <>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center gap-2 ">
                    <p className="text-xl font-semibold">No bookings yet.</p>

                    <div className="w-15">
                      <img src={booknow} alt="" />
                    </div>
                  </div>

                  <div className="w-80">
                    <img src={nobook} alt="" />
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="grid gap-4 w-full">
                  {bookings.map((booking, index) => (
                    <div
                      key={index}
                      className="flex gap-5 items-center bg-white p-5 rounded-lg shadow-md"
                    >
                      <div>
                        <img
                          src={booking.image}
                          alt={booking.hotel}
                          className="h-32 object-cover rounded-lg"
                        />
                      </div>

                      <div className="w-full">
                        <h3 className="text-xl font-semibold">
                          {booking.hotel}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          <i className="fa-solid fa-location-dot mr-1"></i>
                          {booking.address?.street}, {booking.address?.city}
                        </p>

                        <p>
                          <span className="font-semibold">Nights:</span>{" "}
                          {booking.totalDays}
                        </p>

                        <div className="flex justify-between mt-4 gap-4 ">
                          <p className="font-bold text-green-700">
                            Total: ${booking.totalPrice}
                          </p>

                          <div className="text-gray-500 text-sm mt-4">
                            <span className="mr-2">
                              <b>From:</b> {booking.fromDate}{" "}
                            </span>

                            <span>
                              <b>to: </b>
                              {booking.toDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Profile />
        </div>
      </div>
    </>
  );
}

export default MyBookings;
