import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Search() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Search Toggle Button - Only on small screens */}
      <div className="relative w-5/6 mx-auto mt-4 lg:hidden">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute right-0 top-0 z-10 btn btn-circle bg-red-500 hover:bg-red-700 text-white"
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark text-lg"></i>
          ) : (
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          )}
        </button>
      </div>

      <div
        className={`
    mx-auto w-5/6 bg-white rounded-3xl px-8 relative transition-all duration-500 ease-in-out overflow-hidden
    ${isHome ? "-top-16" : "-top-4"} 
    ${
      isOpen
        ? "max-h-[1000px] opacity-100 scale-100 py-5"
        : "max-h-0 opacity-0 scale-95 py-0 pointer-events-none"
    }
    lg:max-h-none lg:opacity-100 lg:scale-100 lg:py-5 lg:pointer-events-auto lg:block
  `}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-4 lg:gap-5"
        >
          <div className="flex flex-col gap-2 w-full lg:w-1/6">
            <label htmlFor="">SEARCH</label>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 rounded-full input input-info w-full"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/6">
            <label htmlFor="">COUNTRY</label>
            <select
              className="bg-gray-100 select select-info rounded-full w-full"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              {countries.map((country, index) => (
                <option key={index} value={country.value}>{country.label}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2w-full lg:w-1/6">
            <label htmlFor="">CHECK-IN</label>
            <input
              type="date"
              className="bg-gray-100 rounded-full input input-info w-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-1/6">
            <label htmlFor="">CHECK-OUT</label>
            <input
              type="date"
              className="bg-gray-100 rounded-full input input-info w-full"
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
