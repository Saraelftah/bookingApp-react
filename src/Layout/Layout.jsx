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
