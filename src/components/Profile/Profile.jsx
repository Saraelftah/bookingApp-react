import { useEffect, useState } from "react";

function Profile() {
    
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  }, []);

  return (
    <>
      <div className="bg-white w-2/6 rounded-2xl">

        <div className="px-3 py-5 mb-8 bg-gray-50 rounded-tl-2xl rounded-tr-2xl">
          <h2 className="text-xl font-bold">Profile</h2>
        </div>

        <div className="flex flex-col items-center">

          <div className="py-5 px-6 rounded-full bg-white text-black cursor-pointer">
            <i className="fa-solid fa-user text-xl"></i>
          </div>

          {user ? (
            <>
              <p className="text-2xl font-semibold"> {user.username} </p>
              <p>Personal Account</p>

              <a className="bg-gray-100 mt-3 rounded-full px-5 py-4 cursor-pointer hover:bg-gray-200 transition duration-300">Edit Profile</a>
            </>
          ) : (
            <p className="text-gray-500">No user found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
