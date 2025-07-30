import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Search from "../components/Search/Search";
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

      
      <div className={`transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"}`}>
        <Search />
        <main className="container p-4 min-h-screen">
          {" "}
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
