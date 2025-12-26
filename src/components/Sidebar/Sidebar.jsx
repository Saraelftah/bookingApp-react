import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navitem from "../Navitem/Navitem";
import styles from "./Sidebar.module.css";


function Sidebar({isOpen, toggleSidebar}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); 
  }, []);

  return (
    <>
      <div
        className={`${styles.sideBar}
         fixed z-50 top-10 left-8 text-white md:p-4  transition-all duration-300 
        ${isOpen ? "w-64 translate-x-0 p-4" : "w-20 md:translate-x-0 -translate-x-full p-1"}`}
      >

        
        <div className={`flex items-center mb-15 ${!isOpen?"md:justify-center justify-end mt-4 md:mt-0": "justify-between"}`}>
          <p className={`${styles.logo} ${!isOpen && "hidden"}`}>Bookler</p>
          <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={toggleSidebar}></i>
        </div>

        <ul className={`flex flex-col gap-8  ${!isOpen?"md:items-center items-end": "px-4"}`}>
          <Navitem
            icon="fa-solid fa-house"
            direction="row"
            label="Home"
            to="/"
            showLabel={isOpen}
          />
          {isLoggedIn && (
          <Navitem
            icon="fa-regular fa-address-book"
            direction="row"
            label="My Bookings"
            to="/my-bookings"
           showLabel={isOpen}
          />
          )}
          <Navitem
            icon="fa-solid fa-earth-americas"
            direction="row"
            label="Explore"
            to="/"
            showLabel={isOpen}
          />
          <Navitem
            icon="fa-solid fa-clipboard-question"
            direction="row"
            label="Support"
            to="/"
            showLabel={isOpen}
          />
        </ul>

        
        <div
          className={`absolute bottom-0 left-0 w-full pb-4 pt-20 flex justify-center ${styles.signupContainer} ${
            !isOpen && "hidden"
          }`}
          >

          {!isLoggedIn ? (
        
          <NavLink
            to="signup"
            className={`btn bg-white rounded-full mx-auto ${styles.signupBtn}`}
          >
            Sign Up Now
          </NavLink>
          ) : (
             <NavLink
            to="/login"
            className={`btn bg-red-500 text-white rounded-full mx-auto hover:bg-red-700 w-4/6`}
          >
            Log Out
          </NavLink>

          )}
        </div>
        
      </div>
    </>
  );
}

export default Sidebar;
