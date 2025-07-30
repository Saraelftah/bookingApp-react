import { useState } from "react";
// import style from "./Search.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();

  const countries = [
    { label: "Select Country", value: "" },
    { label: "United States", value: "US" },
    { label: "Morocco", value: "MA" },
    { label: "Egypt", value: "EG" },
    { label: "Greece", value: "GR" },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (country) params.append("address.countryIsoCode", country);

    navigate(`/search?${params.toString()}`);
  }

  return (
    <>
      <div className={`mx-auto w-5/6 bg-white rounded-3xl py-5 px-8 relative ${isHome ? "-top-16" : "-top-4"} `}>
        <form
          onSubmit={handleSubmit}
          className="flex items-end justify-between gap-5"
        >
          <div className="flex flex-col gap-2 w-1/6">
            <label htmlFor="">SEARCH</label>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 rounded-full input input-info "
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2 w-1/6">
            <label htmlFor="">COUNTRY</label>
            <select
              className="bg-gray-100 select select-info rounded-full"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option value={country.value}>{country.label}</option>
              ))}
            </select>
          </div>

          
          <div className="flex flex-col gap-2 w-1/6">
            <label htmlFor="">CHECK-IN</label>
            <input
              type="date"
              className="bg-gray-100 rounded-full input input-info "
            />
          </div>

            <div className="flex flex-col gap-2 w-1/6">
            <label htmlFor="">CHECK-OUT</label>
            <input
              type="date"
              className="bg-gray-100 rounded-full input input-info "
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white rounded-full py-3 px-7  hover:bg-red-700"
          >
            Search
          </button>{" "}
        </form>
      </div>
    </>
  );
}

export default Search;
