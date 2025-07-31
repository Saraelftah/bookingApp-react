import { useEffect, useState } from "react";
// import style from "./SummaryCard.module.css";

function SummaryCard({
  details,
  totalDays,
  setTotalDays,
  fromDate: fromProp,
  setFromDate: setFromDateProp,
  toDate: toProp,
  setToDate: setToDateProp,
}) {
  const [fromDate, setFromDate] = useState(fromProp || "");
  const [toDate, setToDate] = useState(toProp || "");
  const price = details?.pricing[0]?.discountedPrice || 0;

  function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).replace(/ /g, "-");
}

  useEffect(() => {
    if (fromDate && toDate) {
      const start = new Date(fromDate);
      const end = new Date(toDate);
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setTotalDays(diff > 0 ? diff : 0);
    }
  }, [fromDate, toDate, setTotalDays]);

  return (
    <>
      <div className="p-4 rounded-lg shadow-md bg-white w-full">
        <h2 className="text-xl font-bold mb-3">Summary</h2>

        <img
          src={details?.images.main}
          alt={details?.name}
          className="w-full h-40 object-cover rounded mb-3"
        />
        <h3 className="text-lg font-semibold">{details?.name}</h3>
        <p className="text-sm text-gray-600 mb-3">
          <i className="fa-solid fa-location-dot mr-1"></i>
          {details?.address?.street}, {details?.address?.city}
        </p>

        <div className="flex flex-col gap-2 mb-3">
          <label>From:</label>
          <input
            type="date"
            className="input input-bordered"
            value={fromDate}
            onChange={(e) => {
              const formatted = formatDate(e.target.value);
              setFromDate(e.target.value);
              setFromDateProp && setFromDateProp(formatted); 
            }}
          />
          <label>To:</label>
          <input
            type="date"
            className="input input-bordered"
            value={toDate}
            onChange={(e) => {
              const formatted = formatDate(e.target.value);
              setToDate(e.target.value);
              setToDateProp && setToDateProp(formatted);
            }}
          />
        </div>

        <div className="text-sm text-gray-600 mb-3">
          <p>
            <span className="font-semibold">From:</span> {formatDate(fromDate)}
          </p>
          <p>
            <span className="font-semibold">To:</span> {formatDate(toDate)}
          </p>
        </div>

        <div className="border rounded-xl bg-gray-50 p-3">
          <p>
            <span className="font-semibold">Price per night:</span> {price}{" "}
            {details?.pricing[0]?.currency}
          </p>
          <p>
            <span className="font-semibold">Nights:</span> {totalDays}
          </p>
          <p className="font-bold text-green-700 mt-2">
            Total: {price * totalDays} {details?.pricing[0]?.currency}
          </p>
        </div>
      </div>
    </>
  );
}

export default SummaryCard;
