import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import { useDispatch } from "react-redux";
import { addBooking } from "../../store/bookingSlice";

function Payment() {
  const [totalDays, setTotalDays] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const hotelDetails = location.state?.details;
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: user?.username?.split(" ")[0] || "",
      lastname: user?.username?.split(" ")[1] || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
  });

  const onSubmit = (data) => {
    if (totalDays === 0) {
      toast.error("Please select valid dates");
      return;
    }

    const totalPrice = hotelDetails.pricing[0].discountedPrice * totalDays;
    const bookingData = {
      ...data,
      hotel: hotelDetails.name,
      totalDays,
      totalPrice,
      fromDate: fromDate,
      toDate: toDate,
      image: hotelDetails?.images?.main,
      address: hotelDetails?.address,
    };

    localStorage.setItem("bookingData", JSON.stringify(data));

    dispatch(addBooking(bookingData));
    toast.success("Booking Success");
    navigate("/my-bookings");
  };

  const countries = [
    {
      label: "Select Country",
      value: "Select Country",
      disabled: true,
      selected: true,
    },
    { label: "United States", value: "US" },
    { label: "Morocco", value: "MA" },
    { label: "Egypt", value: "EG" },
    { label: "Greece", value: "GR" },
  ];

  const titles = [
    { label: "Mr.", value: "mr" },
    { label: "Miss.", value: "miss" },
    { label: "Mrs.", value: "mrs" },
    { label: "Ms.", value: "ms" },
  ];

  return (
    <>
      <div className="flex gap-3 items-center mb-12 bg-white py-8 px-5 rounded-lg">
        <span className="font-semibold border-r-2 pr-2 border-gray-300">
          Booking
        </span>
        <div className="breadcrumbs text-sm">
          <ul>
            <li className="text-gray-300">
              <a>Hotels</a>
            </li>
            <li className="text-gray-300">
              <a>Hotel Details</a>
            </li>
            <li className="text-blue-600 font-semibold">Booking</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-8 justify-between">
        <div className="bg-white py-8 px-5 rounded-lg w-5/6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-3xl font-bold mb-3">Your Details</h2>

            <div className="flex gap-5 mb-3">
              {/* title */}
              <div className="flex flex-col py-2 gap-2 w-1/5">
                <label htmlFor="title">Title</label>
                <select
                  id="title"
                  className=" select select-info w-full bg-gray-100 rounded-lg"
                  {...register("title", { required: "Title is required" })}
                >
                  {titles.map((title, index) => (
                    <option key={index} value={title.value}>
                      {title.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* firstname */}
              <div className="flex flex-col py-2 gap-2 w-2/5">
                <label htmlFor="fname">First name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Enter your first name..."
                  className="input input-info w-full bg-gray-100 rounded-lg"
                  {...register("firstname", {
                    required: "First name is required",
                  })}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">
                    {errors.firstname.message}
                  </p>
                )}
              </div>

              {/* last name */}
              <div className="flex flex-col py-2 gap-2 w-2/5">
                <label htmlFor="lname">Last name</label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Enter your first name..."
                  className="input input-info w-full bg-gray-100 rounded-lg "
                  {...register("lastname", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastname && (
                  <p className="text-red-500 text-sm">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>

            {/* EMAIL */}
            <div className="mb-3 flex flex-col py-2 gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                className="input input-info w-full bg-gray-100 rounded-lg "
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message} </p>
              )}
            </div>

            <div className="flex gap-5 mb-15 border-b-2 pb-15 border-gray-200">
              {/* country */}
              <div className="w-2/6 flex flex-col py-2 gap-2">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  className="select select-info w-full bg-gray-100 rounded-lg"
                  {...register("country", {
                    required: "Country is required",
                  })}
                >
                  {countries.map((country, index) => (
                    <option
                      key={index}
                      value={country.value}
                      disabled={country.disabled}
                      selected={country.selected}
                    >
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* phone */}
              <div className="w-4/6 flex flex-col py-2 gap-2">
                <label htmlFor="phone">Mobile</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number..."
                  className="input input-info w-full bg-gray-100 rounded-lg"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9]{10,12}$/,
                      message: "Phone number must contain only digits",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {" "}
                    {errors.phone.message}{" "}
                  </p>
                )}
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-3">Payment Details</h2>

            {/* card number */}
            <div className="mb-3 flex flex-col py-2 gap-2">
              <label htmlFor="cardNum">Card Number</label>
              <input
                type="text"
                placeholder="Enter your card number..."
                className="input input-info w-full bg-gray-100 rounded-lg"
                {...register("cardNumber", {
                  required: "Card number is required",
                  pattern: {
                    value: /\d{13,19}/,
                    message: "Card number must contain only 13 to 19 digits",
                  },
                })}
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm">
                  {" "}
                  {errors.cardNumber.message}{" "}
                </p>
              )}
            </div>

            <div className="flex gap-5 mb-3">
              {/* cvv number */}
              <div className="w-3/6 flex flex-col py-2 gap-2">
                <label htmlFor="cardNum">CVV</label>
                <input
                  type="text"
                  placeholder="CVV number..."
                  className="input input-info w-full bg-gray-100 rounded-lg"
                  {...register("cvvNumber", {
                    required: "CVV is required",
                    maxLength: {
                      value: 3,
                      message: "CVV must be max 3 numbers",
                    },
                    pattern: {
                      value: /\d{3}/,
                      message: "CVV must contain only digits",
                    },
                  })}
                />
                {errors.cvvNumber && (
                  <p className="text-red-500 text-sm">
                    {" "}
                    {errors.cvvNumber.message}{" "}
                  </p>
                )}
              </div>

              {/* expiry date */}
              <div className="w-3/6 flex flex-col py-2 gap-2">
                <label htmlFor="cardNum">Expiry Date (MM/YY):</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="input input-info w-full bg-gray-100 rounded-lg"
                  {...register("expirydate", {
                    required: "Expirey date is required",
                    pattern: {
                      value: /(0[1-9]|1[0-2])\/?([0-9]{2})/,
                      message: "Please enter month and year",
                    },
                  })}
                />
                {errors.expirydate && (
                  <p className="text-red-500 text-sm">
                    {" "}
                    {errors.expirydate.message}{" "}
                  </p>
                )}
              </div>
            </div>

            {/* card holder */}
            <div className="flex flex-col py-2 gap-2 mb-4">
              <label htmlFor="Hname">Card Holder</label>
              <input
                type="text"
                id="Hname"
                placeholder="Enter the name on the card..."
                className="input input-info w-full bg-gray-100 rounded-lg"
                {...register("holdername", {
                  required: "Name is required",
                })}
              />
              {errors.holdername && (
                <p className="text-red-500 text-sm">
                  {errors.holdername.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-3 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-blue-500 hover:bg-blue-700 text-white"
            >
              Pay Now
            </button>
          </form>
        </div>

        {/* summary */}
        <div>
          {hotelDetails && (
            <SummaryCard
              details={hotelDetails}
              totalDays={totalDays}
              setTotalDays={setTotalDays}
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Payment;
