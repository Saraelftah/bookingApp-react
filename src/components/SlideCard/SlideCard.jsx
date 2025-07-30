// import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";

// import style from "./SlideCard.module.css";

function SlideCard({ hotel }) {
  return (
    <>
      <Link to={`/details/${hotel.id}`}>
        <div className=" mx-2 bg-white rounded-lg shadow-lg">
          <img
            src={hotel.images.main}
            alt={hotel.name}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="m-2 px-2">
            <h2 className="text-lg font-semibold">{hotel.name}</h2>
            <p className="text-sm text-gray-600">
              <RatingStars value={hotel.rating.score} />{" "}
            </p>

            <NavLink
              to={`/details/${hotel.id}`}
              className="btn btn-outline border-red-500 text-red-500 rounded-full hover:bg-rose-200 my-4 "
            >
              Book Now
            </NavLink>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SlideCard;
