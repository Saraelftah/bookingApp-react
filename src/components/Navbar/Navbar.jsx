import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navitem from "../Navitem/Navitem";
import styles from "./Navbar.module.css";

import "./Navbar.module.css";
Navitem;

function Navbar({ isOpen }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, []);

  return (
    <>
      <nav className={`${isHome ? styles.homeNavbar : styles.defaultNavbar}`}>
        {/* Burger Menu for Mobile */}
        <div className="lg:hidden absolute right-5 top-20">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <i className="fa-solid fa-bars text-2xl text-white"></i>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <NavLink to="/hotels">Hotel</NavLink>
              </li>
              <li>
                <NavLink to="/">Villa</NavLink>
              </li>
              <li>
                <NavLink to="/">Taxi</NavLink>
              </li>
              <li>
                <NavLink to="/">Flight</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className={`container flex justify-between text-white`}>
          <div
            className={`${
              isOpen ? "ml-64" : "ml-25"
            } transition-all duration-300 ${
              isHome ? styles.homeItems : styles.defaultItems
            }`}
          >
            {/* desktop */}
            <ul className="hidden lg:flex gap-8">
              <Navitem
                icon="fa-solid fa-bed"
                label="Hotel"
                direction="col"
                to="/hotels"
              />
              <Navitem
                icon="fa-solid fa-house"
                label="Villa"
                direction="col"
                to="/hotels"
                showLabel={true}
              />
              <Navitem
                icon="fa-solid fa-taxi"
                label="Taxi"
                direction="col"
                to="/"
              />
              <Navitem
                icon="fa-solid fa-plane-departure"
                direction="col"
                label="Flight"
                to="/"
              />
            </ul>
          </div>

          <div>
            {/* Right Side - Auth Section */}
            <div className="absolute right-5 lg:right-20">
              {/* Mobile Auth Menu */}
              <div className="lg:hidden">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost">
                    <i className="fa-solid fa-user text-2xl"></i>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 text-black"
                  >
                    {!isLoggedIn ? (
                      <>
                        <li>
                          <NavLink to="login">Login</NavLink>
                        </li>
                        <li>
                          <NavLink to="signup">Sign Up</NavLink>
                        </li>
                      </>
                    ) : (
                      <li>
                        <NavLink to="/my-bookings">{user.username}</NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* desktop */}
            <ul className="hidden lg:flex gap-4 absolute right-20">
              {!isLoggedIn ? (
                <>
                  <li>
                    <NavLink
                      to="login"
                      className="transition duration-300 py-3 px-4 rounded-xl hover:bg-blue-500"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="signup"
                      className="transition duration-300 py-3 px-4 rounded-xl hover:bg-blue-500"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </>
              ) : (
                <NavLink to="/my-bookings">
                  <li className="py-3 px-4 rounded-full bg-white text-black cursor-pointer">
                    <i className="fa-solid fa-user text-xl"></i>{" "}
                    <span>{user.username} </span>
                  </li>
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
