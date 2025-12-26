import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import Sidebar from "../components/Sidebar/Sidebar";
Outlet;

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <Navbar isOpen={isOpen} />
      
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      
      {/* bsckdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={toggleSidebar}
        ></div>
      )}
      
      <div className={`transition-all duration-300 ${isOpen ? "md:ml-64" : "md:ml-20"} ml-0`}>
        <Search />
        <main className="container pl-4 pb-20 min-h-screen">
          {" "}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
