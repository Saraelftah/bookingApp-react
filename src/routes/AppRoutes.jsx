import { lazy } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import ProtectedRoute from "./ProtectedRoutes";

const Home = lazy(() => import("../pages/Home/Home"));
const Details = lazy(() => import("../pages/Details/Details"));
const Login = lazy(() => import("../pages/Login/Login"));
const Signup = lazy(() => import("../pages/Signup/Signup"));
const Notfound = lazy(() => import("../pages/Notfound/Notfound"));
const HotelsSearch = lazy(() => import("../pages/HotelSearch/HotelSearch"));
const Payment = lazy(() => import("../pages/Payment/Payment"));
const MyBookings = lazy(() => import("../pages/MyBookings/MyBookings"));
const Hotels = lazy(() => import("../pages/Hotels/Hotels"));

function AppRoutes() {
  let router = createHashRouter([
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "search", element: <HotelsSearch /> },
        { path: "details/:id", element: <Details /> },
        { path: "hotels", element: <Hotels /> },
        { path: "payment", element: (
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        )  },
        { path: "my-bookings", element: (
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        )
       },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default AppRoutes;
