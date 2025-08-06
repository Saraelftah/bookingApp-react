import { Link } from "react-router-dom";

function Offercard({ offer }) {
  return (
    <>
      <Link
        to={`/details/${offer.id}`}
        className="flex items-center gap-4 p-3 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 w-4/6 transition duration-300 hover:scale-x-115"
      >
        <div className="w-25 h-25 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={offer.image}
            alt={offer.name}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-sm text-gray-800">
            {offer.name}
          </span>
          <span className="text-xs text-gray-500 uppercase font-semibold">
            {offer.location}
          </span>
        </div>
      </Link>
    </>
  );
}

export default Offercard;
